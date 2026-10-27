# Contexta TV - Apple iOS Native Uygulaması (SwiftUI & ActivityKit)

Türkiye'nin ilk etkileşimli Canlı TV ikinci ekran (Second-Screen) companion uygulaması.

---

## 📱 Apple Ekosistemine Özel "Katil Özellikler" (Killer Features)

1. **Dynamic Island & Live Activities (ActivityKit):**
   * Kullanıcı TV izlerken telefon kilit ekranında veya Dinamik Ada'da anlık olarak aktif kanal, reklam süresi geri sayımı (`⏱️ 02:45`) ve kupon fırsatı akar.
2. **Apple Cüzdan (PassKit Entegrasyonu):**
   * TV reklamında yakalanan indirim kodları tek tıkla Apple Wallet (`.pkpass`) olarak kaydedilir; mağazaya veya e-ticarete girildiğinde bildirim verir.
3. **AVAudioEngine ile Akustik TV Ses Eşleşmesi (Shazam Tarzı ACR):**
   * Kullanıcı butona bastığında iPhone mikrofonu üzerinden 0.2 saniyede TV'nin ses frekansı (16kHz tepe spektrogramı) taranır ve TV kanalı otomatik seçilir.
4. **Haptic Feedback (Taptic Engine):**
   * Oy verildiğinde veya kupon kazanıldığında iOS titreşim motoru ile gerçekçi dokunsal geri bildirim verilir.
5. **Modern iOS 17/18/26 Mimarisi:**
   * SwiftUI + Combine + Swift 6 Clean MVVM.

---

## 🛠️ Xcode ile Nasıl Açılır?

1. Mac bilgisayarınızda **Xcode** uygulamasını açın.
2. `File` -> `Open` seçeneğinden bu klasördeki `ios/Package.swift` dosyasını veya `ios` klasörünü seçin.
3. Hedef cihaz olarak **iPhone 16 Pro / iPhone 17 Simulator** veya kendi iPhone cihazınızı seçin.
4. `Cmd + R` tuşuna basarak uygulamayı anında çalıştırabilirsiniz.

---

## 📂 Dosya Mimarisi
```
ios/ContextaTV/
├── ContextaTVApp.swift                    # Ana SwiftUI App Başlangıcı
├── Models/
│   └── ChannelModels.swift                # TVChannel, LivePoll, RewardCoupon, AppUser
├── Services/
│   └── AudioACRService.swift              # AVAudioEngine Mikrofon ACR Ses Tarayıcı
├── ViewModels/
│   └── LiveCompanionViewModel.swift       # Kanallar, Oylama, Apple Cüzdan & Auth Durumu
└── Views/
    ├── MainTabView.swift                  # 7 Sekmeli iOS Native Tab Bar & Kilit Koruması
    ├── LiveCompanionView.swift            # Canlı TV, Teletekst, Anket & Kupon Arayüzü
    ├── AuthGateModalView.swift            # Mustafa & Alim Yetkili Girişi (ma123)
    └── DynamicIslandLiveActivityView.swift # Dinamik Ada & Kilit Ekranı Canlı Etkinlik
```
