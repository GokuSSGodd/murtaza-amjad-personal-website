// Terminal animation
const lines = [
  { delay: 0,    html: '<span class="t-prompt">❯</span> <span class="t-cmd">cat profile.json</span>' },
  { delay: 600,  html: '<span class="t-out">{</span>' },
  { delay: 750,  html: '  <span class="t-key">"name"</span><span class="t-out">:</span> <span class="t-val">"Murtaza Amjad"</span><span class="t-out">,</span>' },
  { delay: 900,  html: '  <span class="t-key">"role"</span><span class="t-out">:</span> <span class="t-val">"Software Engineer"</span><span class="t-out">,</span>' },
  { delay: 1050, html: '  <span class="t-key">"focus"</span><span class="t-out">:</span> <span class="t-val">"AI Security"</span><span class="t-out">,</span>' },
  { delay: 1200, html: '  <span class="t-key">"university"</span><span class="t-out">:</span> <span class="t-val">"Univ. of New Haven"</span><span class="t-out">,</span>' },
  { delay: 1350, html: '  <span class="t-key">"open_to_work"</span><span class="t-out">:</span> <span class="t-val">true</span>' },
  { delay: 1450, html: '<span class="t-out">}</span>' },
  { delay: 1700, html: '' },
  { delay: 1800, html: '<span class="t-prompt">❯</span> <span class="t-cmd">ls projects/</span>' },
  { delay: 2200, html: '<span class="t-val">SendIt</span>  <span class="t-val">Classify</span>  <span class="t-val">AI-Threat-Detect</span>  <span class="t-val">Car-DB</span>' },
  { delay: 2600, html: '' },
  { delay: 2700, html: '<span class="t-prompt">❯</span> <span class="t-comment"># always building something new</span> <span class="cursor"></span>' },
];

function initTerminal() {
  const el = document.getElementById('terminal');
  if (!el) return;
  lines.forEach(({ delay, html }) => {
    setTimeout(() => {
      const span = document.createElement('span');
      span.className = 't-line';
      span.style.animationDelay = '0ms';
      span.innerHTML = html;
      el.appendChild(document.createElement('br'));
      el.appendChild(span);
    }, delay);
  });
}

// Scroll reveal
function initReveal() {
  const els = document.querySelectorAll('.section > *, .exp-item, .project-card, .skill-group');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => {
    el.classList.add('reveal');
    obs.observe(el);
  });
}

// Nav toggle (mobile)
function initNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (!toggle) return;
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) nav.classList.remove('open');
  });
}

// Nav scroll tint
function initNavScroll() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 20
      ? 'rgba(255,255,255,0.1)'
      : 'rgba(255,255,255,0.07)';
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initTerminal();
  initReveal();
  initNav();
  initNavScroll();
});