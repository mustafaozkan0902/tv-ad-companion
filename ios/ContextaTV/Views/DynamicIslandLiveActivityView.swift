//
//  DynamicIslandLiveActivityView.swift
//  ContextaTV - Native Apple iOS Second-Screen Companion (ActivityKit & Dynamic Island)
//

import SwiftUI

/// Apple iPhone Dynamic Island (Dinamik Ada) & Kilit Ekranı Canlı Etkinlik (Live Activity) Arayüzü
public struct DynamicIslandLiveActivityView: View {
    public let channelName: String
    public let programTitle: String
    public let adTimeRemaining: String
    public let couponTitle: String
    public let discountCode: String
    
    public init(
        channelName: String = "Kanal D",
        programTitle: String = "Haysiyet",
        adTimeRemaining: String = "02:45",
        couponTitle: String = "Akbank 25.000 TL Faizsiz",
        discountCode: String = "AKBANK0FAIZ"
    ) {
        self.channelName = channelName
        self.programTitle = programTitle
        self.adTimeRemaining = adTimeRemaining
        self.couponTitle = couponTitle
        self.discountCode = discountCode
    }
    
    public var body: some View {
        VStack(spacing: 24) {
            
            // 1. Dinamik Ada - Genişletilmiş Görünüm (Expanded Dynamic Island)
            VStack(spacing: 12) {
                HStack {
                    Label(channelName, systemImage: "tv.fill")
                        .font(.system(size: 13, weight: .black))
                        .foregroundStyle(Color(hex: "F43F5E"))
                    
                    Spacer()
                    
                    HStack(spacing: 4) {
                        Image(systemName: "timer")
                        Text(adTimeRemaining)
                            .font(.system(size: 13, weight: .heavy, design: .monospaced))
                    }
                    .foregroundStyle(Color(hex: "FACC15"))
                }
                
                HStack(spacing: 12) {
                    VStack(alignment: .leading, spacing: 3) {
                        Text("📺 Reklam Kuşağı Fırsatı")
                            .font(.system(size: 11, weight: .bold))
                            .foregroundStyle(Color(hex: "94A3B8"))
                        
                        Text(couponTitle)
                            .font(.system(size: 14, weight: .bold))
                            .foregroundStyle(.white)
                    }
                    
                    Spacer()
                    
                    Button {} label: {
                        Text("Kuponu Yakala")
                            .font(.system(size: 12, weight: .heavy))
                            .padding(.horizontal, 10)
                            .padding(.vertical, 6)
                            .background(Color(hex: "8B5CF6"))
                            .foregroundStyle(.white)
                            .clipShape(Capsule())
                    }
                }
            }
            .padding(14)
            .background(Color.black)
            .clipShape(RoundedRectangle(cornerRadius: 32))
            .overlay(
                RoundedRectangle(cornerRadius: 32)
                    .stroke(Color.white.opacity(0.15), lineWidth: 1)
            )
            .shadow(color: .black.opacity(0.8), radius: 20)
            
            // 2. Kilit Ekranı Canlı Etkinlik Kartı (Lock Screen Widget)
            VStack(alignment: .leading, spacing: 10) {
                HStack {
                    HStack(spacing: 6) {
                        Circle().fill(Color.red).frame(width: 8, height: 8)
                        Text("CANLI TV REKLAM AKIŞI")
                            .font(.system(size: 11, weight: .black))
                            .foregroundStyle(.white)
                    }
                    
                    Spacer()
                    
                    Text("Contexta TV")
                        .font(.system(size: 11, weight: .bold))
                        .foregroundStyle(Color(hex: "94A3B8"))
                }
                
                HStack {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("\(channelName) • \(programTitle)")
                            .font(.system(size: 13, weight: .semibold))
                            .foregroundStyle(Color(hex: "CBD5E1"))
                        
                        Text(couponTitle)
                            .font(.system(size: 16, weight: .black))
                            .foregroundStyle(.white)
                    }
                    
                    Spacer()
                    
                    VStack(alignment: .trailing, spacing: 2) {
                        Text(adTimeRemaining)
                            .font(.system(size: 18, weight: .heavy, design: .monospaced))
                            .foregroundStyle(Color(hex: "FACC15"))
                        
                        Text("kaldı")
                            .font(.system(size: 10, weight: .bold))
                            .foregroundStyle(Color(hex: "94A3B8"))
                    }
                }
                
                HStack {
                    Text("KOD: \(discountCode)")
                        .font(.system(size: 13, weight: .bold, design: .monospaced))
                        .foregroundStyle(Color(hex: "F472B6"))
                        .padding(.horizontal, 10)
                        .padding(.vertical, 4)
                        .background(Color.white.opacity(0.08))
                        .clipShape(RoundedRectangle(cornerRadius: 6))
                    
                    Spacer()
                    
                    Text("Apple Cüzdan'a Kaydet ✓")
                        .font(.system(size: 12, weight: .bold))
                        .foregroundStyle(.green)
                }
            }
            .padding(16)
            .background(Color(hex: "171B26"))
            .clipShape(RoundedRectangle(cornerRadius: 22))
            .overlay(
                RoundedRectangle(cornerRadius: 22)
                    .stroke(Color.white.opacity(0.12), lineWidth: 1)
            )
        }
        .padding()
    }
}
