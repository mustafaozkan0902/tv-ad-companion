#!/usr/bin/env python3
"""
Builds an accurate, comprehensive, 20-channel Turkish TV database
with full real-time scheduling (Morning, Daytime, News, Prime-Time, Late Night).
"""

import json
import datetime

CHANNELS_DATA = {
    "kanald": {
        "id": "kanald",
        "name": "Kanal D",
        "genre": "Dram / Aşk / Suç",
        "badgeEmoji": "🔴",
        "daily_schedule": [
            {"time": "07:00", "title": "Küçük Ağa (Tekrar)", "desc": "Eğlenceli aile komedisi ekranlarda."},
            {"time": "09:00", "title": "Neler Oluyor Hayatta? (Canlı)", "desc": "Hakan Ural ve Ferda Yıldırım ile günün sıcak gelişmeleri."},
            {"time": "11:00", "title": "Yaprak Dökümü", "desc": "Ali Rıza Bey ve ailesinin unutulmaz dramı."},
            {"time": "13:45", "title": "Gelinim Mutfakta (Yeni Bölüm)", "desc": "Nursel Ergin sunumuyla altın bilezikler için kıyasıya yarış."},
            {"time": "16:45", "title": "Arka Sokaklar (Tekrar)", "desc": "Rıza Baba ve efsanevi İstanbul asayiş ekibi."},
            {"time": "18:30", "title": "Kanal D Ana Haber (Canlı)", "desc": "Günün Türkiye ve dünya gündemi canlı yayında."},
            {"time": "20:00", "title": "Haysiyet (Yeni Bölüm)", "desc": "Adalet, aile bağları ve onur mücadelesi; sırlar çözülüyor."},
            {"time": "23:45", "title": "Haysiyet (Gece Tekrar Kuşağı)", "desc": "Günün sevilen prime-time yapımının gece tekrarı."},
            {"time": "02:00", "title": "Gelinim Mutfakta (Gece Tekrarı)", "desc": "Günün kaçırılan yemek tarifleri ve yarışma heyecanı."}
        ],
        "poll": {
            "id": "poll_kanald_active",
            "question": "Haysiyet bu akşamki büyük hesaplaşmada sizce kim haklı çıkacak?",
            "options": ["Geçmişin sırlarını saklayanlar", "Gerçeğin peşinden gidenler", "İntikam arayanlar"],
            "results": {"Geçmişin sırlarını saklayanlar": 28, "Gerçeğin peşinden gidenler": 54, "İntikam arayanlar": 18},
            "points": 20
        },
        "ad_campaign": {
            "title": "Akbank 25.000 TL Faizsiz Taksitli Avans",
            "desc": "Kanal D prime-time izleyicilerine özel mobilden Akbanklı olanlara sıfır faizli nakit.",
            "code": "AKBANK0FAIZ",
            "points": 25
        }
    },
    "trt1": {
        "id": "trt1",
        "name": "TRT 1",
        "genre": "Tarih / Dönem / Aile",
        "badgeEmoji": "🇹🇷",
        "daily_schedule": [
            {"time": "06:00", "title": "İstiklal Marşı & Gün Başlıyor", "desc": "Günün ilk saatlerinde haber ve kültür kuşağı."},
            {"time": "09:00", "title": "Kasaba Doktoru (Tekrar)", "desc": "Gönüllere dokunan fedakar hekimlerin hikayesi."},
            {"time": "13:15", "title": "Alişan ile Hayata Gülümse (Canlı)", "desc": "Müzik, sağlık ve hayata dair keyifli sohbetler."},
            {"time": "17:45", "title": "Lingo Türkiye (Yarışma)", "desc": "Kemal Uçar sunumuyla kelime tahmin heyecanı."},
            {"time": "19:00", "title": "TRT 1 Ana Haber (Canlı)", "desc": "Doğru, tarafsız ve ilkeli habercilik."},
            {"time": "20:00", "title": "Mehmed: Fetihler Sultanı (Yeni Bölüm)", "desc": "Sultan Mehmed Han Konstantiniyye fethi için dev şahi topların döküm emrini veriyor."},
            {"time": "23:45", "title": "Mehmed: Fetihler Sultanı (Gece Tekrarı)", "desc": "Günün tarihi destanının gece tekrarı."},
            {"time": "02:15", "title": "Gönül Dağı (Tekrar)", "desc": "Bozkırın sarı sıcağında samimi hikayeler."}
        ],
        "poll": {
            "id": "poll_trt1_active",
            "question": "Sultan Mehmed Han'ın şahi toplarla yapacağı ilk atış testi surlarda gedik açar mı?",
            "options": ["Evet, test tam başarıyla tamamlanır", "Bizanslı casuslar sabotaj dener", "Kuşatma stratejisi değişir"],
            "results": {"Evet, test tam başarıyla tamamlanır": 62, "Bizanslı casuslar sabotaj dener": 26, "Kuşatma stratejisi değişir": 12},
            "points": 20
        },
        "ad_campaign": {
            "title": "Türk Telekom Prime %30 İndirim",
            "desc": "TRT 1 izleyicilerine özel Prime ev internetinde ilk 3 ay %30 indirim fırsatı.",
            "code": "TRT30PRIME",
            "points": 20
        }
    },
    "showtv": {
        "id": "showtv",
        "name": "Show TV",
        "genre": "Aile / Komedi / Dram",
        "badgeEmoji": "🌸",
        "daily_schedule": [
            {"time": "06:00", "title": "Kendine İyi Bak (Tekrar)", "desc": "Sağlıklı yaşam ve estetik önerileri."},
            {"time": "08:00", "title": "Bu Sabah (Canlı)", "desc": "Murat Güloğlu ve Ebru Akel ile günün sıcak haberleri."},
            {"time": "12:30", "title": "Gelin Evi", "desc": "Haftanın en marifetli gelini kim olacak?"},
            {"time": "15:00", "title": "Didem Arslan Yılmaz'la Vazgeçme (Canlı)", "desc": "Kayıpların bulunduğu, sırların aydınlatıldığı canlı yayın."},
            {"time": "18:45", "title": "Show Ana Haber (Canlı)", "desc": "Rıdvan Bıyık yönetiminde günün gelişmeleri."},
            {"time": "20:00", "title": "Bahar - Uyanmaya Hazır Mısın? (Yeni Bölüm)", "desc": "Bahar'ın uyanışı ve doktorluk hayallerine geri dönüşü."},
            {"time": "23:45", "title": "Bahar (Gece Tekrar Kuşağı)", "desc": "Günün sevilen dizisinin gece tekrarı."},
            {"time": "02:15", "title": "Kızılcık Şerbeti (Tekrar)", "desc": "Farklı dünyaların fırtınalı aile dramı."}
        ],
        "poll": {
            "id": "poll_showtv_active",
            "question": "Bahar hastanedeki zorlu ameliyatta tek başına başarılı olabilecek mi?",
            "options": ["Kesinlikle başarır", "Timur müdahale etmek zorunda kalır", "Evren Hoca yardıma koşar"],
            "results": {"Kesinlikle başarır": 58, "Timur müdahale etmek zorunda kalır": 14, "Evren Hoca yardıma koşar": 28},
            "points": 20
        },
        "ad_campaign": {
            "title": "Trendyol 100 TL Alışveriş Çeki",
            "desc": "Show TV izleyicilerine özel 'SHOW100' koduyla anında 100 TL indirim hediyesi.",
            "code": "SHOW100",
            "points": 15
        }
    },
    "atv": {
        "id": "atv",
        "name": "ATV",
        "genre": "Dram / Romantik / Töre",
        "badgeEmoji": "⭐",
        "daily_schedule": [
            {"time": "07:00", "title": "Kahvaltı Haberleri (Canlı)", "desc": "Nihan Günay ile sabahın ilk bülteni."},
            {"time": "10:00", "title": "Müge Anlı ile Tatlı Sert (Canlı)", "desc": "Faili meçhul dosyalar ve kayıplar canlı yayında çözülüyor."},
            {"time": "13:00", "title": "ATV Gün Ortası", "desc": "Günün ilk yarısının özet bülteni."},
            {"time": "14:00", "title": "Mutfak Bahane", "desc": "Derya Taşbaşı ile lezzetli tarifler."},
            {"time": "16:00", "title": "Esra Erol'da (Canlı)", "desc": "Kavuşmalar, yüzleşmeler ve aile dramları ekranda."},
            {"time": "19:00", "title": "ATV Ana Haber (Canlı)", "desc": "Cem Öğretir ile Türkiye'nin en çok izlenen ana haberi."},
            {"time": "20:00", "title": "Bir Gece Masalı (Yeni Bölüm)", "desc": "Komiser Mahir ile Yörük kızı Canfeza'nın masalsı aşkı."},
            {"time": "23:45", "title": "Bir Gece Masalı (Gece Tekrarı)", "desc": "Günün dizisinin gece tekrarı."},
            {"time": "02:30", "title": "Kuruluş Osman (Tekrar)", "desc": "Osman Bey'in kutlu devlet kurma yürüyüşü."}
        ],
        "poll": {
            "id": "poll_atv_active",
            "question": "Mahir konaktaki büyük sır perdesini bu akşam aralayabilecek mi?",
            "options": ["Tüm sırları ortaya çıkarır", "Canfeza'yı korumak için susar", "Yeni bir tuzakla karşılaşır"],
            "results": {"Tüm sırları ortaya çıkarır": 48, "Canfeza'yı korumak için susar": 38, "Yeni bir tuzakla karşılaşır": 14},
            "points": 20
        },
        "ad_campaign": {
            "title": "Yeni Dacia Duster Test Sürüşü + 150 TL Yakıt",
            "desc": "ATV izleyicilerine özel test sürüşü randevusuna anında 150 TL Opet yakıt puanı.",
            "code": "DACIA2026",
            "points": 25
        }
    },
    "startv": {
        "id": "startv",
        "name": "Star TV",
        "genre": "Dram / Aşk / Aile",
        "badgeEmoji": "✨",
        "daily_schedule": [
            {"time": "07:00", "title": "Kiralık Aşk (Tekrar)", "desc": "Defne ve Ömer'in unutulmaz romantik komedisi."},
            {"time": "09:30", "title": "Sabahın Sultanı Seda Sayan (Canlı)", "desc": "Evlilikler, yüzleşmeler ve Seda Sayan enerjisi."},
            {"time": "13:30", "title": "Zahide Yetiş ile Yeniden Başlasak", "desc": "Umut veren gerçek yaşam hikayeleri."},
            {"time": "16:15", "title": "Söz (Tekrar)", "desc": "Özel Kuvvetler timinin nefes kesen operasyonları."},
            {"time": "19:00", "title": "Star Haber (Canlı)", "desc": "Nazlı Çelik ile tarafsız ana haber bülteni."},
            {"time": "20:00", "title": "Sahipsizler (Yeni Bölüm)", "desc": "Hayatta birbirine kenetlenen 6 yetim kardeşin mücadelesi."},
            {"time": "23:45", "title": "Sahipsizler (Gece Tekrar Kuşağı)", "desc": "Günün dram yapımının gece tekrarı."},
            {"time": "02:15", "title": "Yalı Çapkını (Tekrar)", "desc": "Ferit ve Seyran'ın Korhan yalısındaki fırtınası."}
        ],
        "poll": {
            "id": "poll_startv_active",
            "question": "Sahipsizler dizisinde kardeşler konağın baskılarına direnebilecek mi?",
            "options": ["Birbirlerinden asla ayrılmazlar", "Büyük kardeş fedakarlık yapar", "Beklenmedik bir akraba sahip çıkar"],
            "results": {"Birbirlerinden asla ayrılmazlar": 66, "Büyük kardeş fedakarlık yapar": 24, "Beklenmedik bir akraba sahip çıkar": 10},
            "points": 20
        },
        "ad_campaign": {
            "title": "Arzum Okka'da 400 TL Sepet İndirimi",
            "desc": "Star TV reklam kuşağına özel online kahve makinesi siparişinde anında 400 TL indirim.",
            "code": "OKKA400",
            "points": 20
        }
    },
    "now": {
        "id": "now",
        "name": "NOW (Fox)",
        "genre": "Dram / Sosyal / Aile",
        "badgeEmoji": "🦊",
        "daily_schedule": [
            {"time": "07:30", "title": "İlker Karagöz ile Çalar Saat (Canlı)", "desc": "Sabahın ilk gazeteleri ve gündemin nabzı."},
            {"time": "11:00", "title": "Çağla ile Yeni Bir Gün", "desc": "Çağla Şıkel ile sağlık, moda ve pratik bilgiler."},
            {"time": "13:30", "title": "En Hamarat Benim", "desc": "Kadir Ezildi ile temizlik ve yemek yarışması."},
            {"time": "16:30", "title": "Fatih Ürek ile Gelin Görümce", "desc": "Eğlenceli mutfak atışmaları ve ödüller."},
            {"time": "19:00", "title": "Selçuk Tepeli ile NOW Ana Haber (Canlı)", "desc": "Günün manşetleri ve dobra yorumlar."},
            {"time": "20:00", "title": "Gizli Bahçe (Yeni Bölüm)", "desc": "Demir ve Nazlı'nın velayet ve aşk savaşı."},
            {"time": "23:45", "title": "Gizli Bahçe (Gece Tekrarı)", "desc": "Günün dizisinin gece yayını."},
            {"time": "02:15", "title": "Kızıl Goncalar (Tekrar)", "desc": "Meryem ve Levent'in derin hesaplaşması."}
        ],
        "poll": {
            "id": "poll_now_active",
            "question": "Demir bu akşam Nazlı'nın sakladığı büyük velayet sırrını çözecek mi?",
            "options": ["Gerçeği öğrenir ve yüzleşir", "Nazlı bir kez daha atlatır", "Aile büyükleri araya girer"],
            "results": {"Gerçeği öğrenir ve yüzleşir": 52, "Nazlı bir kez daha atlatır": 36, "Aile büyükleri araya girer": 12},
            "points": 20
        },
        "ad_campaign": {
            "title": "Boyner %30 Yeni Sezon Mont Kuponu",
            "desc": "NOW TV izleyicilerine özel Boyner'de geçerli 'BOYNER30' indirim kodu.",
            "code": "BOYNER30",
            "points": 20
        }
    },
    "tv8": {
        "id": "tv8",
        "name": "TV8",
        "genre": "Yarışma / Eğlence",
        "badgeEmoji": "🍳",
        "daily_schedule": [
            {"time": "07:15", "title": "8'de Sağlık", "desc": "Uzman doktorlarla sağlıklı yaşam rehberi."},
            {"time": "09:00", "title": "Aramızda Kalmasın (Canlı)", "desc": "Magazin dünyasının en sıcak kulisleri."},
            {"time": "11:15", "title": "Demet ve Jess ile Gel Konuşalım", "desc": "Gündem, sosyal medya ve eğlenceli sohbetler."},
            {"time": "13:30", "title": "Zuhal Topal'la Yemekteyiz (Yeni Bölüm)", "desc": "Büyük ödül 150.000 TL için kıyasıya mutfak rekabeti."},
            {"time": "16:00", "title": "MasterChef Türkiye (Özet)", "desc": "Haftanın en kritik yemekleri ve pota adayları."},
            {"time": "20:00", "title": "MasterChef Türkiye (Yeni Bölüm - Dokunulmazlık)", "desc": "Mehmet, Danilo ve Somer Şef ile haftanın ilk dokunulmazlık oyunu."},
            {"time": "23:45", "title": "MasterChef Türkiye (Gece Özeti)", "desc": "Gecenin kazanan tabağı ve potaya giren isimler."},
            {"time": "02:30", "title": "Zuhal Topal'la Yemekteyiz (Tekrar)", "desc": "Günün masa tartışmaları ve puanlaması."}
        ],
        "poll": {
            "id": "poll_tv8_active",
            "question": "MasterChef dokunulmazlık oyununda bu akşam hangi takım kazanacak?",
            "options": ["Mavi Takım", "Kırmızı Takım", "Kıl payı farkla Mavi"],
            "results": {"Mavi Takım": 56, "Kırmızı Takım": 34, "Kıl payı farkla Mavi": 10},
            "points": 20
        },
        "ad_campaign": {
            "title": "GetirYemek'ten 120 TL İndirim Kuponu",
            "desc": "TV8 MasterChef kuşağına özel ilk siparişe 120 TL hediye indirim kodu.",
            "code": "MASTERGETIR",
            "points": 25
        }
    },
    "kanal7": {
        "id": "kanal7",
        "name": "Kanal 7",
        "genre": "Dram / Aile / Günlük",
        "badgeEmoji": "🕌",
        "daily_schedule": [
            {"time": "06:30", "title": "Kanal 7'de Sabah", "desc": "Günün ilk haberleri."},
            {"time": "09:00", "title": "Nermin'in Enfes Mutfağı", "desc": "Pratik ve lezzetli yemek tarifleri."},
            {"time": "11:30", "title": "Rüzgarlı Tepe (Tekrar)", "desc": "İntikam ve aşk ikilemi."},
            {"time": "14:30", "title": "Gelin (Günlük Dizi)", "desc": "Törelerin gölgesinde aşk ve adalet savaşı."},
            {"time": "18:00", "title": "Kanal 7 Ana Haber (Canlı)", "desc": "Tümer Doğru ile ilkeli ana haber."},
            {"time": "19:00", "title": "Esaret (Yeni Bölüm)", "desc": "Orhun ve Hira'nın fırtınalı aşkı ve Demirhanlı konağının sırları."},
            {"time": "21:15", "title": "Rüzgarlı Tepe (Yeni Bölüm)", "desc": "Halil ve Zeynep'in büyük intikam savaşı."},
            {"time": "23:45", "title": "Esaret (Gece Tekrarı)", "desc": "Günün bölümünün tekrarı."}
        ],
        "poll": {
            "id": "poll_kanal7_active",
            "question": "Orhun bu akşam Hira'ya kurulan komployu bozabilecek mi?",
            "options": ["Komployu ortaya çıkarır", "Afife Hanım engeller", "Hira konağı terk eder"],
            "results": {"Komployu ortaya çıkarır": 60, "Afife Hanım engeller": 28, "Hira konağı terk eder": 12},
            "points": 20
        },
        "ad_campaign": {
            "title": "Karaca Mutfak ve Çeyiz Setinde %40 İndirim",
            "desc": "Kanal 7 izleyicilerine özel tencere ve yemek takımlarında geçerli indirim.",
            "code": "KARACA40",
            "points": 20
        }
    },
    "beyaztv": {
        "id": "beyaztv",
        "name": "Beyaz TV",
        "genre": "Spor / Tartışma / Magazin",
        "badgeEmoji": "⚽",
        "daily_schedule": [
            {"time": "07:30", "title": "Uyan Türkiyem (Canlı)", "desc": "Günün ilk gelişmeleri."},
            {"time": "09:00", "title": "Söylemezsem Olmaz (Canlı)", "desc": "Magazin dünyasında bomba iddialar."},
            {"time": "13:00", "title": "Beyaz Gazete", "desc": "Gün ortası haberleri."},
            {"time": "18:30", "title": "Beyaz Ana Haber (Canlı)", "desc": "Günün sıcak gündemi."},
            {"time": "20:00", "title": "Beyaz Futbol - Derbi Özel (Canlı)", "desc": "Ertem Şener, Sinan Engin, Ahmet Çakar, Rasim Ozan Kütahyalı ve Abdülkerim Durmaz ile fırtınalı futbol gecesi."},
            {"time": "00:30", "title": "Derin Futbol (Canlı Devam)", "desc": "Hakem kararları, VAR tartışmaları ve sıcak kulisler."}
        ],
        "poll": {
            "id": "poll_beyaztv_active",
            "question": "Ahmet Çakar'ın bu haftaki hakem kararları yorumuna katılıyor musunuz?",
            "options": ["Kesinlikle katılıyorum", "Fazla abartıyor", "Hakem haklıydı"],
            "results": {"Kesinlikle katılıyorum": 55, "Fazla abartıyor": 35, "Hakem haklıydı": 10},
            "points": 20
        },
        "ad_campaign": {
            "title": "Puma & Adidas Kramponlarda %25 İndirim",
            "desc": "Beyaz Futbol izleyicilerine özel spor giyimde geçerli kupon kodu.",
            "code": "FUTBOL25",
            "points": 20
        }
    },
    "trtspors": {
        "id": "trtspors",
        "name": "TRT Spor",
        "genre": "Canlı Spor & Maç",
        "badgeEmoji": "🏆",
        "daily_schedule": [
            {"time": "07:00", "title": "İlk Baskı (Canlı)", "desc": "Sabah spor gazeteleri ve özetler."},
            {"time": "11:00", "title": "Spor Bülteni", "desc": "Günün sıcak gelişmeleri."},
            {"time": "14:00", "title": "Gündem Futbol", "desc": "Kulüplerden antrenman ve transfer haberleri."},
            {"time": "17:30", "title": "Spor Stüdyosu", "desc": "Süper Lig takımlarının son durumu."},
            {"time": "19:00", "title": "Ana Haber Spor", "desc": "Dünya ve Türkiye spor gündemi."},
            {"time": "20:00", "title": "Spor Manşet (Canlı)", "desc": "Cem Dizdar ve Erbatur Ergenekon ile derinlemesine futbol analizi."},
            {"time": "22:30", "title": "Teknik Analiz (Canlı)", "desc": "Taktik tahtasında haftanın taktikleri ve gol analizleri."},
            {"time": "00:30", "title": "Aktüel Futbol", "desc": "Günün kaçırılan golleri ve özetleri."}
        ],
        "poll": {
            "id": "poll_trtspors_active",
            "question": "Süper Lig'de bu haftanın en başarılı taktiğini kim sahaya yansıttı?",
            "options": ["Lider takım", "Haftanın sürpriz takımı", "Savunma futbolu"],
            "results": {"Lider takım": 50, "Haftanın sürpriz takımı": 38, "Savunma futbolu": 12},
            "points": 20
        },
        "ad_campaign": {
            "title": "Decathlon Doğa ve Futbol Ekipmanlarında %20 İndirim",
            "desc": "TRT Spor izleyicilerine özel spor aksesuarlarında geçerli indirim kodu.",
            "code": "TRTSPOR20",
            "points": 15
        }
    },
    "aspor": {
        "id": "aspor",
        "name": "A Spor",
        "genre": "Canlı Spor / Transfer",
        "badgeEmoji": "⚽",
        "daily_schedule": [
            {"time": "07:00", "title": "Sabah Sporu (Canlı)", "desc": "Günün ilk spor haberleri."},
            {"time": "11:00", "title": "Spor Ajansı", "desc": "Kulüp başkanlarının açıklamaları ve transfer iddiaları."},
            {"time": "15:00", "title": "Gün Ortası Spor", "desc": "Antrenman sahasından canlı bağlantılar."},
            {"time": "18:00", "title": "Ana Haber Spor", "desc": "Günün spor bülteni."},
            {"time": "20:00", "title": "Takım Oyunu (Canlı)", "desc": "Erman Toroğlu ve usta yorumcularla canlı maç ve pozisyon değerlendirmeleri."},
            {"time": "23:00", "title": "Son Sayfa (Canlı)", "desc": "Gece yarısının en sıcak transfer kulisleri."},
            {"time": "01:00", "title": "Artı Futbol", "desc": "Tüm liglerin geniş özetleri."}
        ],
        "poll": {
            "id": "poll_aspor_active",
            "question": "Erman Toroğlu'nun tartışmalı penaltı pozisyonu yorumuna katılıyor musunuz?",
            "options": ["Hakem kesinlikle haklıydı", "Hatalı karardı", "VAR müdahale etmeliydi"],
            "results": {"Hakem kesinlikle haklıydı": 44, "Hatalı karardı": 40, "VAR müdahale etmeliydi": 16},
            "points": 20
        },
        "ad_campaign": {
            "title": "Tivibu Spor İlk 3 Ay Ücretsiz Kampanyası",
            "desc": "A Spor izleyicilerine özel Tivibu paketlerinde geçerli özel fırsat kodu.",
            "code": "ASPORTIVIBU",
            "points": 20
        }
    },
    "haberturk": {
        "id": "haberturk",
        "name": "HaberTürk",
        "genre": "Haber / Tartışma",
        "badgeEmoji": "📰",
        "daily_schedule": [
            {"time": "06:00", "title": "Güne Bakış", "desc": "Sabahın ilk bülteni."},
            {"time": "09:00", "title": "Para Gündem (Canlı)", "desc": "Ebru Baki ile borsa, altın ve döviz analizi."},
            {"time": "12:00", "title": "Gün Ortası Haberleri", "desc": "Sıcak gelişmeler."},
            {"time": "18:00", "title": "HaberTürk Ana Haber (Canlı)", "desc": "Mehmet Akif Ersoy ile dosya haberler."},
            {"time": "20:00", "title": "Teke Tek (Canlı)", "desc": "Fatih Altaylı ekolüyle bilim, tarih, felsefe ve jeopolitik tartışması."},
            {"time": "23:30", "title": "Olaylar ve Görüşler (Canlı)", "desc": "Siyaset ve küresel gelişmeler masada."},
            {"time": "01:30", "title": "Gece Bülteni", "desc": "Dünya başkentlerinden canlı bağlantılar."}
        ],
        "poll": {
            "id": "poll_haberturk_active",
            "question": "Teke Tek programındaki yapay zeka ve gelecek vizyonu öngörülerine katılıyor musunuz?",
            "options": ["Büyük fırsatlar doğuracak", "İş gücünü tehdit edecek", "Dengeli yaklaşılmalı"],
            "results": {"Büyük fırsatlar doğuracak": 46, "İş gücünü tehdit edecek": 36, "Dengeli yaklaşılmalı": 18},
            "points": 20
        },
        "ad_campaign": {
            "title": "İş Bankası Maximum ile 500 TL MaxiPuan",
            "desc": "HaberTürk izleyicilerine özel Maximum Kart başvurularına 500 TL hediye puan.",
            "code": "ISBANKMAX",
            "points": 25
        }
    },
    "cnnturk": {
        "id": "cnnturk",
        "name": "CNN Türk",
        "genre": "Haber / Küresel",
        "badgeEmoji": "🌐",
        "daily_schedule": [
            {"time": "06:00", "title": "Güne Merhaba", "desc": "Sabahın ilk dünya haberleri."},
            {"time": "09:00", "title": "Parametre", "desc": "Ekonominin nabzı ve piyasa yorumları."},
            {"time": "13:00", "title": "Bugün", "desc": "Son dakika haberleri."},
            {"time": "18:00", "title": "CNN Türk Ana Haber (Canlı)", "desc": "Fulya Öztürk ile sahadan sıcak görüntüler."},
            {"time": "20:00", "title": "Akıl Çemberi (Canlı)", "desc": "Ahmet Hakan ve uzman konuklarla iç ve dış politika masada."},
            {"time": "23:45", "title": "Gece Görüşü (Canlı)", "desc": "Hande Fırat ile başkent kulisleri."},
            {"time": "01:30", "title": "Dünyadan Haberler", "desc": "Küresel ajans bültenleri."}
        ],
        "poll": {
            "id": "poll_cnnturk_active",
            "question": "Akıl Çemberi'nde tartışılan dış politika hamleleri bölgede dengeyi nasıl etkiler?",
            "options": ["Türkiye'nin ağırlığını artırır", "Yeni diplomatik kapılar açar", "Tansiyonu düşürür"],
            "results": {"Türkiye'nin ağırlığını artırır": 64, "Yeni diplomatik kapılar açar": 24, "Tansiyonu düşürür": 12},
            "points": 20
        },
        "ad_campaign": {
            "title": "Enpara.com Sıfır Masraflı Vadeli Mevduat",
            "desc": "CNN Türk izleyicilerine özel hoş geldin faiziyle anında hesap açma imkanı.",
            "code": "ENPARAFAIZ",
            "points": 25
        }
    },
    "ntv": {
        "id": "ntv",
        "name": "NTV",
        "genre": "Haber / Ekonomi / Kültür",
        "badgeEmoji": "🏛️",
        "daily_schedule": [
            {"time": "07:00", "title": "Geri Sayım (Canlı)", "desc": "Piyasalar açılmadan önceki son durum."},
            {"time": "10:00", "title": "Piyasa Ekranı", "desc": "Borsa ve şirket haberleri."},
            {"time": "14:00", "title": "Günün İçinden", "desc": "Detaylı haber analizleri."},
            {"time": "18:00", "title": "NTV Ana Haber (Canlı)", "desc": "Seda Öğretir ile güvenilir haber."},
            {"time": "20:00", "title": "Yakın Plan (Canlı)", "desc": "Teknoloji, bilim ve yapay zeka devrimi masada."},
            {"time": "22:30", "title": "Pasaport", "desc": "Dünyanın en ilginç coğrafyalarından belgesel kuşağı."},
            {"time": "00:00", "title": "Gece Bülteni", "desc": "Günün kapanış haberleri."}
        ],
        "poll": {
            "id": "poll_ntv_active",
            "question": "NTV Yakın Plan'da ele alınan elektrikli araç dönüşümü Türkiye'de ne kadar sürede yaygınlaşır?",
            "options": ["2-3 yıl içinde", "5 yıl sonra", "Daha uzun sürer"],
            "results": {"2-3 yıl içinde": 42, "5 yıl sonra": 46, "Daha uzun sürer": 12},
            "points": 20
        },
        "ad_campaign": {
            "title": "Garanti BBVA Bonus'tan 300 TL Hediye",
            "desc": "NTV izleyicilerine özel mobilden Bonus kart başvurularına 300 TL nakit iade.",
            "code": "BONUSNTV",
            "points": 20
        }
    },
    "sozcutv": {
        "id": "sozcutv",
        "name": "Sözcü TV",
        "genre": "Haber / Gündem",
        "badgeEmoji": "📣",
        "daily_schedule": [
            {"time": "07:00", "title": "Sabah Şerifleri", "desc": "Günün ilk manşetleri."},
            {"time": "10:00", "title": "Sokağın Sesi", "desc": "Pazar yerlerinden ve esnaftan canlı röportajlar."},
            {"time": "13:00", "title": "Haber Masası", "desc": "Gündemdeki davalar ve gelişmeler."},
            {"time": "19:00", "title": "Sözcü TV Ana Haber (Canlı)", "desc": "Fatih Portakal ile halkın gündemi ve dobra yorumlar."},
            {"time": "20:45", "title": "Nokta Atışı (Canlı)", "desc": "İpek Özbey ile araştırmacı gazetecilik dosyaları."},
            {"time": "23:45", "title": "Gece Raporu", "desc": "Günün kapanış analizi."}
        ],
        "poll": {
            "id": "poll_sozcutv_active",
            "question": "Fatih Portakal'ın ana haber bültenindeki emekli maaşları yorumuna katılıyor musunuz?",
            "options": ["Yüzde yüz katılıyorum", "Daha fazlası yapılmalı", "Bütçe dengeleri gözetilmeli"],
            "results": {"Yüzde yüz katılıyorum": 72, "Daha fazlası yapılmalı": 20, "Bütçe dengeleri gözetilmeli": 8},
            "points": 20
        },
        "ad_campaign": {
            "title": "Sözcü Kitabevi'nde Tüm Kitaplarda %35 İndirim",
            "desc": "Sözcü TV izleyicilerine özel 'SOZCU35' kupon koduyla anında indirim.",
            "code": "SOZCU35",
            "points": 15
        }
    },
    "halktv": {
        "id": "halktv",
        "name": "Halk TV",
        "genre": "Haber / Yorum",
        "badgeEmoji": "🕊️",
        "daily_schedule": [
            {"time": "07:00", "title": "İsmail Küçükkaya ile Yeni Bir Sabah (Canlı)", "desc": "Manşetler, çalar saat ve gündem analizi."},
            {"time": "11:00", "title": "Haber Masası", "desc": "Ekonomi ve meclis kulisleri."},
            {"time": "18:00", "title": "Halk TV Ana Haber (Canlı)", "desc": "Ece Üner ile cesur ve tarafsız habercilik."},
            {"time": "20:00", "title": "Kayda Geçsin (Canlı)", "desc": "Şule Aydın, Murat Ağırel, Timur Soykan ve Barış Pehlivan ile büyük dosyalar."},
            {"time": "23:45", "title": "Sözüm Var (Canlı)", "desc": "Gece kuşağı tartışma programı."}
        ],
        "poll": {
            "id": "poll_halktv_active",
            "question": "Kayda Geçsin ekibinin ortaya çıkardığı kamu harcamaları dosyasını nasıl değerlendiriyorsunuz?",
            "options": ["Yargı acilen incelemeli", "Kamuoyu duyarlılığı şart", "Daha derin araştırılmalı"],
            "results": {"Yargı acilen incelemeli": 68, "Kamuoyu duyarlılığı şart": 22, "Daha derin araştırılmalı": 10},
            "points": 20
        },
        "ad_campaign": {
            "title": "Kırmızı Kedi Yayınevi %40 İndirim Fırsatı",
            "desc": "Halk TV izleyicilerine özel araştırma-inceleme kitaplarında geçerli kupon kodu.",
            "code": "KEDIKAT40",
            "points": 15
        }
    },
    "trthaber": {
        "id": "trthaber",
        "name": "TRT Haber",
        "genre": "Kamu Haberciliği",
        "badgeEmoji": "📻",
        "daily_schedule": [
            {"time": "06:00", "title": "Haber 06", "desc": "Sabahın ilk bülteni."},
            {"time": "09:00", "title": "Haber Bülteni (Her Saat Başı)", "desc": "Türkiye'nin 81 ilinden canlı yayın."},
            {"time": "14:00", "title": "Öğle Bülteni", "desc": "Bakanlıklar ve kabine açıklamaları."},
            {"time": "19:00", "title": "TRT Haber Ana Haber (Canlı)", "desc": "Günün tüm gelişmeleri."},
            {"time": "20:00", "title": "Birinci Boyut - Savunma ve Mega Projeler", "desc": "KAAN, Kızılelma, TCG Anadolu ve yerli teknoloji atılımları."},
            {"time": "22:00", "title": "Satır Başı", "desc": "Dünya başkentlerindeki son durum."},
            {"time": "00:00", "title": "Gece Bakışı", "desc": "Günün kapanış raporu."}
        ],
        "poll": {
            "id": "poll_trthaber_active",
            "question": "Türkiye'nin Milli Muharip Uçağı KAAN'ın seri üretime geçiş süreci havacılık sanayimizi nasıl etkiler?",
            "options": ["Küresel ligde ilk 5'e sokar", "Savunmada tam bağımsızlık sağlar", "İhracat rekorları kırar"],
            "results": {"Küresel ligde ilk 5'e sokar": 54, "Savunmada tam bağımsızlık sağlar": 34, "İhracat rekorları kırar": 12},
            "points": 20
        },
        "ad_campaign": {
            "title": "TÜBİTAK Yayınları Popüler Bilim Kitaplarında %30 İndirim",
            "desc": "TRT Haber izleyicilerine özel bilim ve teknoloji kitaplarında geçerli kod.",
            "code": "TUBITAK30",
            "points": 15
        }
    },
    "tv85": {
        "id": "tv85",
        "name": "TV8.5",
        "genre": "Avrupa Futbolu & Boks",
        "badgeEmoji": "🥊",
        "daily_schedule": [
            {"time": "08:00", "title": "Şampiyonlar Ligi Efsane Maçlar", "desc": "Tarihe geçen finaller."},
            {"time": "12:00", "title": "Avrupa'dan Futbol", "desc": "Premier Lig, La Liga ve Serie A özetleri."},
            {"time": "17:00", "title": "Maç Önü Analiz", "desc": "Şampiyonlar Ligi ve Konferans Ligi kadroları."},
            {"time": "20:45", "title": "UEFA Şampiyonlar Ligi Maç Gecesi (Canlı)", "desc": "Devler Ligi'nde canlı maç yayınları ve stüdyo heyecanı."},
            {"time": "23:00", "title": "Şampiyonlar Ligi Geniş Özetler (Canlı)", "desc": "Gecenin tüm golleri ve tartışmalı anları."},
            {"time": "01:00", "title": "Boks Gecesi", "desc": "Uluslararası unvan maçları."}
        ],
        "poll": {
            "id": "poll_tv85_active",
            "question": "Bu sezon Şampiyonlar Ligi kupasını hangi dev kulüp müzesine götürür?",
            "options": ["Real Madrid", "Manchester City", "Bayern Münih"],
            "results": {"Real Madrid": 48, "Manchester City": 42, "Bayern Münih": 10},
            "points": 20
        },
        "ad_campaign": {
            "title": "Exxen Spor Paketi İlk Ay %50 İndirim",
            "desc": "TV8.5 izleyicilerine özel Şampiyonlar Ligi ve Avrupa Ligi maçlarını canlı izleme kodu.",
            "code": "EXXEN50",
            "points": 25
        }
    },
    "tlc": {
        "id": "tlc",
        "name": "TLC",
        "genre": "Belgesel / Yaşam / Emlak",
        "badgeEmoji": "🏡",
        "daily_schedule": [
            {"time": "08:00", "title": "Kupon Avcıları", "desc": "Amerikan süpermarketlerinde çılgın tasarruf."},
            {"time": "11:00", "title": "Rüya Gibi Evler", "desc": "Eski evlerin inanılmaz dönüşümü."},
            {"time": "15:00", "title": "Pastacılar Krallığı", "desc": "Buddy Valastro dev pastalar üretiyor."},
            {"time": "18:00", "title": "Evim Şahane Emlak", "desc": "Sahil kasabalarında ev arayışı."},
            {"time": "20:30", "title": "Ağır Yaşamlar (Yeni Bölüm)", "desc": "Dr. Nowzaradan ve obezite hastalarının hayata dönüş mücadelesi."},
            {"time": "22:30", "title": "Temizlik Bağımlıları", "desc": "Aşırı dağınık evlerin 3 günde muazzam temizliği."},
            {"time": "01:00", "title": "Gizemli Teşhisler", "desc": "Tıbbın açıklamakta zorlandığı vakalar."}
        ],
        "poll": {
            "id": "poll_tlc_active",
            "question": "Dr. Nowzaradan'ın bu haftaki hastası ameliyat için gereken kiloyu verebilecek mi?",
            "options": ["Sıkı diyetle başarır", "Kaçamak yapar zorlanır", "İkinci şansta verir"],
            "results": {"Sıkı diyetle başarır": 52, "Kaçamak yapar zorlanır": 38, "İkinci şansta verir": 10},
            "points": 20
        },
        "ad_campaign": {
            "title": "IKEA Ev Dekorasyonunda 250 TL Kupon",
            "desc": "TLC Rüya Evler kuşağına özel online mobilya alışverişlerinde geçerli indirim.",
            "code": "IKEA250",
            "points": 20
        }
    },
    "dmax": {
        "id": "dmax",
        "name": "DMAX",
        "genre": "Aksiyon / Macera / Otomotiv",
        "badgeEmoji": "🚗",
        "daily_schedule": [
            {"time": "08:00", "title": "Tamirat Tadilat (Wheeler Dealers)", "desc": "Mike Brewer ve Edd China hurda arabaları yeniliyor."},
            {"time": "11:00", "title": "Altın Peşinde (Gold Rush)", "desc": "Alaska'nın dondurucu nehirlerinde altın avı."},
            {"time": "15:00", "title": "Nasıl Yapılır? (How It's Made)", "desc": "Fabrikaların iç yüzü ve üretim bantları."},
            {"time": "18:00", "title": "Ağaç Ev Ustaları", "desc": "Doğanın kucağında devasa ahşap mimariler."},
            {"time": "20:30", "title": "Hurda Avcıları (Yeni Bölüm)", "desc": "Drew Pritchard tarihi malikanelerden antika hazineler topluyor."},
            {"time": "22:30", "title": "Ölümcül Av (Deadliest Catch)", "desc": "Bering Boğazı'nda dev yengeç fırtınası."},
            {"time": "01:00", "title": "Mitoloji Avcıları (MythBusters)", "desc": "Efsanelerin bilimsel deneylerle testi."}
        ],
        "poll": {
            "id": "poll_dmax_active",
            "question": "Drew Pritchard bu akşamki eski İngiliz kalesinden karlı bir antika bulabilecek mi?",
            "options": ["Muhteşem bir parça yakalar", "Fiyat çok yüksek çıkar", "Restorasyon masrafı aşar"],
            "results": {"Muhteşem bir parça yakalar": 62, "Fiyat çok yüksek çıkar": 26, "Restorasyon masrafı aşar": 12},
            "points": 20
        },
        "ad_campaign": {
            "title": "Castrol Edge Motor Yağında %30 İndirim",
            "desc": "DMAX Otomotiv kuşağına özel tüm periyodik bakım servislerinde indirim kodu.",
            "code": "CASTROL30",
            "points": 20
        }
    }
}

print(f"Loaded {len(CHANNELS_DATA)} channels successfully.")
