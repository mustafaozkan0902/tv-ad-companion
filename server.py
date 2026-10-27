#!/usr/bin/env python3
import http.server
import socketserver
import socket
import urllib.parse
import json
import os

PORT = 8000

# In-memory dictionary to hold the current TV synchronization state
shared_state = {
    "channel": "trt1",
    "state": "program",
    "version": 0 # Used by mobile clients to detect if a change actually occurred
}

def get_local_ip():
    """Detects the computer's local IP on the network."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        # Does not need to be reachable, just triggers OS interface selection
        s.connect(('10.255.255.255', 1))
        ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

class AdCompanionRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for easier testing
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200, "OK")
        self.end_headers()

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        
        # API: Get current state
        if parsed_url.path == '/api/get':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(shared_state).encode('utf-8'))
            return
            
        # API: Set current state
        elif parsed_url.path == '/api/set':
            query_params = urllib.parse.parse_qs(parsed_url.query)
            channel = query_params.get('channel', [shared_state['channel']])[0]
            state = query_params.get('state', [shared_state['state']])[0]
            
            # Check if state actually changed
            if shared_state['channel'] != channel or shared_state['state'] != state:
                shared_state['channel'] = channel
                shared_state['state'] = state
                shared_state['version'] += 1
                
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"status": "success", "new_state": shared_state}).encode('utf-8'))
            return
            
        # API: Get local IP address
        elif parsed_url.path == '/api/ip':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            local_ip = get_local_ip()
            self.wfile.write(json.dumps({"ip": local_ip, "port": PORT}).encode('utf-8'))
            return
            
        # Otherwise, serve static files
        return super().do_GET()

if __name__ == '__main__':
    local_ip = get_local_ip()
    print("=" * 60)
    print("🚀 CONTEXTA TV - BAĞLAMSAL REKLAM PROTOTİPİ BAŞLATILDI")
    print("-" * 60)
    print(f"🖥️  Masaüstü TV Ekranı: http://localhost:{PORT}")
    print(f"📱  Cep Telefonu Ekranı: http://{local_ip}:{PORT}")
    print("=" * 60)
    print("Telefonunuzu ve bilgisayarınızı AYNI Wi-Fi ağına bağlayın.")
    print("Masaüstü ekranındaki QR kodu telefonunuzla okutarak test edebilirsiniz.")
    print("=" * 60)

    # Force standard port binding
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), AdCompanionRequestHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nSunucu durduruldu.")
