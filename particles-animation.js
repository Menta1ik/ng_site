// Enhanced Particles Animation - Common Script
// © 2024 NextGen by BrainySoft Ltd. Build better, build faster.

// Initialize particles animation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particles-bg');
    if (!canvas) {
        console.warn('Particles canvas element not found');
        return;
    }

    const ctx = canvas.getContext('2d');
    let particles = [];
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    function resizeCanvas() {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
        createParticles();
    }
    window.addEventListener('resize', resizeCanvas);

    const PARTICLE_COLOR = '#b2e0ff';
    const LINE_COLOR = '#19e97c';
    const PARTICLE_COUNT = Math.floor((w * h) / 1500);
    const PARTICLE_SIZE = 2;
    const SPEED = 0.15;
    const LINE_DISTANCE = 150;
    const MOUSE_RADIUS = 200;

    let mouse = { x: 0, y: 0 };

    // Mouse interaction
    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function randomBetween(a, b) { return a + Math.random() * (b - a); }

    function createParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: randomBetween(-SPEED, SPEED),
                vy: randomBetween(-SPEED, SPEED),
                size: PARTICLE_SIZE + Math.random() * 1,
                originalSize: PARTICLE_SIZE + Math.random() * 1,
                opacity: 0.3 + Math.random() * 0.7
            });
        }
    }
    createParticles();

    function drawLines() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < LINE_DISTANCE) {
                    ctx.save();
                    const opacity = 0.15 * (1 - dist / LINE_DISTANCE);
                    ctx.globalAlpha = opacity;
                    ctx.strokeStyle = LINE_COLOR;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, w, h);
        
        drawLines();
        
        for (let p of particles) {
            // Mouse interaction
            const mouseDistance = Math.sqrt((p.x - mouse.x) ** 2 + (p.y - mouse.y) ** 2);
            if (mouseDistance < MOUSE_RADIUS) {
                const force = (MOUSE_RADIUS - mouseDistance) / MOUSE_RADIUS;
                p.size = p.originalSize * (1 + force * 2);
                p.opacity = Math.min(1, p.opacity + force * 0.5);
            } else {
                p.size = p.originalSize;
                p.opacity = Math.max(0.3, p.opacity - 0.01);
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
            ctx.fillStyle = PARTICLE_COLOR;
            ctx.globalAlpha = p.opacity;
            ctx.fill();
            ctx.globalAlpha = 1;
            
            p.x += p.vx;
            p.y += p.vy;
            
            // Random direction change
            if (Math.random() < 0.003) {
                p.vx = randomBetween(-SPEED, SPEED);
                p.vy = randomBetween(-SPEED, SPEED);
            }
            
            // Boundary collision
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        
        requestAnimationFrame(animateParticles);
    }

    // Initialize particles and start animation
    resizeCanvas();
    createParticles();
    animateParticles();
});