// ====================================================
// Contexta TV - Clean Mobile Companion Logic (v3.2)
// Multi-Channel AI Matcher + Real-Time Online Chat & Presence
// ====================================================

// 1. Comprehensive Channel & Campaign Database
const channelDatabase = {
    showtv: {
        name: "Show TV",
        program: {
            title: "Lezzet Yolculuğu - Şefin Özel Menüsü",
            desc: "Stüdyoda taze fesleğenli makarna sosu hazırlanıyor.",
            campaign: {
                type: "İndirim Kuponu",
                title: "Makarna & Soslarda %30 İndirim",
                desc: "Şefin hazırladığı tarife özel tüm makarna ve soslarda geçerli süpermarket kuponu.",
                code: "SEFMAK30",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        },
        ad: {
            title: "Trendyol - Kozmetik Günleri",
            desc: "Televizyonda L'Oréal Paris ve cilt bakım ürünleri tanıtılıyor.",
            campaign: {
                type: "Alışveriş Çeki",
                title: "Kozmetikte 100 TL İndirim Çeki",
                desc: "TV reklamına özel 'BAKIM100' koduyla anında indirim fırsatı.",
                code: "BAKIM100",
                points: 15,
                actionText: "Çeki Cüzdana Ekle (+15 P)"
            }
        }
    },
    trt1: {
        name: "TRT 1",
        program: {
            title: "TRT Spor: Türkiye - İtalya Canlı Maç",
            desc: "A Milli Takımımız çeyrek finalde kıyasıya mücadele ediyor.",
            poll: {
                id: "poll_match_1",
                question: "Sizce sıradaki golü kim atar?",
                options: ["Türkiye", "İtalya", "Gol Olmaz"],
                results: { "Türkiye": 64, "İtalya": 24, "Gol Olmaz": 12 },
                points: 20
            }
        },
        ad: {
            title: "Yemeksepeti - Çıtır Pizza Fırsatı",
            desc: "Maç coşkusuna özel sıcacık çıtır pizza fırsatları ekranda.",
            campaign: {
                type: "Yemek Kuponu",
                title: "Büyük Boy Pizzada %40 İndirim",
                desc: "Maç izlerken acıkanlara özel 'PIZZA40' koduyla anında indirim.",
                code: "PIZZA40",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        }
    },
    tv8: {
        name: "TV8",
        program: {
            title: "MasterChef Türkiye - Takım Oyunu",
            desc: "Kırmızı ve Mavi takım şeflerin karşısında dokunulmazlık için yarışıyor.",
            poll: {
                id: "poll_tv8_1",
                question: "Sizce dokunulmazlığı bu akşam hangi takım kazanır?",
                options: ["Kırmızı Takım", "Mavi Takım"],
                results: { "Kırmızı Takım": 58, "Mavi Takım": 42 },
                points: 20
            }
        },
        ad: {
            title: "GetirYemek - Şefin Tercihi",
            desc: "TV8 reklam kuşağına özel akşam yemeklerinde 120 TL hediye kuponu.",
            campaign: {
                type: "Yemek Çeki",
                title: "GetirYemek'ten 120 TL İndirim",
                desc: "MasterChef izleyenlere özel 'MASTER120' koduyla anında kullanın.",
                code: "MASTER120",
                points: 15,
                actionText: "Kuponu Cüzdana Ekle (+15 P)"
            }
        }
    },
    atv: {
        name: "ATV",
        program: {
            title: "Müge Anlı ile Tatlı Sert",
            desc: "Canlı yayında kayıp dosyası araştırılıyor ve ihbarlar toplanıyor.",
            poll: {
                id: "poll_atv_1",
                question: "Sizce kayıp şahıs nerede bulunacak?",
                options: ["Ankara'da", "Başka Şehirde", "Yurtdışında"],
                results: { "Ankara'da": 52, "Başka Şehirde": 38, "Yurtdışında": 10 },
                points: 20
            }
        },
        ad: {
            title: "Yeni Dacia Duster Hibrit",
            desc: "Yollara meydan okuyan SUV lansman reklamı yayında.",
            campaign: {
                type: "Test Sürüşü Fırsatı",
                title: "Ücretsiz Duster Test Sürüşü Randevusu",
                desc: "Size en yakın bayiden hemen test randevusu oluşturun, sürpriz hediye kazanın.",
                code: "DACIA2026",
                points: 25,
                actionText: "Randevu Kuponunu Al (+25 P)"
            }
        }
    },
    kanald: {
        name: "Kanal D",
        program: {
            title: "İnci Taneleri - Yeni Bölüm",
            desc: "Perşembe akşamlarının reyting rekortmeni dizisi ekranda.",
            poll: {
                id: "poll_kanald_1",
                question: "Azem ve Dilber'in hikayesinde sıradaki sır ne olacak?",
                options: ["Her Şey Açığa Çıkacak", "Yeni Bir Engel Gelecek"],
                results: { "Her Şey Açığa Çıkacak": 34, "Yeni Bir Engel Gelecek": 66 },
                points: 20
            }
        },
        ad: {
            title: "Akbank - Faizsiz Taksitli Avans",
            desc: "Kanal D reklamına özel mobilden ilk kez müşteri olanlara 25.000 TL faizsiz kredi.",
            campaign: {
                type: "Banka Kampanyası",
                title: "25.000 TL %0 Faizli Nakit Avans",
                desc: "Ekranda gördüğünüz Akbank kampanyasına hemen mobilden başvurun.",
                code: "AKBANK0FAIZ",
                points: 25,
                actionText: "Fırsatı Cüzdana Kaydet (+25 P)"
            }
        }
    }
};

// 2. User State & Storage
let userProfile = {
    points: 50,
    walletCoupons: [],
    completedPolls: []
};

try {
    const saved = localStorage.getItem("contexta_v3_profile");
    if (saved) {
        userProfile = Object.assign(userProfile, JSON.parse(saved));
    }
} catch (e) {
    console.warn("Storage read error", e);
}

function saveProfile() {
    try {
        localStorage.setItem("contexta_v3_profile", JSON.stringify(userProfile));
    } catch (e) {}
    updatePointsUI();
}

function addPoints(amount, reason = "") {
    userProfile.points = (userProfile.points || 0) + amount;
    saveProfile();
    showToast(`🎉 +${amount} Puan Kazandınız! ${reason}`);
}

function updatePointsUI() {
    const badge = document.getElementById("totalPoints");
    if (badge) badge.innerText = userProfile.points;
}

// 3. Current Channel State
let currentChannel = "showtv";
let currentState = "program";

// 4. Speech Recognition Engine
let recognition = null;
let isListening = false;
let restartTimer = null;

const btnListen = document.getElementById("btnListen");
const micStatusTitle = document.getElementById("micStatusTitle");
const micStatusSub = document.getElementById("micStatusSub");
const liveTranscript = document.getElementById("liveTranscript");
const matchStatus = document.getElementById("matchStatus");
const matchText = document.getElementById("matchText");

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        micStatusTitle.innerText = "Ses Tanıma Desteklenmiyor";
        micStatusSub.innerHTML = "Tarayıcınız ses tanımayı desteklemiyor. Lütfen <strong>Safari (iOS)</strong> veya <strong>Chrome</strong> kullanın.";
        return null;
    }
    
    const rec = new SpeechRecognition();
    rec.continuous = false;
    rec.interimResults = true;
    rec.lang = "tr-TR";
    rec.maxAlternatives = 1;

    rec.onstart = () => {
        isListening = true;
        btnListen.classList.add("listening");
        micStatusTitle.innerText = "🔴 TV Dinleniyor...";
        micStatusSub.innerText = "Televizyon sesini dinliyorum. Konuşulanları aşağıda görebilirsiniz.";
        if (matchStatus) {
            matchStatus.className = "match-status-bar";
            matchText.innerText = "TV sesinden kanal ipuçları aranıyor...";
        }
    };

    rec.onresult = (event) => {
        let transcript = "";
        for (let i = 0; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }
        
        if (transcript) {
            liveTranscript.innerText = `"${transcript}"`;
            checkKeywords(transcript);
        }
    };

    rec.onerror = (event) => {
        console.warn("Speech error:", event.error);
        if (event.error === "not-allowed") {
            isListening = false;
            btnListen.classList.remove("listening");
            micStatusTitle.innerText = "Mikrofon İzni Gerekli";
            micStatusSub.innerText = "Lütfen Safari ayarlarından mikrofon iznine izin verin.";
            alert("Mikrofon izni verilmedi. TV'yi dinlemek için izin verin.");
        }
    };

    rec.onend = () => {
        if (isListening) {
            clearTimeout(restartTimer);
            restartTimer = setTimeout(() => {
                try {
                    if (isListening) rec.start();
                } catch (e) {}
            }, 300);
        } else {
            btnListen.classList.remove("listening");
            micStatusTitle.innerText = "TV'yi Dinle";
            micStatusSub.innerText = "Televizyon sesini dinlemek ve anında kupon/anket yakalamak için dokunun.";
        }
    };

    return rec;
}

if (btnListen) {
    btnListen.addEventListener("click", () => {
        if (!recognition) {
            recognition = initSpeechRecognition();
        }
        
        if (!recognition) return;
        
        if (isListening) {
            isListening = false;
            try { recognition.stop(); } catch (e) {}
            btnListen.classList.remove("listening");
            micStatusTitle.innerText = "TV'yi Dinle";
            micStatusSub.innerText = "Dinleme durduruldu. Başlatmak için dokunun.";
        } else {
            liveTranscript.innerText = "Ses dinleniyor, lütfen TV sesini dinletin...";
            try {
                recognition.start();
            } catch (err) {
                try { recognition.stop(); recognition.start(); } catch (e) {}
            }
        }
    });
}

// 5. Intelligent Turkish Keyword Matcher
// Normalizes Turkish characters (ş->s, ç->c, etc.) so matching is 100% resilient
function normalizeTurkish(str) {
    return str
        .toLowerCase()
        .replace(/ğ/g, 'g')
        .replace(/ü/g, 'u')
        .replace(/ş/g, 's')
        .replace(/ı/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ç/g, 'c')
        .replace(/[^a-z0-9\s]/g, ' ')
        .trim();
}

function checkKeywords(rawText) {
    const text = normalizeTurkish(rawText);
    
    // Direct Channel Mentions
    if (text.includes("show tv") || text.includes("show")) {
        triggerChannel("showtv", "program", "Kanal Adı: Show TV");
        return;
    }
    if (text.includes("trt 1") || text.includes("trt") || text.includes("te re te")) {
        triggerChannel("trt1", "program", "Kanal Adı: TRT 1");
        return;
    }
    if (text.includes("tv 8") || text.includes("tv8") || text.includes("te ve sekiz")) {
        triggerChannel("tv8", "program", "Kanal Adı: TV8");
        return;
    }
    if (text.includes("atv") || text.includes("a te ve")) {
        triggerChannel("atv", "program", "Kanal Adı: ATV");
        return;
    }
    if (text.includes("kanal d") || text.includes("kanalde")) {
        triggerChannel("kanald", "program", "Kanal Adı: Kanal D");
        return;
    }

    // Program & Content Matching
    // A) TV8 / MasterChef
    if (text.includes("masterchef") || text.includes("danilo") || text.includes("mehmet sef") || text.includes("dokunulmazlik") || text.includes("kirmizi takim") || text.includes("mavi takim") || text.includes("survivor")) {
        triggerChannel("tv8", "program", "Program: MasterChef Türkiye");
    }
    else if (text.includes("getir") || text.includes("getiryemek")) {
        triggerChannel("tv8", "ad", "Reklam: GetirYemek");
    }
    // B) TRT 1 / Maç & Spor
    else if (text.includes("mac") || text.includes("futbol") || text.includes("gol") || text.includes("milli takim") || text.includes("turkiye") || text.includes("italya") || text.includes("penalti") || text.includes("kenan yildiz") || text.includes("teskilat") || text.includes("gonul dagi")) {
        triggerChannel("trt1", "program", "Program: TRT Canlı Maç / Spor");
    }
    else if (text.includes("pizza") || text.includes("yemeksepeti") || text.includes("aciktim")) {
        triggerChannel("trt1", "ad", "Reklam: Yemeksepeti Pizza");
    }
    // C) Show TV / Yemek & Dizi
    else if (text.includes("makarna") || text.includes("tarif") || text.includes("sef") || text.includes("feslegen") || text.includes("sos") || text.includes("lezzet") || text.includes("zeytinyagi") || text.includes("kizilcik serbeti") || text.includes("bahar") || text.includes("guldur guldur")) {
        triggerChannel("showtv", "program", "Program: Lezzet Yolculuğu");
    }
    else if (text.includes("trendyol") || text.includes("loreal") || text.includes("kozmetik") || text.includes("krem") || text.includes("cilt")) {
        triggerChannel("showtv", "ad", "Reklam: Trendyol Kozmetik");
    }
    // D) ATV / Müge Anlı & Dizi
    else if (text.includes("muge") || text.includes("anli") || text.includes("kayip") || text.includes("ihbar") || text.includes("tatli sert") || text.includes("esra erol") || text.includes("kurulus osman")) {
        triggerChannel("atv", "program", "Program: Müge Anlı ile Tatlı Sert");
    }
    else if (text.includes("dacia") || text.includes("duster") || text.includes("suv") || text.includes("araba") || text.includes("test surusu")) {
        triggerChannel("atv", "ad", "Reklam: Dacia Duster");
    }
    // E) Kanal D / Dizi & Finans
    else if (text.includes("inci taneleri") || text.includes("dilber") || text.includes("arka sokaklar") || text.includes("yargi")) {
        triggerChannel("kanald", "program", "Program: Kanal D Dizisi");
    }
    else if (text.includes("akbank") || text.includes("kredi") || text.includes("faizsiz") || text.includes("nakit") || text.includes("avans")) {
        triggerChannel("kanald", "ad", "Reklam: Akbank Faizsiz Kredi");
    }
    else {
        // Active hint when sound is heard but channel not yet confirmed
        if (matchStatus && isListening) {
            matchStatus.className = "match-status-bar";
            matchText.innerText = "TV sesi duyuluyor... Kanal veya program adı bekleniyor.";
        }
    }
}

function triggerChannel(channelKey, stateKey, matchReason = "") {
    currentChannel = channelKey;
    currentState = stateKey;
    
    // Visual Feedback in Match Status Bar
    if (matchStatus) {
        matchStatus.className = "match-status-bar matched";
        const channelName = channelDatabase[channelKey].name;
        matchText.innerText = `🎯 Eşleşti: ${channelName} (${matchReason || 'Canlı Yayın'})`;
    }
    
    showToast(`📺 TV Eşleşti: ${channelDatabase[channelKey].name}!`);
    renderCurrentChannel();
}

// 6. UI Rendering Engine
function renderCurrentChannel() {
    const channelData = channelDatabase[currentChannel];
    if (!channelData) return;
    
    const viewData = channelData[currentState];
    
    // Update Channel Header Card
    document.getElementById("channelBadge").innerText = channelData.name.toUpperCase();
    const stateBadge = document.getElementById("stateBadge");
    stateBadge.className = `state-badge ${currentState}`;
    stateBadge.innerText = currentState === "program" ? "CANLI PROGRAM" : "REKLAM ARASI";
    
    document.getElementById("programTitle").innerText = viewData.title;
    document.getElementById("programDesc").innerText = viewData.desc;
    
    // Update Active Manual Chips
    document.querySelectorAll(".channel-chips .chip").forEach(chip => {
        if (chip.dataset.channel === currentChannel && chip.dataset.state === currentState) {
            chip.classList.add("active");
        } else {
            chip.classList.remove("active");
        }
    });

    // Render Dynamic Content (Poll or Coupon)
    const feed = document.getElementById("interactiveFeed");
    feed.innerHTML = "";
    
    // Case A: Active Poll
    if (currentState === "program" && viewData.poll) {
        const poll = viewData.poll;
        const hasVoted = userProfile.completedPolls.includes(poll.id);
        
        const card = document.createElement("div");
        card.className = "poll-card";
        
        if (hasVoted) {
            card.innerHTML = `
                <span class="card-top-tag">📊 CANLI ANKET SONUÇLARI</span>
                <h4 class="card-headline">${poll.question}</h4>
                <div class="poll-results" style="margin-top: 6px;">
                    ${Object.entries(poll.results).map(([opt, pct]) => `
                        <div class="poll-result-bar">
                            <div class="result-labels">
                                <span>${opt}</span>
                                <strong>%${pct}</strong>
                            </div>
                            <div class="progress-bg">
                                <div class="progress-fill" style="width: ${pct}%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <span style="font-size: 0.72rem; color: #22c55e; font-weight: 700; margin-top: 4px;">✓ Oyunuz kaydedildi (+${poll.points} Puan eklendi)</span>
            `;
        } else {
            card.innerHTML = `
                <span class="card-top-tag">🗳️ CANLI TV ANKETİ (+${poll.points} PUAN)</span>
                <h4 class="card-headline">${poll.question}</h4>
                <div class="poll-options">
                    ${poll.options.map(opt => `
                        <button class="poll-btn" data-option="${opt}">${opt}</button>
                    `).join('')}
                </div>
            `;
            
            card.querySelectorAll(".poll-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const opt = btn.dataset.option;
                    userProfile.completedPolls.push(poll.id);
                    addPoints(poll.points, "Anket Katılımı");
                    renderCurrentChannel();
                });
            });
        }
        
        feed.appendChild(card);
    }
    
    // Case B: Ad Campaign / Coupon
    if (viewData.campaign) {
        const camp = viewData.campaign;
        const isClaimed = userProfile.walletCoupons.some(c => c.code === camp.code);
        
        const card = document.createElement("div");
        card.className = "ad-card";
        
        card.innerHTML = `
            <span class="card-top-tag">🎁 ${camp.type}</span>
            <h4 class="card-headline">${camp.title}</h4>
            <p class="card-body-text">${camp.desc}</p>
            <button class="card-btn ${isClaimed ? 'claimed' : ''}">
                ${isClaimed ? '✓ Kupon Cüzdanınızda' : camp.actionText}
            </button>
        `;
        
        card.querySelector(".card-btn").addEventListener("click", () => {
            if (isClaimed) return;
            
            userProfile.walletCoupons.push({
                title: camp.title,
                code: camp.code,
                date: new Date().toLocaleDateString('tr-TR')
            });
            
            addPoints(camp.points, "Kupon Kazanımı");
            renderCurrentChannel();
            renderWallet();
        });
        
        feed.appendChild(card);
    }
}

// 7. Manual Fallback Channel Chips
document.querySelectorAll(".channel-chips .chip").forEach(chip => {
    chip.addEventListener("click", () => {
        const ch = chip.dataset.channel;
        const st = chip.dataset.state;
        triggerChannel(ch, st, "Manuel Seçim");
    });
});

// 8. Wallet Screen Rendering
function renderWallet() {
    const list = document.getElementById("walletList");
    if (!list) return;
    
    const coupons = userProfile.walletCoupons || [];
    if (coupons.length === 0) {
        list.innerHTML = `<div class="wallet-empty">Henüz cüzdanınızda kupon yok.<br>TV izlerken gelen kuponları cüzdanınıza ekleyebilirsiniz.</div>`;
        return;
    }
    
    list.innerHTML = coupons.map(c => `
        <div class="wallet-item">
            <div class="wallet-info">
                <h4>${c.title}</h4>
                <span style="font-size: 0.7rem; color: #64748b;">Kazanıldı: ${c.date}</span>
            </div>
            <div class="wallet-code">${c.code}</div>
        </div>
    `).join('');
}

// 9. Tab Navigation
document.querySelectorAll(".bottom-nav .nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".bottom-nav .nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const targetTab = btn.dataset.tab;
        document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
        
        const activePane = document.getElementById(targetTab);
        if (activePane) activePane.classList.add("active");
        
        if (targetTab === "tabWallet") {
            renderWallet();
        }
    });
});

// ====================================================
// 10. REAL-TIME MULTI-USER CHAT & LIVE PRESENCE (NTFY SSE)
// ====================================================

// Unique Persistent Client ID & User Name
let clientId = localStorage.getItem("contexta_client_id");
if (!clientId) {
    clientId = "client_" + Math.random().toString(36).substring(2, 9);
    localStorage.setItem("contexta_client_id", clientId);
}

let userName = localStorage.getItem("contexta_username");
if (!userName) {
    userName = "İzleyici_" + Math.floor(Math.random() * 900 + 100);
    localStorage.setItem("contexta_username", userName);
}

const chatUserNameSpan = document.getElementById("chatUserName");
if (chatUserNameSpan) chatUserNameSpan.innerText = userName;

// Change user name button
const btnChangeName = document.getElementById("btnChangeName");
if (btnChangeName) {
    btnChangeName.addEventListener("click", () => {
        const newName = prompt("Sohbette görünecek adınızı yazın:", userName);
        if (newName && newName.trim()) {
            userName = newName.trim();
            localStorage.setItem("contexta_username", userName);
            if (chatUserNameSpan) chatUserNameSpan.innerText = userName;
            showToast(`Adınız '${userName}' olarak güncellendi.`);
        }
    });
}

// Global Real-time Pub/Sub Endpoints (CORS-enabled, zero-config, instant SSE)
const NTFY_CHAT_URL = "https://ntfy.sh/ctx_tv_chat_room_85e";
const NTFY_PRESENCE_URL = "https://ntfy.sh/ctx_tv_presence_85e";

let chatHistory = [];

// Load Local Chat History (Guarantees messages never vanish on refresh)
try {
    const localSaved = localStorage.getItem("contexta_chat_history_v4");
    if (localSaved) {
        chatHistory = JSON.parse(localSaved);
        renderChatHistory();
    }
} catch (e) {}

// Chat Form Submission
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatMessages = document.getElementById("chatMessages");

if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;
        
        const newMsg = {
            id: Date.now() + "_" + Math.random().toString(36).substring(2, 7),
            clientId: clientId,
            sender: userName,
            text: text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            timestamp: Date.now()
        };
        
        // Add locally immediately for zero-lag feeling
        chatHistory.push(newMsg);
        saveChatLocally();
        renderChatHistory();
        chatInput.value = "";
        
        // Broadcast to cloud so friend sees it instantly
        broadcastChatMessage(newMsg);
    });
}

function saveChatLocally() {
    try {
        localStorage.setItem("contexta_chat_history_v4", JSON.stringify(chatHistory.slice(-60)));
    } catch (e) {}
}

function renderChatHistory() {
    if (!chatMessages) return;
    
    if (chatHistory.length === 0) {
        chatMessages.innerHTML = `<div class="chat-empty">İlk mesajı yazan siz olun!</div>`;
        return;
    }
    
    chatMessages.innerHTML = chatHistory.map(msg => {
        const isMine = msg.clientId === clientId;
        return `
            <div class="chat-bubble ${isMine ? 'mine' : 'other'}">
                <span class="chat-sender">${isMine ? 'Siz (' + msg.sender + ')' : msg.sender}</span>
                <span>${msg.text}</span>
                <span class="chat-time">${msg.time}</span>
            </div>
        `;
    }).join('');
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Broadcast message via HTTP POST
function broadcastChatMessage(msg) {
    fetch(NTFY_CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain; charset=utf-8" },
        body: JSON.stringify(msg)
    }).catch(err => {
        console.warn("Chat broadcast error:", err);
    });
}

// Real-Time Chat Listener (SSE + Catchup Poll)
let chatEventSource = null;

function initRealtimeChat() {
    // 1. Fetch catchup messages from the last 24h
    fetch(`${NTFY_CHAT_URL}/json?poll=1&since=24h`)
        .then(res => res.text())
        .then(text => {
            if (!text) return;
            const lines = text.trim().split("\n");
            let hasNew = false;
            lines.forEach(line => {
                try {
                    const item = JSON.parse(line);
                    if (item.event === "message" && item.message) {
                        const parsedMsg = JSON.parse(item.message);
                        if (!chatHistory.some(m => m.id === parsedMsg.id)) {
                            chatHistory.push(parsedMsg);
                            hasNew = true;
                        }
                    }
                } catch (e) {}
            });
            if (hasNew) {
                chatHistory.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
                saveChatLocally();
                renderChatHistory();
            }
        })
        .catch(err => console.warn("Chat catchup error:", err));

    // 2. Open Real-Time Server-Sent Events (SSE) Stream
    try {
        if (chatEventSource) chatEventSource.close();
        chatEventSource = new EventSource(`${NTFY_CHAT_URL}/sse`);

        chatEventSource.onopen = () => {
            const statusEl = document.getElementById("chatSyncStatus");
            if (statusEl) statusEl.innerHTML = '<span class="sync-dot live"></span> Canlı Sohbet Bağlı';
        };

        chatEventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.event === "message" && data.message) {
                    const parsedMsg = JSON.parse(data.message);
                    
                    // If we haven't rendered this message yet
                    if (!chatHistory.some(m => m.id === parsedMsg.id)) {
                        chatHistory.push(parsedMsg);
                        saveChatLocally();
                        renderChatHistory();

                        // If from someone else, notify user!
                        if (parsedMsg.clientId !== clientId) {
                            notifyIncomingMessage(parsedMsg);
                        }
                    }
                }
            } catch (err) {
                console.warn("SSE parse error", err);
            }
        };

        chatEventSource.onerror = () => {
            const statusEl = document.getElementById("chatSyncStatus");
            if (statusEl) statusEl.innerHTML = '<span class="sync-dot warning"></span> Bağlantı yenileniyor...';
        };
    } catch (e) {
        console.warn("EventSource setup error:", e);
    }
}

// Notification for incoming message from friend
function notifyIncomingMessage(msg) {
    const chatTab = document.getElementById("tabChat");
    if (chatTab && !chatTab.classList.contains("active")) {
        // Show red dot badge on chat tab
        const chatNavBtn = document.querySelector('.bottom-nav .nav-btn[data-tab="tabChat"]');
        if (chatNavBtn) {
            let badge = chatNavBtn.querySelector(".nav-badge");
            if (!badge) {
                badge = document.createElement("span");
                badge.className = "nav-badge";
                chatNavBtn.appendChild(badge);
            }
            badge.style.display = "block";
        }
        
        // Show popup toast
        showToast(`💬 ${msg.sender}: "${msg.text.substring(0, 30)}${msg.text.length > 30 ? '...' : ''}"`);
    }
}

// Tab navigation handler clears notification badge
document.querySelectorAll(".bottom-nav .nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".bottom-nav .nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const targetTab = btn.dataset.tab;
        document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
        
        const activePane = document.getElementById(targetTab);
        if (activePane) activePane.classList.add("active");
        
        if (targetTab === "tabWallet") {
            renderWallet();
        } else if (targetTab === "tabChat") {
            // Clear unread badge
            const badge = btn.querySelector(".nav-badge");
            if (badge) badge.style.display = "none";
            renderChatHistory();
        }
    });
});

// ====================================================
// 11. REAL-TIME ONLINE PRESENCE COUNTER
// ====================================================
let activePeers = {};

function initPresence() {
    // 1. Listen for heartbeats via SSE
    try {
        const presenceSource = new EventSource(`${NTFY_PRESENCE_URL}/sse`);
        presenceSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.event === "message" && data.message) {
                    const peer = JSON.parse(data.message);
                    if (peer.clientId) {
                        activePeers[peer.clientId] = Date.now();
                        refreshPresenceCount();
                    }
                }
            } catch (e) {}
        };
    } catch (e) {}

    // 2. Broadcast own heartbeat every 8 seconds
    sendPresenceHeartbeat();
    setInterval(sendPresenceHeartbeat, 8000);

    // 3. Clean up stale peers every 4 seconds
    setInterval(refreshPresenceCount, 4000);
}

function sendPresenceHeartbeat() {
    activePeers[clientId] = Date.now();
    refreshPresenceCount();

    fetch(NTFY_PRESENCE_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ clientId, sender: userName, timestamp: Date.now() })
    }).catch(() => {});
}

function refreshPresenceCount() {
    const now = Date.now();
    let count = 0;
    // Any device that reported in the last 22 seconds is online
    Object.keys(activePeers).forEach(id => {
        if (now - activePeers[id] < 22000) {
            count++;
        } else {
            delete activePeers[id];
        }
    });

    if (count < 1) count = 1;

    const userPill = document.getElementById("activeUserCount");
    if (userPill) userPill.innerText = `${count} Canlı`;
}

// Fallback chat polling every 4 seconds (in case SSE drops on mobile)
setInterval(() => {
    fetch(`${NTFY_CHAT_URL}/json?poll=1&since=30s`)
        .then(res => res.text())
        .then(text => {
            if (!text) return;
            const lines = text.trim().split("\n");
            let hasNew = false;
            lines.forEach(line => {
                try {
                    const item = JSON.parse(line);
                    if (item.event === "message" && item.message) {
                        const parsedMsg = JSON.parse(item.message);
                        if (!chatHistory.some(m => m.id === parsedMsg.id)) {
                            chatHistory.push(parsedMsg);
                            hasNew = true;
                            if (parsedMsg.clientId !== clientId) {
                                notifyIncomingMessage(parsedMsg);
                            }
                        }
                    }
                } catch (e) {}
            });
            if (hasNew) {
                chatHistory.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
                saveChatLocally();
                renderChatHistory();
            }
        })
        .catch(() => {});
}, 4000);

// Toast helper
let toastTimer = null;
function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// Boot real-time systems
initRealtimeChat();
initPresence();

// Initial UI Boot
updatePointsUI();
renderCurrentChannel();
renderWallet();
