// ========== CONFIGURATION ==========
const CONFIG = {
    startDate: new Date('2026-05-21T00:00:00'), // Ubah tanggal mulai bersama di sini
    typingTexts: [
        "Aku memilihmu hari ini, besok, dan seterusnya.",
        "Kamu adalah alasan aku tersenyum setiap hari.",
        "Cinta kita adalah cerita favoritku.",
        "Selalu bersama kamu.",
        "Kamu adalah rumahku."
    ],
    loveMessages: [
        "Terima kasih sudah hadir dalam hidupku.",
        "Kamu adalah bagian terbaik dari hariku.",
        "Aku selalu bersyukur memilikimu.",
        "Setiap bersamamu adalah keajaiban.",
        "Cinta kita semakin indah.",
        "Kamu membuat hidupku lebih berarti.",
        "Aku mencintaimu lebih setiap hari.",
        "Kamu adalah impian yang menjadi kenyataan.",
        "Tanpamu, hidupku tidak lengkap.",
        "Kamu adalah cinta sejati aku."
    ],
    reasons: [
        "Karena senyummu menenangkan hatiku.",
        "Karena kamu selalu ada untukku.",
        "Karena kamu membuat hari biasa menjadi spesial.",
        "Karena kamu adalah rumah yang selalu ingin aku pulang.",
        "Karena tawa kamu adalah musik untukku.",
        "Karena kamu menerima aku apa adanya.",
        "Karena kamu selalu mendukung impianku.",
        "Karena kamu membuatku ingin menjadi lebih baik.",
        "Karena pelukanmu menghilangkan semua lelah.",
        "Karena kamu adalah partner terbaik di dunia.",
        "Karena kamu mengerti aku tanpa kata-kata.",
        "Karena kamu selalu membuatku tersenyum.",
        "Karena kamu adalah alasan aku bahagia.",
        "Karena kamu cinta aku dengan sepenuh hati.",
        "Karena kamu unik dan sempurna bagiku.",
        "Karena kamu selalu bersabar dengan ku.",
        "Karena kamu adalah temanku sahabatku.",
        "Karena kamu membuatku merasa dicintai.",
        "Karena kamu cantik luar dalam.",
        "Karena kamu selalu mendengarkan ku.",
        "Karena kamu adalah cahaya dalam gelapku.",
        "Karena kamu membuatku percaya pada cinta.",
        "Karena kamu selalu memberikan yang terbaik.",
        "Karena kamu adalah inspirasiku.",
        "Karena kamu selalu ada di setiap langkahku.",
        "Karena kamu membuat segalanya lebih indah.",
        "Karena kamu adalah orang yang paling spesial.",
        "Karena kamu selalu membuatku merasa penting.",
        "Karena kamu adalah bagian dari diriku.",
        "Karena kamu selalu berusaha untukku.",
        "Karena kamu adalah alasan aku semangat.",
        "Karena kamu membuatku nyaman.",
        "Karena kamu adalah hadiah terindah.",
        "Karena kamu selalu mencintai keluargaku.",
        "Karena kamu selalu menghargai ku.",
        "Karena kamu selalu menemani ku.",
        "Karena kamu adalah pelipur laraku.",
        "Karena kamu selalu membuatku merasa aman.",
        "Karena kamu adalah cintaku selamanya.",
        "Karena kamu selalu positif.",
        "Karena kamu adalah teman curhatku.",
        "Karena kamu selalu memperhatikan detail kecil.",
        "Karena kamu adalah keajaiban dalam hidupku.",
        "Karena kamu selalu menjaga ku.",
        "Karena kamu adalah pahlawanku.",
        "Karena kamu selalu menyayangi ku.",
        "Karena kamu adalah bagian terindah.",
        "Karena kamu selalu mengisi hari-hariku.",
        "Karena kamu adalah bidadariku.",
        "Karena kamu selalu membuatku bangga.",
        "Karena kamu adalah harapanku.",
        "Karena kamu selalu menguatkan ku.",
        "Karena kamu adalah cintaku yang satu satunya.",
        "Karena kamu selalu menjadi dirimu sendiri.",
        "Karena kamu adalah impianku.",
        "Karena kamu selalu membuatku terkejut dengan kebaikanmu.",
        "Karena kamu adalah masa depanku.",
        "Karena kamu selalu ada di setiap mimpi indahku.",
        "Karena kamu adalah kebahagiaanku.",
        "Karena kamu selalu mencoba hal baru bersama ku.",
        "Karena kamu adalah segalanya untukku.",
        "Karena kamu selalu mengajarkanku tentang cinta.",
        "Karena kamu adalah alasanku untuk hidup.",
        "Karena kamu selalu membuatku merasa berarti.",
        "Karena kamu adalah tempatku.",
        "Karena kamu selalu menyemangati ku.",
        "Karena kamu adalah jawaban doaku.",
        "Karena kamu selalu mengasihi ku.",
        "Karena kamu adalah alasan aku bertahan.",
        "Karena kamu selalu menyayangi ku apa adanya.",
        "Karena kamu adalah keajaiban.",
        "Karena kamu selalu menjadi pendampingku.",
        "Karena kamu adalah separuh diriku.",
        "Karena kamu selalu mencintai dengan tulus.",
        "Karena kamu adalah milikku.",
        "Karena kamu selalu menjadi support system ku.",
        "Karena kamu adalah yang terbaik untukku.",
        "Karena kamu selalu membuat hari ku cerah.",
        "Karena kamu adalah segalanya bagiku.",
        "Karena kamu selalu menghargai pendapatku.",
        "Karena kamu adalah cinta abadi.",
        "Karena kamu selalu menjadi temanku.",
        "Karena kamu adalah anugerah terindah.",
        "Karena kamu selalu menerima kekuranganku.",
        "Karena kamu adalah kebahagiaan sejati.",
        "Karena kamu selalu menemani hari-hariku.",
        "Karena kamu adalah sempurna di mataku.",
        "Karena kamu selalu memberikan cinta mu.",
        "Karena kamu adalah cinta pertama dan terakhir.",
        "Karena kamu selalu membuatku bahagia.",
        "Karena kamu adalah yang terbaik.",
        "Karena kamu selalu menjadi bagian hidupku.",
        "Karena kamu adalah cintaku selamanya.",
        "Karena kamu selalu ada di hatiku.",
        "Karena kamu adalah yang terindah.",
        "Karena kamu selalu menjadi alasan aku mencintai hidup.",
        "Karena kamu adalah sempurna.",
        "Karena kamu selalu memberikan kebahagiaan.",
        "Karena kamu adalah bagian terindah dalam hidupku.",
        "Karena kamu selalu menjadi kamu, sayang."
    ],
    playlist: [
        { title: "Lagu Favorit Ayangggg", url: "assets/audio/yung kai - blue (official music video) - yung kai.mp3" },
        { title: "Lagu Favorit Abangggg", url: "assets/audio/Push The Feeling On - Nightcrawlers (Lyrics) - TikTokPlay.mp3" },
        { title: "Lagu Kita Berdua", url: "assets/audio/Kita - Sheila on 7  Lirik Lagu - Indolirik.mp3" },
        { title: "Lagu Untuk Masa Depan", url: "assets/audio/Tulus - Monokrom  Lirik Lagu Indonesia - Indolirik.mp3" }
    ]
};

// ========== LOADING SCREEN ==========
let progress = 0;
const progressBar = document.getElementById('progress-bar');
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');

function updateProgress() {
    if (progress < 100) {
        progress += Math.random() * 10;
        if (progress > 100) progress = 100;
        progressBar.style.width = progress + '%';
        setTimeout(updateProgress, 200);
    } else {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            mainContent.style.display = 'block';
            try {
                initParticles();
                initFloatingHearts();
            } catch (e) {
                console.error('Error init:', e);
            }
        }, 500);
    }
}

// Failsafe: loading screen otomatis hilang setelah 5 detik
setTimeout(() => {
    if (!loadingScreen.classList.contains('hidden')) {
        loadingScreen.classList.add('hidden');
        mainContent.style.display = 'block';
        try {
            initParticles();
            initFloatingHearts();
        } catch (e) {
            console.error('Error init failsafe:', e);
        }
    }
}, 5000);

// ========== PARTICLES BACKGROUND ==========
let canvas, ctx, particles = [];

function initParticles() {
    canvas = document.getElementById('particles');
    ctx = canvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            color: Math.random() > 0.5 ? '#7B61FF' : '#FF7EB3',
            dx: Math.random() * 1 - 0.5,
            dy: Math.random() * 1 - 0.5
        });
    }
    
    animateParticles();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        particles.forEach(other => {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(other.x, other.y);
                ctx.strokeStyle = `rgba(123, 97, 255, ${0.2 * (1 - distance / 100)})`;
                ctx.stroke();
            }
        });
    });
    
    requestAnimationFrame(animateParticles);
}

// ========== FLOATING HEARTS ==========
function initFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.fontSize = (Math.random() * 1 + 1) + 'rem';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 800);
}

// ========== CUSTOM CURSOR ==========
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursorFollower.style.left = cursorX + 'px';
    cursorFollower.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// ========== SCROLL PROGRESS ==========
const scrollProgress = document.getElementById('scroll-progress');

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = progress + '%';
});

// ========== TYPING ANIMATION ==========
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById('typing-text');

function typeText() {
    const currentText = CONFIG.typingTexts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let speed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % CONFIG.typingTexts.length;
        speed = 500;
    }
    
    setTimeout(typeText, speed);
}

// ========== LOVE COUNTER ==========
function updateCounter() {
    const now = new Date();
    const diff = now - CONFIG.startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// ========== REASONS GENERATOR ==========
function generateReasons() {
    const grid = document.getElementById('reasons-grid');
    
    CONFIG.reasons.forEach((reason, index) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.innerHTML = `
            <div class="reason-inner">
                <div class="reason-front">
                    <i class="fas fa-heart"></i>
                </div>
                <div class="reason-back">
                    ${reason}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ========== GALLERY LIGHTBOX ==========
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-overlay p').textContent;
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption;
    });
});

document.querySelector('.lightbox-close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// ========== SECRET LETTER ==========
const envelope = document.getElementById('envelope');
const secretLetterContent = document.getElementById('secret-letter-content');

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        envelope.style.display = 'none';
        secretLetterContent.style.display = 'block';
        secretLetterContent.style.animation = 'fadeInUp 0.8s ease';
    }, 600);
});

// ========== MUSIC PLAYER ==========
const bgMusic = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
    } else {
        bgMusic.play();
        musicToggle.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// ========== PLAYLIST ==========
let currentSong = 0;
const playlistAudio = document.getElementById('playlist-audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentSongText = document.getElementById('current-song');

playBtn.addEventListener('click', () => {
    if (playlistAudio.paused) {
        playlistAudio.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playlistAudio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

prevBtn.addEventListener('click', () => {
    currentSong = (currentSong - 1 + CONFIG.playlist.length) % CONFIG.playlist.length;
    loadSong(currentSong);
});

nextBtn.addEventListener('click', () => {
    currentSong = (currentSong + 1) % CONFIG.playlist.length;
    loadSong(currentSong);
});

function loadSong(index) {
    playlistAudio.src = CONFIG.playlist[index].url;
    currentSongText.textContent = CONFIG.playlist[index].title;
    playlistAudio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

// ========== LOVE MESSAGES ==========
let messageIndex = 0;
const loveMessage = document.getElementById('love-message');

function changeMessage() {
    loveMessage.style.opacity = '0';
    setTimeout(() => {
        messageIndex = (messageIndex + 1) % CONFIG.loveMessages.length;
        loveMessage.textContent = CONFIG.loveMessages[messageIndex];
        loveMessage.style.opacity = '1';
    }, 500);
}

// ========== SCROLL REVEAL ANIMATION ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item, .glass-card, .gallery-item, .dream-card, .sticky-note').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ========== SURPRISE SECTION ==========
const surpriseBtn = document.getElementById('surprise-btn');
const surprisePopup = document.getElementById('surprise-popup');
const closePopup = document.getElementById('close-popup');

surpriseBtn.addEventListener('click', () => {
    launchConfetti();
    surprisePopup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    surprisePopup.style.display = 'none';
});

surprisePopup.addEventListener('click', (e) => {
    if (e.target === surprisePopup) {
        surprisePopup.style.display = 'none';
    }
});

// ========== CONFETTI EFFECT ==========
function launchConfetti() {
    const colors = ['#7B61FF', '#FF7EB3', '#FFFFFF', '#FFD700'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.top = '-10px';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.zIndex = '99999';
            confetti.style.pointerEvents = 'none';
            document.body.appendChild(confetti);
            
            const duration = Math.random() * 3 + 2;
            const xMove = (Math.random() - 0.5) * 200;
            
            confetti.animate([
                { transform: 'translate(0, 0) rotate(0deg)', opacity: '1' },
                { transform: `translate(${xMove}px, 100vh) rotate(720deg)`, opacity: '0' }
            ], {
                duration: duration * 1000,
                easing: 'ease-out'
            });
            
            setTimeout(() => confetti.remove(), duration * 1000);
        }, i * 10);
    }
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.top = '-20px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            heart.style.zIndex = '99999';
            heart.style.pointerEvents = 'none';
            document.body.appendChild(heart);
            
            const duration = Math.random() * 4 + 3;
            const xMove = (Math.random() - 0.5) * 300;
            
            heart.animate([
                { transform: 'translate(0, 0)', opacity: '1' },
                { transform: `translate(${xMove}px, 100vh)`, opacity: '0' }
            ], {
                duration: duration * 1000,
                easing: 'ease-out'
            });
            
            setTimeout(() => heart.remove(), duration * 1000);
        }, i * 50);
    }
}

// ========== INITIALIZE EVERYTHING ==========
document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    generateReasons();
    typeText();
    updateCounter();
    setInterval(updateCounter, 1000);
    setInterval(changeMessage, 4000);
});