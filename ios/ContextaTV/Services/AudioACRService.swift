//
//  AudioACRService.swift
//  ContextaTV - Native Apple iOS Second-Screen Companion
//

import Foundation
import AVFoundation

/// Apple iOS Donanım Düzeyinde Mikrofon ve Akustik TV Ses Tanıma Servisi (AVAudioEngine)
public final class AudioACRService: ObservableObject {
    @Published public var isListening: Bool = false
    @Published public var detectedDecibels: Float = -60.0
    @Published public var matchedChannelName: String? = nil
    @Published public var confidenceScore: Double = 0.0
    
    private var audioEngine: AVAudioEngine?
    private var recognitionTimer: Timer?
    
    public init() {}
    
    /// iOS Mikrofon İznini Kontrol Et ve Dinlemeyi Başlat
    public func startAcousticListening(completion: @escaping (Result<String, Error>) -> Void) {
        let audioSession = AVAudioSession.sharedInstance()
        
        do {
            try audioSession.setCategory(.playAndRecord, mode: .measurement, options: [.duckOthers, .defaultToSpeaker])
            try audioSession.setActive(true, options: .notifyOthersOnDeactivation)
        } catch {
            completion(.failure(error))
            return
        }
        
        audioEngine = AVAudioEngine()
        guard let engine = audioEngine else { return }
        
        let inputNode = engine.inputNode
        let recordingFormat = inputNode.outputFormat(forBus: 0)
        
        inputNode.installTap(onBus: 0, bufferSize: 1024, format: recordingFormat) { [weak self] buffer, _ in
            guard let self = self else { return }
            
            // Gerçek Zamanlı RMS Ses Seviyesi Hesabı
            guard let channelData = buffer.floatChannelData?[0] else { return }
            let channelDataValue = Array(UnsafeBufferPointer(start: channelData, count: Int(buffer.frameLength)))
            
            var rms: Float = 0.0
            for sample in channelDataValue {
                rms += sample * sample
            }
            rms = sqrt(rms / Float(buffer.frameLength))
            let db = 20 * log10(max(rms, 0.0001))
            
            DispatchQueue.main.async {
                self.detectedDecibels = max(-60.0, db)
            }
        }
        
        do {
            try engine.start()
            isListening = true
            
            // Simüle Edilmiş 1.8 Saniyelik ACR Parmak İzi Eşleşmesi
            recognitionTimer = Timer.scheduledTimer(withTimeInterval: 1.8, repeats: false) { [weak self] _ in
                guard let self = self else { return }
                self.confidenceScore = 0.94
                self.matchedChannelName = "Kanal D"
                self.stopListening()
                completion(.success("kanald"))
            }
        } catch {
            completion(.failure(error))
        }
    }
    
    public func stopListening() {
        recognitionTimer?.invalidate()
        recognitionTimer = nil
        audioEngine?.stop()
        audioEngine?.inputNode.removeTap(onBus: 0)
        audioEngine = nil
        isListening = false
    }
}
