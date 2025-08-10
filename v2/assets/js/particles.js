(() => {
  // Respect reduced motion
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const canvas = document.getElementById('particles-bg');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let w = window.innerWidth;
  let h = window.innerHeight;
  let running = true;
  let lastTime = performance.now();

  // Device pixel ratio handling
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  function resizeCanvas() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createParticles();
  }
  window.addEventListener('resize', resizeCanvas);

  const PARTICLE_COLOR = getComputedStyle(document.documentElement).getPropertyValue('--particle-color').trim() || '#b2e0ff';
  const LINE_COLOR = getComputedStyle(document.documentElement).getPropertyValue('--particle-line-color').trim() || '#19e97c';
  const BASE_DENSITY = 1500;
  const MAX_PARTICLES = 120;
  const isMobile = matchMedia('(max-width: 768px)').matches;
  const PARTICLE_SIZE = 2;
  const SPEED = 0.15;
  const LINE_DISTANCE = 150;
  const MOUSE_RADIUS = 200;

  let mouse = { x: -9999, y: -9999 };

  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  document.addEventListener('mouseleave', () => {
    mouse.x = -9999; mouse.y = -9999;
  });

  function randomBetween(a, b) { return a + Math.random() * (b - a); }

  function particleCountForViewport() {
    const count = Math.floor((w * h) / BASE_DENSITY);
    const adjusted = isMobile ? Math.floor(count * 0.5) : count; // reduce on mobile
    const dprAdjusted = Math.floor(adjusted / dpr); // reduce on high DPR
    return Math.max(20, Math.min(dprAdjusted, MAX_PARTICLES));
  }

  function createParticles() {
    const targetCount = particleCountForViewport();
    particles = [];
    for (let i = 0; i < targetCount; i++) {
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

  function step(now) {
    if (!running) return;
    const dt = Math.min(32, now - lastTime) / (1000 / 60); // normalize to 60fps, clamp spikes
    lastTime = now;

    ctx.clearRect(0, 0, w, h);
    drawLines();

    for (let p of particles) {
      const mouseDistance = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (mouseDistance < MOUSE_RADIUS) {
        const force = (MOUSE_RADIUS - mouseDistance) / MOUSE_RADIUS;
        p.size = p.originalSize * (1 + force * 2);
        p.opacity = Math.min(1, p.opacity + force * 0.5);
      } else {
        p.size = p.originalSize;
        p.opacity = Math.max(0.3, p.opacity - 0.01 * dt);
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
      ctx.fillStyle = PARTICLE_COLOR;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;

      p.x += p.vx * dt;
      p.y += p.vy * dt;

      if (Math.random() < 0.003 * dt) {
        p.vx = randomBetween(-SPEED, SPEED);
        p.vy = randomBetween(-SPEED, SPEED);
      }

      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }

    requestAnimationFrame(step);
  }

  function start() {
    if (!running) {
      running = true;
      lastTime = performance.now();
      requestAnimationFrame(step);
    }
  }
  function stop() { running = false; }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else start();
  });

  resizeCanvas();
  createParticles();
  requestAnimationFrame(step);
})();