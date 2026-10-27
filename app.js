// ====================================================
// Contexta TV - Clean Mobile Companion Logic (v4.0)
// 20 Ulusal TV Kanalı + Canlı Teletekst & EPG + Real-Time Chat
// ====================================================

// 1. TOP 20 TURKISH TV CHANNELS DATABASE (EPG & TELETEXT ENRICHED)
const channelDatabase = {
    showtv: {
        id: "showtv",
        name: "Show TV",
        genre: "Sinema / Komedi",
        time: "⏰ 20:00 - 22:30",
        schedule: [
            { time: "18:45", title: "Show Ana Haber (Canlı)" },
            { time: "20:00", title: "Korkusuz Korkak (Kemal Sunal - Yerli Sinema)", current: true },
            { time: "22:15", title: "Bahar (Tekrar)" },
            { time: "01:00", title: "Kızılcık Şerbeti (Tekrar)" }
        ],
        program: {
            title: "Korkusuz Korkak - Kemal Sunal Sineması",
            desc: "Bombacı Mülayim ve Gaddar Kerim'in efsanevi komedi macerası ekranda.",
            teletext300: "SHOW TELETEXT S.300: 20:00 KORKUSUZ KORKAK / 22:15 BAHAR / 01:00 KIZILCIK SERBETI",
            teletext888: "ALTYAZI S.888: '...Mülayim: 'Ben Bombacı Mülayim! Korkusuz adamım ben!'... Gaddar Kerim: 'Gel ulan buraya!'...'",
            poll: {
                id: "poll_show_korkusuz_1",
                question: "Kemal Sunal'ın bu filmdeki en unutulmaz repliği hangisi?",
                options: ["Mesela yani!", "Bombacı Mülayim!", "Gaddar Kerim seni arıyor"],
                results: { "Mesela yani!": 54, "Bombacı Mülayim!": 32, "Gaddar Kerim seni arıyor": 14 },
                points: 20
            },
            campaign: {
                type: "Sinema & Eğlence Fırsatı",
                title: "Biletinial Sinema Biletlerinde 2. Bilet %50 İndirimli",
                desc: "Show TV sinema kuşağı izleyicilerine özel 'SINEMA50' indirim kodu.",
                code: "SINEMA50",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Trendyol - Büyük Sonbahar İndirimi",
            desc: "Milyonlarca üründe geçerli kupon kuşağı ekranda.",
            teletext300: "SHOW REKLAM S.200: TRENDYOL SONBAHAR LANSMANI / L'OREAL BAKIM GUNLERI",
            teletext888: "REKLAM ALTYAZISI: '...Trendyol ile aradığın her şey kapında. İndirimi kaçırma...'",
            campaign: {
                type: "Alışveriş Çeki",
                title: "Trendyol'dan 100 TL Alışveriş Çeki",
                desc: "TV reklamına özel 'TRENDYOL100' koduyla anında 100 TL hediye çeki.",
                code: "TRENDYOL100",
                points: 15,
                actionText: "Çeki Cüzdana Ekle (+15 P)"
            }
        }
    },
    trt1: {
        id: "trt1",
        name: "TRT 1",
        genre: "Tarih / Dönem Dizisi",
        time: "⏰ 20:00 - 00:15",
        schedule: [
            { time: "17:30", title: "Lingo Türkiye (Yarışma)", desc: "Kemal Uçar ile kelime tahmin yarışması." },
            { time: "19:00", title: "TRT 1 Ana Haber (Canlı)", desc: "Türkiye ve dünyadan sıcak gelişmeler." },
            { time: "19:55", title: "İddiaların Aksine", desc: "Gündemdeki iddialar ve gerçekler." },
            { time: "20:00", title: "Mehmed: Fetihler Sultanı - Yeni Bölüm", desc: "Sultan Mehmed Han Konstantiniyye surlarını aşmak için dev şahi topların döküm emrini veriyor.", current: true },
            { time: "00:15", title: "Gönül Dağı (Tekrar)", desc: "Bozkırın sarı sıcağında samimi hikayeler." }
        ],
        program: {
            title: "Mehmed: Fetihler Sultanı - Yeni Bölüm",
            desc: "Sultan Mehmed Han Konstantiniyye fethi için dev şahi topların döküm emrini veriyor. Zağanos Paşa ve Çandarlı Halil Paşa arasında strateji tartışması canlı yayında.",
            teletext300: "TRT TELETEXT S.300: 20:00 MEHMED FETIHLER SULTANI (CANLI) / 00:15 GONUL DAGI (T) / 02:50 SEKSENLER",
            teletext888: "ALTYAZI S.888: '...Sultan Mehmed: Konstantiniyye fethi İslamın ve cihanın kaderini değiştirecektir. Zağanos Paşa hazırlıklar tamamlansın!... Zağanos Paşa: Emriniz baş üstüne Sultanım...'",
            poll: {
                id: "poll_trt_mehmed_1",
                question: "Sultan Mehmed bu bölümde şahi topların ilk atış testini yapacak mı?",
                options: ["Evet, Test Başarılı Olur", "Bizans Tuzağına Düşerler", "Kuşatma Ertelenir"],
                results: { "Evet, Test Başarılı Olur": 64, "Bizans Tuzağına Düşerler": 26, "Kuşatma Ertelenir": 10 },
                points: 20
            },
            campaign: {
                type: "Tarih & Kültür Kitapları",
                title: "D&R ve Kitapyurdu Tarih Kitaplarında %35 İndirim",
                desc: "Mehmed: Fetihler Sultanı izleyicilerine özel Fatih ve İstanbul fethi kitaplarında geçerli indirim kodu.",
                code: "FETIH35",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Yemeksepeti - Çıtır Pizza Fırsatı",
            desc: "TV izlerken sıcacık çıtır pizza kapınızda.",
            teletext300: "TRT REKLAM S.200: YEMEKSEPETI PIZZA / TURKCELL 5G REKLAM KUSAGI",
            teletext888: "REKLAM ALTYAZISI: '...çıtır çıtır bol malzemeli pizza sadece 25 dakikada kapında...'",
            campaign: {
                type: "Yemek Kuponu",
                title: "Büyük Boy Pizzada %40 İndirim",
                desc: "TV izleyicilerine özel 'PIZZA40' koduyla anında indirim fırsatı.",
                code: "PIZZA40",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        }
    },
    tv8: {
        id: "tv8",
        name: "TV8",
        genre: "Yarışma / Mutfak",
        time: "⏰ 20:00 - 23:45",
        schedule: [
            { time: "16:00", title: "Zuhal Topal'la Yemekteyiz" },
            { time: "20:00", title: "MasterChef Türkiye - Kaptanlar Düellosu", current: true },
            { time: "00:15", title: "Survivor Panorama / Tekrar" }
        ],
        program: {
            title: "MasterChef Türkiye - Kaptanlar Düellosu",
            desc: "Kırmızı ve Mavi takım şeflerin karşısında dokunulmazlık için yarışıyor.",
            teletext300: "TV8 AKIS S.300: 20:00 MASTERCHEF TURKIYE CANLI / 00:15 SURVIVOR PANORAMA",
            teletext888: "ALTYAZI S.888: '...Mehmet Şef: Süre son 3 dakika! Tabakları tezgaha koyun, değerlendirme başlıyor...'",
            poll: {
                id: "poll_tv8_1",
                question: "Dokunulmazlığı bu akşam hangi takım kazanır?",
                options: ["Kırmızı Takım", "Mavi Takım"],
                results: { "Kırmızı Takım": 56, "Mavi Takım": 44 },
                points: 20
            },
            campaign: {
                type: "Yemek Çeki",
                title: "GetirYemek'ten 120 TL İndirim",
                desc: "MasterChef izleyenlere özel 'MASTER120' koduyla anında indirim.",
                code: "MASTER120",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Getir - Market Kapında",
            desc: "Gece atıştırmalıklarında süper hızlı teslimat.",
            teletext300: "TV8 REKLAM S.200: GETIR KAMPANYASI / CORNETTO REKLAMI",
            teletext888: "REKLAM ALTYAZISI: '...dakikalar içinde kapında, Getir ile mutluluk kapında...'",
            campaign: {
                type: "Süpermarket Çeki",
                title: "Getir Market 75 TL İndirim",
                desc: "Gece siparişlerinde geçerli 'GETIR75' kupon kodu.",
                code: "GETIR75",
                points: 15,
                actionText: "Çeki Cüzdana Ekle (+15 P)"
            }
        }
    },
    atv: {
        id: "atv",
        name: "ATV",
        genre: "Dram / Romantik",
        time: "⏰ 20:00 - 23:45",
        schedule: [
            { time: "16:00", title: "Esra Erol'da (Canlı)", desc: "Gündüz kuşağı canlı yayın." },
            { time: "19:00", title: "ATV Ana Haber (Canlı)", desc: "Cem Öğretir ile günün sıcak gelişmeleri." },
            { time: "20:00", title: "Bir Gece Masalı - Mahir ve Canfeza", desc: "Komiser Mahir ile Yörük kızı Canfeza'nın Pamukkale'de başlayan masalsı aşkı.", current: true },
            { time: "23:45", title: "Kuruluş Osman (Tekrar)", desc: "Osman Bey'in fetih mücadelesi." }
        ],
        program: {
            title: "Bir Gece Masalı - Mahir ve Canfeza",
            desc: "Komiser Mahir ile Yörük kızı Canfeza'nın Pamukkale'den İstanbul Asaf Bey konağına uzanan masalsı aşkı ve intikam mücadelesi ekranda.",
            teletext300: "ATV TELETEXT S.300: 20:00 BIR GECE MASALI (CANLI) / 23:45 KURULUS OSMAN (T)",
            teletext888: "ALTYAZI S.888: '...Mahir: Bir gece masalıydı bizimkisi, başladığı gibi bitmeyecek Canfeza!... Canfeza: Kaderimiz çoktan yazılmış Mahir...'",
            poll: {
                id: "poll_atv_bgm_1",
                question: "Mahir konaktaki sır perdesini aralayabilecek mi?",
                options: ["Tüm sırları çözer", "Canfeza'yı korumak için susar", "Yeni bir tuzak kurulur"],
                results: { "Tüm sırları çözer": 46, "Canfeza'yı korumak için susar": 40, "Yeni bir tuzak kurulur": 14 },
                points: 20
            },
            campaign: {
                type: "Otomobil Lansmanı",
                title: "Yeni Dacia Duster Test Sürüşü Randevusu",
                desc: "Yeni Dacia Duster ile maceraya hazır olun. Test sürüşü yapana sürpriz hediye.",
                code: "DACIA2026",
                points: 25,
                actionText: "Randevu Kuponunu Al (+25 P)"
            }
        },
        ad: {
            title: "Dacia Duster - Yeni SUV Reklamı",
            desc: "Hibrit motor seçeneğiyle yollara meydan okuyan SUV.",
            teletext300: "ATV REKLAM S.200: YENI DACIA DUSTER / VODAFONE RED LANSMANI",
            teletext888: "REKLAM ALTYAZISI: '...Yeni Dacia Duster ile yolların hakimi olun. Yetkili bayilerde...'",
            campaign: {
                type: "Yakıt İndirimi",
                title: "Opet'te 150 TL Yakıt Puanı",
                desc: "Dacia reklamına özel Opet istasyonlarında 150 TL değerinde yakıt puanı.",
                code: "OPETDACIA",
                points: 20,
                actionText: "Puanı Cüzdana Ekle (+20 P)"
            }
        }
    },
    kanald: {
        id: "kanald",
        name: "Kanal D",
        genre: "Dram / Suç",
        time: "⏰ 20:00 - 23:45",
        schedule: [
            { time: "16:45", title: "Gelinim Mutfakta (Yarışma)", desc: "Altın bilezikler için kıyasıya yarış." },
            { time: "18:30", title: "Kanal D Ana Haber (Canlı)", desc: "Günün gelişmeleri canlı yayında." },
            { time: "20:00", title: "Haysiyet (Yeni Bölüm)", desc: "Adaletin ve onurun sınırlarını zorlayan hesaplaşma ekranda.", current: true },
            { time: "23:45", title: "Haysiyet (Tekrar / Gece Kuşağı)", desc: "Günün prime-time yapımının gece tekrarı." }
        ],
        program: {
            title: "Haysiyet - Yeni Bölüm",
            desc: "Adalet, aile bağları ve onur mücadelesi; gerçeğin ortaya çıkmasıyla dengeler altüst oluyor.",
            teletext300: "KANAL D AKIS S.300: 20:00 HAYSIYET (CANLI YENI BOLUM) / 23:45 HAYSIYET (T) / 02:00 GELINIM MUTFAKTA",
            teletext888: "ALTYAZI S.888: '...Gerçekler ortaya çıkmadan bu defteri kapatamazsın!... Sana hesap soracağım!...'",
            poll: {
                id: "poll_kanald_haysiyet_1",
                question: "Haysiyet bu akşamki hesaplaşmada sırlar çözülecek mi?",
                options: ["Büyük itiraf gelir", "İntikam ertelenir", "Yeni bir düğüm atılır"],
                results: { "Büyük itiraf gelir": 48, "İntikam ertelenir": 36, "Yeni bir düğüm atılır": 16 },
                points: 20
            },
            campaign: {
                type: "Finans Fırsatı",
                title: "Akbank 25.000 TL Faizsiz Taksitli Avans",
                desc: "Kanal D izleyicilerine özel mobilden Akbanklı olanlara sıfır faizli nakit.",
                code: "AKBANK0FAIZ",
                points: 25,
                actionText: "Fırsatı Cüzdana Kaydet (+25 P)"
            }
        },
        ad: {
            title: "Akbank - Faizsiz Kredi Kampanyası",
            desc: "Dijital başvuruyla 5 dakikada hesabınızda.",
            teletext300: "KANAL D REKLAM S.200: AKBANK MOBIL / ENPARA MEVDUAT FIRSATI",
            teletext888: "REKLAM ALTYAZISI: '...faizsiz 25.000 TL nakit avans Akbank Mobil'de seni bekliyor...'",
            campaign: {
                type: "Finans Bonusu",
                title: "Akbanklı Olana 500 TL Chip-Para",
                desc: "İlk kredi kartı harcamanıza anında 500 TL chip-para hediyesi.",
                code: "CHIP500",
                points: 20,
                actionText: "Bonusu Cüzdana Ekle (+20 P)"
            }
        }
    },
    now: {
        id: "now",
        name: "NOW (Fox)",
        genre: "Dram / Sosyal",
        time: "⏰ 20:00 - 23:30",
        schedule: [
            { time: "16:30", title: "Fatih Ürek ile Gelin Görümce" },
            { time: "19:00", title: "NOW Ana Haber (Selçuk Tepeli)", desc: "Günün haberleri canlı." },
            { time: "20:00", title: "Gizli Bahçe / Anne Yarısı - Yeni Dizi Kuşağı", desc: "Sürükleyici hikayesiyle akşam kuşağı ekranlara geliyor.", current: true },
            { time: "23:45", title: "Kızıl Goncalar (Tekrar)" }
        ],
        program: {
            title: "Gizli Bahçe / Anne Yarısı - Yeni Dizi Kuşağı",
            desc: "Sürükleyici hikayesi ve güçlü oyuncu kadrosuyla NOW ekranlarında akşam kuşağı.",
            teletext300: "NOW AKIS S.300: 20:00 GIZLI BAHCE (YENI) / 23:45 KIZIL GONCALAR (T)",
            teletext888: "ALTYAZI S.888: '...Demir: Gerçekleri sonsuza dek saklayamazsın Nazlı! Nazlı: Oğlum için her şeyi yaparım!...'",
            poll: {
                id: "poll_now_gizlibahce_1",
                question: "Demir gerçeği öğrendiğinde Nazlı'yı affedecek mi?",
                options: ["Affeder", "Aralarındaki savaş büyür"],
                results: { "Affeder": 42, "Aralarındaki savaş büyür": 58 },
                points: 20
            },
            campaign: {
                type: "Moda Çeki",
                title: "Boyner %30 Sonbahar Giyim İndirimi",
                desc: "Kızıl Goncalar dizisine özel Boyner mağazalarında ve internette geçerli kupon.",
                code: "BOYNER30",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Boyner - Yeni Sezon Mont & Kaban",
            desc: "Dünyaca ünlü markalar Boyner'de sizi bekliyor.",
            teletext300: "NOW REKLAM S.200: BOYNER SEZON INDIRIMI / SAMSUNG GALAXY S24",
            teletext888: "REKLAM ALTYAZISI: '...tarzını yansıtacak en şık parçalar şimdi Boyner'de...'",
            campaign: {
                type: "Giyim Kuponu",
                title: "Boyner 200 TL Hediye Çeki",
                desc: "1000 TL ve üzeri alışverişlerde anında 200 TL indirim kodu.",
                code: "BOYNER200",
                points: 15,
                actionText: "Çeki Cüzdana Ekle (+15 P)"
            }
        }
    },
    startv: {
        id: "startv",
        name: "Star TV",
        genre: "Romantik / Komedi",
        time: "⏰ 20:00 - 00:15",
        schedule: [
            { time: "15:00", title: "Didem Arslan Yılmaz'la Vazgeçme (Canlı)", desc: "Gündemin sıcak olayları ve araştırmalar." },
            { time: "19:00", title: "Star Haber (Canlı)", desc: "Günün en sıcak gelişmeleri ve ana haber bülteni." },
            { time: "20:00", title: "Tuzlu Kahve - Yerli Sinema / TV Kuşağı", desc: "Kız isteme merasiminde damadın kahvesine tuz konmasıyla başlayan eğlenceli ve romantik hikaye.", current: true },
            { time: "00:15", title: "Sevdiğim Sensin (Tekrar)", desc: "Gece kuşağı romantik dizi yayını." }
        ],
        program: {
            title: "Tuzlu Kahve - Yerli Sinema / TV Kuşağı",
            desc: "Geleneksel kız isteme merasiminde damadın kahvesine tuz konmasıyla başlayan eğlenceli, romantik ve kahkaha dolu olaylar zinciri ekrana geliyor.",
            teletext300: "STAR AKIS S.300: 20:00 TUZLU KAHVE (CANLI) / 00:15 SEVDIGIM SENSIN / 03:00 FAZILET HANIM",
            teletext888: "ALTYAZI S.888: '...Damat: Kahve biraz fazla mı tuzlu olmuş ne? Kız tarafı tebessüm eder... Gelin: Sevginin imtihanı bu fincanda saklı! Damat fincanı tek dikişte bitirmeye çalışır...'",
            poll: {
                id: "poll_star_tuzlukahve_1",
                question: "Damat tuzlu kahveyi tek dikişte renk vermeden bitirebilecek mi?",
                options: ["Tek dikişte bitirir", "Öksürür yarım bırakır", "Hemen su ister"],
                results: { "Tek dikişte bitirir": 54, "Öksürür yarım bırakır": 36, "Hemen su ister": 10 },
                points: 20
            },
            campaign: {
                type: "Kahve & Mutfak Keyfi",
                title: "Kahve Dünyası & Tchibo %30 İndirim Kuponu",
                desc: "Tuzlu Kahve filmine özel Türk kahvesi ve fincan setlerinde geçerli indirim kodu.",
                code: "KAHVE30",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Arzum Okka - Közde Türk Kahvesi Makinesi",
            desc: "Geleneksel lezzet, bol köpük, tek tuşla hazır.",
            teletext300: "STAR REKLAM S.200: ARZUM OKKA LANSMANI / BEKO KAHVE MAKINELERI",
            teletext888: "REKLAM ALTYAZISI: '...bol köpüklü közde kahve lezzeti Arzum Okka ile her an elinin altında...'",
            campaign: {
                type: "Küçük Ev Aletleri",
                title: "Arzum Okka'da 400 TL Sepet İndirimi",
                desc: "TV reklam kuşağına özel online siparişlerde anında 400 TL indirim kodu.",
                code: "OKKA400",
                points: 20,
                actionText: "İndirimi Cüzdana Ekle (+20 P)"
            }
        }
    },
    kanal7: {
        id: "kanal7",
        name: "Kanal 7",
        genre: "Dizi / Aile",
        time: "⏰ 20:00 - 22:30",
        program: {
            title: "Esaret - Büyük Yüzleşme",
            desc: "Hira ve Orhun arasındaki sırlar bir bir açığa çıkıyor.",
            teletext300: "KANAL 7 S.300: 20:00 ESARET / 22:30 BASKENT KULISI / 00:00 HABER",
            teletext888: "ALTYAZI S.888: '...Orhun: Gerçekleri bilmeye hakkın vardı. Masumiyetin ortaya çıktı...'",
            poll: {
                id: "poll_k7_1",
                question: "İkili arasındaki buzlar eriyecek mi?",
                options: ["Eriyecek (Affedecek)", "Zaman Alacak"],
                results: { "Eriyecek (Affedecek)": 68, "Zaman Alacak": 32 },
                points: 20
            },
            campaign: {
                type: "Doğal Ürünler",
                title: "Farmasi Bitkisel Bakımda %30 İndirim",
                desc: "Kanal 7 izleyicilerine özel doğal sabun ve kremlerde geçerli indirim.",
                code: "DOGAL30",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Süper Zeytinyağı - Doğal Soğuk Sıkım",
            desc: "Ege'nin zeytin bahçelerinden sofranıza saf lezzet.",
            teletext300: "KANAL 7 REKLAM S.200: EGE ZEYTINYAGI / ERSAIS TEMIZLIK",
            teletext888: "REKLAM ALTYAZISI: '...doğallık ve sağlık bir arada, Ege'nin altın damlası...'",
            campaign: {
                type: "Gıda İndirimi",
                title: "5 Litre Taş Baskı Zeytinyağında 200 TL İndirim",
                desc: "Kapıda ödeme ve ücretsiz kargo avantajıyla hemen sipariş verin.",
                code: "ZEYTIN200",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        }
    },
    beyaztv: {
        id: "beyaztv",
        name: "Beyaz TV",
        genre: "Spor / Tartışma",
        time: "⏰ 21:00 - 01:30",
        program: {
            title: "Beyaz Futbol - Derbi Özel",
            desc: "Ahmet Çakar ve Sinan Engin haftanın hakem kararlarını tartışıyor.",
            teletext300: "BEYAZ TV S.300: 21:00 BEYAZ FUTBOL CANLI / 01:30 DERIN FUTBOL TEKRAR",
            teletext888: "ALTYAZI S.888: '...Ahmet Çakar: Bu pozisyona penaltı diyen futbolu bilmiyordur kardeşim!...'",
            poll: {
                id: "poll_beyaz_1",
                question: "Sizce derbide verilen penaltı kararı doğru muydu?",
                options: ["Doğru Karar", "Hatalı / Skandal"],
                results: { "Doğru Karar": 39, "Hatalı / Skandal": 61 },
                points: 20
            },
            campaign: {
                type: "Yemek Fırsatı",
                title: "Köfteci Yusuf Maç Menüsünde %25 İndirim",
                desc: "Beyaz Futbol izleyicilerine özel doyurucu ızgara köfte menüsü.",
                code: "KOFTE25",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Çetinkaya - Büyük İndirim Günleri",
            desc: "Takım elbiseden spor ayakkabıya dev kampanya.",
            teletext300: "BEYAZ TV REKLAM S.200: CETINKAYA MAGAZALARI / DERBI MENUSU",
            teletext888: "REKLAM ALTYAZISI: '...kalite ve uygun fiyat Çetinkaya'da buluşuyor...'",
            campaign: {
                type: "Giyim Kuponu",
                title: "Çetinkaya 150 TL Hediye Çeki",
                desc: "750 TL üzeri harcamalarda geçerli anında indirim.",
                code: "CETIN150",
                points: 15,
                actionText: "Çeki Cüzdana Ekle (+15 P)"
            }
        }
    },
    trtspors: {
        id: "trtspors",
        name: "TRT Spor",
        genre: "Spor / Canlı",
        time: "⏰ 20:30 - 23:00",
        program: {
            title: "Spor Manşet - Süper Lig Analizi",
            desc: "Günün öne çıkan maç özetleri ve liderlik yarışındaki puan durumları.",
            teletext300: "TRT SPOR S.300: 20:30 SPOR MANSET / 22:00 SUPER LIG OZETLERI / 23:30 TEKNIK ANALIZ",
            teletext888: "ALTYAZI S.888: '...Süper Lig'de zirve yarışında puan kayıpları sonrası puan farkı 2'ye indi...'",
            poll: {
                id: "poll_trtsp_1",
                question: "Süper Lig'de bu sezon şampiyonluk ipini kim göğüsler?",
                options: ["Galatasaray", "Fenerbahçe", "Beşiktaş", "Diğer"],
                results: { "Galatasaray": 46, "Fenerbahçe": 43, "Beşiktaş": 8, "Diğer": 3 },
                points: 20
            },
            campaign: {
                type: "Spor Giyim",
                title: "Puma & Nike Kramponlarda %30 İndirim",
                desc: "TRT Spor izleyicilerine özel orijinal futbol ürünlerinde geçerli kod.",
                code: "SPOR30",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Puma - Hızın Yeni Tanımı",
            desc: "Yeni sezon futbol ayakkabıları sahalara damga vuruyor.",
            teletext300: "TRT SPOR REKLAM S.200: PUMA ULTRA KRAMPON / RED BULL ENERJI",
            teletext888: "REKLAM ALTYAZISI: '...sahada fark yarat, sınırları zorla...'",
            campaign: {
                type: "Spor Kuponu",
                title: "Puma Online Mağazada 250 TL İndirim",
                desc: "1500 TL üzeri tüm spor giyim siparişlerinde geçerli indirim.",
                code: "PUMA250",
                points: 20,
                actionText: "Kuponu Cüzdana Ekle (+20 P)"
            }
        }
    },
    aspor: {
        id: "aspor",
        name: "A Spor",
        genre: "Spor / Canlı",
        time: "⏰ 21:00 - 00:30",
        program: {
            title: "Takım Oyunu - Transfer Gündemi",
            desc: "Erman Toroğlu ve stüdyo konukları transfer fısıltılarını ve hakemleri konuşuyor.",
            teletext300: "A SPOR S.300: 21:00 TAKIM OYUNU CANLI / 00:30 SON SAYFA / 02:00 SPOR AJANSI",
            teletext888: "ALTYAZI S.888: '...Erman Toroğlu: Sahadaki futbolcu hakemi aldatmaya çalışıyorsa sarı kart çıkacak!...'",
            poll: {
                id: "poll_aspor_1",
                question: "Yabancı hakem uygulaması derbilerde devam etmeli mi?",
                options: ["Devam Etmeli", "Yerli Hakem Yönetmeli"],
                results: { "Devam Etmeli": 73, "Yerli Hakem Yönetmeli": 27 },
                points: 20
            },
            campaign: {
                type: "Spor İndirimi",
                title: "Orijinal Kulüp Formasında 200 TL İndirim",
                desc: "A Spor canlı yayınına özel tüm resmi kulüp mağazası indirim kodu.",
                code: "FORMA200",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Nesine - Spor Coşkusu Cebinde",
            desc: "Canlı maç yayınları ve istatistikler tek uygulamada.",
            teletext300: "A SPOR REKLAM S.200: NESINE CANLI MAC / CASTROL MOTOR YAGI",
            teletext888: "REKLAM ALTYAZISI: '...sporun kalbi burada atıyor, heyecana ortak ol...'",
            campaign: {
                type: "Maç Kuponu",
                title: "Domino's Pizza Maç Menüsünde %35 İndirim",
                desc: "Maç izlerken sıcacık pizza 'MACKEYFI' koduyla indirimli kapında.",
                code: "MACKEYFI",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        }
    },
    haberturk: {
        id: "haberturk",
        name: "HaberTürk",
        genre: "Haber / Tartışma",
        time: "⏰ 20:00 - 23:00",
        program: {
            title: "Teke Tek - Bilim ve Ekonomi",
            desc: "Uzman konuklar küresel piyasaları ve teknolojik dönüşümü inceliyor.",
            teletext300: "HABERTURK S.300: 20:00 TEKE TEK CANLI / 23:00 GECE BULTENI / 01:00 BELGESEL",
            teletext888: "ALTYAZI S.888: '...Faiz kararları ve enflasyon verilerinin piyasalara yansıması canlı yayında değerlendiriliyor...'",
            poll: {
                id: "poll_ht_1",
                question: "Önümüzdeki çeyrekte altın ve döviz piyasası nasıl seyreder?",
                options: ["Yükseliş Devam Eder", "Yatay Seyreder", "Düşüşe Geçer"],
                results: { "Yükseliş Devam Eder": 71, "Yatay Seyreder": 21, "Düşüşe Geçer": 8 },
                points: 20
            },
            campaign: {
                type: "Finans Üyeliği",
                title: "Matriks & Borsa Analiz Platformu 1 Ay Ücretsiz",
                desc: "HaberTürk izleyicilerine özel profesyonel piyasa veri terminali hediye.",
                code: "PIYASA2026",
                points: 20,
                actionText: "Fırsatı Cüzdana Kaydet (+20 P)"
            }
        },
        ad: {
            title: "Garanti BBVA - Dijital Yatırım",
            desc: "Hisse senedi ve fon işlemlerinizde sıfır komisyon avantajı.",
            teletext300: "HABERTURK REKLAM S.200: GARANTI YATIRIM / TOYOTA HYBRID",
            teletext888: "REKLAM ALTYAZISI: '...geleceğe yatırım yap, Garanti BBVA ile birikimlerini değerlendir...'",
            campaign: {
                type: "Finans Kampanyası",
                title: "Garanti BBVA 300 TL Bonus Puan",
                desc: "Mobilden müşteri olanlara anında 300 TL harcama bonusu.",
                code: "GARANTI300",
                points: 20,
                actionText: "Bonusu Cüzdana Ekle (+20 P)"
            }
        }
    },
    cnnturk: {
        id: "cnnturk",
        name: "CNN Türk",
        genre: "Haber / Gündem",
        time: "⏰ 20:30 - 23:30",
        program: {
            title: "Akıl Çemberi - Küresel Dengeler",
            desc: "Harita üzerinde jeopolitik krizler ve askeri stratejiler ele alınıyor.",
            teletext300: "CNN TURK S.300: 20:30 AKIL CEMBERI / 23:30 GECE GORUSU / 01:30 GECE HABERLERI",
            teletext888: "ALTYAZI S.888: '...Orta Doğu'daki son diplomatik temaslar ve sınır hattındaki güvenlik operasyonu...'",
            poll: {
                id: "poll_cnn_1",
                question: "Bölgesel gerilim diplomasi yoluyla çözülebilir mi?",
                options: ["Çözülür", "Gerilim Tırmanır", "Belirsiz"],
                results: { "Çözülür": 29, "Gerilim Tırmanır": 58, "Belirsiz": 13 },
                points: 20
            },
            campaign: {
                type: "Kitap İndirimi",
                title: "D&R Tarih & Strateji Kitaplarında %35 İndirim",
                desc: "CNN Türk izleyicilerine özel D&R mağazalarında geçerli indirim kuponu.",
                code: "STRATEJI35",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Shell - V-Power ile Üstün Koruma",
            desc: "Motorunuzu tortulardan temizleyen gelişmiş yakıt formülü.",
            teletext300: "CNN TURK REKLAM S.200: SHELL V-POWER / MERCEDES E-SERISI",
            teletext888: "REKLAM ALTYAZISI: '...aracının performansını zirveye taşı, Shell ile yola çık...'",
            campaign: {
                type: "Yakıt Puanı",
                title: "Shell ClubSmart 100 TL Yakıt Hediyesi",
                desc: "Akaryakıt alımlarında anında 100 TL hediye yakıt puanı.",
                code: "SHELL100",
                points: 15,
                actionText: "Puanı Cüzdana Ekle (+15 P)"
            }
        }
    },
    ntv: {
        id: "ntv",
        name: "NTV",
        genre: "Haber / Kültür",
        time: "⏰ 20:00 - 22:30",
        program: {
            title: "Yakın Plan - Bilim ve Gelecek",
            desc: "Yapay zeka teknolojileri ve sağlık alanındaki devrim niteliğindeki yenilikler.",
            teletext300: "NTV S.300: 20:00 NTV ANA HABER / 21:00 YAKIN PLAN / 22:30 SPOR AKSIYON",
            teletext888: "ALTYAZI S.888: '...Yapay zekanın tıp alanındaki teşhis kabiliyeti uzman hekimlerin yerini alabilir mi?...'",
            poll: {
                id: "poll_ntv_1",
                question: "Yapay zekanın meslekler üzerindeki etkisi sizce ne olacak?",
                options: ["Yeni İş Alanları Açar", "İş Gücünü Azaltır", "Denge Değişmez"],
                results: { "Yeni İş Alanları Açar": 44, "İş Gücünü Azaltır": 49, "Denge Değişmez": 7 },
                points: 20
            },
            campaign: {
                type: "Teknoloji Kuponu",
                title: "MediaMarkt Akıllı Ürünlerde %25 İndirim",
                desc: "NTV izleyicilerine özel robot süpürge ve akıllı saatlerde geçerli kod.",
                code: "NTVTEKNO25",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Doğuş Teknoloji - Geleceğin Çözümleri",
            desc: "Yapay zeka tabanlı bulut çözümleri işinizi büyütüyor.",
            teletext300: "NTV REKLAM S.200: DOGUS TEKNOLOJI / VOLKSWAGEN ID.4",
            teletext888: "REKLAM ALTYAZISI: '...dijital dönüşümde lider çözümler, geleceğe bugünden adım at...'",
            campaign: {
                type: "Eğitim Fırsatı",
                title: "Udemy Yazılım Eğitiminde %50 Kupon",
                desc: "Yapay zeka ve Python eğitim setlerinde geçerli indirim kodu.",
                code: "YAPAYZEKA50",
                points: 20,
                actionText: "Kuponu Cüzdana Ekle (+20 P)"
            }
        }
    },
    sozcutv: {
        id: "sozcutv",
        name: "Sözcü TV",
        genre: "Haber / Gündem",
        time: "⏰ 19:00 - 22:30",
        program: {
            title: "Nokta Atışı - Vatandaşın Gündemi",
            desc: "Çarşı pazar fiyatları, emekli maaşları ve geçim şartları canlı yayında.",
            teletext300: "SOZCU TV S.300: 19:00 ANA HABER / 20:45 NOKTA ATISI / 23:00 GECE BULTENI",
            teletext888: "ALTYAZI S.888: '...Pazarda temel gıda sepeti fiyatları araştırıldı, vatandaşın alım gücü masaya yatırıldı...'",
            poll: {
                id: "poll_sozcu_1",
                question: "Önümüzdeki aylarda temel gıda fiyatları düşüşe geçer mi?",
                options: ["Fiyatlar Düşer", "Aynı Kalır", "Artmaya Devam Eder"],
                results: { "Fiyatlar Düşer": 9, "Aynı Kalır": 19, "Artmaya Devam Eder": 72 },
                points: 20
            },
            campaign: {
                type: "Kitap Çeki",
                title: "Sözcü Kitabevi 100 TL Hediye Çeki",
                desc: "Tüm tarih ve araştırma kitaplarında geçerli 100 TL indirim çeki.",
                code: "SOZCU100",
                points: 15,
                actionText: "Çeki Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Şok Marketler - Her Gün Ucuzluk",
            desc: "Temel gıda ve temizlik ürünlerinde net indirimler.",
            teletext300: "SOZCU REKLAM S.200: SOK MARKETLERI / DERBI KAMPANYASI",
            teletext888: "REKLAM ALTYAZISI: '...Şok ucuzluk cebine dost, evin ihtiyaçları burada...'",
            campaign: {
                type: "Market Çeki",
                title: "CepteŞok 75 TL İndirim Kuponu",
                desc: "500 TL üzeri online market siparişinizde anında 75 TL indirim.",
                code: "SOK75",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        }
    },
    halktv: {
        id: "halktv",
        name: "Halk TV",
        genre: "Haber / Siyaset",
        time: "⏰ 20:00 - 23:30",
        program: {
            title: "Kayda Geçsin - Hukuk ve Demokrasi",
            desc: "Haftanın en çok konuşulan yargı kararları ve siyasi kulisler.",
            teletext300: "HALK TV S.300: 20:00 KAYDA GECSIN / 23:30 YENI BIR SABAH OZET / 01:00 GECE BULTENI",
            teletext888: "ALTYAZI S.888: '...Hukuk devleti ilkeleri ve anayasa tartışmaları canlı yayında tüm detaylarıyla ele alınıyor...'",
            poll: {
                id: "poll_halk_1",
                question: "Haftanın en önemli gündem başlığı sizce hangisiydi?",
                options: ["Ekonomi ve Enflasyon", "Hukuk ve Adalet", "Eğitim Sistemi"],
                results: { "Ekonomi ve Enflasyon": 59, "Hukuk ve Adalet": 35, "Eğitim Sistemi": 6 },
                points: 20
            },
            campaign: {
                type: "Yayıncılık Fırsatı",
                title: "Kırmızı Kedi Yayınevi %40 İndirim Kodu",
                desc: "Halk TV izleyicilerine özel felsefe ve sosyoloji eserlerinde dev indirim.",
                code: "HALK40",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Bionorica - Doğal Sağlık Çözümleri",
            desc: "Kış mevsiminde bağışıklığınızı güçlendiren bitkisel destek.",
            teletext300: "HALK TV REKLAM S.200: BIONORICA SAĞLIK / D&R KITAP GÜNLERI",
            teletext888: "REKLAM ALTYAZISI: '...doğadan gelen sağlık, soğuk kış günlerinde koruyucu kalkanın...'",
            campaign: {
                type: "Sağlık İndirimi",
                title: "Eczane & Sağlık Ürünlerinde %25 İndirim",
                desc: "Seçili vitamin ve takviye edici gıdalarda anında indirim kodu.",
                code: "SAGLIK25",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        }
    },
    trthaber: {
        id: "trthaber",
        name: "TRT Haber",
        genre: "Haber / Belgesel",
        time: "⏰ 20:00 - 22:30",
        program: {
            title: "Birinci Boyut - Savunma ve Mega Projeler",
            desc: "KAAN, TCG Anadolu ve Türkiye'nin havacılık ekosistemindeki son gelişmeler.",
            teletext300: "TRT HABER S.300: 20:00 BIRINCI BOYUT / 21:00 DUNYA BULTENI / 22:30 SAVUNMA OZEL",
            teletext888: "ALTYAZI S.888: '...Milli muharip uçak KAAN ikinci test uçuşunu başarıyla tamamladı...'",
            poll: {
                id: "poll_trthb_1",
                question: "Türkiye'nin en heyecan verici teknoloji projesi hangisi?",
                options: ["Milli Muharip Uçak KAAN", "KIZILELMA İHA", "Togg Elektrikli Araç"],
                results: { "Milli Muharip Uçak KAAN": 64, "KIZILELMA İHA": 26, "Togg Elektrikli Araç": 10 },
                points: 20
            },
            campaign: {
                type: "E-Ticaret Kuponu",
                title: "PttAVM'de Yerli Ürünlerde %20 İndirim",
                desc: "TRT Haber izleyicilerine özel PttAVM alışverişlerinde geçerli indirim kodu.",
                code: "PTTAVM20",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Togg - Akıllı Cihazdan Fazlası",
            desc: "Doğuştan elektrikli, bağlantılı ve sürdürülebilir mobilite deneyimi.",
            teletext300: "TRT HABER REKLAM S.200: TOGG T10X / TURK HAVA YOLLARI",
            teletext888: "REKLAM ALTYAZISI: '...yeni nesil mobilite deneyimi ile geleceğe sürün...'",
            campaign: {
                type: "Mobilite Çeki",
                title: "Trugo Şarj İstasyonlarında 100 TL Şarj Hediyesi",
                desc: "Elektrikli araç sahiplerine özel Trugo hızlı şarj hediye kuponu.",
                code: "TRUGO100",
                points: 20,
                actionText: "Hediyeyi Cüzdana Ekle (+20 P)"
            }
        }
    },
    tv85: {
        id: "tv85",
        name: "TV8.5",
        genre: "Spor / Avrupa",
        time: "⏰ 21:00 - 00:00",
        program: {
            title: "Şampiyonlar Ligi Özel - Devler Arenası",
            desc: "Avrupa kupalarında haftanın en görkemli golleri ve teknik analizler.",
            teletext300: "TV8.5 S.300: 21:00 DEVLER ARENASI / 23:00 FUTBOL EKSTRA CANLI / 01:00 OZETLER",
            teletext888: "ALTYAZI S.888: '...Real Madrid ve Manchester City arasındaki nefes kesen yarı final eşleşmesi...'",
            poll: {
                id: "poll_tv85_1",
                question: "Şampiyonlar Ligi kupasını bu sezon hangi dev kaldırır?",
                options: ["Real Madrid", "Manchester City", "Bayern Münih", "Sürpriz Bir Takım"],
                results: { "Real Madrid": 42, "Manchester City": 45, "Bayern Münih": 9, "Sürpriz Bir Takım": 4 },
                points: 20
            },
            campaign: {
                type: "Atıştırmalık Fırsatı",
                title: "Doritos & Pepsi Maç Paketinde %30 İndirim",
                desc: "Şampiyonlar Ligi akşamlarına özel market teslimatlarında indirim kuponu.",
                code: "DEVLER30",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "PlayStation 5 - Oyun Dünyasını Yaşa",
            desc: "Ultra yüksek hızlı SSD ve dokunsal geri bildirimle oyunun içine gir.",
            teletext300: "TV8.5 REKLAM S.200: SONY PLAYSTATION 5 / EA SPORTS FC 25",
            teletext888: "REKLAM ALTYAZISI: '...oyun dünyasında sınırları kaldır, PS5 ile efsaneyi yaşa...'",
            campaign: {
                type: "Oyun İndirimi",
                title: "EA Sports FC 25 Oyununda 300 TL İndirim",
                desc: "Dijital oyun mağazalarında geçerli anında 300 TL indirim kodu.",
                code: "FC25INDIRIM",
                points: 25,
                actionText: "Kuponu Cüzdana Ekle (+25 P)"
            }
        }
    },
    tlc: {
        id: "tlc",
        name: "TLC",
        genre: "Yaşam / Reality",
        time: "⏰ 20:30 - 22:30",
        program: {
            title: "Ağır Yaşamlar - Dr. Nowzaradan",
            desc: "Houstan'da 300 kilonun üzerindeki hastaların hayata tutunma mücadelesi.",
            teletext300: "TLC AKIS S.300: 20:30 AGIR YASAMLAR / 22:30 TEMIZLIK AVCILARI / 00:00 EVLILIGE 90 GUN",
            teletext888: "ALTYAZI S.888: '...Dr. Nowzaradan: Ameliyat tek başına mucize değildir, diyet hedefine sadık kalmalısın...'",
            poll: {
                id: "poll_tlc_1",
                question: "Hastanın 2 ayda 25 kilo verme hedefine ulaşabileceğini düşünüyor musunuz?",
                options: ["Hedefe Ulaşır", "Zorlanır (Diyet Bozulur)"],
                results: { "Hedefe Ulaşır": 38, "Zorlanır (Diyet Bozulur)": 62 },
                points: 20
            },
            campaign: {
                type: "Sağlıklı Yaşam",
                title: "Fitpack Diyet Destek Ürünlerinde %30 İndirim",
                desc: "TLC izleyicilerine özel sağlıklı beslenme paketlerinde indirim kuponu.",
                code: "FIT30",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Philips Airfryer XXL - Sağlıklı Çıtır Lezzetler",
            desc: "Yüzde 90 daha az yağ ile çıtır patates ve sulu tavuk pişirme keyfi.",
            teletext300: "TLC REKLAM S.200: PHILIPS AIRFRYER / DYSON V15 SUPURGE",
            teletext888: "REKLAM ALTYAZISI: '...sağlıklı ve lezzetli yemekler bir dokunuşla hazır...'",
            campaign: {
                type: "Mutfak İndirimi",
                title: "Philips Küçük Ev Aletlerinde 400 TL İndirim",
                desc: "Airfryer ve kahve makinelerinde geçerli anında 400 TL sepet indirimi.",
                code: "PHILIPS400",
                points: 20,
                actionText: "Kuponu Cüzdana Ekle (+20 P)"
            }
        }
    },
    dmax: {
        id: "dmax",
        name: "DMAX",
        genre: "Otomobil / Belgesel",
        time: "⏰ 20:30 - 22:30",
        program: {
            title: "Hurda Avcıları - Klasik Araba Restorasyonu",
            desc: "Hurdaya dönmüş 1968 model Mustang garajda sıfırdan hayata döndürülüyor.",
            teletext300: "DMAX AKIS S.300: 20:30 HURDA AVCILARI / 22:30 TAMIRAT TADILAT / 00:00 ALTIN PESINDE",
            teletext888: "ALTYAZI S.888: '...V8 motor bloğu tamamen söküldü, şasi kumlama havuzuna gönderiliyor...'",
            poll: {
                id: "poll_dmax_1",
                question: "Hurda aracın restorasyon maliyeti satış değerini karşılar mı?",
                options: ["Büyük Kar Sağlar", "Zarar Ederler", "Manevi Değeri Yüksek"],
                results: { "Büyük Kar Sağlar": 61, "Zarar Ederler": 27, "Manevi Değeri Yüksek": 12 },
                points: 20
            },
            campaign: {
                type: "Oto & Hırdavat",
                title: "Bosch & Koçtaş El Aletlerinde 250 TL İndirim",
                desc: "DMAX izleyicilerine özel matkap ve lokma takımlarında geçerli indirim kodu.",
                code: "USTA250",
                points: 20,
                actionText: "Kuponu Cüzdana Ekle (+20 P)"
            }
        },
        ad: {
            title: "Castrol EDGE - Sıvı Titanyum Gücü",
            desc: "Motorunuzun sınırlarını zorlayın, sürtünmeyi en aza indirin.",
            teletext300: "DMAX REKLAM S.200: CASTROL EDGE MOTOR YAGI / STANLEY TERMOS",
            teletext888: "REKLAM ALTYAZISI: '...maksimum motor performansı için Castrol EDGE...'",
            campaign: {
                type: "Oto Bakım",
                title: "Castrol Motor Yağı ve Filtre Setinde %30 İndirim",
                desc: "Tüm oto servislerinde geçerli periyodik bakım indirim kuponu.",
                code: "CASTROL30",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        }
    }
};

// 2. User Authentication & State (Yetkili Kullanıcılar: alim & mustafa)
const AUTH_USERS = {
    mustafa: {
        username: "mustafa",
        password: "ma123",
        displayName: "Mustafa",
        avatar: "🦁",
        role: "Kurucu Ortak / Yetkili"
    },
    alim: {
        username: "alim",
        password: "ma123",
        displayName: "Alim",
        avatar: "🦊",
        role: "Kurucu Ortak / Yetkili"
    }
};

let authUser = null;
try {
    const savedAuth = localStorage.getItem("contexta_auth_user");
    if (savedAuth) {
        const parsed = JSON.parse(savedAuth);
        if (parsed && parsed.username && AUTH_USERS[parsed.username.toLowerCase()]) {
            authUser = AUTH_USERS[parsed.username.toLowerCase()];
        }
    }
} catch (e) {}

function isAuthenticated() {
    return authUser !== null;
}

let clientId = localStorage.getItem("contexta_client_id");
if (!clientId) {
    clientId = "client_" + Math.random().toString(36).substring(2, 9);
    localStorage.setItem("contexta_client_id", clientId);
}

let userName = authUser ? authUser.displayName : (localStorage.getItem("contexta_username") || "Misafir");
let userAvatar = authUser ? authUser.avatar : (localStorage.getItem("contexta_avatar") || "👤");
let isLoggedIn = isAuthenticated();

let userProfile = {
    points: 50,
    walletCoupons: [],
    completedPolls: []
};

try {
    const saved = localStorage.getItem("contexta_v4_profile");
    if (saved) {
        userProfile = Object.assign(userProfile, JSON.parse(saved));
    }
} catch (e) {
    console.warn("Storage read error", e);
}

function saveProfile() {
    try {
        localStorage.setItem("contexta_v4_profile", JSON.stringify(userProfile));
    } catch (e) {}
    updatePointsUI();
    renderLeaderboard();
    if (typeof sendPresenceHeartbeat === "function") {
        sendPresenceHeartbeat();
    }
}

function addPoints(amount, reason = "") {
    userProfile.points = (userProfile.points || 0) + amount;
    saveProfile();
    showToast(`🎉 +${amount} Puan Kazandınız! ${reason}`);
}

function updatePointsUI() {
    const badge = document.getElementById("totalPoints");
    if (badge) badge.innerText = userProfile.points;

    const headerName = document.getElementById("headerUserName");
    const headerAvatar = document.getElementById("headerUserAvatar");
    const headerChip = document.getElementById("userHeaderChip");

    if (isAuthenticated()) {
        if (headerName) headerName.innerText = authUser.displayName;
        if (headerAvatar) headerAvatar.innerText = authUser.avatar;
        if (headerChip) {
            headerChip.classList.add("authenticated");
            headerChip.title = `${authUser.displayName} (${authUser.role}) - Çıkış için tıklayın`;
        }
        document.body.classList.add("is-authenticated");
    } else {
        if (headerName) headerName.innerText = "Misafir (Giriş Yap)";
        if (headerAvatar) headerAvatar.innerText = "👤";
        if (headerChip) {
            headerChip.classList.remove("authenticated");
            headerChip.title = "Yetkili Girişi Yap";
        }
        document.body.classList.remove("is-authenticated");
    }

    const chatNameStrong = document.getElementById("chatUserName");
    if (chatNameStrong) chatNameStrong.innerText = `${userAvatar || '👤'} ${userName || "Misafir"}`;
}

// 3. Current Active Channel & Broadcast State
let currentChannel = localStorage.getItem("contexta_selected_channel") || "trt1";
let currentState = "program";

// 4. Populating the Top 20 Channel Selectors (Dropdown & Scrollable Chips)
function initChannelSelectors() {
    const dropdown = document.getElementById("channelDropdown");
    const chipsGrid = document.getElementById("channelChipsGrid");
    
    if (!dropdown || !chipsGrid) return;
    
    dropdown.innerHTML = "";
    chipsGrid.innerHTML = "";
    
    const channelKeys = Object.keys(channelDatabase);
    
    channelKeys.forEach((key, index) => {
        const ch = channelDatabase[key];
        
        // 1. Add to Dropdown
        const opt = document.createElement("option");
        opt.value = key;
        opt.innerText = `${index + 1}. ${ch.name} (${ch.genre})`;
        if (key === currentChannel) opt.selected = true;
        dropdown.appendChild(opt);
        
        // 2. Add to Chips Grid
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = `channel-chip-btn ${key === currentChannel ? 'active' : ''}`;
        chip.dataset.channel = key;
        chip.innerText = `${index + 1}. ${ch.name}`;
        
        chip.addEventListener("click", () => {
            selectChannel(key, currentState);
        });
        
        chipsGrid.appendChild(chip);
    });
    
    // Dropdown change listener
    dropdown.addEventListener("change", (e) => {
        selectChannel(e.target.value, currentState);
    });
}

function selectChannel(channelKey, stateKey = "program") {
    currentChannel = channelKey;
    currentState = stateKey;
    try {
        localStorage.setItem("contexta_selected_channel", channelKey);
    } catch (e) {}
    
    // Sync dropdown
    const dropdown = document.getElementById("channelDropdown");
    if (dropdown) dropdown.value = channelKey;
    
    // Sync chips
    document.querySelectorAll(".channel-chip-btn").forEach(btn => {
        if (btn.dataset.channel === channelKey) {
            btn.classList.add("active");
            // Auto scroll active chip into view smoothly
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            btn.classList.remove("active");
        }
    });
    
    showToast(`📺 Kanal Değiştirildi: ${channelDatabase[channelKey].name}`);
    renderCurrentChannel();
}

// 5. State Toggle Handlers (Program vs Reklam)
const btnStateProgram = document.getElementById("btnStateProgram");
const btnStateAd = document.getElementById("btnStateAd");

if (btnStateProgram && btnStateAd) {
    btnStateProgram.addEventListener("click", () => {
        currentState = "program";
        btnStateProgram.classList.add("active");
        btnStateAd.classList.remove("active");
        renderCurrentChannel();
        showToast("🎬 Program Akışına Geçildi");
    });
    
    btnStateAd.addEventListener("click", () => {
        currentState = "ad";
        btnStateAd.classList.add("active");
        btnStateProgram.classList.remove("active");
        renderCurrentChannel();
        showToast("📢 Reklam Kuşağına Geçildi");
    });
}

// Schedule Drawer Toggle Handler
const btnToggleSchedule = document.getElementById("btnToggleSchedule");
if (btnToggleSchedule) {
    btnToggleSchedule.addEventListener("click", () => {
        const drawer = document.getElementById("channelScheduleDrawer");
        if (drawer) {
            const isShown = drawer.style.display === "flex";
            drawer.style.display = isShown ? "none" : "flex";
            btnToggleSchedule.innerText = isShown ? "📋 Günün Akışı" : "✖ Kapat";
        }
    });
}

function renderScheduleDrawer(channelData) {
    const drawer = document.getElementById("channelScheduleDrawer");
    if (!drawer) return;

    const schedule = channelData.schedule || [
        { time: "09:00", title: "Sabah Kuşağı & Yaşam" },
        { time: "13:00", title: "Gündüz Kuşağı Programı" },
        { time: "19:00", title: `${channelData.name} Ana Haber (Canlı)` },
        { time: "20:00", title: channelData.program.title, current: true },
        { time: "23:45", title: "Gece Sineması / Tekrar" }
    ];

    drawer.innerHTML = `
        <div class="schedule-drawer-header">
            <span>📅 ${channelData.name.toUpperCase()} GÜNLÜK YAYIN AKIŞI</span>
            <span>İzlediğiniz Programa Dokunun</span>
        </div>
        ${schedule.map(item => `
            <button type="button" class="schedule-item-btn ${item.current ? 'current' : ''}" data-title="${item.title}">
                <div>
                    <span class="schedule-item-time">${item.time}</span>
                    <span>${item.title}</span>
                </div>
                ${item.current ? '<span>🟢 Canlı</span>' : '<span>Seç ❯</span>'}
            </button>
        `).join('')}
    `;

    drawer.querySelectorAll(".schedule-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const chosenTitle = btn.dataset.title;
            channelData.program.title = chosenTitle;
            if (channelData.schedule) {
                channelData.schedule.forEach(s => s.current = (s.title === chosenTitle));
            }
            channelData.program.teletext300 = `${channelData.name.toUpperCase()} S.300: CANLI YAYIN: ${chosenTitle.toUpperCase()}`;
            channelData.program.teletext888 = `ALTYAZI S.888: '${chosenTitle} canlı yayını devam ediyor...'`;
            showToast(`📺 Yayındaki Program Seçildi: ${chosenTitle}`);
            drawer.style.display = "none";
            if (btnToggleSchedule) btnToggleSchedule.innerText = "📋 Günün Akışı";
            renderCurrentChannel();
        });
    });
}

// 6. UI Rendering Engine: Renders EPG, Teletext Stream & Contextual Rewards
function renderCurrentChannel() {
    const channelData = channelDatabase[currentChannel];
    if (!channelData) return;
    
    const viewData = channelData[currentState];
    
    // 1. Channel Badge & Meta
    document.getElementById("channelBadge").innerText = channelData.name.toUpperCase();
    document.getElementById("broadcastTime").innerText = channelData.time;
    document.getElementById("broadcastGenre").innerText = channelData.genre;

    // Render Daily Schedule Drawer
    renderScheduleDrawer(channelData);
    
    // 2. Program Details
    document.getElementById("programTitle").innerText = viewData.title;
    document.getElementById("programDesc").innerText = viewData.desc;
    
    // 3. Live Teletext Streams (Simulated EPG Page 300 & Live Subtitle Page 888)
    const teletext300 = document.getElementById("teletext300Text");
    const teletext888 = document.getElementById("teletext888Text");
    
    if (teletext300) teletext300.innerText = viewData.teletext300 || channelData.program.teletext300;
    if (teletext888) teletext888.innerText = viewData.teletext888 || channelData.program.teletext888;
    
    // 4. State Toggles Sync
    if (btnStateProgram && btnStateAd) {
        if (currentState === "program") {
            btnStateProgram.classList.add("active");
            btnStateAd.classList.remove("active");
        } else {
            btnStateAd.classList.add("active");
            btnStateProgram.classList.remove("active");
        }
    }
    
    // 5. Dynamic Interactive Cards (Poll & Coupon based on teletext/EPG topic)
    const feed = document.getElementById("interactiveFeed");
    feed.innerHTML = "";
    
    // Case A: Poll Card (If available for this state)
    if (viewData.poll) {
        const poll = viewData.poll;
        const hasVoted = userProfile.completedPolls.includes(poll.id);
        
        const card = document.createElement("div");
        card.className = "poll-card";
        
        if (hasVoted) {
            card.innerHTML = `
                <span class="card-top-tag">📊 CANLI ANKET SONUÇLARI</span>
                <h4 class="card-headline">${poll.question}</h4>
                <div class="poll-results" style="margin-top: 6px;">
                    ${Object.entries(poll.results).map(([opt, pct]) => `
                        <div class="poll-result-bar">
                            <div class="result-labels">
                                <span>${opt}</span>
                                <strong>%${pct}</strong>
                            </div>
                            <div class="progress-bg">
                                <div class="progress-fill" style="width: ${pct}%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <span style="font-size: 0.72rem; color: #22c55e; font-weight: 700; margin-top: 4px;">✓ Oyunuz kaydedildi (+${poll.points} Puan eklendi)</span>
            `;
        } else {
            card.innerHTML = `
                <span class="card-top-tag">🗳️ CANLI TV ANKETİ (+${poll.points} PUAN)</span>
                <h4 class="card-headline">${poll.question}</h4>
                <div class="poll-options">
                    ${poll.options.map(opt => `
                        <button type="button" class="poll-btn" data-option="${opt}">${opt}</button>
                    `).join('')}
                </div>
            `;
            
            card.querySelectorAll(".poll-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const opt = btn.dataset.option;
                    userProfile.completedPolls.push(poll.id);
                    addPoints(poll.points, "Anket Katılımı");
                    renderCurrentChannel();
                });
            });
        }
        
        feed.appendChild(card);
    }
    
    // Case B: Ad Campaign / Coupon Card (If available for this state)
    if (viewData.campaign) {
        const camp = viewData.campaign;
        const isClaimed = userProfile.walletCoupons.some(c => c.code === camp.code);
        
        const card = document.createElement("div");
        card.className = "ad-card";
        
        card.innerHTML = `
            <span class="card-top-tag">🎁 ${camp.type}</span>
            <h4 class="card-headline">${camp.title}</h4>
            <p class="card-body-text">${camp.desc}</p>
            <button type="button" class="card-btn ${isClaimed ? 'claimed' : ''}">
                ${isClaimed ? '✓ Kupon Cüzdanınızda' : camp.actionText}
            </button>
        `;
        
        card.querySelector(".card-btn").addEventListener("click", () => {
            if (isClaimed) return;
            
            userProfile.walletCoupons.push({
                title: camp.title,
                code: camp.code,
                date: new Date().toLocaleDateString('tr-TR'),
                channel: channelData.name
            });
            
            addPoints(camp.points, "Kupon Kazanımı");
            renderCurrentChannel();
            renderWallet();
        });
        
        feed.appendChild(card);
    }
}

// 7. Wallet Screen Rendering
function renderWallet() {
    const list = document.getElementById("walletList");
    if (!list) return;
    
    const coupons = userProfile.walletCoupons || [];
    if (coupons.length === 0) {
        list.innerHTML = `<div class="wallet-empty">Henüz cüzdanınızda kupon yok.<br>TV kanallarını gezerken gelen kuponları cüzdanınıza ekleyebilirsiniz.</div>`;
        return;
    }
    
    list.innerHTML = coupons.map(c => `
        <div class="wallet-item">
            <div class="wallet-info">
                <h4>${c.title}</h4>
                <span style="font-size: 0.7rem; color: #64748b;">${c.channel ? c.channel + ' • ' : ''}${c.date}</span>
            </div>
            <div class="wallet-code">${c.code}</div>
        </div>
    `).join('');
}

// 8. Tab Navigation (Yukarı Taşınan Sekmeler & Yetkili Koruması)
let pendingProtectedTab = null;

function switchToTab(targetTab) {
    const btn = document.querySelector(`.nav-btn[data-tab="${targetTab}"]`);
    if (!btn) return;

    // Korumalı sekme kontrolü: Şifre ile giriş yapmayanlar sadece ana ekranı (tabHome) görebilir!
    if (btn.dataset.protected === "true" && !isAuthenticated()) {
        pendingProtectedTab = targetTab;
        const tabLabel = btn.querySelector(".nav-label") ? btn.querySelector(".nav-label").innerText : "Özel Bölüm";
        openLoginModal(true, "Yetkili Girişi Gerekli", `🔒 <strong>${tabLabel}</strong> bölümüne erişmek için lütfen yetkili şifrenizle giriş yapınız.<br><small style="color:#94a3b8;">(Misafirler yalnızca Canlı TV ana ekranını izleyebilir)</small>`);
        showToast(`🔒 ${tabLabel} için yetkili girişi gereklidir.`);
        return;
    }

    document.querySelectorAll(".app-nav-bar .nav-btn, .top-nav-bar .nav-btn, .bottom-nav .nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
    
    const activePane = document.getElementById(targetTab);
    if (activePane) activePane.classList.add("active");
    
    if (targetTab === "tabWallet") {
        renderWallet();
    } else if (targetTab === "tabLeaderboard") {
        renderLeaderboard();
    } else if (targetTab === "tabChat") {
        const badge = btn.querySelector(".nav-badge");
        if (badge) badge.style.display = "none";
        renderChatHistory();
    } else if (targetTab === "tabPitch") {
        const body = document.querySelector(".app-body");
        if (body) body.scrollTop = 0;
    } else if (targetTab === "tabStats") {
        const body = document.querySelector(".app-body");
        if (body) body.scrollTop = 0;
        renderStatsTable();
    } else if (targetTab === "tabPatent") {
        const body = document.querySelector(".app-body");
        if (body) body.scrollTop = 0;
    }
}

document.querySelectorAll(".app-nav-bar .nav-btn, .top-nav-bar .nav-btn, .bottom-nav .nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        switchToTab(btn.dataset.tab);
    });
});

// Pitch Deck Chapter Smooth Navigation
document.querySelectorAll(".pitch-pill-btn").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelectorAll(".pitch-pill-btn").forEach(p => p.classList.remove("active"));
        link.classList.add("active");
        
        const targetId = link.getAttribute("href").replace("#", "");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Eye Comfort Reading Theme Switcher (Sıcak Kağıt, Duman Gri, Sakin Koyu)
const themePillBtns = document.querySelectorAll(".theme-pill-btn");
const tabPitchEl = document.getElementById("tabPitch");

function applyPitchTheme(themeName) {
    if (!tabPitchEl) return;
    tabPitchEl.classList.remove("theme-paper", "theme-slate", "theme-dark");
    if (themeName !== "paper") {
        tabPitchEl.classList.add(`theme-${themeName}`);
    }
    themePillBtns.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-pitch-theme") === themeName);
    });
    try {
        localStorage.setItem("contexta_pitch_theme", themeName);
    } catch (e) {}
}

themePillBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const theme = btn.getAttribute("data-pitch-theme") || "paper";
        applyPitchTheme(theme);
        showToast(`👁️ Okuma Modu: ${btn.textContent.trim()}`);
    });
});

// Load saved pitch theme if any (default is paper)
try {
    const savedTheme = localStorage.getItem("contexta_pitch_theme") || "paper";
    applyPitchTheme(savedTheme);
} catch (e) {}

// PDF Download Engine for Investor Pitch Deck
const btnDownloadPitchPdf = document.getElementById("btnDownloadPitchPdf");
if (btnDownloadPitchPdf) {
    btnDownloadPitchPdf.addEventListener("click", () => {
        showToast("📄 PDF hazırlanıyor, lütfen bekleyin...");
        
        const originalText = btnDownloadPitchPdf.innerHTML;
        btnDownloadPitchPdf.disabled = true;
        btnDownloadPitchPdf.innerHTML = `
            <span class="btn-pdf-icon">⏳</span>
            <div class="btn-pdf-text">
                <strong>PDF Oluşturuluyor...</strong>
                <span>Birkaç saniye sürebilir</span>
            </div>
        `;

        const pitchElement = document.getElementById("tabPitch");

        if (typeof html2pdf !== "undefined" && pitchElement) {
            // Hide the download button, theme bar & nav pills during capture so they aren't in the PDF
            const actionRow = document.querySelector(".pitch-action-row");
            const themeBar = document.querySelector(".pitch-theme-bar");
            const navPills = document.querySelector(".pitch-nav-pills");
            if (actionRow) actionRow.style.display = "none";
            if (themeBar) themeBar.style.display = "none";
            if (navPills) navPills.style.display = "none";

            const computedBg = getComputedStyle(pitchElement).getPropertyValue('--p-bg').trim() || '#f5f2eb';

            const opt = {
                margin: [10, 8, 10, 8],
                filename: 'Contexta_TV_Melek_Yatirimci_Fizibilite_Sunumu.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2, 
                    useCORS: true, 
                    backgroundColor: computedBg,
                    scrollY: 0
                },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak: { mode: ['css', 'legacy'] }
            };

            html2pdf().set(opt).from(pitchElement).save()
                .then(() => {
                    showToast("✓ PDF başarıyla indirildi!");
                })
                .catch(() => {
                    // Fallback to native print
                    window.print();
                })
                .finally(() => {
                    if (actionRow) actionRow.style.display = "flex";
                    if (themeBar) themeBar.style.display = "flex";
                    if (navPills) navPills.style.display = "flex";
                    btnDownloadPitchPdf.disabled = false;
                    btnDownloadPitchPdf.innerHTML = originalText;
                });
        } else {
            // Native print fallback
            setTimeout(() => {
                window.print();
                btnDownloadPitchPdf.disabled = false;
                btnDownloadPitchPdf.innerHTML = originalText;
            }, 300);
        }
    });
}

// 9. Optional Speech Recognition Engine (Mic for voice channel match)
let recognition = null;
let isListening = false;
let restartTimer = null;

const btnListen = document.getElementById("btnListen");
const speechBox = document.getElementById("speechBox");
const liveTranscript = document.getElementById("liveTranscript");
const matchStatus = document.getElementById("matchStatus");
const matchText = document.getElementById("matchText");

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert("Tarayıcınız ses tanımayı desteklemiyor. Lütfen Safari (iOS) veya Chrome kullanın.");
        return null;
    }
    
    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = true;
    rec.lang = "tr-TR";
    rec.maxAlternatives = 1;

    rec.onstart = () => {
        isListening = true;
        btnListen.classList.add("listening");
        btnListen.innerText = "🛑 Durdur";
        if (speechBox) speechBox.style.display = "block";
        if (matchStatus) {
            matchStatus.className = "match-status-bar";
            matchText.innerText = "TV sesinden kanal ipuçları taranıyor...";
        }
    };

    rec.onresult = (event) => {
        let transcript = "";
        for (let i = 0; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }
        
        if (transcript) {
            liveTranscript.innerText = `"${transcript}"`;
            checkKeywords(transcript);
        }
    };

    rec.onerror = (event) => {
        console.warn("Speech error:", event.error);
        if (event.error === "not-allowed") {
            isListening = false;
            btnListen.classList.remove("listening");
            btnListen.innerText = "🎙️ Dinle";
            alert("Mikrofon izni verilmedi. TV'yi dinlemek için lütfen izin verin.");
        }
    };

    rec.onend = () => {
        if (isListening) {
            clearTimeout(restartTimer);
            restartTimer = setTimeout(() => {
                try {
                    if (isListening) rec.start();
                } catch (e) {}
            }, 300);
        } else {
            btnListen.classList.remove("listening");
            btnListen.innerText = "🎙️ Dinle";
        }
    };

    return rec;
}

if (btnListen) {
    btnListen.addEventListener("click", () => {
        if (!recognition) {
            recognition = initSpeechRecognition();
        }
        if (!recognition) return;
        
        if (isListening) {
            isListening = false;
            try { recognition.stop(); } catch (e) {}
            btnListen.classList.remove("listening");
            btnListen.innerText = "🎙️ Dinle";
        } else {
            if (speechBox) speechBox.style.display = "block";
            liveTranscript.innerText = "Ses dinleniyor, lütfen TV sesini dinletin...";
            try {
                recognition.start();
            } catch (err) {
                try { recognition.stop(); recognition.start(); } catch (e) {}
            }
        }
    });
}

function normalizeTurkish(str) {
    return str
        .toLowerCase()
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/[^a-z0-9\s]/g, ' ')
        .trim();
}

function checkKeywords(rawText) {
    const text = normalizeTurkish(rawText);
    
    // Direct matches for channels and current programs
    if (text.includes("trt 1") || text.includes("trt") || text.includes("mehmed") || text.includes("fetihler") || text.includes("fatih") || text.includes("zaganos") || text.includes("teskilat")) selectChannel("trt1", "program");
    else if (text.includes("show tv") || text.includes("korkusuz korkak") || text.includes("mülayim") || text.includes("bahar") || text.includes("kizilcik")) selectChannel("showtv", "program");
    else if (text.includes("tv 8") || text.includes("tv8") || text.includes("masterchef")) selectChannel("tv8", "program");
    else if (text.includes("atv") || text.includes("a te ve") || text.includes("bir gece masali") || text.includes("muge anli") || text.includes("kurulus osman")) selectChannel("atv", "program");
    else if (text.includes("kanal d") || text.includes("uzak sehir") || text.includes("haysiyet") || text.includes("inci taneleri")) selectChannel("kanald", "program");
    else if (text.includes("now") || text.includes("fox") || text.includes("anne yarisi") || text.includes("kizil goncalar")) selectChannel("now", "program");
    else if (text.includes("star") || text.includes("tuzlu kahve") || text.includes("sahipsizler") || text.includes("yali capkini")) selectChannel("startv", "program");
    else if (text.includes("haber turk") || text.includes("haberturk")) selectChannel("haberturk", "program");
    else if (text.includes("cnn") || text.includes("akil cemberi")) selectChannel("cnnturk", "program");
    else if (text.includes("ntv")) selectChannel("ntv", "program");
    else if (text.includes("sozcu")) selectChannel("sozcutv", "program");
    else if (text.includes("halk tv")) selectChannel("halktv", "program");
    else if (text.includes("tlc") || text.includes("agir yasamlar")) selectChannel("tlc", "program");
    else if (text.includes("dmax") || text.includes("hurda avcilari")) selectChannel("dmax", "program");
}

// ====================================================
// ====================================================
// 10. REAL-TIME PERSISTENT CHAT & ONLINE PRESENCE (NTFY)
// ====================================================

// Real-Time Cloud Endpoints
const NTFY_CHAT_URL = "https://ntfy.sh/ctx_tv_chat_room_85e";
const NTFY_PRESENCE_URL = "https://ntfy.sh/ctx_tv_presence_85e";

let chatHistory = [];

try {
    const localSaved = localStorage.getItem("contexta_chat_history_v4");
    if (localSaved) {
        chatHistory = JSON.parse(localSaved);
        renderChatHistory();
    }
} catch (e) {}

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        // If not logged in yet, prompt login modal
        if (!isLoggedIn || !userName) {
            openLoginModal(false);
            return;
        }
        
        const newMsg = {
            id: Date.now() + "_" + Math.random().toString(36).substring(2, 7),
            clientId: clientId,
            sender: userName,
            avatar: userAvatar,
            text: text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            timestamp: Date.now()
        };
        
        chatHistory.push(newMsg);
        saveChatLocally();
        renderChatHistory();
        chatInput.value = "";
        
        broadcastChatMessage(newMsg);
    });
}

function saveChatLocally() {
    try {
        localStorage.setItem("contexta_chat_history_v4", JSON.stringify(chatHistory.slice(-60)));
    } catch (e) {}
}

function renderChatHistory() {
    if (!chatMessages) return;
    
    if (chatHistory.length === 0) {
        chatMessages.innerHTML = `<div class="chat-empty">İlk mesajı yazan siz olun!</div>`;
        return;
    }
    
    chatMessages.innerHTML = chatHistory.map(msg => {
        const isMine = msg.clientId === clientId;
        const avatar = msg.avatar || "👤";
        return `
            <div class="chat-bubble ${isMine ? 'mine' : 'other'}">
                <span class="chat-sender">${avatar} ${isMine ? 'Siz (' + msg.sender + ')' : msg.sender}</span>
                <span>${msg.text}</span>
                <span class="chat-time">${msg.time}</span>
            </div>
        `;
    }).join('');
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function broadcastChatMessage(msg) {
    fetch(NTFY_CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain; charset=utf-8" },
        body: JSON.stringify(msg)
    }).catch(err => console.warn("Chat broadcast error:", err));
}

let chatEventSource = null;

function initRealtimeChat() {
    // 1. Catchup from last 24h
    fetch(`${NTFY_CHAT_URL}/json?poll=1&since=24h`)
        .then(res => res.text())
        .then(text => {
            if (!text) return;
            const lines = text.trim().split("\n");
            let hasNew = false;
            lines.forEach(line => {
                try {
                    const item = JSON.parse(line);
                    if (item.event === "message" && item.message) {
                        const parsedMsg = JSON.parse(item.message);
                        if (!chatHistory.some(m => m.id === parsedMsg.id)) {
                            chatHistory.push(parsedMsg);
                            hasNew = true;
                        }
                    }
                } catch (e) {}
            });
            if (hasNew) {
                chatHistory.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
                saveChatLocally();
                renderChatHistory();
            }
        })
        .catch(() => {});

    // 2. Real-time SSE
    try {
        if (chatEventSource) chatEventSource.close();
        chatEventSource = new EventSource(`${NTFY_CHAT_URL}/sse`);

        chatEventSource.onopen = () => {
            const statusEl = document.getElementById("chatSyncStatus");
            if (statusEl) statusEl.innerHTML = '<span class="sync-dot live"></span> Canlı Sohbet Bağlı';
        };

        chatEventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.event === "message" && data.message) {
                    const parsedMsg = JSON.parse(data.message);
                    if (!chatHistory.some(m => m.id === parsedMsg.id)) {
                        chatHistory.push(parsedMsg);
                        saveChatLocally();
                        renderChatHistory();

                        if (parsedMsg.clientId !== clientId) {
                            notifyIncomingMessage(parsedMsg);
                        }
                    }
                }
            } catch (err) {}
        };

        chatEventSource.onerror = () => {
            const statusEl = document.getElementById("chatSyncStatus");
            if (statusEl) statusEl.innerHTML = '<span class="sync-dot warning"></span> Bağlantı yenileniyor...';
        };
    } catch (e) {}
}

function notifyIncomingMessage(msg) {
    const chatTab = document.getElementById("tabChat");
    if (chatTab && !chatTab.classList.contains("active")) {
        const chatNavBtn = document.querySelector('.nav-btn[data-tab="tabChat"]');
        if (chatNavBtn) {
            let badge = chatNavBtn.querySelector(".nav-badge");
            if (!badge) {
                badge = document.createElement("span");
                badge.className = "nav-badge";
                chatNavBtn.appendChild(badge);
            }
            badge.style.display = "block";
        }
        showToast(`💬 ${msg.sender}: "${msg.text.substring(0, 30)}${msg.text.length > 30 ? '...' : ''}"`);
    }
}

// ====================================================
// 11. PRESENCE ENGINE & CANLI ARKADAŞ PUAN SIRALAMASI
// ====================================================
let activePeers = {};
let leaderboardPeers = {};

try {
    const savedLb = localStorage.getItem("contexta_leaderboard_v1");
    if (savedLb) leaderboardPeers = JSON.parse(savedLb);
} catch (e) {}

function initPresence() {
    try {
        const presenceSource = new EventSource(`${NTFY_PRESENCE_URL}/sse`);
        presenceSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.event === "message" && data.message) {
                    const peer = JSON.parse(data.message);
                    if (peer.clientId) {
                        activePeers[peer.clientId] = Date.now();
                        refreshPresenceCount();

                        // Live friend score update
                        if (peer.sender && peer.points !== undefined) {
                            leaderboardPeers[peer.clientId] = {
                                name: peer.sender,
                                avatar: peer.avatar || "👤",
                                points: peer.points || 0,
                                lastSeen: Date.now()
                            };
                            try {
                                localStorage.setItem("contexta_leaderboard_v1", JSON.stringify(leaderboardPeers));
                            } catch (e) {}
                            renderLeaderboard();
                        }
                    }
                }
            } catch (e) {}
        };
    } catch (e) {}

    sendPresenceHeartbeat();
    setInterval(sendPresenceHeartbeat, 8000);
    setInterval(refreshPresenceCount, 4000);
}

function sendPresenceHeartbeat() {
    activePeers[clientId] = Date.now();
    refreshPresenceCount();

    fetch(NTFY_PRESENCE_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
            clientId,
            sender: userName || "İzleyici",
            avatar: userAvatar || "🦁",
            points: userProfile.points || 0,
            timestamp: Date.now()
        })
    }).catch(() => {});
}

function refreshPresenceCount() {
    const now = Date.now();
    let count = 0;
    Object.keys(activePeers).forEach(id => {
        if (now - activePeers[id] < 22000) {
            count++;
        } else {
            delete activePeers[id];
        }
    });

    if (count < 1) count = 1;
    const userPill = document.getElementById("activeUserCount");
    if (userPill) userPill.innerText = `${count} Canlı`;
}

// 12. LEADERBOARD RENDERING ENGINE
function renderLeaderboard() {
    const list = document.getElementById("leaderboardList");
    const myScoreName = document.getElementById("myScoreName");
    const myScoreAvatar = document.getElementById("myScoreAvatar");
    const myScorePoints = document.getElementById("myScorePoints");
    const myScoreLevel = document.getElementById("myScoreLevel");
    const myScoreProgress = document.getElementById("myScoreProgress");
    const nextLevelLabel = document.getElementById("nextLevelLabel");
    const pointsToNextLabel = document.getElementById("pointsToNextLabel");
    const myScoreRankBadge = document.getElementById("myScoreRankBadge");

    const pts = userProfile.points || 0;

    // Update Personal Scorecard
    if (myScoreName) myScoreName.innerText = userName || "İzleyici";
    if (myScoreAvatar) myScoreAvatar.innerText = userAvatar || "🦁";
    if (myScorePoints) myScorePoints.innerText = pts;

    // Calculate level
    let levelName = "Seviye 1 • TV Çaylağı";
    let nextThreshold = 100;
    let prevThreshold = 0;

    if (pts >= 300) {
        levelName = "Seviye 4 • TV Efsanesi 👑";
        nextThreshold = 500;
        prevThreshold = 300;
    } else if (pts >= 200) {
        levelName = "Seviye 3 • TV Gurmesi 🌟";
        nextThreshold = 300;
        prevThreshold = 200;
    } else if (pts >= 100) {
        levelName = "Seviye 2 • TV Kaşifi 🚀";
        nextThreshold = 200;
        prevThreshold = 100;
    }

    if (myScoreLevel) myScoreLevel.innerText = levelName;
    if (nextLevelLabel) nextLevelLabel.innerText = `Sonraki Seviye: ${nextThreshold} P`;

    const remaining = Math.max(0, nextThreshold - pts);
    if (pointsToNextLabel) pointsToNextLabel.innerText = `${remaining} P kaldı`;

    const progressPct = Math.min(100, Math.max(10, ((pts - prevThreshold) / (nextThreshold - prevThreshold)) * 100));
    if (myScoreProgress) myScoreProgress.style.width = `${progressPct}%`;

    // Build complete leaderboard array
    const allUsers = [];

    // Current user
    allUsers.push({
        id: clientId,
        name: userName || "Siz",
        avatar: userAvatar || "🦁",
        points: pts,
        isMe: true,
        isOnline: true,
        lastSeen: Date.now()
    });

    // Peers from network
    const now = Date.now();
    Object.keys(leaderboardPeers).forEach(id => {
        if (id !== clientId) {
            const peer = leaderboardPeers[id];
            const isOnline = (now - (peer.lastSeen || 0)) < 30000;
            allUsers.push({
                id: id,
                name: peer.name || "Arkadaş",
                avatar: peer.avatar || "👤",
                points: peer.points || 0,
                isMe: false,
                isOnline: isOnline,
                lastSeen: peer.lastSeen
            });
        }
    });

    // Sort descending by points
    allUsers.sort((a, b) => (b.points || 0) - (a.points || 0));

    // Find my rank
    const myIndex = allUsers.findIndex(u => u.isMe);
    if (myScoreRankBadge) {
        myScoreRankBadge.innerText = `#${myIndex + 1} Sırada`;
    }

    // Render list HTML
    if (list) {
        if (allUsers.length === 1) {
            list.innerHTML = `
                <div class="leaderboard-item me">
                    <div class="item-left">
                        <span class="item-rank rank-1">🥇 1</span>
                        <span class="item-avatar">${userAvatar}</span>
                        <div class="item-name-wrap">
                            <span class="item-name">${userName || "Siz"} <small>(Siz)</small></span>
                            <span class="item-status online">🟢 Çevrimiçi</span>
                        </div>
                    </div>
                    <span class="item-points">${pts} P</span>
                </div>
                <div class="leaderboard-empty-hint">
                    👥 <strong>Arkadaşlarınızla Yarışın:</strong><br>
                    Bu sitenin linkini arkadaşlarınıza gönderin. Onlar da kendi rumuzlarıyla girdiklerinde puanları burada canlı sıralanacak!
                </div>
            `;
        } else {
            list.innerHTML = allUsers.map((u, idx) => {
                let rankClass = "";
                let medal = `${idx + 1}`;
                if (idx === 0) { rankClass = "rank-1"; medal = "🥇 1"; }
                else if (idx === 1) { rankClass = "rank-2"; medal = "🥈 2"; }
                else if (idx === 2) { rankClass = "rank-3"; medal = "🥉 3"; }

                return `
                    <div class="leaderboard-item ${u.isMe ? 'me' : ''}">
                        <div class="item-left">
                            <span class="item-rank ${rankClass}">${medal}</span>
                            <span class="item-avatar">${u.avatar || '👤'}</span>
                            <div class="item-name-wrap">
                                <span class="item-name">${u.name}${u.isMe ? ' <small>(Siz)</small>' : ''}</span>
                                <span class="item-status ${u.isOnline ? 'online' : ''}">
                                    ${u.isOnline ? '🟢 Çevrimiçi' : '⚪ Son Görülme'}
                                </span>
                            </div>
                        </div>
                        <span class="item-points">${u.points} P</span>
                    </div>
                `;
            }).join('');
        }
    }
}

// ====================================================
// 13. AUTHENTICATION & LOGIN GATE ENGINE (alim & mustafa)
// ====================================================
function openLoginModal(canClose = true, customTitle = null, customDesc = null) {
    const modal = document.getElementById("loginModal");
    const closeBtn = document.getElementById("btnCloseLoginModal");
    const usernameInput = document.getElementById("loginUsername");
    const passwordInput = document.getElementById("loginPassword");
    const errorMsg = document.getElementById("loginErrorMsg");
    const titleEl = document.getElementById("loginModalTitle");
    const descEl = document.getElementById("loginModalDesc");
    
    if (!modal) return;
    
    if (errorMsg) {
        errorMsg.style.display = "none";
        errorMsg.innerHTML = "";
    }

    if (titleEl) {
        titleEl.innerText = customTitle || "Yetkili Kullanıcı Girişi";
    }

    if (descEl) {
        if (customDesc) {
            descEl.innerHTML = customDesc;
        } else {
            descEl.innerText = "Contexta TV kapalı devre test ortamı. Özel bölümlere (Cüzdan, Sıralama, Sohbet, Sunum, İstatistik, Patent) erişmek için giriş yapınız.";
        }
    }

    if (usernameInput) {
        usernameInput.value = authUser ? authUser.username : (localStorage.getItem("contexta_last_auth_user") || "");
    }
    
    if (passwordInput) {
        passwordInput.value = "";
    }

    if (closeBtn) {
        closeBtn.style.display = canClose ? "block" : "none";
    }

    modal.style.display = "flex";

    setTimeout(() => {
        if (usernameInput && !usernameInput.value) {
            usernameInput.focus();
        } else if (passwordInput) {
            passwordInput.focus();
        }
    }, 120);
}

function closeLoginModal() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "none";

    // Giriş yapılmadıysa her zaman tabHome'da kalması zorunludur!
    if (!isAuthenticated()) {
        pendingProtectedTab = null;
        document.querySelectorAll(".app-nav-bar .nav-btn, .top-nav-bar .nav-btn, .bottom-nav .nav-btn").forEach(b => b.classList.remove("active"));
        const homeBtn = document.querySelector('.nav-btn[data-tab="tabHome"]');
        if (homeBtn) homeBtn.classList.add("active");
        
        document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
        const homePane = document.getElementById("tabHome");
        if (homePane) homePane.classList.add("active");
    }
}

function logoutUser() {
    authUser = null;
    isLoggedIn = false;
    userName = "Misafir";
    userAvatar = "👤";
    localStorage.removeItem("contexta_auth_user");
    localStorage.removeItem("contexta_logged_in");
    document.body.classList.remove("is-authenticated");

    switchToTab("tabHome");
    updatePointsUI();
    renderLeaderboard();
    showToast("🔒 Oturum kapatıldı. Yalnızca ana ekran (Canlı TV) görüntülenebilir.");
}

function initLoginOnboarding() {
    // Quick user selection chips (alim / mustafa)
    document.querySelectorAll(".btn-quick-user").forEach(btn => {
        btn.addEventListener("click", () => {
            const userKey = btn.dataset.user;
            const usernameInput = document.getElementById("loginUsername");
            const passwordInput = document.getElementById("loginPassword");
            const errorMsg = document.getElementById("loginErrorMsg");

            if (errorMsg) errorMsg.style.display = "none";
            if (usernameInput) usernameInput.value = userKey;
            if (passwordInput) {
                passwordInput.value = "";
                passwordInput.focus();
            }
        });
    });

    // Form submit
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const usernameInput = document.getElementById("loginUsername");
            const passwordInput = document.getElementById("loginPassword");
            const errorMsg = document.getElementById("loginErrorMsg");

            const rawUser = usernameInput ? usernameInput.value.trim().toLowerCase() : "";
            const rawPass = passwordInput ? passwordInput.value.trim() : "";

            if (!rawUser || !rawPass) {
                if (errorMsg) {
                    errorMsg.innerText = "Lütfen kullanıcı adı ve şifrenizi giriniz.";
                    errorMsg.style.display = "block";
                }
                return;
            }

            const targetUser = AUTH_USERS[rawUser];
            if (targetUser && targetUser.password === rawPass) {
                // Başarılı Giriş!
                authUser = targetUser;
                userName = authUser.displayName;
                userAvatar = authUser.avatar;
                isLoggedIn = true;

                localStorage.setItem("contexta_auth_user", JSON.stringify(authUser));
                localStorage.setItem("contexta_last_auth_user", authUser.username);
                localStorage.setItem("contexta_username", userName);
                localStorage.setItem("contexta_avatar", userAvatar);
                localStorage.setItem("contexta_logged_in", "true");

                if (!userProfile.points || userProfile.points < 50) {
                    userProfile.points = 50;
                }

                document.body.classList.add("is-authenticated");
                saveProfile();
                closeLoginModal();
                updatePointsUI();
                renderLeaderboard();

                showToast(`🎉 Hoş geldin ${authUser.displayName}! Tüm bölümler kullanıma açıldı.`);

                if (pendingProtectedTab) {
                    const nextTab = pendingProtectedTab;
                    pendingProtectedTab = null;
                    switchToTab(nextTab);
                }
            } else {
                // Hatalı Bilgi
                if (errorMsg) {
                    errorMsg.innerHTML = "❌ Hatalı kullanıcı adı veya şifre!<br><small style='color:#94a3b8;'>Lütfen kurucu hesap bilgilerinizi kontrol ediniz.</small>";
                    errorMsg.style.display = "block";
                }
                if (passwordInput) {
                    passwordInput.value = "";
                    passwordInput.focus();
                }
            }
        });
    }

    // Close button ("Misafir Olarak Ana Ekrana Dön")
    const closeBtn = document.getElementById("btnCloseLoginModal");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            closeLoginModal();
            showToast("📺 Misafir modu: Yalnızca Canlı TV ana ekranını izleyebilirsiniz.");
        });
    }

    // Header chip click
    const userHeaderChip = document.getElementById("userHeaderChip");
    if (userHeaderChip) {
        userHeaderChip.addEventListener("click", () => {
            if (isAuthenticated()) {
                const doLogout = confirm(`👤 Oturum Açık: ${authUser.displayName} (${authUser.role})\n\nOturumu kapatıp misafir moduna geçmek istiyor musunuz?`);
                if (doLogout) {
                    logoutUser();
                }
            } else {
                openLoginModal(true);
            }
        });
    }

    // Initial check on load
    if (isAuthenticated()) {
        document.body.classList.add("is-authenticated");
    } else {
        document.body.classList.remove("is-authenticated");
        switchToTab("tabHome");
    }
}

// Toast helper
let toastTimer = null;
function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// ====================================================
// 10. GLOBAL TV & ADVERTISING STATISTICS (50 ÜLKE VERİTABANI)
// ====================================================
const globalTvStats = [
    { rank: 1, name: "Türkiye", flag: "🇹🇷", continent: "Avrupa", national: 38, regional: 220, viewMinutes: 264, viewDisplay: "4 sa 24 dk", adLimitDisplay: "12 dk (%20 RTÜK)", breakDuration: "5.5 dk", market: "35 Mr ₺ ($1.1B)", highlight: true },
    { rank: 2, name: "ABD", flag: "🇺🇸", continent: "Amerika", national: 135, regional: 1750, viewMinutes: 234, viewDisplay: "3 sa 54 dk", adLimitDisplay: "16-18 dk (FCC Serbest)", breakDuration: "3.8 dk", market: "$65.0 Mr", highlight: false },
    { rank: 3, name: "Brezilya", flag: "🇧🇷", continent: "Amerika", national: 42, regional: 380, viewMinutes: 244, viewDisplay: "4 sa 04 dk", adLimitDisplay: "15 dk (Yasal %25)", breakDuration: "4.2 dk", market: "$3.8 Mr", highlight: false },
    { rank: 4, name: "Birleşik Krallık", flag: "🇬🇧", continent: "Avrupa", national: 58, regional: 110, viewMinutes: 234, viewDisplay: "3 sa 54 dk", adLimitDisplay: "12 dk (Ofcom max)", breakDuration: "3.5 dk", market: "$6.2 Mr", highlight: false },
    { rank: 5, name: "İtalya", flag: "🇮🇹", continent: "Avrupa", national: 44, regional: 240, viewMinutes: 232, viewDisplay: "3 sa 52 dk", adLimitDisplay: "12 dk (AVMSD %20)", breakDuration: "4.8 dk", market: "$3.6 Mr", highlight: false },
    { rank: 6, name: "Romanya", flag: "🇷🇴", continent: "Avrupa", national: 26, regional: 110, viewMinutes: 250, viewDisplay: "4 sa 10 dk", adLimitDisplay: "12 dk (AVMSD %20)", breakDuration: "5.0 dk", market: "$0.5 Mr", highlight: false },
    { rank: 7, name: "Polonya", flag: "🇵🇱", continent: "Avrupa", national: 35, regional: 120, viewMinutes: 230, viewDisplay: "3 sa 50 dk", adLimitDisplay: "12 dk (AVMSD %20)", breakDuration: "4.8 dk", market: "$1.3 Mr", highlight: false },
    { rank: 8, name: "Rusya", flag: "🇷🇺", continent: "Avrupa", national: 55, regional: 420, viewMinutes: 228, viewDisplay: "3 sa 48 dk", adLimitDisplay: "12 dk (FAS Kanunu)", breakDuration: "4.5 dk", market: "$2.4 Mr", highlight: false },
    { rank: 9, name: "Macaristan", flag: "🇭🇺", continent: "Avrupa", national: 22, regional: 60, viewMinutes: 225, viewDisplay: "3 sa 45 dk", adLimitDisplay: "12 dk (AVMSD %20)", breakDuration: "4.6 dk", market: "$0.4 Mr", highlight: false },
    { rank: 10, name: "Şili", flag: "🇨🇱", continent: "Amerika", national: 16, regional: 70, viewMinutes: 223, viewDisplay: "3 sa 43 dk", adLimitDisplay: "12 dk (CNTV)", breakDuration: "4.2 dk", market: "$0.5 Mr", highlight: false },
    { rank: 11, name: "Mısır", flag: "🇪🇬", continent: "Ortadogu-Afrika", national: 34, regional: 85, viewMinutes: 220, viewDisplay: "3 sa 40 dk", adLimitDisplay: "14 dk (SCMR)", breakDuration: "5.0 dk", market: "$0.6 Mr", highlight: false },
    { rank: 12, name: "Japonya", flag: "🇯🇵", continent: "Asya", national: 30, regional: 125, viewMinutes: 220, viewDisplay: "3 sa 40 dk", adLimitDisplay: "10.8 dk (%18)", breakDuration: "2.5 dk", market: "$12.5 Mr", highlight: false },
    { rank: 13, name: "Portekiz", flag: "🇵🇹", continent: "Avrupa", national: 14, regional: 65, viewMinutes: 215, viewDisplay: "3 sa 35 dk", adLimitDisplay: "12 dk (AVMSD %20)", breakDuration: "4.5 dk", market: "$0.4 Mr", highlight: false },
    { rank: 14, name: "Arjantin", flag: "🇦🇷", continent: "Amerika", national: 22, regional: 160, viewMinutes: 215, viewDisplay: "3 sa 35 dk", adLimitDisplay: "12 dk (ENACOM)", breakDuration: "4.2 dk", market: "$0.8 Mr", highlight: false },
    { rank: 15, name: "Almanya", flag: "🇩🇪", continent: "Avrupa", national: 46, regional: 190, viewMinutes: 210, viewDisplay: "3 sa 30 dk", adLimitDisplay: "12 dk (AVMSD %20)", breakDuration: "4.0 dk", market: "$4.9 Mr", highlight: false },
    { rank: 16, name: "Endonezya", flag: "🇮🇩", continent: "Asya", national: 38, regional: 210, viewMinutes: 210, viewDisplay: "3 sa 30 dk", adLimitDisplay: "12 dk (KPI)", breakDuration: "4.0 dk", market: "$1.8 Mr", highlight: false },
    { rank: 17, name: "Filipinler", flag: "🇵🇭", continent: "Asya", national: 24, regional: 90, viewMinutes: 210, viewDisplay: "3 sa 30 dk", adLimitDisplay: "18 dk (KBP)", breakDuration: "4.5 dk", market: "$1.1 Mr", highlight: false },
    { rank: 18, name: "İspanya", flag: "🇪🇸", continent: "Avrupa", national: 32, regional: 210, viewMinutes: 208, viewDisplay: "3 sa 28 dk", adLimitDisplay: "12 dk (AVMSD %20)", breakDuration: "5.0 dk", market: "$2.1 Mr", highlight: false },
    { rank: 19, name: "Fransa", flag: "🇫🇷", continent: "Avrupa", national: 36, regional: 140, viewMinutes: 206, viewDisplay: "3 sa 26 dk", adLimitDisplay: "12 dk (AVMSD %20)", breakDuration: "4.2 dk", market: "$3.9 Mr", highlight: false },
    { rank: 20, name: "Hindistan", flag: "🇮🇳", continent: "Asya", national: 240, regional: 650, viewMinutes: 202, viewDisplay: "3 sa 22 dk", adLimitDisplay: "12 dk (TRAI)", breakDuration: "3.0 dk", market: "$4.5 Mr", highlight: false },
    { rank: 21, name: "Yunanistan", flag: "🇬🇷", continent: "Avrupa", national: 18, regional: 90, viewMinutes: 235, viewDisplay: "3 sa 55 dk", adLimitDisplay: "12 dk (AVMSD %20)", breakDuration: "5.2 dk", market: "$0.5 Mr", highlight: false },
    { rank: 22, name: "Kolombiya", flag: "🇨🇴", continent: "Amerika", national: 18, regional: 95, viewMinutes: 200, viewDisplay: "3 sa 20 dk", adLimitDisplay: "12 dk (CRC)", breakDuration: "4.0 dk", market: "$0.6 Mr", highlight: false },
    { rank: 23, name: "Ukrayna", flag: "🇺🇦", continent: "Avrupa", national: 28, regional: 140, viewMinutes: 200, viewDisplay: "3 sa 20 dk", adLimitDisplay: "12 dk (NRA)", breakDuration: "4.5 dk", market: "$0.3 Mr", highlight: false },
    { rank: 24, name: "Meksika", flag: "🇲🇽", continent: "Amerika", national: 26, regional: 280, viewMinutes: 195, viewDisplay: "3 sa 15 dk", adLimitDisplay: "13 dk (IFT)", breakDuration: "4.0 dk", market: "$1.9 Mr", highlight: false },
    { rank: 25, name: "Güney Afrika", flag: "🇿🇦", continent: "Ortadogu-Afrika", national: 25, regional: 55, viewMinutes: 195, viewDisplay: "3 sa 15 dk", adLimitDisplay: "12 dk (ICASA)", breakDuration: "3.5 dk", market: "$0.9 Mr", highlight: false },
    { rank: 26, name: "Çekya", flag: "🇨🇿", continent: "Avrupa", national: 20, regional: 55, viewMinutes: 195, viewDisplay: "3 sa 15 dk", adLimitDisplay: "12 dk (AVMSD)", breakDuration: "4.2 dk", market: "$0.7 Mr", highlight: false },
    { rank: 27, name: "Peru", flag: "🇵🇪", continent: "Amerika", national: 16, regional: 85, viewMinutes: 195, viewDisplay: "3 sa 15 dk", adLimitDisplay: "12 dk (MTC)", breakDuration: "3.8 dk", market: "$0.4 Mr", highlight: false },
    { rank: 28, name: "Azerbaycan", flag: "🇦🇿", continent: "Asya", national: 14, regional: 30, viewMinutes: 195, viewDisplay: "3 sa 15 dk", adLimitDisplay: "12 dk (NTRC)", breakDuration: "4.0 dk", market: "$0.2 Mr", highlight: false },
    { rank: 29, name: "Kanada", flag: "🇨🇦", continent: "Amerika", national: 48, regional: 145, viewMinutes: 192, viewDisplay: "3 sa 12 dk", adLimitDisplay: "12 dk (CRTC)", breakDuration: "3.5 dk", market: "$2.6 Mr", highlight: false },
    { rank: 30, name: "Suudi Arabistan", flag: "🇸🇦", continent: "Ortadogu-Afrika", national: 28, regional: 45, viewMinutes: 190, viewDisplay: "3 sa 10 dk", adLimitDisplay: "10 dk (GCAM)", breakDuration: "3.2 dk", market: "$1.2 Mr", highlight: false },
    { rank: 31, name: "Fas", flag: "🇲🇦", continent: "Ortadogu-Afrika", national: 14, regional: 35, viewMinutes: 190, viewDisplay: "3 sa 10 dk", adLimitDisplay: "12 dk (HACA)", breakDuration: "4.0 dk", market: "$0.3 Mr", highlight: false },
    { rank: 32, name: "Nijerya", flag: "🇳🇬", continent: "Ortadogu-Afrika", national: 30, regional: 110, viewMinutes: 185, viewDisplay: "3 sa 05 dk", adLimitDisplay: "12 dk (NBC)", breakDuration: "3.8 dk", market: "$0.5 Mr", highlight: false },
    { rank: 33, name: "Güney Kore", flag: "🇰🇷", continent: "Asya", national: 28, regional: 75, viewMinutes: 178, viewDisplay: "2 sa 58 dk", adLimitDisplay: "11 dk (KCSC)", breakDuration: "2.2 dk", market: "$2.8 Mr", highlight: false },
    { rank: 34, name: "Hollanda", flag: "🇳🇱", continent: "Avrupa", national: 24, regional: 60, viewMinutes: 175, viewDisplay: "2 sa 55 dk", adLimitDisplay: "12 dk (AVMSD)", breakDuration: "3.8 dk", market: "$1.1 Mr", highlight: false },
    { rank: 35, name: "İrlanda", flag: "🇮🇪", continent: "Avrupa", national: 12, regional: 25, viewMinutes: 175, viewDisplay: "2 sa 55 dk", adLimitDisplay: "12 dk (BAI)", breakDuration: "3.6 dk", market: "$0.4 Mr", highlight: false },
    { rank: 36, name: "Avustralya", flag: "🇦🇺", continent: "Asya", national: 32, regional: 85, viewMinutes: 170, viewDisplay: "2 sa 50 dk", adLimitDisplay: "14 dk (ACMA)", breakDuration: "3.6 dk", market: "$2.2 Mr", highlight: false },
    { rank: 37, name: "Pakistan", flag: "🇵🇰", continent: "Asya", national: 32, regional: 90, viewMinutes: 170, viewDisplay: "2 sa 50 dk", adLimitDisplay: "12 dk (PEMRA)", breakDuration: "3.5 dk", market: "$0.4 Mr", highlight: false },
    { rank: 38, name: "Belçika", flag: "🇧🇪", continent: "Avrupa", national: 20, regional: 45, viewMinutes: 170, viewDisplay: "2 sa 50 dk", adLimitDisplay: "12 dk (AVMSD)", breakDuration: "3.8 dk", market: "$0.8 Mr", highlight: false },
    { rank: 39, name: "İsrail", flag: "🇮🇱", continent: "Ortadogu-Afrika", national: 15, regional: 25, viewMinutes: 170, viewDisplay: "2 sa 50 dk", adLimitDisplay: "12 dk (SAT)", breakDuration: "3.5 dk", market: "$0.5 Mr", highlight: false },
    { rank: 40, name: "Çin", flag: "🇨🇳", continent: "Asya", national: 180, regional: 2100, viewMinutes: 165, viewDisplay: "2 sa 45 dk", adLimitDisplay: "12 dk (NRTA)", breakDuration: "3.5 dk", market: "$18.2 Mr", highlight: false },
    { rank: 41, name: "BAE", flag: "🇦🇪", continent: "Ortadogu-Afrika", national: 22, regional: 30, viewMinutes: 165, viewDisplay: "2 sa 45 dk", adLimitDisplay: "10 dk (NMC)", breakDuration: "3.0 dk", market: "$0.7 Mr", highlight: false },
    { rank: 42, name: "Avusturya", flag: "🇦🇹", continent: "Avrupa", national: 16, regional: 50, viewMinutes: 165, viewDisplay: "2 sa 45 dk", adLimitDisplay: "12 dk (AVMSD)", breakDuration: "3.8 dk", market: "$0.6 Mr", highlight: false },
    { rank: 43, name: "Malezya", flag: "🇲🇾", continent: "Asya", national: 18, regional: 35, viewMinutes: 165, viewDisplay: "2 sa 45 dk", adLimitDisplay: "10 dk (MCMC)", breakDuration: "3.0 dk", market: "$0.6 Mr", highlight: false },
    { rank: 44, name: "Tayland", flag: "🇹🇭", continent: "Asya", national: 25, regional: 80, viewMinutes: 160, viewDisplay: "2 sa 40 dk", adLimitDisplay: "12.5 dk (NBTC)", breakDuration: "3.5 dk", market: "$1.2 Mr", highlight: false },
    { rank: 45, name: "Vietnam", flag: "🇻🇳", continent: "Asya", national: 22, regional: 70, viewMinutes: 155, viewDisplay: "2 sa 35 dk", adLimitDisplay: "10 dk (MIC)", breakDuration: "3.0 dk", market: "$0.8 Mr", highlight: false },
    { rank: 46, name: "Finlandiya", flag: "🇫🇮", continent: "Avrupa", national: 14, regional: 28, viewMinutes: 150, viewDisplay: "2 sa 30 dk", adLimitDisplay: "12 dk (AVMSD)", breakDuration: "3.5 dk", market: "$0.4 Mr", highlight: false },
    { rank: 47, name: "İsveç", flag: "🇸🇪", continent: "Avrupa", national: 18, regional: 40, viewMinutes: 145, viewDisplay: "2 sa 25 dk", adLimitDisplay: "12 dk (AVMSD)", breakDuration: "3.5 dk", market: "$0.7 Mr", highlight: false },
    { rank: 48, name: "Danimarka", flag: "🇩🇰", continent: "Avrupa", national: 15, regional: 35, viewMinutes: 142, viewDisplay: "2 sa 22 dk", adLimitDisplay: "12 dk (AVMSD)", breakDuration: "3.4 dk", market: "$0.5 Mr", highlight: false },
    { rank: 49, name: "İsviçre", flag: "🇨🇭", continent: "Avrupa", national: 18, regional: 42, viewMinutes: 140, viewDisplay: "2 sa 20 dk", adLimitDisplay: "12 dk (OFCOM)", breakDuration: "3.0 dk", market: "$0.8 Mr", highlight: false },
    { rank: 50, name: "Norveç", flag: "🇳🇴", continent: "Avrupa", national: 14, regional: 30, viewMinutes: 138, viewDisplay: "2 sa 18 dk", adLimitDisplay: "12 dk (NMA)", breakDuration: "3.2 dk", market: "$0.6 Mr", highlight: false }
];

let currentStatsFilter = "all";
let currentStatsSearch = "";
let currentStatsSort = "viewTimeDesc";

function renderStatsTable() {
    const tbody = document.getElementById("statsTableBody");
    const countTag = document.getElementById("statsResultCount");
    if (!tbody) return;

    let list = [...globalTvStats];

    // Filter by continent
    if (currentStatsFilter !== "all") {
        list = list.filter(item => item.continent === currentStatsFilter);
    }

    // Filter by search query
    if (currentStatsSearch.trim() !== "") {
        const query = currentStatsSearch.toLowerCase().trim();
        list = list.filter(item => item.name.toLowerCase().includes(query));
    }

    // Sort
    list.sort((a, b) => {
        if (currentStatsSort === "viewTimeDesc") return b.viewMinutes - a.viewMinutes;
        if (currentStatsSort === "nationalDesc") return b.national - a.national;
        if (currentStatsSort === "regionalDesc") return b.regional - a.regional;
        if (currentStatsSort === "adLimitDesc") {
            const getLimitNum = (str) => parseFloat(str) || 12;
            return getLimitNum(b.adLimitDisplay) - getLimitNum(a.adLimitDisplay);
        }
        if (currentStatsSort === "nameAsc") return a.name.localeCompare(b.name, "tr");
        if (currentStatsSort === "marketDesc") {
            const getMarketVal = (str) => {
                if (str.includes("Mr ₺")) return 1.1;
                const m = str.match(/\$([\d\.]+)/);
                return m ? parseFloat(m[1]) : 0;
            };
            return getMarketVal(b.market) - getMarketVal(a.market);
        }
        return 0;
    });

    if (countTag) {
        countTag.textContent = `${list.length} / 50 Ülke Gösteriliyor`;
    }

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 24px; color: #94a3b8;">Aradığınız kriterlere uygun ülke bulunamadı.</td></tr>`;
        return;
    }

    tbody.innerHTML = list.map((item, index) => {
        const percent = Math.min(100, Math.round((item.viewMinutes / 270) * 100));
        const isHigh = item.viewMinutes >= 220;
        const isFlexible = item.adLimitDisplay.includes("Serbest");
        const rowClass = item.highlight ? "row-turkey" : "";

        return `
            <tr class="${rowClass}">
                <td class="col-sticky">
                    <span style="font-size: 1.1rem; margin-right: 4px;">${item.flag}</span>
                    <strong>${item.name}</strong>
                    ${item.highlight ? ' <span style="font-size: 0.6rem; color: #ef4444; font-weight:800;">(LİDER)</span>' : ''}
                </td>
                <td><strong>${item.national.toLocaleString('tr-TR')}</strong> kanal</td>
                <td><strong>${item.regional.toLocaleString('tr-TR')}</strong> yerel/bölge</td>
                <td>
                    <div class="view-time-cell">
                        <strong>${item.viewDisplay}</strong>
                        <div class="view-time-bar">
                            <div class="view-time-fill ${isHigh ? 'high' : ''}" style="width: ${percent}%;"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="ad-limit-tag ${isFlexible ? 'flexible' : ''}">${item.adLimitDisplay}</span>
                </td>
                <td>${item.breakDuration}</td>
                <td><strong style="color: #38bdf8;">${item.market}</strong></td>
            </tr>
        `;
    }).join('');
}

function initStatsEngine() {
    const searchInput = document.getElementById("statsSearchInput");
    const clearBtn = document.getElementById("btnClearStatsSearch");
    const sortSelect = document.getElementById("statsSortSelect");
    const pills = document.querySelectorAll("#continentPills .s-pill");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentStatsSearch = e.target.value;
            if (clearBtn) {
                clearBtn.style.display = currentStatsSearch ? "block" : "none";
            }
            renderStatsTable();
        });
    }

    if (clearBtn && searchInput) {
        clearBtn.addEventListener("click", () => {
            searchInput.value = "";
            currentStatsSearch = "";
            clearBtn.style.display = "none";
            renderStatsTable();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentStatsSort = e.target.value;
            renderStatsTable();
        });
    }

    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            pills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentStatsFilter = pill.getAttribute("data-filter") || "all";
            renderStatsTable();
        });
    });

    renderStatsTable();
}

// BOOT ENGINE
initChannelSelectors();
selectChannel(currentChannel, currentState);
updatePointsUI();
renderWallet();
renderLeaderboard();
initRealtimeChat();
initPresence();
initLoginOnboarding();
initStatsEngine();

// Dynamic Real-Time Channel Broadcast Sync (Automated GitHub Actions JSON)
async function syncLiveChannels() {
    try {
        const res = await fetch("channels.json?t=" + Date.now());
        if (res.ok) {
            const liveData = await res.json();
            if (liveData && typeof liveData === "object") {
                Object.keys(liveData).forEach(k => {
                    if (channelDatabase[k]) {
                        channelDatabase[k] = Object.assign(channelDatabase[k], liveData[k]);
                    } else {
                        channelDatabase[k] = liveData[k];
                    }
                });
                renderCurrentChannel();
            }
        }
    } catch (e) {
        // Fallback to cached channelDatabase
    }
}
syncLiveChannels();
setInterval(syncLiveChannels, 60000);
