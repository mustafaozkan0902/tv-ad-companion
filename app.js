// ====================================================
// Contexta TV - Clean Mobile Companion Logic (v4.0)
// 20 Ulusal TV Kanalı + Canlı Teletekst & EPG + Real-Time Chat
// ====================================================

// 1. TOP 20 TURKISH TV CHANNELS DATABASE (EPG & TELETEXT ENRICHED)
const channelDatabase = {
    showtv: {
        id: "showtv",
        name: "Show TV",
        genre: "Dizi / Aile",
        time: "⏰ 20:00 - 23:30",
        program: {
            title: "Kızılcık Şerbeti - Yeni Bölüm",
            desc: "İki farklı ailenin çocukları arasındaki gerilim ve yüzleşmeler canlı yayında.",
            teletext300: "SHOW TELETEXT S.300: 20:00 KIZILCIK SERBETI / 23:45 BAHAR TEKRAR / 02:00 SANDIK KOKUSU",
            teletext888: "ALTYAZI S.888: '...düğün gecesi yaşanan gerilim iki aileyi karşı karşıya getirdi. Doğa ve Fatih arasında sert tartışma...'",
            poll: {
                id: "poll_show_1",
                question: "Doğa ve Fatih arasındaki gerilim bu bölümde çözülür mü?",
                options: ["Çözülür (Barışırlar)", "Daha da Büyür", "Ayrılık Kararı Gelir"],
                results: { "Çözülür (Barışırlar)": 28, "Daha da Büyür": 54, "Ayrılık Kararı Gelir": 18 },
                points: 20
            },
            campaign: {
                type: "Dizi İndirim Fırsatı",
                title: "Dizideki Kıyafet & Takılarda %35 İndirim",
                desc: "Kızılcık Şerbeti karakterlerinin giydiği kombinlerde Trendyol özel indirimi.",
                code: "SERBET35",
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
        genre: "Aksiyon / Dizi",
        time: "⏰ 20:00 - 23:15",
        program: {
            title: "Teşkilat - Nefes Kesen Operasyon",
            desc: "Milli İstihbarat timi sınır ötesindeki kritik hedefe sızıyor.",
            teletext300: "TRT TELETEXT S.300: 20:00 TESKILAT (CANLI) / 22:45 ANA HABER / 23:30 GONUL DAGI",
            teletext888: "ALTYAZI S.888: '...operasyon başarıyla ilerliyor. İkinci tim güvenli koridoru açtı, tahliye başlıyor...'",
            poll: {
                id: "poll_trt_1",
                question: "Ömer Atmaca tuzağı fark edip kurtulabilecek mi?",
                options: ["Tuzağı Fark Eder", "Yardım Ekibi Yetişir", "Tutsak Düşer"],
                results: { "Tuzağı Fark Eder": 62, "Yardım Ekibi Yetişir": 31, "Tutsak Düşer": 7 },
                points: 20
            },
            campaign: {
                type: "Milli Teknoloji Fırsatı",
                title: "Türk Telekom Fiber İnternet + Hediye",
                desc: "Teşkilat dizisi izleyicilerine özel 100 Mbps fiber hızında ilk 3 ay %50 indirim.",
                code: "TESKILATFIBER",
                points: 15,
                actionText: "Fırsatı Cüzdana Kaydet (+15 P)"
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
        genre: "Tarih / Dizi",
        time: "⏰ 20:00 - 23:30",
        program: {
            title: "Kuruluş Osman - Büyük Cenk",
            desc: "Osman Bey obada pusatları kuşanıp fetih hazırlıklarına başlıyor.",
            teletext300: "ATV TELETEXT S.300: 20:00 KURULUS OSMAN (CANLI) / 23:45 NIHAT HATIPOGLU",
            teletext888: "ALTYAZI S.888: '...Osman Bey: Gayrı cenk vaktidir! Türk'ün sancağı düşmeyecek, adalet tecelli edecek...'",
            poll: {
                id: "poll_atv_1",
                question: "Kayı obasını bekleyen en büyük tuzak nereden gelecek?",
                options: ["Bizans Komutanından", "İçerideki Hainden", "Moğol Birliğinden"],
                results: { "Bizans Komutanından": 48, "İçerideki Hainden": 42, "Moğol Birliğinden": 10 },
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
        genre: "Dram / Dizi",
        time: "⏰ 20:00 - 23:45",
        program: {
            title: "İnci Taneleri - Dilber ve Azem",
            desc: "Azem geçmişin sır perdesini aralarken Dilber'den sürpriz adım.",
            teletext300: "KANAL D AKIS S.300: 20:00 INCI TANELERI / 23:45 ARKA SOKAKLAR OZET",
            teletext888: "ALTYAZI S.888: '...Azem: İnsan bazen en çok kendine geç kalır. Dilber elini tuttu ve gülümsedi...'",
            poll: {
                id: "poll_kanald_1",
                question: "Azem kayıp kızına bu bölümde ulaşabilecek mi?",
                options: ["Ulaşacak", "Yeni Bir İpucu Bulacak", "Engel Çıkacak"],
                results: { "Ulaşacak": 22, "Yeni Bir İpucu Bulacak": 58, "Engel Çıkacak": 20 },
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
        program: {
            title: "Kızıl Goncalar - Gerçekler Ortaya Çıkıyor",
            desc: "Levent ve Meryem arasındaki diyalog tüm dengeleri sarsıyor.",
            teletext300: "NOW AKIS S.300: 20:00 KIZIL GONCALAR (YENI) / 23:45 ORTA SAYFA CANLI",
            teletext888: "ALTYAZI S.888: '...Meryem: Korku insanı susturur ama hakikat bir gün mutlaka haykırır...'",
            poll: {
                id: "poll_now_1",
                question: "Zeynep yurt dışına gitmeyi kabul edecek mi?",
                options: ["Kabul Edecek", "Ailesi İçin Kalacak"],
                results: { "Kabul Edecek": 38, "Ailesi İçin Kalacak": 62 },
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
        genre: "Romantik / Dram",
        time: "⏰ 20:00 - 23:45",
        program: {
            title: "Yalı Çapkını - Ferit ve Seyran",
            desc: "Yalıda alınan sürpriz boşanma kararı tansiyonu tırmandırıyor.",
            teletext300: "STAR AKIS S.300: 20:00 YALI CAPKINI CANLI / 23:45 SAKLA BENI TEKRAR",
            teletext888: "ALTYAZI S.888: '...Ferit: Ben seni hiç bırakmadım Seyran! Seyran gözyaşlarıyla kapıyı çarpar...'",
            poll: {
                id: "poll_star_1",
                question: "Seyran yalıya geri dönecek mi?",
                options: ["Geri Dönecek", "Kendi Yolunu Çizecek"],
                results: { "Geri Dönecek": 55, "Kendi Yolunu Çizecek": 45 },
                points: 20
            },
            campaign: {
                type: "Güzellik İndirimi",
                title: "Sephora & Gratis %40 Parfüm Kuponu",
                desc: "Yalı Çapkını izleyicilerine özel seçili parfümlerde %40 indirim kodu.",
                code: "YALI40",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Gratis - Güzellik ve Bakım Haftası",
            desc: "Tüm cilt bakım ve makyaj ürünlerinde 1 alana 1 bedava.",
            teletext300: "STAR REKLAM S.200: GRATIS KAMPANYASI / MAYBELLINE LANSMANI",
            teletext888: "REKLAM ALTYAZISI: '...kendine iyi bak, Gratis ile güzelliğine ışıltı kat...'",
            campaign: {
                type: "Kozmetik Çeki",
                title: "Gratis 80 TL İndirim Kuponu",
                desc: "Tüm mağazalarda geçerli anında 80 TL hediye çeki.",
                code: "GRATIS80",
                points: 15,
                actionText: "Çeki Cüzdana Ekle (+15 P)"
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

// 2. User State & Storage
let clientId = localStorage.getItem("contexta_client_id");
if (!clientId) {
    clientId = "client_" + Math.random().toString(36).substring(2, 9);
    localStorage.setItem("contexta_client_id", clientId);
}

let userName = localStorage.getItem("contexta_username") || "";
let userAvatar = localStorage.getItem("contexta_avatar") || "🦁";
let isLoggedIn = localStorage.getItem("contexta_logged_in") === "true";

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
    if (headerName) headerName.innerText = userName || "Giriş Yap";
    if (headerAvatar) headerAvatar.innerText = userAvatar || "🦁";

    const chatNameStrong = document.getElementById("chatUserName");
    if (chatNameStrong) chatNameStrong.innerText = `${userAvatar || '🦁'} ${userName || "İzleyici"}`;
}

// 3. Current Active Channel & Broadcast State
let currentChannel = "showtv";
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

// 6. UI Rendering Engine: Renders EPG, Teletext Stream & Contextual Rewards
function renderCurrentChannel() {
    const channelData = channelDatabase[currentChannel];
    if (!channelData) return;
    
    const viewData = channelData[currentState];
    
    // 1. Channel Badge & Meta
    document.getElementById("channelBadge").innerText = channelData.name.toUpperCase();
    document.getElementById("broadcastTime").innerText = channelData.time;
    document.getElementById("broadcastGenre").innerText = channelData.genre;
    
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

// 8. Tab Navigation
document.querySelectorAll(".bottom-nav .nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".bottom-nav .nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const targetTab = btn.dataset.tab;
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
        }
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
            // Hide the download button & nav pills during capture so they aren't in the PDF
            const actionRow = document.querySelector(".pitch-action-row");
            const navPills = document.querySelector(".pitch-nav-pills");
            if (actionRow) actionRow.style.display = "none";
            if (navPills) navPills.style.display = "none";

            const opt = {
                margin: [10, 8, 10, 8],
                filename: 'Contexta_TV_Melek_Yatirimci_Fizibilite_Sunumu.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2, 
                    useCORS: true, 
                    backgroundColor: '#0a0c13',
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
    
    // Direct matches for channels
    if (text.includes("show tv") || text.includes("show")) selectChannel("showtv", "program");
    else if (text.includes("trt 1") || text.includes("trt") || text.includes("te re te")) selectChannel("trt1", "program");
    else if (text.includes("tv 8") || text.includes("tv8") || text.includes("masterchef")) selectChannel("tv8", "program");
    else if (text.includes("atv") || text.includes("a te ve") || text.includes("muge anli") || text.includes("kurulus osman")) selectChannel("atv", "program");
    else if (text.includes("kanal d") || text.includes("inci taneleri")) selectChannel("kanald", "program");
    else if (text.includes("now") || text.includes("fox") || text.includes("kizil goncalar")) selectChannel("now", "program");
    else if (text.includes("star") || text.includes("yali capkini")) selectChannel("startv", "program");
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
        const chatNavBtn = document.querySelector('.bottom-nav .nav-btn[data-tab="tabChat"]');
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
// 13. USER ONBOARDING & LOGIN MODAL ENGINE
// ====================================================
function openLoginModal(canClose = false) {
    const modal = document.getElementById("loginModal");
    const closeBtn = document.getElementById("btnCloseLoginModal");
    const nameInput = document.getElementById("loginNameInput");
    
    if (!modal) return;
    
    if (nameInput) {
        nameInput.value = userName || "";
    }
    
    if (closeBtn) {
        closeBtn.style.display = canClose ? "block" : "none";
    }

    // Set active avatar button
    document.querySelectorAll(".avatar-opt").forEach(btn => {
        if (btn.dataset.avatar === userAvatar) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    modal.style.display = "flex";
}

function closeLoginModal() {
    const modal = document.getElementById("loginModal");
    if (modal) modal.style.display = "none";
}

function initLoginOnboarding() {
    // Avatar picker buttons
    const avatarButtons = document.querySelectorAll(".avatar-opt");
    avatarButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            avatarButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            userAvatar = btn.dataset.avatar;
        });
    });

    // Form submit
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nameInput = document.getElementById("loginNameInput");
            const rawName = nameInput ? nameInput.value.trim() : "";
            if (!rawName) return;

            const isFirstLogin = !isLoggedIn;
            userName = rawName;
            isLoggedIn = true;

            localStorage.setItem("contexta_username", userName);
            localStorage.setItem("contexta_avatar", userAvatar);
            localStorage.setItem("contexta_logged_in", "true");

            if (isFirstLogin && (!userProfile.points || userProfile.points < 50)) {
                userProfile.points = 50;
            }

            saveProfile();
            closeLoginModal();
            updatePointsUI();
            renderLeaderboard();

            showToast(`🎉 Hoş geldin ${userName}! Puan yarışına katıldın.`);
        });
    }

    // Close button
    const closeBtn = document.getElementById("btnCloseLoginModal");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            closeLoginModal();
        });
    }

    // Header chip click to edit profile
    const userHeaderChip = document.getElementById("userHeaderChip");
    if (userHeaderChip) {
        userHeaderChip.addEventListener("click", () => {
            openLoginModal(true);
        });
    }

    // Chat rename button click
    const btnChangeName = document.getElementById("btnChangeName");
    if (btnChangeName) {
        btnChangeName.addEventListener("click", () => {
            openLoginModal(true);
        });
    }

    // If not logged in, prompt modal
    if (!isLoggedIn || !userName) {
        setTimeout(() => {
            openLoginModal(false);
        }, 300);
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

// BOOT ENGINE
initChannelSelectors();
selectChannel(currentChannel, currentState);
updatePointsUI();
renderWallet();
renderLeaderboard();
initRealtimeChat();
initPresence();
initLoginOnboarding();
