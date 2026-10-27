#!/usr/bin/env python3
"""
Contexta TV - Canlı TV Yayın Akışı ve Teletekst Güncelleyici
TRT 1, Kanal D, Show TV, Star TV, ATV, NOW, TV8 vb. kanalların
günlük/anlık yayın akışlarını derleyip channels.json çıktısı üretir.
"""

import json
import os
import datetime

# Kanalların haftalık genel prime-time akış takvimi (Yedek & Referans Matrisi)
WEEKLY_SCHEDULE = {
    "kanald": {
        "name": "Kanal D",
        "genre": "Dram / Aşk / Suç",
        "schedule_by_day": {
            0: {"title": "Uzak Şehir", "desc": "Alya ve Cihan Albora'nın Mardin'deki mücadelesi."}, # Pazartesi
            1: {"title": "Haysiyet", "desc": "Adalet, aile bağları ve onur mücadelesi."}, # Salı
            2: {"title": "Taş Kağıt Makas / Sinema Kuşağı", "desc": "Yerli ve yabancı gişe filmleri."}, # Çarşamba
            3: {"title": "İnci Taneleri", "desc": "Azem Yücedağ ve Dilber'in sürükleyici hikayesi."}, # Perşembe
            4: {"title": "Arka Sokaklar", "desc": "Rıza Baba ve efsanevi İstanbul Emniyeti asayiş ekibi."}, # Cuma
            5: {"title": "Yalan / Annem Ankara", "desc": "Büyük fedakarlıkların ve sırların dramı."}, # Cumartesi
            6: {"title": "Kanal D Pazar Sineması / Yargı Özel", "desc": "Haftanın en sevilen yapımları."} # Pazar
        }
    },
    "trt1": {
        "name": "TRT 1",
        "genre": "Tarih / Dram / Aile",
        "schedule_by_day": {
            0: {"title": "Kudüs Fatihi Selahaddin Eyyubi", "desc": "Kutsal toprakların fethi ve adalet mücadelesi."},
            1: {"title": "Mehmed: Fetihler Sultanı", "desc": "Fatih Sultan Mehmed Han'ın İstanbul ve cihan fethi."},
            2: {"title": "Kara Ağaç Destanı", "desc": "Anadolu topraklarında güç, toprak ve aşk kavgası."},
            3: {"title": "Kül Masalı / UEFA Avrupa Ligi", "desc": "Canlı futbol heyecanı ve dram kuşağı."},
            4: {"title": "Kasaba Doktoru / Sinema", "desc": "Gönüllere dokunan cerrahların hikayesi."},
            5: {"title": "Gönül Dağı", "desc": "Bozkırın ortasında Taner, Ramazan ve Veysel'in mucitlik serüveni."},
            6: {"title": "Teşkilat", "desc": "Milli İstihbarat Teşkilatı'nın vatan savunması operasyonları."}
        }
    },
    "showtv": {
        "name": "Show TV",
        "genre": "Aile / Komedi / Dram",
        "schedule_by_day": {
            0: {"title": "Deha", "desc": "Matematik dehası Devran'ın intikam ve zeka dolu planı."},
            1: {"title": "Bahar", "desc": "Bahar'ın uyanışı ve doktorluk hayallerine geri dönüşü."},
            2: {"title": "Sandık Kokusu", "desc": "Anne ve kızların geçmişten gelen hesaplaşmaları."},
            3: {"title": "Siyah Kalp", "desc": "Kapadokya'nın gizemli konaklarında büyük yüzleşme."},
            4: {"title": "Kızılcık Şerbeti", "desc": "Farklı kültürlerden iki ailenin fırtınalı ilişkileri."},
            5: {"title": "Güldür Güldür Show", "desc": "Ali Sunal ve ekibinden kahkaha dolu skeçler."},
            6: {"title": "Deha (Tekrar) / Yerli Sinema", "desc": "Haftanın en çok izlenen bölümleri."}
        }
    },
    "startv": {
        "name": "Star TV",
        "genre": "Dram / Aşk",
        "schedule_by_day": {
            0: {"title": "Ömer (Özel / Sinema Kuşağı)", "desc": "Ekranların sevilen yapımları."},
            1: {"title": "Tuzlu Kahve / Star Sineması", "desc": "Salı akşamı ekranlara gelen özel film kuşağı."},
            2: {"title": "Sahipsizler", "desc": "Hayatta birbirine tutunan 6 kardeşin acı ve umut hikayesi."},
            3: {"title": "Sakla Beni", "desc": "Çocukluktan gelen sırların gölgesinde aşk üçgeni."},
            4: {"title": "Yalı Çapkını", "desc": "Ferit ve Seyran'ın fırtınalı Korhan yalısı serüveni."},
            5: {"title": "Yalı Çapkını (Tekrar) / Sinema", "desc": "Haftanın en çok konuşulan anları."},
            6: {"title": "Çok Güzel Hareketler 2", "desc": "BKM Mutfak ekibinden skeçler."}
        }
    },
    "atv": {
        "name": "ATV",
        "genre": "Dram / Töre / Aksiyon",
        "schedule_by_day": {
            0: {"title": "Kör Nokta / Karadut", "desc": "Aşkın ve adaletin kesiştiği büyük sırlar."},
            1: {"title": "Bir Gece Masalı", "desc": "Komiser Mahir ve Yörük kızı Canfeza'nın masalsı aşkı."},
            2: {"title": "Kuruluş Osman", "desc": "Osman Bey'in kutlu devlet kurma yürüyüşü."},
            3: {"title": "Aldatmak", "desc": "Hakime Güzide Yenersoy'un ailesinin sarsıcı sırları."},
            4: {"title": "Ateş Kuşları", "desc": "Köksüz sokak çocuklarının hayata tutunma savaşı."},
            5: {"title": "Kardeşlerim", "desc": "Eren kardeşlerin hayatta kalma ve dostluk hikayesi."},
            6: {"title": "Kim Milyoner Olmak İster?", "desc": "Kenan İmirzalıoğlu ile bilgi yarışması."}
        }
    },
    "now": {
        "name": "NOW (Fox)",
        "genre": "Dram / Sosyal",
        "schedule_by_day": {
            0: {"title": "Kızıl Goncalar", "desc": "Meryem ve Levent'in inanç ve modernite arasındaki sınavı."},
            1: {"title": "Gizli Bahçe", "desc": "Nazlı ve Demir'in sırlarla dolu velayet mücadelesi."},
            2: {"title": "Leyla: Hayat... Aşk... Adalet...", "desc": "Üvey annesinden intikam almak için dönen Leyla."},
            3: {"title": "Hudutsuz Sevda", "desc": "Halil İbrahim'in Karadeniz'deki intikam ve adalet savaşı."},
            4: {"title": "Kötü Kan", "desc": "Eski polis Kartal'ın gece kulübü ve mafya arasındaki çıkmazı."},
            5: {"title": "Yabani", "desc": "Sokaklardan köklü ailesine dönen Yaman Ali'nin serüveni."},
            6: {"title": "Kirli Sepeti", "desc": "Lüks bir sitede hizmetliler ve ev sahiplerinin hayatı."}
        }
    },
    "tv8": {
        "name": "TV8",
        "genre": "Yarışma / Eğlence",
        "schedule_by_day": {
            0: {"title": "MasterChef Türkiye", "desc": "Mehmet, Danilo ve Somer şeflerle kaptanlık oyunu."},
            1: {"title": "MasterChef Türkiye", "desc": "Haftanın ilk dokunulmazlık ve eleme adayı yarışı."},
            2: {"title": "MasterChef Türkiye", "desc": "Kıyasıya takım rekabeti ve şef tabakları."},
            3: {"title": "MasterChef Türkiye", "desc": "Haftanın 3. dokunulmazlık mücadelesi."},
            4: {"title": "MasterChef Türkiye", "desc": "Bireysel dokunulmazlık ve pota heyecanı."},
            5: {"title": "MasterChef Türkiye", "desc": "Ödül oyunu ve eğlenceli mutfak düelloları."},
            6: {"title": "MasterChef Türkiye (Eleme Gecesi)", "desc": "Veda eden yarışmacının belirlendiği kritik gece."}
        }
    }
}

def generate_live_channel_database():
    now = datetime.datetime.now()
    weekday = now.weekday() # 0 = Pazartesi, 1 = Salı, ...
    hour = now.hour
    
    output = {}
    
    for ch_id, ch_info in WEEKLY_SCHEDULE.items():
        day_prog = ch_info["schedule_by_day"].get(weekday, {"title": "Özel Yayın Kuşağı", "desc": "Canlı TV yayını."})
        prog_title = day_prog["title"]
        prog_desc = day_prog["desc"]
        
        # Güncel saat dilimine göre akış durumu
        is_primetime = 19 <= hour <= 23
        status_note = "CANLI YENİ BÖLÜM" if is_primetime else "GÜNCEL YAYIN"
        
        output[ch_id] = {
            "id": ch_id,
            "name": ch_info["name"],
            "genre": ch_info["genre"],
            "time": "⏰ 20:00 - 23:45",
            "last_updated": now.strftime("%Y-%m-%d %H:%M:%S"),
            "schedule": [
                {"time": "16:45", "title": "Gündüz Kuşağı Programı", "desc": "Günün öne çıkan aktüel olayları."},
                {"time": "18:45", "title": f"{ch_info['name']} Ana Haber (Canlı)", "desc": "Türkiye ve dünya gündemi."},
                {"time": "20:00", "title": f"{prog_title} ({status_note})", "desc": prog_desc, "current": is_primetime},
                {"time": "23:45", "title": f"{prog_title} (Tekrar Kuşağı)", "desc": "Günün kaçırılan anları."}
            ],
            "program": {
                "title": f"{prog_title} - {status_note}",
                "desc": prog_desc,
                "teletext300": f"{ch_info['name'].upper()} AKIŞ S.300: 20:00 {prog_title.upper()} ({status_note}) / 23:45 TEKRAR",
                "teletext888": f"ALTYAZI S.888: '...{prog_title} canlı yayın altyazı akışı devrede...'",
                "poll": {
                    "id": f"poll_{ch_id}_{weekday}",
                    "question": f"{prog_title} bu akşamki bölümde en çok hangi sahne konuşulacak?",
                    "options": ["Büyük yüzleşme", "Beklenmedik itiraf", "Planların bozulması"],
                    "results": {"Büyük yüzleşme": 52, "Beklenmedik itiraf": 31, "Planların bozulması": 17},
                    "points": 20
                }
            }
        }
        
    return output

if __name__ == "__main__":
    data = generate_live_channel_database()
    output_path = os.path.join(os.path.dirname(__file__), "..", "channels.json")
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ Canlı kanal veritabanı başarıyla güncellendi: {output_path}")
