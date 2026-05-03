const placesData = [
    {
        id: 1,
        name: "Büyük Çamlıca Camii",
        type: "cami",
        religion: "islam",
        lat: 41.0347,
        lng: 29.0708,
        description: "Yer: Ferah Yolu Sokak. Cumhuriyet tarihinin en büyük camisidir; 63 bin kişilik kapasiteye sahiptir. Neoklasik mimari tarzda, Çamlıca Tepesi'ne inşa edilen yapı; 6 minaresi, 72 metre yüksekliğindeki ana kubbesi, müzesi, kütüphanesi ve sanat galerisiyle dikkat çeken bir külliyedir.",
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
        description: "Yer: Kuzguncuk Mahallesi. Aziz Panteleimon'a adanmış bir kilisedir. 1831'de Sultan II. Mahmud döneminde açılan yapı, 1872 yangınından sonra 1890'da yeniden inşa ederek iki yıl sonra tekrar ibadete açılmıştır.",
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
        description: "Yer: Mimar Sinan Mahallesi. 1580 yılında Mimar Sinan tarafından Şam Beylerbeyi Vezir Ahmed Paşa adına inşa edilmiştir. Denize çok yakın konumu nedeniyle lodoslu havalarda içeri giren deniz suyu özel rögarlarla tahliye edilir. Avlusu 'L' şeklindedir.",
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
        description: "Yer: Valide-i Atik. 1570-1583 yıllarında Nurbanu Sultan tarafından Mimar Sinan'a yaptırılmıştır. Mimar Sinan'ın talebesi Davud Ağa tarafından genişletilen cami, üç giriş kapısına ve 1583 tarihli manzum kitabeye sahiptir.",
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
        description: "Yer: Kuleli Caddesi (Çengelköy). 1720 yılında Kaptan-ı Derya Nişancı Mustafa Paşa tarafından yaptırılan bir 'Yalı Camii' örneğidir. 1837'de II. Mahmud tarafından hünkar mahfili eklenmiştir. 2018'de başlayan restorasyon çalışmaları devam etmektedir.",
        image: "5 kaymakmustafapaşa.png",
        source: "IRCICA Arşivi, Mehmet Nermi Haskan (Yüzyıllar Boyunca Üsküdar)"
    },
    {
        id: 6,
        name: "Aziz Mahmud Hüdayi Camii",
        type: "cami",
        religion: "islam",
        lat: 41.0222,
        lng: 29.0144,
        description: "Yer: Aziz Mahmud Hüdayi Mahallesi. 1589-1595 yılları arasında Ayşe Hümaşah Sultan tarafından Aziz Mahmud Hüdayi adına yaptırılmıştır. Özgün planda tekke olarak inşa edilen yapı, 1855'te Sultan Abdülmecid tarafından onarılmıştır.",
        image: "6 aziz mahmuthüdayi.png",
        source: "TDV İslâm Ansiklopedisi (M. Baha Tanman), Konyalı (Üsküdar Tarihi)"
    },
    {
        id: 7,
        name: "Bet Yaakov Sinagogu",
        type: "sinagog",
        religion: "yahudilik",
        lat: 41.0363,
        lng: 29.0297,
        description: "Yer: Kuzguncuk. 1878'de inşa edilen ve 'Kal de Abaso' olarak da bilinen sinagog, İcadiye Caddesi girişinde yer alır. Kuzguncuk kökenli Museviler, Şabat ayinleri için düzenli olarak bu sinagoga gelmeye devam etmektedir.",
        image: "7 betyaakovsinagog.png",
        source: "Naim A. Güleryüz (Türkiye Sinagogları), Türk Yahudi Toplumu Kayıtları"
    },
    {
        id: 8,
        name: "Surp Haç Ermeni Kilisesi",
        type: "kilise",
        religion: "hristiyanlik",
        lat: 41.0248,
        lng: 29.0308,
        description: "Yer: Selamsız, Ekmekçibaşı Sokağı civarı. 1676 yılında Balatlı Papaz Abraham tarafından yaptırılmıştır. Selamsız Ermeni Kilisesi olarak da bilinen yapının üzerinde 1676 tarihli yazıt bulunur. Çevresinde tarihi bir çeşme yer alır.",
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
        description: "Yer: Kuzguncuk. 1835'te açılan ve 1861'de yeniden inşa edilen kilise, Kuzguncuk iskelesi karşısındadır. Dikdörtgen yapılı ve haçvari planlı olan kilisenin narteks bölümü kolonlarla ayrılmıştır ve beş kapısı bulunur.",
        image: "9 surklorvaic.png",
        source: "Turan Akıncı (İstanbul'da Osmanlı Mimarisi), Türkiye Ermenileri Patrikliği"
    },
    {
        id: 10,
        name: "Ahmet Çelebi Camii",
        type: "cami",
        religion: "islam",
        lat: 41.0217,
        lng: 29.0135,
        description: "Yer: Aziz Mahmud Hüdayi Mahallesi. 1567 yılında hayırsever Ahmet Çelebi tarafından yaptırılmıştır. 1771 ve 1796 yangınlarından sonra yeniden inşa edilen cami, banisinin Alevi-Bektaşi kökenli olduğu ve bölgedeki tekke kültürüyle ilişkili olduğu bilinir.",
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
        description: "Yer: Karacaahmet Mezarlığı. Türkiye'nin en büyük mezarlığı içinde yer alan dergâh, 1481 yılında II. Beyazıd tarafından Karaca Ahmet Sultan Bektaşi Vakfı'na bağışlanmıştır. İstanbul'un en önemli Alevi-Bektaşi merkezlerindendir.",
        image: "11 karacaahmetcemevi.png",
        source: "Semavi Eyice (DİA), Cemal Şener (Karaca Ahmet Sultan), Karacaahmet Sultan Derneği"
    },
    {
        id: 12,
        name: "Boğaziçi Cem Evi",
        type: "cemevi",
        religion: "islam-alevi",
        lat: 41.0458,
        lng: 29.0612,
        description: "Yer: Çengelköy Mehmet Akif Ersoy Mahallesi. Bölgedeki Alevi toplumuna hizmet veren modern bir inanç ve culture merkezidir. 2019 yılında Üsküdar Belediyesi tarafından açılmıştır.",
        image: "12 boğaziçi cemevi.png",
        source: "Üsküdar Belediyesi Proje Kayıtları, Yerel Gazete Arşivleri"
    },
    {
        id: 13,
        name: "İlyas Profiti Rum Ortodoks Kilisesi",
        type: "kilise",
        religion: "hristiyanlik",
        lat: 41.0211,
        lng: 29.0326,
        description: "Yer: Yenimahalle, Hacı Murat Sokağı. 1831'de Sultan II. Mahmud'un fermanıyla inşa edilmiştir. Taştan yapılan kilise beşik tonoz kubbe ile örtülüdür ve avlusunda tarihi bir ayazma bulunur.",
        image: "13 ilyasprofitrumortodokskilisesi.jpg",
        source: "Patacı (Üsküdar’daki Osmanlı Dönemi Kiliseleri), Kültür Envanteri (No: 8536)"
    },
    {
        id: 14,
        name: "Bet Nissim Sinagogu",
        type: "sinagog",
        religion: "yahudilik",
        lat: 41.0332,
        lng: 29.0318,
        description: "Yer: Kuzguncuk, Yakup Sokak. 1840'larda inşa edilen ve 'Yukarı Sinagog' olarak bilinen yapı, 1997'de Nissim Albala'nın anısına 'Bet Nissim' (Mucizeler Evi) adını almıştır. Sekizgen kubbesiyle dikkat çeker.",
        image: "13 bet nissim sinagogu.png",
        source: "Naim A. Güleryüz (Türkiye Sinagogları), Türk Yahudi Toplumu Kayıtları"
    },
    {
        id: 15,
        name: "Balcı Baba Türbesi",
        type: "turbe",
        religion: "islam",
        lat: 41.0176,
        lng: 29.0234,
        description: "Yer: Balcı Yokuşu Sokağı. Himmetzâde Tekkesi şeyhi Hacı Ahmet Dede'ye aittir. 1728'de vefat eden zatın türbesi yıkılmış, 1970'te yerine yapılan apartmanın altında kalmıştır. Sandukası apartman boşluğundan görülebilmektedir.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Scutari_Cemetery_View.jpg/1200px-Scutari_Cemetery_View.jpg",
        source: "Mehmet Nermi Haskan (Yüzyıllar Boyunca Üsküdar), Kültür Envanteri"
    },
    {
        id: 16,
        name: "Behram Paşa Türbesi",
        type: "turbe",
        religion: "islam",
        lat: 41.0267,
        lng: 29.0158,
        description: "Yer: Gündoğumu Caddesi civarı. Mimar Sinan eseri olan ancak günümüze ulaşamayan bu türbe, II. Selim devri devlet adamlarından Yemen Valisi Behram Paşa'ya aittir. Hazire kalıntıları arasında yer aldığı sanılmaktadır.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Mimar_Sinan_Work_Context.jpg/1200px-Mimar_Sinan_Work_Context.jpg",
        source: "Tuhfetü’l-Mi’mârîn, Mehmet Nermi Haskan, Üsküdar Belediyesi Envanteri"
    },
    {
        id: 17,
        name: "Bandırmalı Şeyh Yusuf Türbesi",
        type: "turbe",
        religion: "islam",
        lat: 41.0147,
        lng: 29.0218,
        description: "Yer: İnadiye Semti. Yedi Emirler Türbesi olarak da bilinen yapı, Bandırmalı Tekkesi'nin bir parçasıdır. 1752'de vefat eden Şeyh Yusuf Efendi ve İstanbul'un fethinde ilk cuma namazını kıldıran Hatibzâde İbrahim Efendi burada medfundur.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Jacques_Pervititch_map_%C3%9Csk%C3%BCdar.jpg/1200px-Jacques_Pervititch_map_%C3%9Csk%C3%BCdar.jpg",
        source: "TDV İslâm Ansiklopedisi (M. Baha Tanman), Hüseyin Vassâf (Sefîne-i Evliyâ)"
    }
];
