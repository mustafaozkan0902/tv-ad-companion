//
//  LiveCompanionView.swift
//  ContextaTV - Native Apple iOS Second-Screen Companion
//

import SwiftUI

public struct LiveCompanionView: View {
    @ObservedObject var viewModel: LiveCompanionViewModel
    @StateObject private var acrService = AudioACRService()
    @State private var showingAuthModal = false
    
    public init(viewModel: LiveCompanionViewModel) {
        self.viewModel = viewModel
    }
    
    public var body: some View {
        NavigationStack {
            ZStack {
                // Koyu Premium Arka Plan
                LinearGradient(
                    colors: [Color(hex: "0A0D14"), Color(hex: "121722"), Color(hex: "0D1117")],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
                .ignoresSafeArea()
                
                ScrollView {
                    VStack(spacing: 16) {
                        
                        // 1. Üst Kanal Seçici (Horizontal Pill List)
                        channelPickerSection
                        
                        // 2. Canlı TV Program Kartı
                        if let channel = viewModel.selectedChannel {
                            programHeroCard(channel: channel)
                            
                            // 3. Retro Teletekst Şeridi (S.300 & S.888)
                            teletextCard(channel: channel)
                            
                            // 4. Canlı İnteraktif Anket (Poll)
                            if let poll = channel.activePoll {
                                livePollCard(poll: poll)
                            }
                            
                            // 5. TV Reklamı & Apple Cüzdan Kuponu
                            if let coupon = channel.activeCoupon {
                                couponRewardCard(coupon: coupon)
                            }
                        }
                        
                        // 6. Akustik ACR Ses Eşleme Butonu (Shazam Tarzı)
                        audioSyncButton
                        
                        Spacer(minLength: 30)
                    }
                    .padding(.horizontal, 16)
                    .padding(.top, 8)
                }
            }
            .navigationTitle("Contexta TV")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    HStack(spacing: 6) {
                        Circle()
                            .fill(Color.red)
                            .frame(width: 8, height: 8)
                        Text("CANLI TV")
                            .font(.system(size: 11, weight: .black))
                            .foregroundStyle(.white)
                    }
                    .padding(.horizontal, 8)
                    .padding(.vertical, 4)
                    .background(Color.red.opacity(0.2))
                    .clipShape(Capsule())
                }
                
                ToolbarItem(placement: .topBarTrailing) {
                    Button {
                        if viewModel.isAuthenticated {
                            viewModel.logout()
                        } else {
                            showingAuthModal = true
                        }
                    } label: {
                        HStack(spacing: 4) {
                            Text(viewModel.currentUser?.avatar ?? "👤")
                            Text(viewModel.currentUser?.displayName ?? "Giriş Yap")
                                .font(.system(size: 13, weight: .bold))
                                .foregroundStyle(.white)
                        }
                        .padding(.horizontal, 10)
                        .padding(.vertical, 5)
                        .background(viewModel.isAuthenticated ? Color.green.opacity(0.2) : Color.white.opacity(0.1))
                        .overlay(
                            Capsule().stroke(viewModel.isAuthenticated ? Color.green.opacity(0.5) : Color.white.opacity(0.2), lineWidth: 1)
                        )
                        .clipShape(Capsule())
                    }
                }
            }
            .sheet(isPresented: $showingAuthModal) {
                AuthGateModalView(viewModel: viewModel)
            }
            .alert(viewModel.alertMessage ?? "Bildirim", isPresented: $viewModel.showAlert) {
                Button("Tamam", role: .cancel) {}
            }
        }
    }
    
    // MARK: - 1. Kanal Seçici
    private var channelPickerSection: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: 8) {
                ForEach(viewModel.channels) { ch in
                    let isSelected = ch.id == viewModel.selectedChannelId
                    Button {
                        withAnimation(.spring(response: 0.3, dampingFraction: 0.7)) {
                            viewModel.selectedChannelId = ch.id
                        }
                    } label: {
                        HStack(spacing: 6) {
                            Text(ch.badgeEmoji)
                            Text(ch.name)
                                .font(.system(size: 13, weight: .bold))
                        }
                        .padding(.horizontal, 14)
                        .padding(.vertical, 8)
                        .background(isSelected ? Color(hex: "8B5CF6") : Color.white.opacity(0.06))
                        .foregroundStyle(isSelected ? .white : Color(hex: "94A3B8"))
                        .clipShape(Capsule())
                        .overlay(
                            Capsule().stroke(isSelected ? Color(hex: "A78BFA") : Color.white.opacity(0.1), lineWidth: 1)
                        )
                    }
                }
            }
            .padding(.vertical, 4)
        }
    }
    
    // MARK: - 2. Program Hero Kartı
    private func programHeroCard(channel: TVChannel) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                Text(channel.genre)
                    .font(.system(size: 11, weight: .bold))
                    .foregroundStyle(Color(hex: "38BDF8"))
                    .padding(.horizontal, 8)
                    .padding(.vertical, 3)
                    .background(Color(hex: "0284C7").opacity(0.2))
                    .clipShape(RoundedRectangle(cornerRadius: 6))
                
                Spacer()
                
                Label("⏰ 20:00 - 23:45", systemImage: "clock")
                    .font(.system(size: 11, weight: .medium))
                    .foregroundStyle(Color(hex: "94A3B8"))
            }
            
            Text(channel.currentProgram)
                .font(.system(size: 20, weight: .heavy))
                .foregroundStyle(.white)
            
            Text(channel.programDescription)
                .font(.system(size: 13))
                .foregroundStyle(Color(hex: "CBD5E1"))
                .lineSpacing(3)
        }
        .padding(16)
        .background(Color(hex: "161B26"))
        .clipShape(RoundedRectangle(cornerRadius: 18))
        .overlay(
            RoundedRectangle(cornerRadius: 18)
                .stroke(Color.white.opacity(0.08), lineWidth: 1)
        )
    }
    
    // MARK: - 3. Teletekst Kartı
    private func teletextCard(channel: TVChannel) -> some View {
        VStack(alignment: .leading, spacing: 8) {
            HStack {
                Text("📟 CANLI TELETEKST S.300 & S.888")
                    .font(.system(size: 10, weight: .black, design: .monospaced))
                    .foregroundStyle(Color(hex: "22C55E"))
                
                Spacer()
                
                Button {
                    withAnimation {
                        viewModel.isTeletextExpanded.toggle()
                    }
                } label: {
                    Text(viewModel.isTeletextExpanded ? "Daralt" : "Tam Akış")
                        .font(.system(size: 10, weight: .bold))
                        .foregroundStyle(Color(hex: "22C55E"))
                }
            }
            
            Text(channel.teletextS300)
                .font(.system(size: 11, weight: .medium, design: .monospaced))
                .foregroundStyle(Color(hex: "86EFAC"))
            
            if viewModel.isTeletextExpanded {
                Divider().background(Color(hex: "22C55E").opacity(0.3))
                Text(channel.teletextS888)
                    .font(.system(size: 11, weight: .regular, design: .monospaced))
                    .foregroundStyle(Color(hex: "4ADE80"))
            }
        }
        .padding(12)
        .background(Color(hex: "08140C"))
        .clipShape(RoundedRectangle(cornerRadius: 12))
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(Color(hex: "22C55E").opacity(0.3), lineWidth: 1)
        )
    }
    
    // MARK: - 4. Canlı İnteraktif Anket (Poll)
    private func livePollCard(poll: LivePoll) -> some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Text("📊 CANLI YAYIN ANKETİ")
                    .font(.system(size: 11, weight: .black))
                    .foregroundStyle(Color(hex: "FACC15"))
                Spacer()
                Text("+\(poll.pointsReward) PUAN")
                    .font(.system(size: 11, weight: .black))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 6)
                    .padding(.vertical, 2)
                    .background(Color(hex: "EAB308"))
                    .clipShape(Capsule())
            }
            
            Text(poll.question)
                .font(.system(size: 15, weight: .bold))
                .foregroundStyle(.white)
            
            VStack(spacing: 8) {
                let totalVotes = poll.results.values.reduce(0, +)
                ForEach(poll.options, id: \.self) { opt in
                    let votes = poll.results[opt] ?? 0
                    let percent = totalVotes > 0 ? Int((Double(votes) / Double(totalVotes)) * 100) : 0
                    let isVoted = poll.userVotedOption == opt
                    
                    Button {
                        viewModel.vote(pollId: poll.id, option: opt)
                    } label: {
                        HStack {
                            Text(opt)
                                .font(.system(size: 13, weight: .semibold))
                                .foregroundStyle(isVoted ? .white : Color(hex: "E2E8F0"))
                            Spacer()
                            Text("%\(percent)")
                                .font(.system(size: 13, weight: .black, design: .monospaced))
                                .foregroundStyle(isVoted ? Color(hex: "FACC15") : Color(hex: "94A3B8"))
                        }
                        .padding(.horizontal, 14)
                        .padding(.vertical, 10)
                        .background(
                            GeometryReader { geo in
                                ZStack(alignment: .leading) {
                                    Color.white.opacity(0.05)
                                    Color(hex: isVoted ? "8B5CF6" : "334155")
                                        .opacity(0.3)
                                        .frame(width: geo.size.width * CGFloat(percent) / 100)
                                }
                            }
                        )
                        .clipShape(RoundedRectangle(cornerRadius: 10))
                        .overlay(
                            RoundedRectangle(cornerRadius: 10)
                                .stroke(isVoted ? Color(hex: "8B5CF6") : Color.white.opacity(0.1), lineWidth: isVoted ? 1.5 : 1)
                        )
                    }
                    .disabled(poll.userVotedOption != nil)
                }
            }
        }
        .padding(16)
        .background(Color(hex: "161B26"))
        .clipShape(RoundedRectangle(cornerRadius: 18))
        .overlay(
            RoundedRectangle(cornerRadius: 18).stroke(Color(hex: "EAB308").opacity(0.2), lineWidth: 1)
        )
    }
    
    // MARK: - 5. TV Reklam Kuponu & Apple Wallet Kartı
    private func couponRewardCard(coupon: RewardCoupon) -> some View {
        VStack(alignment: .leading, spacing: 10) {
            HStack {
                Label("REKLAM KUŞAĞI FIRSATI", systemImage: "tag.fill")
                    .font(.system(size: 11, weight: .black))
                    .foregroundStyle(Color(hex: "F472B6"))
                Spacer()
                Text("+\(coupon.pointsReward) PUAN")
                    .font(.system(size: 10, weight: .heavy))
                    .foregroundStyle(Color(hex: "F472B6"))
            }
            
            Text(coupon.title)
                .font(.system(size: 16, weight: .bold))
                .foregroundStyle(.white)
            
            Text(coupon.description)
                .font(.system(size: 12))
                .foregroundStyle(Color(hex: "94A3B8"))
            
            HStack {
                Text(coupon.discountCode)
                    .font(.system(size: 15, weight: .black, design: .monospaced))
                    .foregroundStyle(.white)
                    .padding(.horizontal, 12)
                    .padding(.vertical, 6)
                    .background(Color.white.opacity(0.1))
                    .clipShape(RoundedRectangle(cornerRadius: 8))
                
                Spacer()
                
                Button {
                    viewModel.saveCoupon(coupon)
                } label: {
                    HStack(spacing: 6) {
                        Image(systemName: "wallet.pass.fill")
                        Text(coupon.isSavedToWallet ? "Apple Cüzdan'da ✓" : "Apple Cüzdan'a Ekle")
                            .font(.system(size: 12, weight: .bold))
                    }
                    .padding(.horizontal, 12)
                    .padding(.vertical, 8)
                    .background(coupon.isSavedToWallet ? Color.green : Color.black)
                    .foregroundStyle(.white)
                    .clipShape(RoundedRectangle(cornerRadius: 8))
                    .overlay(
                        RoundedRectangle(cornerRadius: 8)
                            .stroke(Color.white.opacity(0.2), lineWidth: 1)
                    )
                }
                .disabled(coupon.isSavedToWallet)
            }
        }
        .padding(16)
        .background(
            LinearGradient(colors: [Color(hex: "23141F"), Color(hex: "171A24")], startPoint: .topLeading, endPoint: .bottomTrailing)
        )
        .clipShape(RoundedRectangle(cornerRadius: 18))
        .overlay(
            RoundedRectangle(cornerRadius: 18).stroke(Color(hex: "EC4899").opacity(0.3), lineWidth: 1)
        )
    }
    
    // MARK: - 6. Akustik ACR Ses Eşleme Butonu (Shazam Tarzı)
    private var audioSyncButton: some View {
        Button {
            if acrService.isListening {
                acrService.stopListening()
            } else {
                acrService.startAcousticListening { result in
                    if case .success(let matchedId) = result {
                        viewModel.selectedChannelId = matchedId
                    }
                }
            }
        } label: {
            HStack(spacing: 10) {
                Image(systemName: acrService.isListening ? "waveform" : "mic.fill")
                    .font(.system(size: 16, weight: .bold))
                    .symbolEffect(.variableColor.iterative, isActive: acrService.isListening)
                
                Text(acrService.isListening ? "TV Sesi Dinleniyor... (0.2s)" : "Televizyonun Sesini Dinle & Eşle")
                    .font(.system(size: 14, weight: .bold))
            }
            .frame(maxWidth: .infinity)
            .padding(.vertical, 14)
            .background(
                LinearGradient(colors: [Color(hex: "8B5CF6"), Color(hex: "6366F1")], startPoint: .leading, endPoint: .trailing)
            )
            .foregroundStyle(.white)
            .clipShape(RoundedRectangle(cornerRadius: 14))
            .shadow(color: Color(hex: "8B5CF6").opacity(0.3), radius: 10, y: 4)
        }
    }
}

// MARK: - Hex Color Helper
extension Color {
    init(hex: String) {
        let scanner = Scanner(string: hex)
        var rgbValue: UInt64 = 0
        scanner.scanHexInt64(&rgbValue)
        let r = Double((rgbValue & 0xFF0000) >> 16) / 255.0
        let g = Double((rgbValue & 0x00FF00) >> 8) / 255.0
        let b = Double(rgbValue & 0x0000FF) / 255.0
        self.init(red: r, green: g, blue: b)
    }
}
