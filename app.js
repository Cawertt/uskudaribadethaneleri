// Configuration and State
const CONFIG = {
    initialView: [41.025, 29.025],
    initialZoom: 13,
    layers: {
        light: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    },
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
};

let map;
let tileLayer;
let markers = [];
let activeReligion = 'all';
let activeType = 'all';
let searchQuery = '';
let currentTheme = 'light';

// Initialize Application
function init() {
    initMap();
    renderPlaces();
    setupEventListeners();
    addDistrictBoundary();
}

// Map Initialization
function initMap() {
    map = L.map('map', { 
        zoomControl: false,
        minZoom: 3,
        maxBounds: [[-90, -180], [90, 180]],
        maxBoundsViscosity: 1.0
    }).setView(CONFIG.initialView, CONFIG.initialZoom);

    L.control.zoom({ position: 'bottomright' }).addTo(map);
    
    tileLayer = L.tileLayer(CONFIG.layers.light, { 
        attribution: CONFIG.attribution,
        noWrap: true,
        bounds: [[-90, -180], [90, 180]]
    }).addTo(map);
}

function addDistrictBoundary() {
    const uskudarCoords = [
        [41.055, 29.040], [41.065, 29.055], [41.050, 29.075],
        [41.030, 29.095], [41.010, 29.060], [40.995, 29.020],
        [41.010, 29.005], [41.030, 29.010], [41.045, 29.030]
    ];
    L.polygon(uskudarCoords, {
        color: '#AE1F23',
        weight: 2,
        fillColor: '#AE1F23',
        fillOpacity: 0.03,
        dashArray: '5, 10',
        interactive: false
    }).addTo(map);
}

function renderPlaces() {
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    const filteredPlaces = placesData.filter(place => {
        const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase());
        
        let matchesFilter = false;
        if (activeReligion === 'all' && activeType === 'all') {
            matchesFilter = true;
        } else if (activeType === 'turbe') {
            matchesFilter = place.type === 'turbe';
        } else if (activeReligion !== 'all') {
            matchesFilter = place.religion.startsWith(activeReligion);
        }

        return matchesFilter && matchesSearch;
    });

    const listContainer = document.getElementById('placesList');
    listContainer.innerHTML = '';

    filteredPlaces.forEach(place => {
        const card = createPlaceCard(place);
        listContainer.appendChild(card);
        const marker = createMarker(place);
        markers.push(marker);
    });
}

function createPlaceCard(place) {
    const div = document.createElement('div');
    div.className = 'place-card';
    div.innerHTML = `
        <img src="${place.image}" alt="${place.name}" onerror="this.src='https://via.placeholder.com/80?text=Ibadethane'">
        <div class="place-info">
            <h3>${place.name}</h3>
            <span>${getReligionLabel(place.religion)} | ${place.type.toUpperCase()}</span>
            <p class="source-info">Kaynak: ${place.source}</p>
        </div>
    `;
    div.onclick = () => {
        map.flyTo([place.lat, place.lng], 17);
        const marker = markers.find(m => m.options.placeId === place.id);
        if (marker) marker.openPopup();
        
        // Close sidebar on mobile after selection
        if (window.innerWidth <= 768) {
            const sidebar = document.querySelector('.sidebar');
            const sidebarToggle = document.getElementById('sidebarToggle');
            const sidebarOverlay = document.getElementById('sidebarOverlay');
            const toggleIcon = sidebarToggle.querySelector('i');
            
            sidebar.classList.remove('active');
            sidebarToggle.classList.remove('active');
            sidebarOverlay.classList.remove('active');
            toggleIcon.className = 'fas fa-bars';
        }
    };
    return div;
}

function createMarker(place) {
    const religionConfig = getMarkerConfig(place);
    const customIcon = L.divIcon({
        className: 'custom-marker-wrapper',
        html: `<div class="custom-marker" style="background-color: ${religionConfig.color};">
                <i class="${religionConfig.icon}"></i>
               </div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    const marker = L.marker([place.lat, place.lng], { icon: customIcon, placeId: place.id }).addTo(map);
    marker.bindPopup(`<div class="popup-content"><img src="${place.image}" alt="${place.name}"><div class="popup-text"><h3>${place.name}</h3><p>${place.description}</p><a href="https://www.google.com/maps?q=${place.lat},${place.lng}" target="_blank" class="gmaps-link"><i class="fas fa-map-marker-alt"></i> Haritada Görüntüle</a><p class="source-info-popup">Kaynak: ${place.source}</p></div></div>`);
    return marker;
}

function getMarkerConfig(place) {
    if (place.type === 'turbe') return { color: '#5d4037', icon: 'fa-solid fa-monument' };
    if (place.religion.startsWith('islam')) return { color: '#008080', icon: 'fa-solid fa-moon' };
    if (place.religion === 'hristiyanlik') return { color: '#800000', icon: 'fa-solid fa-cross' };
    if (place.religion === 'yahudilik') return { color: '#d4a373', icon: 'fa-solid fa-star-of-david' };
    return { color: '#7f8c8d', icon: 'fa-solid fa-place-of-worship' };
}

function getReligionLabel(religion) {
    const labels = { 'islam': 'İslam', 'islam-alevi': 'Alevi-Bektaşi', 'hristiyanlik': 'Hristiyanlık', 'yahudilik': 'Yahudilik' };
    return labels[religion] || 'Diğer';
}

function setupEventListeners() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const toggleIcon = sidebarToggle.querySelector('i');

    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        sidebarToggle.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        
        // Change icon between bars and times
        if (sidebar.classList.contains('active')) {
            toggleIcon.className = 'fas fa-times';
        } else {
            toggleIcon.className = 'fas fa-bars';
        }
    };

    sidebarToggle.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);

    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderPlaces();
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeReligion = btn.dataset.religion || 'all';
            activeType = btn.dataset.type || 'all';
            renderPlaces();
        });
    });

    const themeBtn = document.getElementById('themeToggle');
    const satelliteBtn = document.getElementById('satelliteToggle');
    
    themeBtn.addEventListener('click', () => {
        if (currentTheme === 'satellite') return;
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        updateTheme();
    });
    satelliteBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'satellite' ? 'light' : 'satellite';
        updateTheme();
    });
}

function updateTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('#themeToggle i');
    const satelliteBtn = document.getElementById('satelliteToggle');
    body.classList.remove('light-theme', 'dark-theme', 'satellite-theme');
    satelliteBtn.classList.remove('active');
    if (currentTheme === 'satellite') {
        body.classList.add('satellite-theme');
        satelliteBtn.classList.add('active');
        tileLayer.setUrl(CONFIG.layers.satellite);
    } else if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.className = 'fas fa-sun';
        // Use light tiles as base for high-quality dark mode filter
        tileLayer.setUrl(CONFIG.layers.light); 
    } else {
        body.classList.add('light-theme');
        themeIcon.className = 'fas fa-moon';
        tileLayer.setUrl(CONFIG.layers.light);
    }
}

document.addEventListener('DOMContentLoaded', init);
