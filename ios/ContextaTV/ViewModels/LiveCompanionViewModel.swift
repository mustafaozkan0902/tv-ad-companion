//
//  LiveCompanionViewModel.swift
//  ContextaTV - Native Apple iOS Second-Screen Companion
//

import Foundation
import Combine

/// Canlı TV İkinci Ekran ViewModel (Swift Combine & SwiftUI)
@MainActor
public final class LiveCompanionViewModel: ObservableObject {
    @Published public var channels: [TVChannel] = []
    @Published public var selectedChannelId: String = "kanald"
    @Published public var currentUser: AppUser? = nil
    @Published public var isAuthenticated: Bool = false
    @Published public var isTeletextExpanded: Bool = false
    @Published public var alertMessage: String? = nil
    @Published public var showAlert: Bool = false
    
    public var selectedChannel: TVChannel? {
        channels.first { $0.id == selectedChannelId }
    }
    
    public init() {
        loadDefaultChannels()
        checkSavedAuth()
    }
    
    private func loadDefaultChannels() {
        self.channels = [
            TVChannel(
                id: "kanald",
                name: "Kanal D",
                genre: "Dram / Aşk / Suç",
                badgeEmoji: "🔴",
                currentProgram: "Haysiyet (Yeni Bölüm)",
                programDescription: "Adalet, aile bağları ve onur mücadelesi; gerçeğin ortaya çıkmasıyla dengeler altüst oluyor.",
                teletextS300: "KANAL D AKIŞ S.300: 20:00 HAYSIYET (CANLI YENİ BÖLÜM) / 23:45 TEKRAR",
                teletextS888: "ALTYAZI S.888: '...Gerçekler ortaya çıkmadan bu defteri kapatamazsın!... Sana hesap soracağım!...'",
                activePoll: LivePoll(
                    id: "poll_kanald_1",
                    question: "Haysiyet bu akşamki bölümde en çok hangi sahne konuşulacak?",
                    options: ["Büyük yüzleşme", "Beklenmedik itiraf", "Planların bozulması"],
                    results: ["Büyük yüzleşme": 52, "Beklenmedik itiraf": 31, "Planların bozulması": 17],
                    pointsReward: 20
                ),
                activeCoupon: RewardCoupon(
                    title: "Akbank 25.000 TL Faizsiz Nakit Avans",
                    description: "Kanal D prime-time izleyicilerine özel mobilden anında faizsiz nakit.",
                    brandName: "Akbank",
                    discountCode: "AKBANK0FAIZ",
                    pointsReward: 25
                )
            ),
            TVChannel(
                id: "trt1",
                name: "TRT 1",
                genre: "Tarih / Dram / Aile",
                badgeEmoji: "🇹🇷",
                currentProgram: "Mehmed: Fetihler Sultanı",
                programDescription: "Fatih Sultan Mehmed Han'ın cihan fethi ve İstanbul surlarındaki destanı.",
                teletextS300: "TRT TELETEXT S.300: 20:00 MEHMED FETIHLER SULTANI (CANLI) / 00:15 TEKRAR",
                teletextS888: "ALTYAZI S.888: '...Biz dağları karadan gemilerle aşarız, surları fethederiz!...'",
                activePoll: LivePoll(
                    id: "poll_trt1_1",
                    question: "Sultan Mehmed'in bu akşamki stratejik hamlesi başarılı olacak mı?",
                    options: ["Kuşatmayı yarar", "Diplomasiyi devreye sokar", "Gizli tünel kazar"],
                    results: ["Kuşatmayı yarar": 65, "Diplomasiyi devreye sokar": 22, "Gizli tünel kazar": 13],
                    pointsReward: 20
                ),
                activeCoupon: RewardCoupon(
                    title: "Türk Telekom Prime %30 İndirim",
                    description: "TRT 1 izleyicilerine özel Prime ev internetinde ilk 3 ay %30 indirim.",
                    brandName: "Türk Telekom",
                    discountCode: "TRT30PRIME",
                    pointsReward: 20
                )
            ),
            TVChannel(
                id: "showtv",
                name: "Show TV",
                genre: "Aile / Komedi / Dram",
                badgeEmoji: "🌸",
                currentProgram: "Bahar - Uyanmaya Hazır Mısın?",
                programDescription: "Bahar'ın yeniden doğuşu ve hastanede karşılaştığı büyük sırlar.",
                teletextS300: "SHOW TELETEXT S.300: 20:00 BAHAR (CANLI) / 23:30 KIZILCIK ŞERBETİ (T)",
                teletextS888: "ALTYAZI S.888: '...Bahar: Hayatımı yeniden kuracağım Timur!...'",
                activePoll: LivePoll(
                    id: "poll_show_1",
                    question: "Bahar bu akşam Timur'un oyununu bozabilecek mi?",
                    options: ["Herkesin önünde açıklar", "Sessizce delil toplar", "Evden kovar"],
                    results: ["Herkesin önünde açıklar": 58, "Sessizce delil toplar": 32, "Evden kovar": 10],
                    pointsReward: 20
                ),
                activeCoupon: RewardCoupon(
                    title: "Trendyol 100 TL Alışveriş Çeki",
                    description: "Show TV izleyicilerine özel 'SHOW100' koduyla anında 100 TL hediye.",
                    brandName: "Trendyol",
                    discountCode: "SHOW100",
                    pointsReward: 15
                )
            )
        ]
    }
    
    // Anket Oylama
    public func vote(pollId: String, option: String) {
        guard let chIndex = channels.firstIndex(where: { $0.id == selectedChannelId }),
              var poll = channels[chIndex].activePoll,
              poll.id == pollId else { return }
        
        poll.userVotedOption = option
        poll.results[option, default: 0] += 1
        
        // Puan Ekle
        if var user = currentUser {
            user.points += poll.pointsReward
            self.currentUser = user
        }
        
        // Kanalı güncelle
        channels[chIndex] = TVChannel(
            id: channels[chIndex].id,
            name: channels[chIndex].name,
            genre: channels[chIndex].genre,
            badgeEmoji: channels[chIndex].badgeEmoji,
            currentProgram: channels[chIndex].currentProgram,
            programDescription: channels[chIndex].programDescription,
            teletextS300: channels[chIndex].teletextS300,
            teletextS888: channels[chIndex].teletextS888,
            activePoll: poll,
            activeCoupon: channels[chIndex].activeCoupon
        )
        
        triggerHapticFeedback()
        showNotification(message: "🎉 +\(poll.pointsReward) Puan Kazandınız! Anket oyunuz kaydedildi.")
    }
    
    // Kuponu Apple Cüzdan'a / Hesaba Ekle
    public func saveCoupon(_ coupon: RewardCoupon) {
        guard let chIndex = channels.firstIndex(where: { $0.id == selectedChannelId }) else { return }
        var updatedCoupon = coupon
        updatedCoupon.isSavedToWallet = true
        
        if var user = currentUser {
            if !user.savedCoupons.contains(where: { $0.discountCode == coupon.discountCode }) {
                user.savedCoupons.append(updatedCoupon)
                user.points += coupon.pointsReward
                self.currentUser = user
            }
        }
        
        channels[chIndex] = TVChannel(
            id: channels[chIndex].id,
            name: channels[chIndex].name,
            genre: channels[chIndex].genre,
            badgeEmoji: channels[chIndex].badgeEmoji,
            currentProgram: channels[chIndex].currentProgram,
            programDescription: channels[chIndex].programDescription,
            teletextS300: channels[chIndex].teletextS300,
            teletextS888: channels[chIndex].teletextS888,
            activePoll: channels[chIndex].activePoll,
            activeCoupon: updatedCoupon
        )
        
        triggerHapticFeedback()
        showNotification(message: "🎟️ Kupon Apple Cüzdanınıza Eklendi! (+\(coupon.pointsReward) Puan)")
    }
    
    // Auth Kontrolü
    public func login(username: String, password: String) -> Bool {
        let cleanUser = username.trimmingCharacters(in: .whitespacesAndNewlines).lowercased()
        let cleanPass = password.trimmingCharacters(in: .whitespacesAndNewlines)
        
        if let validPass = AppUser.authorizedAccounts[cleanUser], validPass == cleanPass {
            let displayName = cleanUser == "mustafa" ? "Mustafa" : "Alim"
            let avatar = cleanUser == "mustafa" ? "🦁" : "🦊"
            
            self.currentUser = AppUser(
                id: cleanUser,
                username: cleanUser,
                displayName: displayName,
                avatar: avatar,
                role: "Kurucu Ortak",
                points: 50,
                savedCoupons: []
            )
            self.isAuthenticated = true
            UserDefaults.standard.set(cleanUser, forKey: "saved_auth_username")
            triggerHapticFeedback()
            showNotification(message: "🎉 Hoş geldin \(displayName)! Tüm özel sekmeler açıldı.")
            return true
        } else {
            return false
        }
    }
    
    public func logout() {
        self.currentUser = nil
        self.isAuthenticated = false
        UserDefaults.standard.removeObject(forKey: "saved_auth_username")
        triggerHapticFeedback()
        showNotification(message: "🔒 Oturum kapatıldı. Yalnızca Canlı TV ana ekranı görüntülenebilir.")
    }
    
    private func checkSavedAuth() {
        if let savedUser = UserDefaults.standard.string(forKey: "saved_auth_username") {
            _ = login(username: savedUser, password: AppUser.authorizedAccounts[savedUser] ?? "")
        }
    }
    
    private func triggerHapticFeedback() {
        #if canImport(UIKit)
        let generator = UINotificationFeedbackGenerator()
        generator.notificationOccurred(.success)
        #endif
    }
    
    private func showNotification(message: String) {
        self.alertMessage = message
        self.showAlert = true
    }
}
