// ============================================
//  MAIN.JS — Semua interaksi & animasi
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Loading Screen ----
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hide'), 600);
  });
  setTimeout(() => loader.classList.add('hide'), 3000);

  // ---- Scroll to Top ----
  const scrollTopBtn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---- AOS (Animate on Scroll) ----
  const aosEls = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('aos-animate'); }
    });
  }, { threshold: 0.12 });
  aosEls.forEach(el => observer.observe(el));

  // ---- Navbar scroll ----
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // ---- Active nav link ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const updateActive = () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) cur = s.id; });
    navLinks.forEach(l => {
      l.classList.remove('active');
      if (l.getAttribute('href') === '#' + cur) l.classList.add('active');
    });
  };
  window.addEventListener('scroll', updateActive, { passive: true });

  // ---- Mobile nav toggle ----
  const toggle = document.getElementById('nav-toggle');
  const navLinksList = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
    toggle.classList.toggle('open');
  });
  navLinksList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinksList.classList.remove('open');
      toggle.classList.remove('open');
    });
  });

  // ---- Typed text effect ----
  const roles = ['Software Developer', 'IoT Engineer', 'Web Developer', 'Multimedia Designer', 'Problem Solver'];
  let ri = 0, ci = 0, del = false;
  const typedEl = document.getElementById('typed-text');
  const type = () => {
    const word = roles[ri];
    typedEl.textContent = del ? word.slice(0, ci--) : word.slice(0, ci++);
    let delay = del ? 60 : 110;
    if (!del && ci > word.length) { delay = 1800; del = true; }
    else if (del && ci < 0) { del = false; ri = (ri + 1) % roles.length; ci = 0; delay = 400; }
    setTimeout(type, delay);
  };
  setTimeout(type, 500);

  // ---- Render Skills ----
  const renderSkills = (key, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = DATA.skills[key].map(s => {
      const icon = s.icon
        ? `<img src="${s.icon}" alt="${s.name}" class="skill-icon" loading="lazy" />`
        : `<span class="skill-initial">${s.name.charAt(0)}</span>`;
      return `
      <div class="skill-card">
        <div class="skill-header">
          <span class="skill-name">${icon}${s.name}</span>
          <span class="skill-level">${s.level}%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" data-width="${s.level}"></div></div>
      </div>`;
    }).join('');
  };
  renderSkills('programming', 'skills-programming');
  renderSkills('hardware', 'skills-hardware');
  renderSkills('multimedia', 'skills-multimedia');

  // Animate skill bars when visible
  const animateBars = () => {
    document.querySelectorAll('.skill-fill').forEach(el => {
      if (!el.dataset.animated) {
        const rect = el.closest('.skill-card').getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.style.width = el.dataset.width + '%';
          el.dataset.animated = '1';
        }
      }
    });
  };
  window.addEventListener('scroll', animateBars, { passive: true });
  setTimeout(animateBars, 600);

  // ---- Skills Tabs ----
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
      setTimeout(animateBars, 100);
    });
  });

  // ---- Render Projects ----
  const projectsGrid = document.getElementById('projects-grid');
  const renderProjects = (filter = 'all') => {
    const list = filter === 'all' ? DATA.projects : DATA.projects.filter(p => p.category === filter);
    projectsGrid.innerHTML = list.map(p => {
      const thumb = p.image
        ? `<img src="${p.image}" alt="${p.title}" loading="lazy" />`
        : `<div class="project-thumb-placeholder" style="background:linear-gradient(135deg,${p.color}22,${p.color}44);border-bottom:3px solid ${p.color}"><span style="font-size:.8rem;font-weight:700;color:${p.color};letter-spacing:.1em;text-transform:uppercase">${p.categoryLabel}</span></div>`;
      return `
      <div class="project-card" data-id="${p.id}" data-category="${p.category}">
        <div class="project-thumb">${thumb}</div>
        <div class="project-body">
          <p class="project-category">${p.categoryLabel}</p>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <div class="project-links">
            <a href="${p.demo}" class="project-link" target="_blank" rel="noopener">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Demo
            </a>
            <a href="${p.repo}" class="project-link" target="_blank" rel="noopener">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              Repo
            </a>
            <button class="project-link" onclick="openModal(${p.id})" style="background:none;font-family:inherit">
              Detail →
            </button>
          </div>
        </div>
      </div>`;
    }).join('');
  };
  renderProjects();

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  // ---- Render Experience ----
  const expTimeline = document.getElementById('experience-timeline');
  expTimeline.innerHTML = DATA.experience.map(e => `
    <div class="timeline-item">
      <div class="timeline-dot">${e.num}</div>
      <div class="timeline-info">
        <h4>${e.title}</h4>
        <p class="timeline-org">${e.org}</p>
        <p class="timeline-period">${e.period}</p>
        <p class="timeline-desc">${e.desc}</p>
      </div>
    </div>`).join('');

  // ---- Render Certs ----
  const certsGrid = document.getElementById('certs-grid');
  certsGrid.innerHTML = DATA.certs.map(c => `
    <div class="cert-card">
      <div class="cert-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <div class="cert-info">
        <h4>${c.name}</h4>
        <p class="cert-issuer">${c.issuer}</p>
        <p class="cert-year">${c.year}</p>
      </div>
    </div>`).join('');

  // ---- Contact Form (Formspree) ----
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form._honeypot && form._honeypot.value) return;
    const btn = form.querySelector('#btn-send');
    const originalHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = 'Mengirim...';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        feedback.className = 'form-feedback success';
        feedback.textContent = 'Pesan berhasil dikirim! Saya akan membalas secepatnya.';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Gagal mengirim pesan. Silakan coba lagi atau hubungi via email.';
    }
    btn.disabled = false;
    btn.innerHTML = originalHTML;
    setTimeout(() => { feedback.className = 'form-feedback'; }, 5000);
  });

  // ---- Modal ----
  const overlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('modal-close');

  window.openModal = (id) => {
    const p = DATA.projects.find(x => x.id === id);
    if (!p) return;
    const thumb = p.image
      ? `<img src="${p.image}" alt="${p.title}" class="modal-thumb" />`
      : `<div class="modal-thumb-placeholder" style="background:linear-gradient(135deg,${p.color}22,${p.color}44);border-bottom:3px solid ${p.color}"><span style="font-size:.9rem;font-weight:700;color:${p.color};letter-spacing:.1em;text-transform:uppercase">${p.categoryLabel}</span></div>`;
    modalContent.innerHTML = `
      ${thumb}
      <p class="modal-category">// ${p.categoryLabel}</p>
      <h2 id="modal-title">${p.title}</h2>
      <div class="project-tags" style="margin:12px 0 20px">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="modal-section"><h3>Deskripsi</h3><p>${p.fullDesc}</p></div>
      <div class="modal-section"><h3>Peran Saya</h3><p>${p.role}</p></div>
      <div class="modal-section"><h3>Tantangan</h3><p>${p.challenge}</p></div>
      <div class="modal-section"><h3>Hasil</h3><p>${p.result}</p></div>
      <div class="modal-actions">
        <a href="${p.demo}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Demo Live</a>
        <a href="${p.repo}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">GitHub Repo</a>
      </div>`;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

});
