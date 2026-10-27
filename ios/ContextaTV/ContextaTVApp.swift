//
//  ContextaTVApp.swift
//  ContextaTV - Native Apple iOS Second-Screen Companion
//

import SwiftUI

@main
public struct ContextaTVApp: App {
    public init() {}
    
    public var body: some Scene {
        WindowGroup {
            MainTabView()
                .preferredColorScheme(.dark)
        }
    }
}
