const placesData = [
    {
        id: 1,
        name: "Büyük Çamlıca Camii",
        type: "cami",
        religion: "islam",
        lat: 41.0342,
        lng: 29.0703,
        description: "Cumhuriyet tarihinin en büyük camisidir; 63 bin kişilik kapasiteye sahiptir. 6 minaresi (4'ü 107.1m, 2'si 90m), 72 metre yüksekliğindeki ana kubbesi ve İslam Medeniyetleri Müzesi ile devasa bir külliyedir. Mimarları Bahar Mızrak ve Hayriye Gül Totu'dur.",
        image: "1 camlica caami.jpg",
        source: "Üsküdar Belediyesi, TDV İslâm Ansiklopedisi, Anadolu Ajansı Arşivi"
    },
    {
        id: 2,
        name: "Ayios Panteleimon Rum Ortodoks Kilisesi",
        type: "kilise",
        religion: "hristiyanlik",
        lat: 41.0386,
        lng: 29.0342,
        description: "Kuzguncuk'ta yer alan kilise, ilk olarak 1831'de açılmış, 1872 yangınından sonra Mimar Nikola Ziko tarafından 1892'de yeniden inşa edilmiştir. 1911 tarihli mermer çan kulesi semtin simgelerindendir. Bizans 'Kapalı Yunan Haçı' planına sahiptir.",
        image: "2 ayios pataletmon.png",
        source: "Zafer Karaca (İstanbul'da Osmanlı Dönemi Rum Kiliseleri), Tarihi İstanbul Veri Tabanı"
    },
    {
        id: 3,
        name: "Şemsi Paşa Külliyesi",
        type: "cami",
        religion: "islam",
        lat: 41.0258,
        lng: 29.0114,
        description: "1580 yılında Mimar Sinan tarafından Vezir Şemsi Ahmed Paşa adına yapılmıştır. 'Kuşkonmaz Camii' olarak da bilinir; Sinan rüzgar akıntılarının kesiştiği noktayı seçerek kuşların konmasını engellemiştir. Denize sıfır konumuyla Boğaz'ın en zarif eserlerindendir.",
        image: "3 şemsi paşa külleyesi.jpg",
        source: "TDV İslâm Ansiklopedisi, İbrahim Hakkı Konyalı (Üsküdar Tarihi), Mehmet Nermi Haskan"
    },
    {
        id: 4,
        name: "Eski Valide Camii ve Külliyesi",
        type: "cami",
        religion: "islam",
        lat: 41.0188,
        lng: 29.0239,
        description: "Atik Valide adıyla da bilinir. 1570-1583 yıllarında Nurbanu Sultan tarafından Mimar Sinan'a yaptırılan, Sinan'ın en büyük külliyelerinden biridir. Cami, medrese, dârüşşifa ve imaretten oluşan kompleks, klasik Osmanlı mimarisinin zirve örneklerindendir.",
        image: "4 eskivalidecamii.png",
        source: "Semavi Eyice (Atik Vâlide Külliyesi), Gülru Necipoğlu (The Age of Sinan)"
    },
    {
        id: 5,
        name: "Kuleli Kaymak Mustafa Paşa Camii",
        type: "cami",
        religion: "islam",
        lat: 41.0524,
        lng: 29.0516,
        description: "1720'de Kaptan-ı Derya Kaymak Mustafa Paşa tarafından yaptırılan 'Yalı Camii' örneğidir. 1837'de II. Mahmud döneminde onarılarak hünkar mahfili eklenmiştir. Kırma çatılı dış görünümüne rağmen içten merkezi kubbelidir.",
        image: "5 kaymakmustafapaşa.png",
        source: "IRCICA Arşivi, Mehmet Nermi Haskan (Yüzyıllar Boyunca Üsküdar)"
    },
    {
        id: 6,
        name: "Aziz Mahmud Hüdayi Camii",
        type: "cami",
        religion: "islam",
        lat: 41.0169,
        lng: 29.0153,
        description: "1589-1595 yılları arasında Ayşe Hanım Sultan tarafından mürşidi Aziz Mahmud Hüdayi adına yaptırılmıştır. Külliye; cami, türbe, imaret ve kütüphaneden oluşur. 1855'te Sultan Abdülmecid tarafından Ampir üslubunda onarılmıştır.",
        image: "6 aziz mahmuthüdayi.png",
        source: "TDV İslâm Ansiklopedisi (M. Baha Tanman), Konyalı (Üsküdar Tarihi)"
    },
    {
        id: 7,
        name: "Bet Yaakov Sinagogu",
        type: "sinagog",
        religion: "yahudilik",
        lat: 41.0364,
        lng: 29.0297,
        description: "Kuzguncuk'un 'Aşağı Sinagogu'. 1878'de inşa edilen yapının sekizgen kubbesi Tevrat sahneleriyle bezenmiştir. Kuzguncuk'un Musevi inancındaki 'Kutsal Topraklar öncesi son durak' önemini temsil eder.",
        image: "7 betyaakovsinagog.png",
        source: "Naim A. Güleryüz (Türkiye Sinagogları), Türk Yahudi Toplumu Kayıtları"
    },
    {
        id: 8,
        name: "Surp Haç Ermeni Kilisesi",
        type: "kilise",
        religion: "hristiyanlik",
        lat: 41.0222,
        lng: 29.0278,
        description: "1676'da Peder Abraham tarafından kurulan kilise, 1830'da mimar Hovhannes Amira Serveryan tarafından bugünkü kâgir formuna kavuşturulmuştur. Ünlü hayırsever Kalust Gülbengyan'ın vaftiz edildiği yerdir. Görkemli taş çan kulesi 1882 yapımıdır.",
        image: "8 surpermeni.png",
        source: "Pars Tuğlacı (İstanbul Ermeni Kiliseleri), Türkiye Ermenileri Patrikliği"
    },
    {
        id: 9,
        name: "Surp Krikor Lusavoriç Kilisesi",
        type: "kilise",
        religion: "hristiyanlik",
        lat: 41.0367,
        lng: 29.0303,
        description: "Kuzguncuk sahilinde, camiyle yan yana duran hoşgörü sembolüdür. 1861'de Bedros Ağa Şalcıyan tarafından yaptırılmıştır. İstanbul'daki Ermeni kiliseleri arasında dıştan kubbeli tek yapıdır.",
        image: "9 surklorvaic.png",
        source: "Turan Akıncı (İstanbul'da Osmanlı Mimarisi), Türkiye Ermenileri Patrikliği"
    },
    {
        id: 10,
        name: "Ahmet Çelebi Camii",
        type: "cami",
        religion: "islam",
        lat: 41.0217,
        lng: 29.0133,
        description: "1567 yılında Hacı Ahmet Çelebi tarafından yaptırılmıştır. Milli Mücadele yıllarında Anadolu'ya subay ve asker kaçırılmasında stratejik bir merkez olarak kullanılmıştır. Binanın üzerinde yükselen ahşap minaresi tipik bir mahalle camisi özelliğidir.",
        image: "10 ahmet çelebi.png",
        source: "Mehmet Nermi Haskan (Yüzyıllar Boyunca Üsküdar), Üsküdar Belediyesi Envanteri"
    },
    {
        id: 11,
        name: "Karacaahmet Cem Evi",
        type: "cemevi",
        religion: "islam-alevi",
        lat: 41.0132,
        lng: 29.0203,
        description: "Karacaahmet Sultan Dergâhı olarak da bilinir. 14. yüzyılda kurulan dergâh, İstanbul'un en önemli Alevi-Bektaşi merkezidir. Türbe binası 16. yüzyılda Gülfem Hatun tarafından yaptırılmıştır.",
        image: "11 karacaahmetcemevi.png",
        source: "Semavi Eyice (DİA), Cemal Şener (Karaca Ahmet Sultan), Karacaahmet Sultan Derneği"
    },
    {
        id: 12,
        name: "Boğaziçi Cem Evi",
        type: "cemevi",
        religion: "islam-alevi",
        lat: 41.0432,
        lng: 29.0592,
        description: "Çengelköy Mehmet Akif Ersoy Mahallesi'nde 2019 yılında Üsküdar Belediyesi tarafından açılmıştır. Modern bir cemevi ve culture merkezi olarak bölgedeki Alevi toplumuna hizmet vermektedir.",
        image: "12 boğaziçi cemevi.png",
        source: "Üsküdar Belediyesi Proje Kayıtları, Yerel Gazete Arşivleri"
    },
    {
        id: 13,
        name: "İlyas Profiti Rum Ortodoks Kilisesi",
        type: "kilise",
        religion: "hristiyanlik",
        lat: 41.0375,
        lng: 29.0361,
        description: "Selamsız'da yer alan, Profitis İlias (Peygamber İlya) adına ithaf edilmiş kilisedir. 1831 yılında II. Mahmud'un fermanıyla inşa edilmiştir. Dikdörtgen planlı, beşik tonoz örtülü ve kesme taştan zarif bir çan kulesine sahiptir.",
        image: "13 ilyasprofitrumortodokskilisesi.jpg",
        source: "Patacı (Üsküdar’daki Osmanlı Dönemi Kiliseleri), Kültür Envanteri (No: 8536)"
    },
    {
        id: 14,
        name: "Bet Nissim Sinagogu",
        type: "sinagog",
        religion: "yahudilik",
        lat: 41.0347,
        lng: 29.0319,
        description: "Kuzguncuk'un 'Yukarı Sinagogu' (Virane Sinagogu). 1840'lı yıllarda inşa edilmiştir. Adı 'Mucizeler Evi' anlamına gelir. İç mekanındaki sekizgen kubbe ve ahşap işçiliği ile dikkat çeker.",
        image: "13 bet nissim sinagogu.png",
        source: "Naim A. Güleryüz (Türkiye Sinagogları), Türk Yahudi Toplumu Kayıtları"
    },
    {
        id: 15,
        name: "Balcı Baba Türbesi",
        type: "turbe",
        religion: "islam",
        lat: 41.0185,
        lng: 29.0185,
        description: "Hacı Ahmet Dede (Balcı Baba) türbesidir. 1728'de vefat eden zatın orijinal türbesi yıkılmış, 1970'te yerine yapılan apartmanın zemin katında (temelinde) kalmıştır. Bugün apartman penceresinden sandukası görülebilmektedir.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Scutari_Cemetery_View.jpg/1200px-Scutari_Cemetery_View.jpg",
        source: "Mehmet Nermi Haskan (Yüzyıllar Boyunca Üsküdar), Kültür Envanteri"
    },
    {
        id: 16,
        name: "Behram Paşa Türbesi",
        type: "turbe",
        religion: "islam",
        lat: 41.0264,
        lng: 29.0154,
        description: "Mimar Sinan's eserlerinden biri olan ancak günümüze ulaşamayan 'kayıp' türbedir. Yemen Valisi Behram Paşa'ya aittir. Gündoğumu Caddesi'ndeki hazire kalıntıları arasında kabri bulunmaktadır.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Mimar_Sinan_Work_Context.jpg/1200px-Mimar_Sinan_Work_Context.jpg",
        source: "Tuhfetü’l-Mi’mârîn, Mehmet Nermi Haskan, Üsküdar Belediyesi Envanteri"
    },
    {
        id: 17,
        name: "Bandırmalı Şeyh Yusuf",
        type: "turbe",
        religion: "islam",
        lat: 41.0150,
        lng: 29.0220,
        description: "Celvetiyye Şeyhi Bandırmalı Yusuf Nizameddin Efendi'ye (ö. 1752) aittir. Halk arasında 'Yedi Emirler Türbesi' olarak bilinir. Orijinal tekke ve türbe 1930'larda yıkılmış, yerine apartmanlar yapılmıştır.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jacques_Pervititch_map_%C3%9Csk%C3%BCdar.jpg/1200px-Jacques_Pervititch_map_%C3%9Csk%C3%BCdar.jpg",
        source: "TDV İslâm Ansiklopedisi (M. Baha Tanman), Hüseyin Vassâf (Sefîne-i Evliyâ)"
    }
];
