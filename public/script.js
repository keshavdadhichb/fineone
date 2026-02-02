// ===== Initialize Effects =====
document.addEventListener('DOMContentLoaded', function () {
    createSparkles();
    createConfetti();
    startCountdown();
});

// ===== Floating Hearts =====
function createFloatingHearts() {
    const container = document.getElementById('hearts-container');
    const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '🩷', '🤍'];

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createHeart(container, hearts);
        }, i * 300);
    }

    // Keep creating hearts
    setInterval(() => {
        createHeart(container, hearts);
    }, 500);
}

function createHeart(container, hearts) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.fontSize = (15 + Math.random() * 20) + 'px';
    container.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// ===== Sparkles =====
function createSparkles() {
    const container = document.getElementById('sparkles-container');
    const sparkles = ['✨', '⭐', '💫', '🌟'];

    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        sparkle.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
        container.appendChild(sparkle);
    }
}

// ===== Confetti =====
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ffb6c1', '#dda0dd', '#e6e6fa', '#ffe4e1', '#ffc0cb', '#ff69b4'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfettiPiece(container, colors);
        }, i * 100);
    }

    // Keep creating confetti
    setInterval(() => {
        createConfettiPiece(container, colors);
    }, 200);
}

function createConfettiPiece(container, colors) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = (3 + Math.random() * 3) + 's';
    confetti.style.animationDelay = Math.random() + 's';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    container.appendChild(confetti);

    // Remove after animation
    setTimeout(() => {
        confetti.remove();
    }, 8000);
}

// ===== Countdown Timer =====
function startCountdown() {
    const valentinesDay = new Date('February 14, 2026 00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = valentinesDay - now;

        if (distance < 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== Runaway No Button =====
let noClickCount = 0;
const taunts = [
    "Hehe nice try!",
    "Nope! Try again!",
    "You can't catch me!",
    "Aww come on, just say yes!",
    "I'm too fast for you!",
    "Give up already!",
    "Just click YES pleaseee",
    "NEVER!",
    "You really thought?",
    "Keshu will be sad"
];

function runAway() {
    const btn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    noClickCount++;

    // Get viewport dimensions
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 80;

    // Random position
    const randomX = Math.max(50, Math.random() * maxX);
    const randomY = Math.max(50, Math.random() * maxY);

    // Move button to random position (fixed positioning)
    btn.style.position = 'fixed';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
    btn.style.transition = 'all 0.15s ease';
    btn.style.zIndex = '9999';

    // Change button text with taunts
    btn.textContent = taunts[noClickCount % taunts.length];

    // Make button smaller each time (rage bait!)
    const scale = Math.max(0.5, 1 - (noClickCount * 0.05));
    btn.style.transform = `scale(${scale})`;

    // Make YES button bigger each time! (more rage bait)
    const yesScale = 1 + (noClickCount * 0.1);
    yesBtn.style.transform = `scale(${Math.min(yesScale, 2)})`;

    // Add shake animation
    btn.classList.add('shake');
    setTimeout(() => btn.classList.remove('shake'), 300);

    // After 5 clicks, the button starts moving even faster
    if (noClickCount > 5) {
        btn.style.transition = 'all 0.05s ease';
    }
}

// ===== Yes Button Handler =====
function sayYes() {
    // Create heart explosion
    createHeartExplosion();

    // Send email
    sendEmail();

    // Switch to success page after explosion
    setTimeout(() => {
        document.getElementById('main-page').classList.add('hidden');
        document.getElementById('success-page').classList.remove('hidden');

        // More hearts for celebration!
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createHeartExplosion();
            }, i * 50);
        }
    }, 1000);
}

// ===== Heart Explosion Effect =====
function createHeartExplosion() {
    const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '🩷', '🤍', '💘'];

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-explosion';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = '50%';
        heart.style.top = '50%';

        // Random direction
        const angle = (Math.PI * 2 * i) / 30;
        const distance = 100 + Math.random() * 200;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        heart.style.setProperty('--tx', tx + 'px');
        heart.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

// ===== Send Email =====
async function sendEmail() {
    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        console.log('Email sent:', data);
    } catch (error) {
        console.error('Email error:', error);
    }
}
