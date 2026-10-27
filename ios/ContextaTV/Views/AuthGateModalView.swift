//
//  AuthGateModalView.swift
//  ContextaTV - Native Apple iOS Second-Screen Companion
//

import SwiftUI

public struct AuthGateModalView: View {
    @ObservedObject var viewModel: LiveCompanionViewModel
    @Environment(\.dismiss) private var dismiss
    
    @State private var username: String = ""
    @State private var password: String = ""
    @State private var errorMessage: String? = nil
    
    public init(viewModel: LiveCompanionViewModel) {
        self.viewModel = viewModel
    }
    
    public var body: some View {
        NavigationStack {
            ZStack {
                Color(hex: "131722").ignoresSafeArea()
                
                VStack(spacing: 20) {
                    // Kilit İkonu
                    ZStack {
                        Circle()
                            .fill(Color(hex: "8B5CF6").opacity(0.15))
                            .frame(width: 72, height: 72)
                        
                        Image(systemName: "lock.shield.fill")
                            .font(.system(size: 34))
                            .foregroundStyle(Color(hex: "A78BFA"))
                    }
                    .padding(.top, 16)
                    
                    VStack(spacing: 6) {
                        Text("Yetkili Girişi")
                            .font(.system(size: 20, weight: .black))
                            .foregroundStyle(.white)
                        
                        Text("Contexta TV kapalı devre test ortamı. Özel bölümlere erişmek için lütfen giriş yapınız.")
                            .font(.system(size: 13))
                            .foregroundStyle(Color(hex: "94A3B8"))
                            .multilineTextAlignment(.center)
                            .padding(.horizontal, 20)
                    }
                    
                    // Giriş Formu
                    VStack(alignment: .leading, spacing: 14) {
                        VStack(alignment: .leading, spacing: 6) {
                            Text("KULLANICI ADI")
                                .font(.system(size: 11, weight: .bold))
                                .foregroundStyle(Color(hex: "CBD5E1"))
                            
                            TextField("Kullanıcı adınız", text: $username)
                                .textInputAutocapitalization(.never)
                                .autocorrectionDisabled()
                                .padding(12)
                                .background(Color.white.opacity(0.06))
                                .clipShape(RoundedRectangle(cornerRadius: 12))
                                .foregroundStyle(.white)
                        }
                        
                        VStack(alignment: .leading, spacing: 6) {
                            Text("ŞİFRE")
                                .font(.system(size: 11, weight: .bold))
                                .foregroundStyle(Color(hex: "CBD5E1"))
                            
                            SecureField("••••••••", text: $password)
                                .padding(12)
                                .background(Color.white.opacity(0.06))
                                .clipShape(RoundedRectangle(cornerRadius: 12))
                                .foregroundStyle(.white)
                        }
                        
                        // Hızlı Seçim Butonları
                        HStack(spacing: 10) {
                            Text("Hızlı:")
                                .font(.system(size: 11, weight: .bold))
                                .foregroundStyle(Color(hex: "64748B"))
                            
                            Button {
                                username = "mustafa"
                                errorMessage = nil
                            } label: {
                                Text("🦁 mustafa")
                                    .font(.system(size: 12, weight: .bold))
                                    .padding(.horizontal, 10)
                                    .padding(.vertical, 5)
                                    .background(Color.white.opacity(0.08))
                                    .clipShape(Capsule())
                                    .foregroundStyle(.white)
                            }
                            
                            Button {
                                username = "alim"
                                errorMessage = nil
                            } label: {
                                Text("🦊 alim")
                                    .font(.system(size: 12, weight: .bold))
                                    .padding(.horizontal, 10)
                                    .padding(.vertical, 5)
                                    .background(Color.white.opacity(0.08))
                                    .clipShape(Capsule())
                                    .foregroundStyle(.white)
                            }
                        }
                        
                        // Hata Mesajı
                        if let error = errorMessage {
                            HStack {
                                Image(systemName: "exclamationmark.triangle.fill")
                                Text(error)
                                    .font(.system(size: 12, weight: .medium))
                            }
                            .foregroundStyle(Color(hex: "FCA5A5"))
                            .padding(10)
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .background(Color.red.opacity(0.15))
                            .clipShape(RoundedRectangle(cornerRadius: 8))
                        }
                        
                        // Giriş Butonu
                        Button {
                            if viewModel.login(username: username, password: password) {
                                dismiss()
                            } else {
                                errorMessage = "Hatalı kullanıcı adı veya şifre! Lütfen kontrol ediniz."
                            }
                        } label: {
                            Text("🔐 Doğrula & Giriş Yap")
                                .font(.system(size: 15, weight: .bold))
                                .foregroundStyle(.white)
                                .frame(maxWidth: .infinity)
                                .padding(.vertical, 14)
                                .background(LinearGradient(colors: [Color(hex: "8B5CF6"), Color(hex: "6366F1")], startPoint: .leading, endPoint: .trailing))
                                .clipShape(RoundedRectangle(cornerRadius: 12))
                        }
                        
                        // Misafir Olarak Devam Et
                        Button {
                            dismiss()
                        } label: {
                            Text("📺 Misafir Olarak Ana Ekranda Kal")
                                .font(.system(size: 13, weight: .semibold))
                                .foregroundStyle(Color(hex: "94A3B8"))
                                .frame(maxWidth: .infinity)
                                .padding(.vertical, 8)
                        }
                    }
                    .padding(.horizontal, 20)
                    
                    Spacer()
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Kapat") {
                        dismiss()
                    }
                    .foregroundStyle(.white)
                }
            }
        }
    }
}
