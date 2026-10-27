// ====================================================
// Contexta TV - Clean Mobile Companion Logic (v4.0)
// 20 Ulusal TV Kanalı + Canlı Teletekst & EPG + Real-Time Chat
// ====================================================

// 1. TOP 20 TURKISH TV CHANNELS DATABASE (EPG & TELETEXT ENRICHED)
const channelDatabase = {
    "kanald": {
        "id": "kanald",
        "name": "Kanal D",
        "genre": "Dram / Aşk / Suç",
        "time": "⏰ 20:00 - 23:45",
        "schedule": [
            {
                "time": "07:00",
                "title": "Küçük Ağa (Tekrar)",
                "desc": "Eğlenceli aile komedisi ekranlarda.",
                "current": false
            },
            {
                "time": "09:00",
                "title": "Neler Oluyor Hayatta? (Canlı)",
                "desc": "Hakan Ural ve Ferda Yıldırım ile günün sıcak gelişmeleri.",
                "current": false
            },
            {
                "time": "11:00",
                "title": "Yaprak Dökümü",
                "desc": "Ali Rıza Bey ve ailesinin unutulmaz dramı.",
                "current": false
            },
            {
                "time": "13:45",
                "title": "Gelinim Mutfakta (Yeni Bölüm)",
                "desc": "Nursel Ergin sunumuyla altın bilezikler için kıyasıya yarış.",
                "current": false
            },
            {
                "time": "16:45",
                "title": "Arka Sokaklar (Tekrar)",
                "desc": "Rıza Baba ve efsanevi İstanbul asayiş ekibi.",
                "current": false
            },
            {
                "time": "18:30",
                "title": "Kanal D Ana Haber (Canlı)",
                "desc": "Günün Türkiye ve dünya gündemi canlı yayında.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Haysiyet (Yeni Bölüm)",
                "desc": "Adalet, aile bağları ve onur mücadelesi; sırlar çözülüyor.",
                "current": true
            },
            {
                "time": "23:45",
                "title": "Haysiyet (Gece Tekrar Kuşağı)",
                "desc": "Günün sevilen prime-time yapımının gece tekrarı.",
                "current": false
            },
            {
                "time": "02:00",
                "title": "Gelinim Mutfakta (Gece Tekrarı)",
                "desc": "Günün kaçırılan yemek tarifleri ve yarışma heyecanı.",
                "current": false
            }
        ],
        "program": {
            "title": "Haysiyet (Yeni Bölüm)",
            "desc": "Adalet, aile bağları ve onur mücadelesi; sırlar çözülüyor.",
            "teletext300": "KANAL D AKIŞ S.300: 20:00 HAYSIYET (YENI BÖLÜM) / 23:45 HAYSIYET (GECE TEKRAR KUŞAĞI)",
            "teletext888": "ALTYAZI S.888: '...Haysiyet (Yeni Bölüm) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_kanald_active",
                "question": "Haysiyet bu akşamki büyük hesaplaşmada sizce kim haklı çıkacak?",
                "options": [
                    "Geçmişin sırlarını saklayanlar",
                    "Gerçeğin peşinden gidenler",
                    "İntikam arayanlar"
                ],
                "results": {
                    "Geçmişin sırlarını saklayanlar": 28,
                    "Gerçeğin peşinden gidenler": 54,
                    "İntikam arayanlar": 18
                },
                "points": 20
            },
            "campaign": {
                "title": "Akbank 25.000 TL Faizsiz Taksitli Avans",
                "desc": "Kanal D prime-time izleyicilerine özel mobilden Akbanklı olanlara sıfır faizli nakit.",
                "code": "AKBANK0FAIZ",
                "points": 25
            }
        },
        "ad": {
            "title": "Akbank 25.000 TL Faizsiz Taksitli Avans",
            "desc": "Kanal D prime-time izleyicilerine özel mobilden Akbanklı olanlara sıfır faizli nakit.",
            "teletext300": "KANAL D REKLAM S.200: AKBANK 25.000 TL FAIZSIZ TAKSITLI AVANS",
            "teletext888": "REKLAM ALTYAZISI: '...Kanal D prime-time izleyicilerine özel mobilden Akbanklı olanlara sıfır faizli nakit....'",
            "campaign": {
                "title": "Akbank 25.000 TL Faizsiz Taksitli Avans",
                "desc": "Kanal D prime-time izleyicilerine özel mobilden Akbanklı olanlara sıfır faizli nakit.",
                "code": "AKBANK0FAIZ",
                "points": 25
            }
        }
    },
    "trt1": {
        "id": "trt1",
        "name": "TRT 1",
        "genre": "Tarih / Dönem / Aile",
        "time": "⏰ 20:00 - 23:45",
        "schedule": [
            {
                "time": "06:00",
                "title": "İstiklal Marşı & Gün Başlıyor",
                "desc": "Günün ilk saatlerinde haber ve kültür kuşağı.",
                "current": false
            },
            {
                "time": "09:00",
                "title": "Kasaba Doktoru (Tekrar)",
                "desc": "Gönüllere dokunan fedakar hekimlerin hikayesi.",
                "current": false
            },
            {
                "time": "13:15",
                "title": "Alişan ile Hayata Gülümse (Canlı)",
                "desc": "Müzik, sağlık ve hayata dair keyifli sohbetler.",
                "current": false
            },
            {
                "time": "17:45",
                "title": "Lingo Türkiye (Yarışma)",
                "desc": "Kemal Uçar sunumuyla kelime tahmin heyecanı.",
                "current": false
            },
            {
                "time": "19:00",
                "title": "TRT 1 Ana Haber (Canlı)",
                "desc": "Doğru, tarafsız ve ilkeli habercilik.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Mehmed: Fetihler Sultanı (Yeni Bölüm)",
                "desc": "Sultan Mehmed Han Konstantiniyye fethi için dev şahi topların döküm emrini veriyor.",
                "current": true
            },
            {
                "time": "23:45",
                "title": "Mehmed: Fetihler Sultanı (Gece Tekrarı)",
                "desc": "Günün tarihi destanının gece tekrarı.",
                "current": false
            },
            {
                "time": "02:15",
                "title": "Gönül Dağı (Tekrar)",
                "desc": "Bozkırın sarı sıcağında samimi hikayeler.",
                "current": false
            }
        ],
        "program": {
            "title": "Mehmed: Fetihler Sultanı (Yeni Bölüm)",
            "desc": "Sultan Mehmed Han Konstantiniyye fethi için dev şahi topların döküm emrini veriyor.",
            "teletext300": "TRT 1 AKIŞ S.300: 20:00 MEHMED: FETIHLER SULTANI (YENI BÖLÜM) / 23:45 MEHMED: FETIHLER SULTANI (GECE TEKRARI)",
            "teletext888": "ALTYAZI S.888: '...Mehmed: Fetihler Sultanı (Yeni Bölüm) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_trt1_active",
                "question": "Sultan Mehmed Han'ın şahi toplarla yapacağı ilk atış testi surlarda gedik açar mı?",
                "options": [
                    "Evet, test tam başarıyla tamamlanır",
                    "Bizanslı casuslar sabotaj dener",
                    "Kuşatma stratejisi değişir"
                ],
                "results": {
                    "Evet, test tam başarıyla tamamlanır": 62,
                    "Bizanslı casuslar sabotaj dener": 26,
                    "Kuşatma stratejisi değişir": 12
                },
                "points": 20
            },
            "campaign": {
                "title": "Türk Telekom Prime %30 İndirim",
                "desc": "TRT 1 izleyicilerine özel Prime ev internetinde ilk 3 ay %30 indirim fırsatı.",
                "code": "TRT30PRIME",
                "points": 20
            }
        },
        "ad": {
            "title": "Türk Telekom Prime %30 İndirim",
            "desc": "TRT 1 izleyicilerine özel Prime ev internetinde ilk 3 ay %30 indirim fırsatı.",
            "teletext300": "TRT 1 REKLAM S.200: TÜRK TELEKOM PRIME %30 İNDIRIM",
            "teletext888": "REKLAM ALTYAZISI: '...TRT 1 izleyicilerine özel Prime ev internetinde ilk 3 ay %30 indirim fırsatı....'",
            "campaign": {
                "title": "Türk Telekom Prime %30 İndirim",
                "desc": "TRT 1 izleyicilerine özel Prime ev internetinde ilk 3 ay %30 indirim fırsatı.",
                "code": "TRT30PRIME",
                "points": 20
            }
        }
    },
    "showtv": {
        "id": "showtv",
        "name": "Show TV",
        "genre": "Aile / Komedi / Dram",
        "time": "⏰ 20:00 - 23:45",
        "schedule": [
            {
                "time": "06:00",
                "title": "Kendine İyi Bak (Tekrar)",
                "desc": "Sağlıklı yaşam ve estetik önerileri.",
                "current": false
            },
            {
                "time": "08:00",
                "title": "Bu Sabah (Canlı)",
                "desc": "Murat Güloğlu ve Ebru Akel ile günün sıcak haberleri.",
                "current": false
            },
            {
                "time": "12:30",
                "title": "Gelin Evi",
                "desc": "Haftanın en marifetli gelini kim olacak?",
                "current": false
            },
            {
                "time": "15:00",
                "title": "Didem Arslan Yılmaz'la Vazgeçme (Canlı)",
                "desc": "Kayıpların bulunduğu, sırların aydınlatıldığı canlı yayın.",
                "current": false
            },
            {
                "time": "18:45",
                "title": "Show Ana Haber (Canlı)",
                "desc": "Rıdvan Bıyık yönetiminde günün gelişmeleri.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Bahar - Uyanmaya Hazır Mısın? (Yeni Bölüm)",
                "desc": "Bahar'ın uyanışı ve doktorluk hayallerine geri dönüşü.",
                "current": true
            },
            {
                "time": "23:45",
                "title": "Bahar (Gece Tekrar Kuşağı)",
                "desc": "Günün sevilen dizisinin gece tekrarı.",
                "current": false
            },
            {
                "time": "02:15",
                "title": "Kızılcık Şerbeti (Tekrar)",
                "desc": "Farklı dünyaların fırtınalı aile dramı.",
                "current": false
            }
        ],
        "program": {
            "title": "Bahar - Uyanmaya Hazır Mısın? (Yeni Bölüm)",
            "desc": "Bahar'ın uyanışı ve doktorluk hayallerine geri dönüşü.",
            "teletext300": "SHOW TV AKIŞ S.300: 20:00 BAHAR - UYANMAYA HAZIR MISIN? (YENI BÖLÜM) / 23:45 BAHAR (GECE TEKRAR KUŞAĞI)",
            "teletext888": "ALTYAZI S.888: '...Bahar - Uyanmaya Hazır Mısın? (Yeni Bölüm) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_showtv_active",
                "question": "Bahar hastanedeki zorlu ameliyatta tek başına başarılı olabilecek mi?",
                "options": [
                    "Kesinlikle başarır",
                    "Timur müdahale etmek zorunda kalır",
                    "Evren Hoca yardıma koşar"
                ],
                "results": {
                    "Kesinlikle başarır": 58,
                    "Timur müdahale etmek zorunda kalır": 14,
                    "Evren Hoca yardıma koşar": 28
                },
                "points": 20
            },
            "campaign": {
                "title": "Trendyol 100 TL Alışveriş Çeki",
                "desc": "Show TV izleyicilerine özel 'SHOW100' koduyla anında 100 TL indirim hediyesi.",
                "code": "SHOW100",
                "points": 15
            }
        },
        "ad": {
            "title": "Trendyol 100 TL Alışveriş Çeki",
            "desc": "Show TV izleyicilerine özel 'SHOW100' koduyla anında 100 TL indirim hediyesi.",
            "teletext300": "SHOW TV REKLAM S.200: TRENDYOL 100 TL ALIŞVERIŞ ÇEKI",
            "teletext888": "REKLAM ALTYAZISI: '...Show TV izleyicilerine özel 'SHOW100' koduyla anında 100 TL indirim hediyesi....'",
            "campaign": {
                "title": "Trendyol 100 TL Alışveriş Çeki",
                "desc": "Show TV izleyicilerine özel 'SHOW100' koduyla anında 100 TL indirim hediyesi.",
                "code": "SHOW100",
                "points": 15
            }
        }
    },
    "atv": {
        "id": "atv",
        "name": "ATV",
        "genre": "Dram / Romantik / Töre",
        "time": "⏰ 20:00 - 23:45",
        "schedule": [
            {
                "time": "07:00",
                "title": "Kahvaltı Haberleri (Canlı)",
                "desc": "Nihan Günay ile sabahın ilk bülteni.",
                "current": false
            },
            {
                "time": "10:00",
                "title": "Müge Anlı ile Tatlı Sert (Canlı)",
                "desc": "Faili meçhul dosyalar ve kayıplar canlı yayında çözülüyor.",
                "current": false
            },
            {
                "time": "13:00",
                "title": "ATV Gün Ortası",
                "desc": "Günün ilk yarısının özet bülteni.",
                "current": false
            },
            {
                "time": "14:00",
                "title": "Mutfak Bahane",
                "desc": "Derya Taşbaşı ile lezzetli tarifler.",
                "current": false
            },
            {
                "time": "16:00",
                "title": "Esra Erol'da (Canlı)",
                "desc": "Kavuşmalar, yüzleşmeler ve aile dramları ekranda.",
                "current": false
            },
            {
                "time": "19:00",
                "title": "ATV Ana Haber (Canlı)",
                "desc": "Cem Öğretir ile Türkiye'nin en çok izlenen ana haberi.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Bir Gece Masalı (Yeni Bölüm)",
                "desc": "Komiser Mahir ile Yörük kızı Canfeza'nın masalsı aşkı.",
                "current": true
            },
            {
                "time": "23:45",
                "title": "Bir Gece Masalı (Gece Tekrarı)",
                "desc": "Günün dizisinin gece tekrarı.",
                "current": false
            },
            {
                "time": "02:30",
                "title": "Kuruluş Osman (Tekrar)",
                "desc": "Osman Bey'in kutlu devlet kurma yürüyüşü.",
                "current": false
            }
        ],
        "program": {
            "title": "Bir Gece Masalı (Yeni Bölüm)",
            "desc": "Komiser Mahir ile Yörük kızı Canfeza'nın masalsı aşkı.",
            "teletext300": "ATV AKIŞ S.300: 20:00 BIR GECE MASALI (YENI BÖLÜM) / 23:45 BIR GECE MASALI (GECE TEKRARI)",
            "teletext888": "ALTYAZI S.888: '...Bir Gece Masalı (Yeni Bölüm) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_atv_active",
                "question": "Mahir konaktaki büyük sır perdesini bu akşam aralayabilecek mi?",
                "options": [
                    "Tüm sırları ortaya çıkarır",
                    "Canfeza'yı korumak için susar",
                    "Yeni bir tuzakla karşılaşır"
                ],
                "results": {
                    "Tüm sırları ortaya çıkarır": 48,
                    "Canfeza'yı korumak için susar": 38,
                    "Yeni bir tuzakla karşılaşır": 14
                },
                "points": 20
            },
            "campaign": {
                "title": "Yeni Dacia Duster Test Sürüşü + 150 TL Yakıt",
                "desc": "ATV izleyicilerine özel test sürüşü randevusuna anında 150 TL Opet yakıt puanı.",
                "code": "DACIA2026",
                "points": 25
            }
        },
        "ad": {
            "title": "Yeni Dacia Duster Test Sürüşü + 150 TL Yakıt",
            "desc": "ATV izleyicilerine özel test sürüşü randevusuna anında 150 TL Opet yakıt puanı.",
            "teletext300": "ATV REKLAM S.200: YENI DACIA DUSTER TEST SÜRÜŞÜ + 150 TL YAKIT",
            "teletext888": "REKLAM ALTYAZISI: '...ATV izleyicilerine özel test sürüşü randevusuna anında 150 TL Opet yakıt puanı....'",
            "campaign": {
                "title": "Yeni Dacia Duster Test Sürüşü + 150 TL Yakıt",
                "desc": "ATV izleyicilerine özel test sürüşü randevusuna anında 150 TL Opet yakıt puanı.",
                "code": "DACIA2026",
                "points": 25
            }
        }
    },
    "startv": {
        "id": "startv",
        "name": "Star TV",
        "genre": "Dram / Aşk / Aile",
        "time": "⏰ 20:00 - 23:45",
        "schedule": [
            {
                "time": "07:00",
                "title": "Kiralık Aşk (Tekrar)",
                "desc": "Defne ve Ömer'in unutulmaz romantik komedisi.",
                "current": false
            },
            {
                "time": "09:30",
                "title": "Sabahın Sultanı Seda Sayan (Canlı)",
                "desc": "Evlilikler, yüzleşmeler ve Seda Sayan enerjisi.",
                "current": false
            },
            {
                "time": "13:30",
                "title": "Zahide Yetiş ile Yeniden Başlasak",
                "desc": "Umut veren gerçek yaşam hikayeleri.",
                "current": false
            },
            {
                "time": "16:15",
                "title": "Söz (Tekrar)",
                "desc": "Özel Kuvvetler timinin nefes kesen operasyonları.",
                "current": false
            },
            {
                "time": "19:00",
                "title": "Star Haber (Canlı)",
                "desc": "Nazlı Çelik ile tarafsız ana haber bülteni.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Sahipsizler (Yeni Bölüm)",
                "desc": "Hayatta birbirine kenetlenen 6 yetim kardeşin mücadelesi.",
                "current": true
            },
            {
                "time": "23:45",
                "title": "Sahipsizler (Gece Tekrar Kuşağı)",
                "desc": "Günün dram yapımının gece tekrarı.",
                "current": false
            },
            {
                "time": "02:15",
                "title": "Yalı Çapkını (Tekrar)",
                "desc": "Ferit ve Seyran'ın Korhan yalısındaki fırtınası.",
                "current": false
            }
        ],
        "program": {
            "title": "Sahipsizler (Yeni Bölüm)",
            "desc": "Hayatta birbirine kenetlenen 6 yetim kardeşin mücadelesi.",
            "teletext300": "STAR TV AKIŞ S.300: 20:00 SAHIPSIZLER (YENI BÖLÜM) / 23:45 SAHIPSIZLER (GECE TEKRAR KUŞAĞI)",
            "teletext888": "ALTYAZI S.888: '...Sahipsizler (Yeni Bölüm) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_startv_active",
                "question": "Sahipsizler dizisinde kardeşler konağın baskılarına direnebilecek mi?",
                "options": [
                    "Birbirlerinden asla ayrılmazlar",
                    "Büyük kardeş fedakarlık yapar",
                    "Beklenmedik bir akraba sahip çıkar"
                ],
                "results": {
                    "Birbirlerinden asla ayrılmazlar": 66,
                    "Büyük kardeş fedakarlık yapar": 24,
                    "Beklenmedik bir akraba sahip çıkar": 10
                },
                "points": 20
            },
            "campaign": {
                "title": "Arzum Okka'da 400 TL Sepet İndirimi",
                "desc": "Star TV reklam kuşağına özel online kahve makinesi siparişinde anında 400 TL indirim.",
                "code": "OKKA400",
                "points": 20
            }
        },
        "ad": {
            "title": "Arzum Okka'da 400 TL Sepet İndirimi",
            "desc": "Star TV reklam kuşağına özel online kahve makinesi siparişinde anında 400 TL indirim.",
            "teletext300": "STAR TV REKLAM S.200: ARZUM OKKA'DA 400 TL SEPET İNDIRIMI",
            "teletext888": "REKLAM ALTYAZISI: '...Star TV reklam kuşağına özel online kahve makinesi siparişinde anında 400 TL indirim....'",
            "campaign": {
                "title": "Arzum Okka'da 400 TL Sepet İndirimi",
                "desc": "Star TV reklam kuşağına özel online kahve makinesi siparişinde anında 400 TL indirim.",
                "code": "OKKA400",
                "points": 20
            }
        }
    },
    "now": {
        "id": "now",
        "name": "NOW (Fox)",
        "genre": "Dram / Sosyal / Aile",
        "time": "⏰ 20:00 - 23:45",
        "schedule": [
            {
                "time": "07:30",
                "title": "İlker Karagöz ile Çalar Saat (Canlı)",
                "desc": "Sabahın ilk gazeteleri ve gündemin nabzı.",
                "current": false
            },
            {
                "time": "11:00",
                "title": "Çağla ile Yeni Bir Gün",
                "desc": "Çağla Şıkel ile sağlık, moda ve pratik bilgiler.",
                "current": false
            },
            {
                "time": "13:30",
                "title": "En Hamarat Benim",
                "desc": "Kadir Ezildi ile temizlik ve yemek yarışması.",
                "current": false
            },
            {
                "time": "16:30",
                "title": "Fatih Ürek ile Gelin Görümce",
                "desc": "Eğlenceli mutfak atışmaları ve ödüller.",
                "current": false
            },
            {
                "time": "19:00",
                "title": "Selçuk Tepeli ile NOW Ana Haber (Canlı)",
                "desc": "Günün manşetleri ve dobra yorumlar.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Gizli Bahçe (Yeni Bölüm)",
                "desc": "Demir ve Nazlı'nın velayet ve aşk savaşı.",
                "current": true
            },
            {
                "time": "23:45",
                "title": "Gizli Bahçe (Gece Tekrarı)",
                "desc": "Günün dizisinin gece yayını.",
                "current": false
            },
            {
                "time": "02:15",
                "title": "Kızıl Goncalar (Tekrar)",
                "desc": "Meryem ve Levent'in derin hesaplaşması.",
                "current": false
            }
        ],
        "program": {
            "title": "Gizli Bahçe (Yeni Bölüm)",
            "desc": "Demir ve Nazlı'nın velayet ve aşk savaşı.",
            "teletext300": "NOW (FOX) AKIŞ S.300: 20:00 GIZLI BAHÇE (YENI BÖLÜM) / 23:45 GIZLI BAHÇE (GECE TEKRARI)",
            "teletext888": "ALTYAZI S.888: '...Gizli Bahçe (Yeni Bölüm) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_now_active",
                "question": "Demir bu akşam Nazlı'nın sakladığı büyük velayet sırrını çözecek mi?",
                "options": [
                    "Gerçeği öğrenir ve yüzleşir",
                    "Nazlı bir kez daha atlatır",
                    "Aile büyükleri araya girer"
                ],
                "results": {
                    "Gerçeği öğrenir ve yüzleşir": 52,
                    "Nazlı bir kez daha atlatır": 36,
                    "Aile büyükleri araya girer": 12
                },
                "points": 20
            },
            "campaign": {
                "title": "Boyner %30 Yeni Sezon Mont Kuponu",
                "desc": "NOW TV izleyicilerine özel Boyner'de geçerli 'BOYNER30' indirim kodu.",
                "code": "BOYNER30",
                "points": 20
            }
        },
        "ad": {
            "title": "Boyner %30 Yeni Sezon Mont Kuponu",
            "desc": "NOW TV izleyicilerine özel Boyner'de geçerli 'BOYNER30' indirim kodu.",
            "teletext300": "NOW (FOX) REKLAM S.200: BOYNER %30 YENI SEZON MONT KUPONU",
            "teletext888": "REKLAM ALTYAZISI: '...NOW TV izleyicilerine özel Boyner'de geçerli 'BOYNER30' indirim kodu....'",
            "campaign": {
                "title": "Boyner %30 Yeni Sezon Mont Kuponu",
                "desc": "NOW TV izleyicilerine özel Boyner'de geçerli 'BOYNER30' indirim kodu.",
                "code": "BOYNER30",
                "points": 20
            }
        }
    },
    "tv8": {
        "id": "tv8",
        "name": "TV8",
        "genre": "Yarışma / Eğlence",
        "time": "⏰ 20:00 - 23:45",
        "schedule": [
            {
                "time": "07:15",
                "title": "8'de Sağlık",
                "desc": "Uzman doktorlarla sağlıklı yaşam rehberi.",
                "current": false
            },
            {
                "time": "09:00",
                "title": "Aramızda Kalmasın (Canlı)",
                "desc": "Magazin dünyasının en sıcak kulisleri.",
                "current": false
            },
            {
                "time": "11:15",
                "title": "Demet ve Jess ile Gel Konuşalım",
                "desc": "Gündem, sosyal medya ve eğlenceli sohbetler.",
                "current": false
            },
            {
                "time": "13:30",
                "title": "Zuhal Topal'la Yemekteyiz (Yeni Bölüm)",
                "desc": "Büyük ödül 150.000 TL için kıyasıya mutfak rekabeti.",
                "current": false
            },
            {
                "time": "16:00",
                "title": "MasterChef Türkiye (Özet)",
                "desc": "Haftanın en kritik yemekleri ve pota adayları.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "MasterChef Türkiye (Yeni Bölüm - Dokunulmazlık)",
                "desc": "Mehmet, Danilo ve Somer Şef ile haftanın ilk dokunulmazlık oyunu.",
                "current": true
            },
            {
                "time": "23:45",
                "title": "MasterChef Türkiye (Gece Özeti)",
                "desc": "Gecenin kazanan tabağı ve potaya giren isimler.",
                "current": false
            },
            {
                "time": "02:30",
                "title": "Zuhal Topal'la Yemekteyiz (Tekrar)",
                "desc": "Günün masa tartışmaları ve puanlaması.",
                "current": false
            }
        ],
        "program": {
            "title": "MasterChef Türkiye (Yeni Bölüm - Dokunulmazlık)",
            "desc": "Mehmet, Danilo ve Somer Şef ile haftanın ilk dokunulmazlık oyunu.",
            "teletext300": "TV8 AKIŞ S.300: 20:00 MASTERCHEF TÜRKIYE (YENI BÖLÜM - DOKUNULMAZLIK) / 23:45 MASTERCHEF TÜRKIYE (GECE ÖZETI)",
            "teletext888": "ALTYAZI S.888: '...MasterChef Türkiye (Yeni Bölüm - Dokunulmazlık) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_tv8_active",
                "question": "MasterChef dokunulmazlık oyununda bu akşam hangi takım kazanacak?",
                "options": [
                    "Mavi Takım",
                    "Kırmızı Takım",
                    "Kıl payı farkla Mavi"
                ],
                "results": {
                    "Mavi Takım": 56,
                    "Kırmızı Takım": 34,
                    "Kıl payı farkla Mavi": 10
                },
                "points": 20
            },
            "campaign": {
                "title": "GetirYemek'ten 120 TL İndirim Kuponu",
                "desc": "TV8 MasterChef kuşağına özel ilk siparişe 120 TL hediye indirim kodu.",
                "code": "MASTERGETIR",
                "points": 25
            }
        },
        "ad": {
            "title": "GetirYemek'ten 120 TL İndirim Kuponu",
            "desc": "TV8 MasterChef kuşağına özel ilk siparişe 120 TL hediye indirim kodu.",
            "teletext300": "TV8 REKLAM S.200: GETIRYEMEK'TEN 120 TL İNDIRIM KUPONU",
            "teletext888": "REKLAM ALTYAZISI: '...TV8 MasterChef kuşağına özel ilk siparişe 120 TL hediye indirim kodu....'",
            "campaign": {
                "title": "GetirYemek'ten 120 TL İndirim Kuponu",
                "desc": "TV8 MasterChef kuşağına özel ilk siparişe 120 TL hediye indirim kodu.",
                "code": "MASTERGETIR",
                "points": 25
            }
        }
    },
    "kanal7": {
        "id": "kanal7",
        "name": "Kanal 7",
        "genre": "Dram / Aile / Günlük",
        "time": "⏰ 18:00 - 23:45",
        "schedule": [
            {
                "time": "06:30",
                "title": "Kanal 7'de Sabah",
                "desc": "Günün ilk haberleri.",
                "current": false
            },
            {
                "time": "09:00",
                "title": "Nermin'in Enfes Mutfağı",
                "desc": "Pratik ve lezzetli yemek tarifleri.",
                "current": false
            },
            {
                "time": "11:30",
                "title": "Rüzgarlı Tepe (Tekrar)",
                "desc": "İntikam ve aşk ikilemi.",
                "current": false
            },
            {
                "time": "14:30",
                "title": "Gelin (Günlük Dizi)",
                "desc": "Törelerin gölgesinde aşk ve adalet savaşı.",
                "current": false
            },
            {
                "time": "18:00",
                "title": "Kanal 7 Ana Haber (Canlı)",
                "desc": "Tümer Doğru ile ilkeli ana haber.",
                "current": true
            },
            {
                "time": "19:00",
                "title": "Esaret (Yeni Bölüm)",
                "desc": "Orhun ve Hira'nın fırtınalı aşkı ve Demirhanlı konağının sırları.",
                "current": false
            },
            {
                "time": "21:15",
                "title": "Rüzgarlı Tepe (Yeni Bölüm)",
                "desc": "Halil ve Zeynep'in büyük intikam savaşı.",
                "current": false
            },
            {
                "time": "23:45",
                "title": "Esaret (Gece Tekrarı)",
                "desc": "Günün bölümünün tekrarı.",
                "current": false
            }
        ],
        "program": {
            "title": "Kanal 7 Ana Haber (Canlı)",
            "desc": "Tümer Doğru ile ilkeli ana haber.",
            "teletext300": "KANAL 7 AKIŞ S.300: 18:00 KANAL 7 ANA HABER (CANLI) / 23:45 ESARET (GECE TEKRARI)",
            "teletext888": "ALTYAZI S.888: '...Kanal 7 Ana Haber (Canlı) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_kanal7_active",
                "question": "Orhun bu akşam Hira'ya kurulan komployu bozabilecek mi?",
                "options": [
                    "Komployu ortaya çıkarır",
                    "Afife Hanım engeller",
                    "Hira konağı terk eder"
                ],
                "results": {
                    "Komployu ortaya çıkarır": 60,
                    "Afife Hanım engeller": 28,
                    "Hira konağı terk eder": 12
                },
                "points": 20
            },
            "campaign": {
                "title": "Karaca Mutfak ve Çeyiz Setinde %40 İndirim",
                "desc": "Kanal 7 izleyicilerine özel tencere ve yemek takımlarında geçerli indirim.",
                "code": "KARACA40",
                "points": 20
            }
        },
        "ad": {
            "title": "Karaca Mutfak ve Çeyiz Setinde %40 İndirim",
            "desc": "Kanal 7 izleyicilerine özel tencere ve yemek takımlarında geçerli indirim.",
            "teletext300": "KANAL 7 REKLAM S.200: KARACA MUTFAK VE ÇEYIZ SETINDE %40 İNDIRIM",
            "teletext888": "REKLAM ALTYAZISI: '...Kanal 7 izleyicilerine özel tencere ve yemek takımlarında geçerli indirim....'",
            "campaign": {
                "title": "Karaca Mutfak ve Çeyiz Setinde %40 İndirim",
                "desc": "Kanal 7 izleyicilerine özel tencere ve yemek takımlarında geçerli indirim.",
                "code": "KARACA40",
                "points": 20
            }
        }
    },
    "beyaztv": {
        "id": "beyaztv",
        "name": "Beyaz TV",
        "genre": "Spor / Tartışma / Magazin",
        "time": "⏰ 20:00 - 00:30",
        "schedule": [
            {
                "time": "07:30",
                "title": "Uyan Türkiyem (Canlı)",
                "desc": "Günün ilk gelişmeleri.",
                "current": false
            },
            {
                "time": "09:00",
                "title": "Söylemezsem Olmaz (Canlı)",
                "desc": "Magazin dünyasında bomba iddialar.",
                "current": false
            },
            {
                "time": "13:00",
                "title": "Beyaz Gazete",
                "desc": "Gün ortası haberleri.",
                "current": false
            },
            {
                "time": "18:30",
                "title": "Beyaz Ana Haber (Canlı)",
                "desc": "Günün sıcak gündemi.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Beyaz Futbol - Derbi Özel (Canlı)",
                "desc": "Ertem Şener, Sinan Engin, Ahmet Çakar, Rasim Ozan Kütahyalı ve Abdülkerim Durmaz ile fırtınalı futbol gecesi.",
                "current": true
            },
            {
                "time": "00:30",
                "title": "Derin Futbol (Canlı Devam)",
                "desc": "Hakem kararları, VAR tartışmaları ve sıcak kulisler.",
                "current": false
            }
        ],
        "program": {
            "title": "Beyaz Futbol - Derbi Özel (Canlı)",
            "desc": "Ertem Şener, Sinan Engin, Ahmet Çakar, Rasim Ozan Kütahyalı ve Abdülkerim Durmaz ile fırtınalı futbol gecesi.",
            "teletext300": "BEYAZ TV AKIŞ S.300: 20:00 BEYAZ FUTBOL - DERBI ÖZEL (CANLI) / 00:30 DERIN FUTBOL (CANLI DEVAM)",
            "teletext888": "ALTYAZI S.888: '...Beyaz Futbol - Derbi Özel (Canlı) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_beyaztv_active",
                "question": "Ahmet Çakar'ın bu haftaki hakem kararları yorumuna katılıyor musunuz?",
                "options": [
                    "Kesinlikle katılıyorum",
                    "Fazla abartıyor",
                    "Hakem haklıydı"
                ],
                "results": {
                    "Kesinlikle katılıyorum": 55,
                    "Fazla abartıyor": 35,
                    "Hakem haklıydı": 10
                },
                "points": 20
            },
            "campaign": {
                "title": "Puma & Adidas Kramponlarda %25 İndirim",
                "desc": "Beyaz Futbol izleyicilerine özel spor giyimde geçerli kupon kodu.",
                "code": "FUTBOL25",
                "points": 20
            }
        },
        "ad": {
            "title": "Puma & Adidas Kramponlarda %25 İndirim",
            "desc": "Beyaz Futbol izleyicilerine özel spor giyimde geçerli kupon kodu.",
            "teletext300": "BEYAZ TV REKLAM S.200: PUMA & ADIDAS KRAMPONLARDA %25 İNDIRIM",
            "teletext888": "REKLAM ALTYAZISI: '...Beyaz Futbol izleyicilerine özel spor giyimde geçerli kupon kodu....'",
            "campaign": {
                "title": "Puma & Adidas Kramponlarda %25 İndirim",
                "desc": "Beyaz Futbol izleyicilerine özel spor giyimde geçerli kupon kodu.",
                "code": "FUTBOL25",
                "points": 20
            }
        }
    },
    "trtspors": {
        "id": "trtspors",
        "name": "TRT Spor",
        "genre": "Canlı Spor & Maç",
        "time": "⏰ 20:00 - 00:30",
        "schedule": [
            {
                "time": "07:00",
                "title": "İlk Baskı (Canlı)",
                "desc": "Sabah spor gazeteleri ve özetler.",
                "current": false
            },
            {
                "time": "11:00",
                "title": "Spor Bülteni",
                "desc": "Günün sıcak gelişmeleri.",
                "current": false
            },
            {
                "time": "14:00",
                "title": "Gündem Futbol",
                "desc": "Kulüplerden antrenman ve transfer haberleri.",
                "current": false
            },
            {
                "time": "17:30",
                "title": "Spor Stüdyosu",
                "desc": "Süper Lig takımlarının son durumu.",
                "current": false
            },
            {
                "time": "19:00",
                "title": "Ana Haber Spor",
                "desc": "Dünya ve Türkiye spor gündemi.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Spor Manşet (Canlı)",
                "desc": "Cem Dizdar ve Erbatur Ergenekon ile derinlemesine futbol analizi.",
                "current": true
            },
            {
                "time": "22:30",
                "title": "Teknik Analiz (Canlı)",
                "desc": "Taktik tahtasında haftanın taktikleri ve gol analizleri.",
                "current": false
            },
            {
                "time": "00:30",
                "title": "Aktüel Futbol",
                "desc": "Günün kaçırılan golleri ve özetleri.",
                "current": false
            }
        ],
        "program": {
            "title": "Spor Manşet (Canlı)",
            "desc": "Cem Dizdar ve Erbatur Ergenekon ile derinlemesine futbol analizi.",
            "teletext300": "TRT SPOR AKIŞ S.300: 20:00 SPOR MANŞET (CANLI) / 00:30 AKTÜEL FUTBOL",
            "teletext888": "ALTYAZI S.888: '...Spor Manşet (Canlı) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_trtspors_active",
                "question": "Süper Lig'de bu haftanın en başarılı taktiğini kim sahaya yansıttı?",
                "options": [
                    "Lider takım",
                    "Haftanın sürpriz takımı",
                    "Savunma futbolu"
                ],
                "results": {
                    "Lider takım": 50,
                    "Haftanın sürpriz takımı": 38,
                    "Savunma futbolu": 12
                },
                "points": 20
            },
            "campaign": {
                "title": "Decathlon Doğa ve Futbol Ekipmanlarında %20 İndirim",
                "desc": "TRT Spor izleyicilerine özel spor aksesuarlarında geçerli indirim kodu.",
                "code": "TRTSPOR20",
                "points": 15
            }
        },
        "ad": {
            "title": "Decathlon Doğa ve Futbol Ekipmanlarında %20 İndirim",
            "desc": "TRT Spor izleyicilerine özel spor aksesuarlarında geçerli indirim kodu.",
            "teletext300": "TRT SPOR REKLAM S.200: DECATHLON DOĞA VE FUTBOL EKIPMANLARINDA %20 İNDIRIM",
            "teletext888": "REKLAM ALTYAZISI: '...TRT Spor izleyicilerine özel spor aksesuarlarında geçerli indirim kodu....'",
            "campaign": {
                "title": "Decathlon Doğa ve Futbol Ekipmanlarında %20 İndirim",
                "desc": "TRT Spor izleyicilerine özel spor aksesuarlarında geçerli indirim kodu.",
                "code": "TRTSPOR20",
                "points": 15
            }
        }
    },
    "aspor": {
        "id": "aspor",
        "name": "A Spor",
        "genre": "Canlı Spor / Transfer",
        "time": "⏰ 20:00 - 23:00",
        "schedule": [
            {
                "time": "07:00",
                "title": "Sabah Sporu (Canlı)",
                "desc": "Günün ilk spor haberleri.",
                "current": false
            },
            {
                "time": "11:00",
                "title": "Spor Ajansı",
                "desc": "Kulüp başkanlarının açıklamaları ve transfer iddiaları.",
                "current": false
            },
            {
                "time": "15:00",
                "title": "Gün Ortası Spor",
                "desc": "Antrenman sahasından canlı bağlantılar.",
                "current": false
            },
            {
                "time": "18:00",
                "title": "Ana Haber Spor",
                "desc": "Günün spor bülteni.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Takım Oyunu (Canlı)",
                "desc": "Erman Toroğlu ve usta yorumcularla canlı maç ve pozisyon değerlendirmeleri.",
                "current": true
            },
            {
                "time": "23:00",
                "title": "Son Sayfa (Canlı)",
                "desc": "Gece yarısının en sıcak transfer kulisleri.",
                "current": false
            },
            {
                "time": "01:00",
                "title": "Artı Futbol",
                "desc": "Tüm liglerin geniş özetleri.",
                "current": false
            }
        ],
        "program": {
            "title": "Takım Oyunu (Canlı)",
            "desc": "Erman Toroğlu ve usta yorumcularla canlı maç ve pozisyon değerlendirmeleri.",
            "teletext300": "A SPOR AKIŞ S.300: 20:00 TAKIM OYUNU (CANLI) / 23:00 SON SAYFA (CANLI)",
            "teletext888": "ALTYAZI S.888: '...Takım Oyunu (Canlı) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_aspor_active",
                "question": "Erman Toroğlu'nun tartışmalı penaltı pozisyonu yorumuna katılıyor musunuz?",
                "options": [
                    "Hakem kesinlikle haklıydı",
                    "Hatalı karardı",
                    "VAR müdahale etmeliydi"
                ],
                "results": {
                    "Hakem kesinlikle haklıydı": 44,
                    "Hatalı karardı": 40,
                    "VAR müdahale etmeliydi": 16
                },
                "points": 20
            },
            "campaign": {
                "title": "Tivibu Spor İlk 3 Ay Ücretsiz Kampanyası",
                "desc": "A Spor izleyicilerine özel Tivibu paketlerinde geçerli özel fırsat kodu.",
                "code": "ASPORTIVIBU",
                "points": 20
            }
        },
        "ad": {
            "title": "Tivibu Spor İlk 3 Ay Ücretsiz Kampanyası",
            "desc": "A Spor izleyicilerine özel Tivibu paketlerinde geçerli özel fırsat kodu.",
            "teletext300": "A SPOR REKLAM S.200: TIVIBU SPOR İLK 3 AY ÜCRETSIZ KAMPANYASI",
            "teletext888": "REKLAM ALTYAZISI: '...A Spor izleyicilerine özel Tivibu paketlerinde geçerli özel fırsat kodu....'",
            "campaign": {
                "title": "Tivibu Spor İlk 3 Ay Ücretsiz Kampanyası",
                "desc": "A Spor izleyicilerine özel Tivibu paketlerinde geçerli özel fırsat kodu.",
                "code": "ASPORTIVIBU",
                "points": 20
            }
        }
    },
    "haberturk": {
        "id": "haberturk",
        "name": "HaberTürk",
        "genre": "Haber / Tartışma",
        "time": "⏰ 20:00 - 23:30",
        "schedule": [
            {
                "time": "06:00",
                "title": "Güne Bakış",
                "desc": "Sabahın ilk bülteni.",
                "current": false
            },
            {
                "time": "09:00",
                "title": "Para Gündem (Canlı)",
                "desc": "Ebru Baki ile borsa, altın ve döviz analizi.",
                "current": false
            },
            {
                "time": "12:00",
                "title": "Gün Ortası Haberleri",
                "desc": "Sıcak gelişmeler.",
                "current": false
            },
            {
                "time": "18:00",
                "title": "HaberTürk Ana Haber (Canlı)",
                "desc": "Mehmet Akif Ersoy ile dosya haberler.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Teke Tek (Canlı)",
                "desc": "Fatih Altaylı ekolüyle bilim, tarih, felsefe ve jeopolitik tartışması.",
                "current": true
            },
            {
                "time": "23:30",
                "title": "Olaylar ve Görüşler (Canlı)",
                "desc": "Siyaset ve küresel gelişmeler masada.",
                "current": false
            },
            {
                "time": "01:30",
                "title": "Gece Bülteni",
                "desc": "Dünya başkentlerinden canlı bağlantılar.",
                "current": false
            }
        ],
        "program": {
            "title": "Teke Tek (Canlı)",
            "desc": "Fatih Altaylı ekolüyle bilim, tarih, felsefe ve jeopolitik tartışması.",
            "teletext300": "HABERTÜRK AKIŞ S.300: 20:00 TEKE TEK (CANLI) / 23:30 OLAYLAR VE GÖRÜŞLER (CANLI)",
            "teletext888": "ALTYAZI S.888: '...Teke Tek (Canlı) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_haberturk_active",
                "question": "Teke Tek programındaki yapay zeka ve gelecek vizyonu öngörülerine katılıyor musunuz?",
                "options": [
                    "Büyük fırsatlar doğuracak",
                    "İş gücünü tehdit edecek",
                    "Dengeli yaklaşılmalı"
                ],
                "results": {
                    "Büyük fırsatlar doğuracak": 46,
                    "İş gücünü tehdit edecek": 36,
                    "Dengeli yaklaşılmalı": 18
                },
                "points": 20
            },
            "campaign": {
                "title": "İş Bankası Maximum ile 500 TL MaxiPuan",
                "desc": "HaberTürk izleyicilerine özel Maximum Kart başvurularına 500 TL hediye puan.",
                "code": "ISBANKMAX",
                "points": 25
            }
        },
        "ad": {
            "title": "İş Bankası Maximum ile 500 TL MaxiPuan",
            "desc": "HaberTürk izleyicilerine özel Maximum Kart başvurularına 500 TL hediye puan.",
            "teletext300": "HABERTÜRK REKLAM S.200: İŞ BANKASI MAXIMUM ILE 500 TL MAXIPUAN",
            "teletext888": "REKLAM ALTYAZISI: '...HaberTürk izleyicilerine özel Maximum Kart başvurularına 500 TL hediye puan....'",
            "campaign": {
                "title": "İş Bankası Maximum ile 500 TL MaxiPuan",
                "desc": "HaberTürk izleyicilerine özel Maximum Kart başvurularına 500 TL hediye puan.",
                "code": "ISBANKMAX",
                "points": 25
            }
        }
    },
    "cnnturk": {
        "id": "cnnturk",
        "name": "CNN Türk",
        "genre": "Haber / Küresel",
        "time": "⏰ 20:00 - 23:45",
        "schedule": [
            {
                "time": "06:00",
                "title": "Güne Merhaba",
                "desc": "Sabahın ilk dünya haberleri.",
                "current": false
            },
            {
                "time": "09:00",
                "title": "Parametre",
                "desc": "Ekonominin nabzı ve piyasa yorumları.",
                "current": false
            },
            {
                "time": "13:00",
                "title": "Bugün",
                "desc": "Son dakika haberleri.",
                "current": false
            },
            {
                "time": "18:00",
                "title": "CNN Türk Ana Haber (Canlı)",
                "desc": "Fulya Öztürk ile sahadan sıcak görüntüler.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Akıl Çemberi (Canlı)",
                "desc": "Ahmet Hakan ve uzman konuklarla iç ve dış politika masada.",
                "current": true
            },
            {
                "time": "23:45",
                "title": "Gece Görüşü (Canlı)",
                "desc": "Hande Fırat ile başkent kulisleri.",
                "current": false
            },
            {
                "time": "01:30",
                "title": "Dünyadan Haberler",
                "desc": "Küresel ajans bültenleri.",
                "current": false
            }
        ],
        "program": {
            "title": "Akıl Çemberi (Canlı)",
            "desc": "Ahmet Hakan ve uzman konuklarla iç ve dış politika masada.",
            "teletext300": "CNN TÜRK AKIŞ S.300: 20:00 AKIL ÇEMBERI (CANLI) / 23:45 GECE GÖRÜŞÜ (CANLI)",
            "teletext888": "ALTYAZI S.888: '...Akıl Çemberi (Canlı) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_cnnturk_active",
                "question": "Akıl Çemberi'nde tartışılan dış politika hamleleri bölgede dengeyi nasıl etkiler?",
                "options": [
                    "Türkiye'nin ağırlığını artırır",
                    "Yeni diplomatik kapılar açar",
                    "Tansiyonu düşürür"
                ],
                "results": {
                    "Türkiye'nin ağırlığını artırır": 64,
                    "Yeni diplomatik kapılar açar": 24,
                    "Tansiyonu düşürür": 12
                },
                "points": 20
            },
            "campaign": {
                "title": "Enpara.com Sıfır Masraflı Vadeli Mevduat",
                "desc": "CNN Türk izleyicilerine özel hoş geldin faiziyle anında hesap açma imkanı.",
                "code": "ENPARAFAIZ",
                "points": 25
            }
        },
        "ad": {
            "title": "Enpara.com Sıfır Masraflı Vadeli Mevduat",
            "desc": "CNN Türk izleyicilerine özel hoş geldin faiziyle anında hesap açma imkanı.",
            "teletext300": "CNN TÜRK REKLAM S.200: ENPARA.COM SIFIR MASRAFLI VADELI MEVDUAT",
            "teletext888": "REKLAM ALTYAZISI: '...CNN Türk izleyicilerine özel hoş geldin faiziyle anında hesap açma imkanı....'",
            "campaign": {
                "title": "Enpara.com Sıfır Masraflı Vadeli Mevduat",
                "desc": "CNN Türk izleyicilerine özel hoş geldin faiziyle anında hesap açma imkanı.",
                "code": "ENPARAFAIZ",
                "points": 25
            }
        }
    },
    "ntv": {
        "id": "ntv",
        "name": "NTV",
        "genre": "Haber / Ekonomi / Kültür",
        "time": "⏰ 20:00 - 00:00",
        "schedule": [
            {
                "time": "07:00",
                "title": "Geri Sayım (Canlı)",
                "desc": "Piyasalar açılmadan önceki son durum.",
                "current": false
            },
            {
                "time": "10:00",
                "title": "Piyasa Ekranı",
                "desc": "Borsa ve şirket haberleri.",
                "current": false
            },
            {
                "time": "14:00",
                "title": "Günün İçinden",
                "desc": "Detaylı haber analizleri.",
                "current": false
            },
            {
                "time": "18:00",
                "title": "NTV Ana Haber (Canlı)",
                "desc": "Seda Öğretir ile güvenilir haber.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Yakın Plan (Canlı)",
                "desc": "Teknoloji, bilim ve yapay zeka devrimi masada.",
                "current": true
            },
            {
                "time": "22:30",
                "title": "Pasaport",
                "desc": "Dünyanın en ilginç coğrafyalarından belgesel kuşağı.",
                "current": false
            },
            {
                "time": "00:00",
                "title": "Gece Bülteni",
                "desc": "Günün kapanış haberleri.",
                "current": false
            }
        ],
        "program": {
            "title": "Yakın Plan (Canlı)",
            "desc": "Teknoloji, bilim ve yapay zeka devrimi masada.",
            "teletext300": "NTV AKIŞ S.300: 20:00 YAKIN PLAN (CANLI) / 00:00 GECE BÜLTENI",
            "teletext888": "ALTYAZI S.888: '...Yakın Plan (Canlı) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_ntv_active",
                "question": "NTV Yakın Plan'da ele alınan elektrikli araç dönüşümü Türkiye'de ne kadar sürede yaygınlaşır?",
                "options": [
                    "2-3 yıl içinde",
                    "5 yıl sonra",
                    "Daha uzun sürer"
                ],
                "results": {
                    "2-3 yıl içinde": 42,
                    "5 yıl sonra": 46,
                    "Daha uzun sürer": 12
                },
                "points": 20
            },
            "campaign": {
                "title": "Garanti BBVA Bonus'tan 300 TL Hediye",
                "desc": "NTV izleyicilerine özel mobilden Bonus kart başvurularına 300 TL nakit iade.",
                "code": "BONUSNTV",
                "points": 20
            }
        },
        "ad": {
            "title": "Garanti BBVA Bonus'tan 300 TL Hediye",
            "desc": "NTV izleyicilerine özel mobilden Bonus kart başvurularına 300 TL nakit iade.",
            "teletext300": "NTV REKLAM S.200: GARANTI BBVA BONUS'TAN 300 TL HEDIYE",
            "teletext888": "REKLAM ALTYAZISI: '...NTV izleyicilerine özel mobilden Bonus kart başvurularına 300 TL nakit iade....'",
            "campaign": {
                "title": "Garanti BBVA Bonus'tan 300 TL Hediye",
                "desc": "NTV izleyicilerine özel mobilden Bonus kart başvurularına 300 TL nakit iade.",
                "code": "BONUSNTV",
                "points": 20
            }
        }
    },
    "sozcutv": {
        "id": "sozcutv",
        "name": "Sözcü TV",
        "genre": "Haber / Gündem",
        "time": "⏰ 20:45 - 23:45",
        "schedule": [
            {
                "time": "07:00",
                "title": "Sabah Şerifleri",
                "desc": "Günün ilk manşetleri.",
                "current": false
            },
            {
                "time": "10:00",
                "title": "Sokağın Sesi",
                "desc": "Pazar yerlerinden ve esnaftan canlı röportajlar.",
                "current": false
            },
            {
                "time": "13:00",
                "title": "Haber Masası",
                "desc": "Gündemdeki davalar ve gelişmeler.",
                "current": false
            },
            {
                "time": "19:00",
                "title": "Sözcü TV Ana Haber (Canlı)",
                "desc": "Fatih Portakal ile halkın gündemi ve dobra yorumlar.",
                "current": false
            },
            {
                "time": "20:45",
                "title": "Nokta Atışı (Canlı)",
                "desc": "İpek Özbey ile araştırmacı gazetecilik dosyaları.",
                "current": true
            },
            {
                "time": "23:45",
                "title": "Gece Raporu",
                "desc": "Günün kapanış analizi.",
                "current": false
            }
        ],
        "program": {
            "title": "Nokta Atışı (Canlı)",
            "desc": "İpek Özbey ile araştırmacı gazetecilik dosyaları.",
            "teletext300": "SÖZCÜ TV AKIŞ S.300: 20:45 NOKTA ATIŞI (CANLI) / 23:45 GECE RAPORU",
            "teletext888": "ALTYAZI S.888: '...Nokta Atışı (Canlı) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_sozcutv_active",
                "question": "Fatih Portakal'ın ana haber bültenindeki emekli maaşları yorumuna katılıyor musunuz?",
                "options": [
                    "Yüzde yüz katılıyorum",
                    "Daha fazlası yapılmalı",
                    "Bütçe dengeleri gözetilmeli"
                ],
                "results": {
                    "Yüzde yüz katılıyorum": 72,
                    "Daha fazlası yapılmalı": 20,
                    "Bütçe dengeleri gözetilmeli": 8
                },
                "points": 20
            },
            "campaign": {
                "title": "Sözcü Kitabevi'nde Tüm Kitaplarda %35 İndirim",
                "desc": "Sözcü TV izleyicilerine özel 'SOZCU35' kupon koduyla anında indirim.",
                "code": "SOZCU35",
                "points": 15
            }
        },
        "ad": {
            "title": "Sözcü Kitabevi'nde Tüm Kitaplarda %35 İndirim",
            "desc": "Sözcü TV izleyicilerine özel 'SOZCU35' kupon koduyla anında indirim.",
            "teletext300": "SÖZCÜ TV REKLAM S.200: SÖZCÜ KITABEVI'NDE TÜM KITAPLARDA %35 İNDIRIM",
            "teletext888": "REKLAM ALTYAZISI: '...Sözcü TV izleyicilerine özel 'SOZCU35' kupon koduyla anında indirim....'",
            "campaign": {
                "title": "Sözcü Kitabevi'nde Tüm Kitaplarda %35 İndirim",
                "desc": "Sözcü TV izleyicilerine özel 'SOZCU35' kupon koduyla anında indirim.",
                "code": "SOZCU35",
                "points": 15
            }
        }
    },
    "halktv": {
        "id": "halktv",
        "name": "Halk TV",
        "genre": "Haber / Yorum",
        "time": "⏰ 20:00 - 23:45",
        "schedule": [
            {
                "time": "07:00",
                "title": "İsmail Küçükkaya ile Yeni Bir Sabah (Canlı)",
                "desc": "Manşetler, çalar saat ve gündem analizi.",
                "current": false
            },
            {
                "time": "11:00",
                "title": "Haber Masası",
                "desc": "Ekonomi ve meclis kulisleri.",
                "current": false
            },
            {
                "time": "18:00",
                "title": "Halk TV Ana Haber (Canlı)",
                "desc": "Ece Üner ile cesur ve tarafsız habercilik.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Kayda Geçsin (Canlı)",
                "desc": "Şule Aydın, Murat Ağırel, Timur Soykan ve Barış Pehlivan ile büyük dosyalar.",
                "current": true
            },
            {
                "time": "23:45",
                "title": "Sözüm Var (Canlı)",
                "desc": "Gece kuşağı tartışma programı.",
                "current": false
            }
        ],
        "program": {
            "title": "Kayda Geçsin (Canlı)",
            "desc": "Şule Aydın, Murat Ağırel, Timur Soykan ve Barış Pehlivan ile büyük dosyalar.",
            "teletext300": "HALK TV AKIŞ S.300: 20:00 KAYDA GEÇSIN (CANLI) / 23:45 SÖZÜM VAR (CANLI)",
            "teletext888": "ALTYAZI S.888: '...Kayda Geçsin (Canlı) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_halktv_active",
                "question": "Kayda Geçsin ekibinin ortaya çıkardığı kamu harcamaları dosyasını nasıl değerlendiriyorsunuz?",
                "options": [
                    "Yargı acilen incelemeli",
                    "Kamuoyu duyarlılığı şart",
                    "Daha derin araştırılmalı"
                ],
                "results": {
                    "Yargı acilen incelemeli": 68,
                    "Kamuoyu duyarlılığı şart": 22,
                    "Daha derin araştırılmalı": 10
                },
                "points": 20
            },
            "campaign": {
                "title": "Kırmızı Kedi Yayınevi %40 İndirim Fırsatı",
                "desc": "Halk TV izleyicilerine özel araştırma-inceleme kitaplarında geçerli kupon kodu.",
                "code": "KEDIKAT40",
                "points": 15
            }
        },
        "ad": {
            "title": "Kırmızı Kedi Yayınevi %40 İndirim Fırsatı",
            "desc": "Halk TV izleyicilerine özel araştırma-inceleme kitaplarında geçerli kupon kodu.",
            "teletext300": "HALK TV REKLAM S.200: KIRMIZI KEDI YAYINEVI %40 İNDIRIM FIRSATI",
            "teletext888": "REKLAM ALTYAZISI: '...Halk TV izleyicilerine özel araştırma-inceleme kitaplarında geçerli kupon kodu....'",
            "campaign": {
                "title": "Kırmızı Kedi Yayınevi %40 İndirim Fırsatı",
                "desc": "Halk TV izleyicilerine özel araştırma-inceleme kitaplarında geçerli kupon kodu.",
                "code": "KEDIKAT40",
                "points": 15
            }
        }
    },
    "trthaber": {
        "id": "trthaber",
        "name": "TRT Haber",
        "genre": "Kamu Haberciliği",
        "time": "⏰ 20:00 - 00:00",
        "schedule": [
            {
                "time": "06:00",
                "title": "Haber 06",
                "desc": "Sabahın ilk bülteni.",
                "current": false
            },
            {
                "time": "09:00",
                "title": "Haber Bülteni (Her Saat Başı)",
                "desc": "Türkiye'nin 81 ilinden canlı yayın.",
                "current": false
            },
            {
                "time": "14:00",
                "title": "Öğle Bülteni",
                "desc": "Bakanlıklar ve kabine açıklamaları.",
                "current": false
            },
            {
                "time": "19:00",
                "title": "TRT Haber Ana Haber (Canlı)",
                "desc": "Günün tüm gelişmeleri.",
                "current": false
            },
            {
                "time": "20:00",
                "title": "Birinci Boyut - Savunma ve Mega Projeler",
                "desc": "KAAN, Kızılelma, TCG Anadolu ve yerli teknoloji atılımları.",
                "current": true
            },
            {
                "time": "22:00",
                "title": "Satır Başı",
                "desc": "Dünya başkentlerindeki son durum.",
                "current": false
            },
            {
                "time": "00:00",
                "title": "Gece Bakışı",
                "desc": "Günün kapanış raporu.",
                "current": false
            }
        ],
        "program": {
            "title": "Birinci Boyut - Savunma ve Mega Projeler",
            "desc": "KAAN, Kızılelma, TCG Anadolu ve yerli teknoloji atılımları.",
            "teletext300": "TRT HABER AKIŞ S.300: 20:00 BIRINCI BOYUT - SAVUNMA VE MEGA PROJELER / 00:00 GECE BAKIŞI",
            "teletext888": "ALTYAZI S.888: '...Birinci Boyut - Savunma ve Mega Projeler canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_trthaber_active",
                "question": "Türkiye'nin Milli Muharip Uçağı KAAN'ın seri üretime geçiş süreci havacılık sanayimizi nasıl etkiler?",
                "options": [
                    "Küresel ligde ilk 5'e sokar",
                    "Savunmada tam bağımsızlık sağlar",
                    "İhracat rekorları kırar"
                ],
                "results": {
                    "Küresel ligde ilk 5'e sokar": 54,
                    "Savunmada tam bağımsızlık sağlar": 34,
                    "İhracat rekorları kırar": 12
                },
                "points": 20
            },
            "campaign": {
                "title": "TÜBİTAK Yayınları Popüler Bilim Kitaplarında %30 İndirim",
                "desc": "TRT Haber izleyicilerine özel bilim ve teknoloji kitaplarında geçerli kod.",
                "code": "TUBITAK30",
                "points": 15
            }
        },
        "ad": {
            "title": "TÜBİTAK Yayınları Popüler Bilim Kitaplarında %30 İndirim",
            "desc": "TRT Haber izleyicilerine özel bilim ve teknoloji kitaplarında geçerli kod.",
            "teletext300": "TRT HABER REKLAM S.200: TÜBİTAK YAYINLARI POPÜLER BILIM KITAPLARINDA %30 İNDIRIM",
            "teletext888": "REKLAM ALTYAZISI: '...TRT Haber izleyicilerine özel bilim ve teknoloji kitaplarında geçerli kod....'",
            "campaign": {
                "title": "TÜBİTAK Yayınları Popüler Bilim Kitaplarında %30 İndirim",
                "desc": "TRT Haber izleyicilerine özel bilim ve teknoloji kitaplarında geçerli kod.",
                "code": "TUBITAK30",
                "points": 15
            }
        }
    },
    "tv85": {
        "id": "tv85",
        "name": "TV8.5",
        "genre": "Avrupa Futbolu & Boks",
        "time": "⏰ 20:45 - 23:00",
        "schedule": [
            {
                "time": "08:00",
                "title": "Şampiyonlar Ligi Efsane Maçlar",
                "desc": "Tarihe geçen finaller.",
                "current": false
            },
            {
                "time": "12:00",
                "title": "Avrupa'dan Futbol",
                "desc": "Premier Lig, La Liga ve Serie A özetleri.",
                "current": false
            },
            {
                "time": "17:00",
                "title": "Maç Önü Analiz",
                "desc": "Şampiyonlar Ligi ve Konferans Ligi kadroları.",
                "current": false
            },
            {
                "time": "20:45",
                "title": "UEFA Şampiyonlar Ligi Maç Gecesi (Canlı)",
                "desc": "Devler Ligi'nde canlı maç yayınları ve stüdyo heyecanı.",
                "current": true
            },
            {
                "time": "23:00",
                "title": "Şampiyonlar Ligi Geniş Özetler (Canlı)",
                "desc": "Gecenin tüm golleri ve tartışmalı anları.",
                "current": false
            },
            {
                "time": "01:00",
                "title": "Boks Gecesi",
                "desc": "Uluslararası unvan maçları.",
                "current": false
            }
        ],
        "program": {
            "title": "UEFA Şampiyonlar Ligi Maç Gecesi (Canlı)",
            "desc": "Devler Ligi'nde canlı maç yayınları ve stüdyo heyecanı.",
            "teletext300": "TV8.5 AKIŞ S.300: 20:45 UEFA ŞAMPIYONLAR LIGI MAÇ GECESI (CANLI) / 23:00 ŞAMPIYONLAR LIGI GENIŞ ÖZETLER (CANLI)",
            "teletext888": "ALTYAZI S.888: '...UEFA Şampiyonlar Ligi Maç Gecesi (Canlı) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_tv85_active",
                "question": "Bu sezon Şampiyonlar Ligi kupasını hangi dev kulüp müzesine götürür?",
                "options": [
                    "Real Madrid",
                    "Manchester City",
                    "Bayern Münih"
                ],
                "results": {
                    "Real Madrid": 48,
                    "Manchester City": 42,
                    "Bayern Münih": 10
                },
                "points": 20
            },
            "campaign": {
                "title": "Exxen Spor Paketi İlk Ay %50 İndirim",
                "desc": "TV8.5 izleyicilerine özel Şampiyonlar Ligi ve Avrupa Ligi maçlarını canlı izleme kodu.",
                "code": "EXXEN50",
                "points": 25
            }
        },
        "ad": {
            "title": "Exxen Spor Paketi İlk Ay %50 İndirim",
            "desc": "TV8.5 izleyicilerine özel Şampiyonlar Ligi ve Avrupa Ligi maçlarını canlı izleme kodu.",
            "teletext300": "TV8.5 REKLAM S.200: EXXEN SPOR PAKETI İLK AY %50 İNDIRIM",
            "teletext888": "REKLAM ALTYAZISI: '...TV8.5 izleyicilerine özel Şampiyonlar Ligi ve Avrupa Ligi maçlarını canlı izleme kodu....'",
            "campaign": {
                "title": "Exxen Spor Paketi İlk Ay %50 İndirim",
                "desc": "TV8.5 izleyicilerine özel Şampiyonlar Ligi ve Avrupa Ligi maçlarını canlı izleme kodu.",
                "code": "EXXEN50",
                "points": 25
            }
        }
    },
    "tlc": {
        "id": "tlc",
        "name": "TLC",
        "genre": "Belgesel / Yaşam / Emlak",
        "time": "⏰ 20:30 - 01:00",
        "schedule": [
            {
                "time": "08:00",
                "title": "Kupon Avcıları",
                "desc": "Amerikan süpermarketlerinde çılgın tasarruf.",
                "current": false
            },
            {
                "time": "11:00",
                "title": "Rüya Gibi Evler",
                "desc": "Eski evlerin inanılmaz dönüşümü.",
                "current": false
            },
            {
                "time": "15:00",
                "title": "Pastacılar Krallığı",
                "desc": "Buddy Valastro dev pastalar üretiyor.",
                "current": false
            },
            {
                "time": "18:00",
                "title": "Evim Şahane Emlak",
                "desc": "Sahil kasabalarında ev arayışı.",
                "current": false
            },
            {
                "time": "20:30",
                "title": "Ağır Yaşamlar (Yeni Bölüm)",
                "desc": "Dr. Nowzaradan ve obezite hastalarının hayata dönüş mücadelesi.",
                "current": true
            },
            {
                "time": "22:30",
                "title": "Temizlik Bağımlıları",
                "desc": "Aşırı dağınık evlerin 3 günde muazzam temizliği.",
                "current": false
            },
            {
                "time": "01:00",
                "title": "Gizemli Teşhisler",
                "desc": "Tıbbın açıklamakta zorlandığı vakalar.",
                "current": false
            }
        ],
        "program": {
            "title": "Ağır Yaşamlar (Yeni Bölüm)",
            "desc": "Dr. Nowzaradan ve obezite hastalarının hayata dönüş mücadelesi.",
            "teletext300": "TLC AKIŞ S.300: 20:30 AĞIR YAŞAMLAR (YENI BÖLÜM) / 01:00 GIZEMLI TEŞHISLER",
            "teletext888": "ALTYAZI S.888: '...Ağır Yaşamlar (Yeni Bölüm) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_tlc_active",
                "question": "Dr. Nowzaradan'ın bu haftaki hastası ameliyat için gereken kiloyu verebilecek mi?",
                "options": [
                    "Sıkı diyetle başarır",
                    "Kaçamak yapar zorlanır",
                    "İkinci şansta verir"
                ],
                "results": {
                    "Sıkı diyetle başarır": 52,
                    "Kaçamak yapar zorlanır": 38,
                    "İkinci şansta verir": 10
                },
                "points": 20
            },
            "campaign": {
                "title": "IKEA Ev Dekorasyonunda 250 TL Kupon",
                "desc": "TLC Rüya Evler kuşağına özel online mobilya alışverişlerinde geçerli indirim.",
                "code": "IKEA250",
                "points": 20
            }
        },
        "ad": {
            "title": "IKEA Ev Dekorasyonunda 250 TL Kupon",
            "desc": "TLC Rüya Evler kuşağına özel online mobilya alışverişlerinde geçerli indirim.",
            "teletext300": "TLC REKLAM S.200: IKEA EV DEKORASYONUNDA 250 TL KUPON",
            "teletext888": "REKLAM ALTYAZISI: '...TLC Rüya Evler kuşağına özel online mobilya alışverişlerinde geçerli indirim....'",
            "campaign": {
                "title": "IKEA Ev Dekorasyonunda 250 TL Kupon",
                "desc": "TLC Rüya Evler kuşağına özel online mobilya alışverişlerinde geçerli indirim.",
                "code": "IKEA250",
                "points": 20
            }
        }
    },
    "dmax": {
        "id": "dmax",
        "name": "DMAX",
        "genre": "Aksiyon / Macera / Otomotiv",
        "time": "⏰ 20:30 - 01:00",
        "schedule": [
            {
                "time": "08:00",
                "title": "Tamirat Tadilat (Wheeler Dealers)",
                "desc": "Mike Brewer ve Edd China hurda arabaları yeniliyor.",
                "current": false
            },
            {
                "time": "11:00",
                "title": "Altın Peşinde (Gold Rush)",
                "desc": "Alaska'nın dondurucu nehirlerinde altın avı.",
                "current": false
            },
            {
                "time": "15:00",
                "title": "Nasıl Yapılır? (How It's Made)",
                "desc": "Fabrikaların iç yüzü ve üretim bantları.",
                "current": false
            },
            {
                "time": "18:00",
                "title": "Ağaç Ev Ustaları",
                "desc": "Doğanın kucağında devasa ahşap mimariler.",
                "current": false
            },
            {
                "time": "20:30",
                "title": "Hurda Avcıları (Yeni Bölüm)",
                "desc": "Drew Pritchard tarihi malikanelerden antika hazineler topluyor.",
                "current": true
            },
            {
                "time": "22:30",
                "title": "Ölümcül Av (Deadliest Catch)",
                "desc": "Bering Boğazı'nda dev yengeç fırtınası.",
                "current": false
            },
            {
                "time": "01:00",
                "title": "Mitoloji Avcıları (MythBusters)",
                "desc": "Efsanelerin bilimsel deneylerle testi.",
                "current": false
            }
        ],
        "program": {
            "title": "Hurda Avcıları (Yeni Bölüm)",
            "desc": "Drew Pritchard tarihi malikanelerden antika hazineler topluyor.",
            "teletext300": "DMAX AKIŞ S.300: 20:30 HURDA AVCILARI (YENI BÖLÜM) / 01:00 MITOLOJI AVCILARI (MYTHBUSTERS)",
            "teletext888": "ALTYAZI S.888: '...Hurda Avcıları (Yeni Bölüm) canlı yayın altyazı akışı yayında...'",
            "poll": {
                "id": "poll_dmax_active",
                "question": "Drew Pritchard bu akşamki eski İngiliz kalesinden karlı bir antika bulabilecek mi?",
                "options": [
                    "Muhteşem bir parça yakalar",
                    "Fiyat çok yüksek çıkar",
                    "Restorasyon masrafı aşar"
                ],
                "results": {
                    "Muhteşem bir parça yakalar": 62,
                    "Fiyat çok yüksek çıkar": 26,
                    "Restorasyon masrafı aşar": 12
                },
                "points": 20
            },
            "campaign": {
                "title": "Castrol Edge Motor Yağında %30 İndirim",
                "desc": "DMAX Otomotiv kuşağına özel tüm periyodik bakım servislerinde indirim kodu.",
                "code": "CASTROL30",
                "points": 20
            }
        },
        "ad": {
            "title": "Castrol Edge Motor Yağında %30 İndirim",
            "desc": "DMAX Otomotiv kuşağına özel tüm periyodik bakım servislerinde indirim kodu.",
            "teletext300": "DMAX REKLAM S.200: CASTROL EDGE MOTOR YAĞINDA %30 İNDIRIM",
            "teletext888": "REKLAM ALTYAZISI: '...DMAX Otomotiv kuşağına özel tüm periyodik bakım servislerinde indirim kodu....'",
            "campaign": {
                "title": "Castrol Edge Motor Yağında %30 İndirim",
                "desc": "DMAX Otomotiv kuşağına özel tüm periyodik bakım servislerinde indirim kodu.",
                "code": "CASTROL30",
                "points": 20
            }
        }
    }
};;

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

// Function to compute currently airing item based on client time
function getActiveScheduleItem(schedule) {
    if (!schedule || schedule.length === 0) return null;
    const now = new Date();
    const curMin = now.getHours() * 60 + now.getMinutes();

    function toMin(tStr) {
        const parts = tStr.split(":");
        return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    }

    let activeIdx = schedule.length - 1;
    for (let i = 0; i < schedule.length; i++) {
        if (curMin >= toMin(schedule[i].time)) {
            activeIdx = i;
        }
    }
    return { item: schedule[activeIdx], index: activeIdx };
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
            channelData._manuallySelected = true;
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

    // Otomatik Anlık Saat Senkronizasyonu (Kullanıcı manuel seçim yapmadıysa o an yayında olan programa kilitlenir)
    if (channelData.schedule && channelData.schedule.length > 0 && !channelData._manuallySelected) {
        const activeRes = getActiveScheduleItem(channelData.schedule);
        if (activeRes) {
            channelData.schedule.forEach((s, idx) => s.current = (idx === activeRes.index));
            const activeItem = activeRes.item;
            const nextItem = channelData.schedule[(activeRes.index + 1) % channelData.schedule.length];

            channelData.program.title = activeItem.title;
            if (activeItem.desc) channelData.program.desc = activeItem.desc;
            channelData.time = `⏰ ${activeItem.time} Kuşağı`;
            channelData.program.teletext300 = `${channelData.name.toUpperCase()} AKIŞ S.300: CANLI ${activeItem.time} ${activeItem.title.toUpperCase()} / ${nextItem.time} ${nextItem.title.toUpperCase()}`;
            channelData.program.teletext888 = `ALTYAZI S.888: '...${activeItem.title} canlı yayını devam ediyor...'`;
        }
    }
    
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
    } else if (targetTab === "tabFaq") {
        const body = document.querySelector(".app-body");
        if (body) body.scrollTop = 0;
        renderFaqList();
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

// ====================================================
// INVESTOR Q&A ENGINE (SORU - CEVAP MODÜLÜ)
// ====================================================

const DEFAULT_FAQS = [
    {
        id: "faq_critical_bootstrapping",
        isDefault: true,
        question: "Bu demoda canlı TV akışını ve teletekst verilerini neden doğrudan sitelerden/uydudan otomatik çekmediniz? Neden şimdi yapmadınız?",
        answerHtml: `
            <p><strong>En Net ve Şeffaf Sebep: Sıfır Maliyet (Bootstrapping) İlkesi.</strong></p>
            <p>Erken aşama bir girişimde pazar ve kullanıcı doğrulaması yapılmadan önce ağır donanım ve sunucu maliyetlerine girmek sermaye israfıdır:</p>
            <ul>
                <li><strong>Aylık 25.000 ₺+ Donanım ve Sunucu Masrafından Kaçındık:</strong> 20 ulusal kanalın 7/24 kesintisiz DVB-S2 uydu sinyalini çözmek; 4 adet profesyonel PCIe Tuner kartı, rack tipi dedicated sunucu, statik veri merkezi IP'si ve 40 Mbps kesintisiz uplink gerektirir. Kullanıcı davranışını test etmeden bu sermayeyi harcamamak bilinçli bir kurucu kararıdır.</li>
                <li><strong>Önce Ürün ve Deneyim Doğrulandı:</strong> Paramızı donanıma gömmek yerine 0 ₺ maliyetle; kullanıcı arayüzünü, 20 kanalın EPG/Teletekst akış modelini, ödül/kupon döngüsünü, anket etkileşimini ve patent başvuru dosyasını eksiksiz inşa ettik.</li>
                <li><strong>Tarayıcı Güvenliği (CORS Protokolü):</strong> Mobil cihazlardaki web tarayıcıları (Chrome, Safari vb.), güvenlik kısıtları nedeniyle TV kanallarının resmi web sitelerine arka plandan bağlanıp canlı veri kazıyamaz (Cross-Origin Resource Sharing engeli). Bunun için merkezde donanımsal bir sunucu şarttır.</li>
            </ul>
            <p><strong>Sonuç:</strong> Ürünün çalıştığını ve etkileşim modelinin tuttuğunu kanıtladık. Aradığımız tohum yatırım, tam olarak bu merkezi DVB-S2 uydu altyapısını kurmak içindir.</p>
        `
    },
    {
        id: "faq_technical_solution",
        isDefault: true,
        question: "Teknik çözümünüz tam olarak nedir? Canlı TV yayını ile mobil cihazı nasıl eşleştireceksiniz?",
        answerHtml: `
            <p><strong>Çözüm: 3 Katmanlı Hibrit Senkronizasyon Mimarisi (Patent Başvurumuz):</strong></p>
            <ul>
                <li><strong>1. Merkez DVB-S2 Tuner & Teletekst Motoru:</strong> Merkez sunucumuza takılı uydu kartları, 20 ulusal kanalın yayınından Teletekst Sayfa 300 (yayın akışı) ve Sayfa 888 (canlı altyazı) paketlerini mikrosaniyeler içinde ayrıştırıp Redis döner belleğe yazar.</li>
                <li><strong>2. Akustik ACR (Ses Parmak İzi - Shazam Prensibi):</strong> Kullanıcı uygulamayı açtığında telefonun mikrofonu odadaki TV sesinin 16kHz tepe frekanslarını (Constellation Map) çıkarır. 0.2 saniyede merkez sunucudaki ses tamponuyla eşleşerek izlenen kanalı anında tespit eder.</li>
                <li><strong>3. Altyazı NLP & Reklam Kuşağı Algılama:</strong> TV yayını ve Teletekst S.888 altyazısı anlık taranır. Reklam jingle'ı veya ses düşüşü (black frame) algılandığı anda 0.1 saniyede kullanıcının ekranına o markanın indirim kuponu ve etkileşimli anketi düşürülür.</li>
            </ul>
        `
    },
    {
        id: "faq_investment_budget",
        isDefault: true,
        question: "Bu çözümü hayata geçirmek için ne kadarlık bir yatırım gerekiyor ve bütçe nereye harcanacak?",
        answerHtml: `
            <p><strong>Tohum Yatırım İhtiyacı: 4.850.000 ₺ (~$140.000) • 12 Aylık Runway</strong></p>
            <ul>
                <li><strong>Donanım & Bulut Altyapısı (%18 - 850.000 ₺):</strong> 4 adet PCIe DVB-S2 Tuner sunucusu, Redis Ring Buffer bellek kümesi, 1 Gbps yedekli uplink ve veri merkezi barındırma.</li>
                <li><strong>Yazılım & Ses Mühendisliği (%42 - 2.050.000 ₺):</strong> 1 Kıdemli Ses/ACR Mühendisi, 1 Fullstack Backend geliştirici, 1 iOS/Swift geliştirici (12 ay maaş + donanım).</li>
                <li><strong>Patent & Hukuk (%5 - 250.000 ₺):</strong> SMK m.82 Türkiye Patenti tescil takibi ve 150 ülkede WIPO PCT uluslararası patent başvurusu (TÜBİTAK 1601 hibe destekli).</li>
                <li><strong>Kullanıcı Edinimi & B2B Markalar (%35 - 1.700.000 ₺):</strong> İlk 100.000 aktif kullanıcı kazanımı, e-ticaret ve perakende markalarıyla (Trendyol, Getir, Akbank vb.) pilot kupon fonlaması.</li>
            </ul>
        `
    },
    {
        id: "faq_risks_and_challenges",
        isDefault: true,
        question: "Karşılaşılacak en kritik riskler, teknik sorunlar ve bunlara karşı çözümleriniz nelerdir?",
        answerHtml: `
            <ul>
                <li><strong>Risk 1: Kullanıcı Mikrofon İzni Vermezse?</strong><br>
                <strong>Çözüm: Manuel Kanal ve Program Seçimi (Zorunsuz ACR).</strong> Mikrofon bir zorunluluk değil, konfordur. İzin vermek istemeyen kullanıcı ekrandaki 20 kanal logosuna veya 'Günün Akışı' listesine tek dokunuşla basarak tüm anketlere ve kuponlara manuel olarak katılabilir.</li>
                <li><strong>Risk 2: Yayın Gecikmesi (Uydu vs Kablo vs IPTV 15-40 sn Farkı)?</strong><br>
                <strong>Çözüm: 60 Saniyelik Redis Döner Bellek (Ring Buffer).</strong> Sunucumuz canlı TV sesini anlık silmez; geriye dönük 60 saniyelik kayan bir pencerede tutar. Kullanıcının sesi ister uydudan (0 sn), ister IPTV'den (30 sn gecikmeli) gelsin, sunucu geriye tarayarak gecikmeyi tamamen nötrler.</li>
                <li><strong>Risk 3: TV Kanalları veya RTÜK Bize Engel Olabilir mi?</strong><br>
                <strong>Çözüm: Re-stream Yok; Kanalların En Büyük Dostuyuz.</strong> Televizyon görüntüsü kesinlikle internete aktarılmaz (telif riski sıfırdır). Sadece havada açık yayınlanan teletekst ve ses sinyali dinlenir. Reklam arasında izleyicinin televizyon başından ayrılmasını önleyip ekrana kilitlediğimiz için kanalların reytingini ve reklam değerini artırırız.</li>
            </ul>
        `
    },
    {
        id: "faq_moat_and_competition",
        isDefault: true,
        question: "Büyük bir televizyon kanalı veya dev bir reklam ajansı bu fikri neden kopyalayamaz?",
        answerHtml: `
            <ul>
                <li><strong>1. Tarafsız Ortak Pazar Yeri:</strong> Kanal D bir uygulama çıkarsa içinde Star TV veya TRT olamaz. İzleyici her kanal için ayrı uygulama indirmez. Contexta TV tüm kanalların tek bağımsız buluşma noktasıdır.</li>
                <li><strong>2. SMK m.82 Patent Koruması:</strong> Akustik ACR + DVB Teletekst NLP çapraz eşlemesi donanımsal sistem/yöntem patenti kapsamındadır. İzinsiz kopyalayanlar fikri mülkiyet ihlaliyle karşılaşır.</li>
                <li><strong>3. Ağ Etkisi (Network Effect):</strong> İlk 100.000 izleyici ve 50+ marka ekosisteme girdikten sonra, kullanıcı ve kupon hacmini başka bir yeni oyuncunun yakalaması imkansız hale gelir.</li>
            </ul>
        `
    },
    {
        id: "faq_monetization_breakeven",
        isDefault: true,
        question: "Para kazanmaya ne zaman ve nasıl başlayacaksınız? (Gelir Modeli & Başabaş)",
        answerHtml: `
            <ul>
                <li><strong>CPA Kupon Komisyonu:</strong> TV reklamından dönüştürülen her sepet harcamasından e-ticaret ve markalardan %8 - %15 başarı komisyonu.</li>
                <li><strong>Reyting & Reaksiyon Verisi:</strong> Yapımcılara ve reklamverenlere saniyelik izleyici duygu analizi ve anket katılım raporları (B2B SaaS Veri Satışı).</li>
                <li><strong>Markalı Canlı Kuşak:</strong> Reklam kuşağı aralarında markaya özel sponsorlu bilgi yarışmaları ve ödül havuzları.</li>
                <li><strong>Başabaş Noktası (Breakeven):</strong> 7. ayda aylık 85.000 aktif kullanıcı ve 25.000 kupon kullanımıyla operasyonel kârlılık sağlanır.</li>
            </ul>
        `
    }
];

function escapeFaqHtml(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function getCustomFaqs() {
    try {
        const stored = localStorage.getItem("contexta_custom_faqs");
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        return [];
    }
}

function saveCustomFaqs(list) {
    try {
        localStorage.setItem("contexta_custom_faqs", JSON.stringify(list));
    } catch (e) {
        console.error("Custom FAQ kaydedilemedi:", e);
    }
}

function deleteCustomFaq(id) {
    if (!confirm("Bu soruyu silmek istediğinize emin misiniz?")) return;
    let list = getCustomFaqs();
    list = list.filter(item => item.id !== id);
    saveCustomFaqs(list);
    renderFaqList();
    showToast("Soru başarıyla silindi.");
}
window.deleteCustomFaq = deleteCustomFaq;

function renderFaqList() {
    const container = document.getElementById("faqItemsList");
    if (!container) return;

    const customList = getCustomFaqs();
    const allFaqs = [...DEFAULT_FAQS, ...customList];

    container.innerHTML = allFaqs.map((faq, index) => {
        const isCustom = !faq.isDefault;
        const qEscaped = escapeFaqHtml(faq.question);
        return `
            <article class="faq-doc-item" id="${faq.id}">
                <div class="faq-item-header">
                    <div class="faq-item-q-wrap">
                        <span class="faq-item-num">Soru ${index + 1}</span>
                        <h3 class="faq-item-q">${qEscaped}</h3>
                    </div>
                    <div class="faq-item-actions">
                        ${isCustom ? `<span class="faq-custom-badge">Eklenen Soru</span>` : ""}
                        ${isCustom ? `<button type="button" class="btn-faq-delete" onclick="window.deleteCustomFaq('${faq.id}')">🗑️ Sil</button>` : ""}
                    </div>
                </div>
                <div class="faq-item-body">
                    ${faq.answerHtml || `<p>${escapeFaqHtml(faq.answer || "").replace(/\n/g, "<br>")}</p>`}
                </div>
            </article>
        `;
    }).join("");
}

function initFaqModule() {
    const form = document.getElementById("faqAddForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const qInput = document.getElementById("newFaqQuestion");
            const aInput = document.getElementById("newFaqAnswer");

            const question = (qInput?.value || "").trim();
            const answer = (aInput?.value || "").trim();

            if (!question || !answer) {
                showToast("Lütfen soru ve cevabı eksiksiz doldurun.");
                return;
            }

            const newId = "faq_custom_" + Date.now();
            const newFaq = {
                id: newId,
                isDefault: false,
                question: question,
                answer: answer,
                createdAt: new Date().toISOString()
            };

            const currentCustom = getCustomFaqs();
            currentCustom.push(newFaq);
            saveCustomFaqs(currentCustom);

            if (qInput) qInput.value = "";
            if (aInput) aInput.value = "";

            renderFaqList();
            showToast("✓ Yeni soru & cevap başarıyla kaydedildi.");

            const addedEl = document.getElementById(newId);
            if (addedEl) {
                setTimeout(() => {
                    addedEl.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 50);
            }
        });
    }

    renderFaqList();
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
initFaqModule();

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
