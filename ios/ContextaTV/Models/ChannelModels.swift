//
//  ChannelModels.swift
//  ContextaTV - Native Apple iOS Second-Screen Companion
//

import Foundation

/// Türkiye'deki Ulusal TV Kanal Modeli
public struct TVChannel: Identifiable, Codable, Hashable {
    public let id: String
    public let name: String
    public let genre: String
    public let badgeEmoji: String
    public let currentProgram: String
    public let programDescription: String
    public let teletextS300: String
    public let teletextS888: String
    public let activePoll: LivePoll?
    public let activeCoupon: RewardCoupon?
    
    public init(
        id: String,
        name: String,
        genre: String,
        badgeEmoji: String,
        currentProgram: String,
        programDescription: String,
        teletextS300: String,
        teletextS888: String,
        activePoll: LivePoll? = nil,
        activeCoupon: RewardCoupon? = nil
    ) {
        self.id = id
        self.name = name
        self.genre = genre
        self.badgeEmoji = badgeEmoji
        self.currentProgram = currentProgram
        self.programDescription = programDescription
        self.teletextS300 = teletextS300
        self.teletextS888 = teletextS888
        self.activePoll = activePoll
        self.activeCoupon = activeCoupon
    }
}

/// Canlı TV İnteraktif Anket Modeli
public struct LivePoll: Identifiable, Codable, Hashable {
    public let id: String
    public let question: String
    public let options: [String]
    public var results: [String: Int]
    public let pointsReward: Int
    public var userVotedOption: String?
    
    public init(id: String, question: String, options: [String], results: [String: Int], pointsReward: Int = 20) {
        self.id = id
        self.question = question
        self.options = options
        self.results = results
        self.pointsReward = pointsReward
        self.userVotedOption = nil
    }
}

/// TV Reklamı İndirim Kuponu (Apple Wallet Uygunluk)
public struct RewardCoupon: Identifiable, Codable, Hashable {
    public let id: String
    public let title: String
    public let description: String
    public let brandName: String
    public let discountCode: String
    public let pointsReward: Int
    public let expiresAt: String
    public var isSavedToWallet: Bool
    
    public init(
        id: String = UUID().uuidString,
        title: String,
        description: String,
        brandName: String,
        discountCode: String,
        pointsReward: Int = 25,
        expiresAt: String = "23:59'a kadar geçerli",
        isSavedToWallet: Bool = false
    ) {
        self.id = id
        self.title = title
        self.description = description
        self.brandName = brandName
        self.discountCode = discountCode
        self.pointsReward = pointsReward
        self.expiresAt = expiresAt
        self.isSavedToWallet = isSavedToWallet
    }
}

/// Yetkili Kullanıcı Oturumu (Mustafa & Alim)
public struct AppUser: Identifiable, Codable {
    public let id: String
    public let username: String
    public let displayName: String
    public let avatar: String
    public let role: String
    public var points: Int
    public var savedCoupons: [RewardCoupon]
    
    public static let authorizedAccounts: [String: String] = [
        "mustafa": "ma123",
        "alim": "ma123"
    ]
}
