//
//  MainTabView.swift
//  ContextaTV - Native Apple iOS Second-Screen Companion
//

import SwiftUI

public struct MainTabView: View {
    @StateObject private var viewModel = LiveCompanionViewModel()
    @State private var selectedTab: Int = 0
    @State private var showingAuthGate = false
    @State private var pendingProtectedTab: Int? = nil
    
    public init() {}
    
    public var body: some View {
        TabView(selection: $selectedTab) {
            // TAB 1: Canlı TV (Herkese Açık Ana Ekran)
            LiveCompanionView(viewModel: viewModel)
                .tabItem {
                    Label("Canlı TV", systemImage: "tv.fill")
                }
                .tag(0)
            
            // TAB 2: Apple Cüzdan (Korumalı)
            walletTab
                .tabItem {
                    Label(viewModel.isAuthenticated ? "Cüzdan" : "🔒 Cüzdan", systemImage: "wallet.pass.fill")
                }
                .tag(1)
            
            // TAB 3: Sıralama (Korumalı)
            leaderboardTab
                .tabItem {
                    Label(viewModel.isAuthenticated ? "Sıralama" : "🔒 Sıralama", systemImage: "trophy.fill")
                }
                .tag(2)
            
            // TAB 4: Canlı Sohbet (Korumalı)
            chatTab
                .tabItem {
                    Label(viewModel.isAuthenticated ? "Sohbet" : "🔒 Sohbet", systemImage: "bubble.left.and.bubble.right.fill")
                }
                .tag(3)
            
            // TAB 5: Sunum (Pitch Deck) (Korumalı)
            pitchDeckTab
                .tabItem {
                    Label(viewModel.isAuthenticated ? "Sunum" : "🔒 Sunum", systemImage: "chart.line.uptrend.xyaxis")
                }
                .tag(4)
            
            // TAB 6: İstatistik (Korumalı)
            statsTab
                .tabItem {
                    Label(viewModel.isAuthenticated ? "İstatistik" : "🔒 İstatistik", systemImage: "globe.europe.africa.fill")
                }
                .tag(5)
            
            // TAB 7: Patent Stratejisi (Korumalı)
            patentTab
                .tabItem {
                    Label(viewModel.isAuthenticated ? "Patent" : "🔒 Patent", systemImage: "scale.3d")
                }
                .tag(6)
        }
        .tint(Color(hex: "8B5CF6"))
        .onChange(of: selectedTab) { _, newTab in
            if newTab != 0 && !viewModel.isAuthenticated {
                pendingProtectedTab = newTab
                selectedTab = 0
                showingAuthGate = true
            }
        }
        .sheet(isPresented: $showingAuthGate) {
            AuthGateModalView(viewModel: viewModel)
                .onDisappear {
                    if viewModel.isAuthenticated, let pending = pendingProtectedTab {
                        selectedTab = pending
                        pendingProtectedTab = nil
                    }
                }
        }
    }
    
    // MARK: - Korumalı Sekme Görünümleri
    private var walletTab: some View {
        NavigationStack {
            ZStack {
                Color(hex: "0A0D14").ignoresSafeArea()
                VStack(spacing: 16) {
                    Image(systemName: "wallet.pass.fill")
                        .font(.system(size: 48))
                        .foregroundStyle(Color(hex: "8B5CF6"))
                    Text("Apple Cüzdan Kuponları")
                        .font(.title2.bold())
                        .foregroundStyle(.white)
                    Text("TV izlerken kazandığınız indirim kodları Apple Wallet'a eklenmeye hazır.")
                        .font(.subheadline)
                        .foregroundStyle(Color(hex: "94A3B8"))
                        .multilineTextAlignment(.center)
                        .padding(.horizontal)
                }
            }
            .navigationTitle("Cüzdan")
        }
    }
    
    private var leaderboardTab: some View {
        NavigationStack {
            ZStack {
                Color(hex: "0A0D14").ignoresSafeArea()
                VStack(spacing: 16) {
                    Image(systemName: "trophy.fill")
                        .font(.system(size: 48))
                        .foregroundStyle(Color(hex: "FACC15"))
                    Text("Canlı TV Sıralaması")
                        .font(.title2.bold())
                        .foregroundStyle(.white)
                    Text("Anketlere katılarak en çok puanı toplayan izleyiciler listesi.")
                        .font(.subheadline)
                        .foregroundStyle(Color(hex: "94A3B8"))
                }
            }
            .navigationTitle("Sıralama")
        }
    }
    
    private var chatTab: some View {
        NavigationStack {
            ZStack {
                Color(hex: "0A0D14").ignoresSafeArea()
                VStack(spacing: 16) {
                    Image(systemName: "bubble.left.and.bubble.right.fill")
                        .font(.system(size: 48))
                        .foregroundStyle(Color(hex: "38BDF8"))
                    Text("Anlık İzleyici Sohbeti")
                        .font(.title2.bold())
                        .foregroundStyle(.white)
                    Text("Aynı diziyi izleyen yüz binlerce kişiyle canlı tartışma odası.")
                        .font(.subheadline)
                        .foregroundStyle(Color(hex: "94A3B8"))
                }
            }
            .navigationTitle("Sohbet")
        }
    }
    
    private var pitchDeckTab: some View {
        NavigationStack {
            ZStack {
                Color(hex: "0A0D14").ignoresSafeArea()
                ScrollView {
                    VStack(alignment: .leading, spacing: 14) {
                        Text("🚀 Yatırımcı Sunumu")
                            .font(.title.bold())
                            .foregroundStyle(.white)
                        Text("Contexta TV: TV İzleyicisini Etkileşimli Tüketiciye Dönüştüren Yeni Nesil İkinci Ekran Ekosistemi")
                            .font(.headline)
                            .foregroundStyle(Color(hex: "FACC15"))
                        Text("Türkiye'de günde ortalama 4 saat 24 dakika televizyon izleniyor. İkinci ekran dikkat kaybını gelire çeviriyoruz.")
                            .font(.subheadline)
                            .foregroundStyle(Color(hex: "CBD5E1"))
                    }
                    .padding()
                }
            }
            .navigationTitle("Sunum")
        }
    }
    
    private var statsTab: some View {
        NavigationStack {
            ZStack {
                Color(hex: "0A0D14").ignoresSafeArea()
                VStack(spacing: 14) {
                    Image(systemName: "globe.europe.africa.fill")
                        .font(.system(size: 48))
                        .foregroundStyle(Color(hex: "06B6D4"))
                    Text("50 Ülke TV & Reklam İstatistikleri")
                        .font(.title2.bold())
                        .foregroundStyle(.white)
                    Text("Türkiye, ABD, Brezilya, İngiltere ve 46 ülkenin günlük TV izlenme ve reklam yükü analizleri.")
                        .font(.subheadline)
                        .foregroundStyle(Color(hex: "94A3B8"))
                        .multilineTextAlignment(.center)
                        .padding(.horizontal)
                }
            }
            .navigationTitle("İstatistik")
        }
    }
    
    private var patentTab: some View {
        NavigationStack {
            ZStack {
                Color(hex: "0A0D14").ignoresSafeArea()
                ScrollView {
                    VStack(alignment: .leading, spacing: 14) {
                        Text("⚖️ Türkiye Patent Stratejisi")
                            .font(.title.bold())
                            .foregroundStyle(.white)
                        Text("SMK m.82 Bilgisayar Tabanlı Buluş (CII) & TÜBİTAK 1601 Destekli Yol Haritası")
                            .font(.headline)
                            .foregroundStyle(Color(hex: "F472B6"))
                        Text("Akustik ACR + DVB Teletekst NLP çapraz eşleme sistemi ve 0.2s RAM döner bellek tamponu ile koruma kalkanı.")
                            .font(.subheadline)
                            .foregroundStyle(Color(hex: "CBD5E1"))
                    }
                    .padding()
                }
            }
            .navigationTitle("Patent")
        }
    }
}
