// =============================================
// main.js — Semua logika interaksi halaman
// =============================================

// ─── 1. RENDER PROJECT CARDS ───────────────────────────────────────────────

function buildCodeHtml(lines) {
  return lines
    .map((l) => {
      const escaped = l.text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      if (l.type === "text") return `<span>${escaped}</span>`;
      return `<span class="${l.type}">${escaped}</span>`;
    })
    .join("<br />");
}

function buildTagsHtml(tags) {
  return tags.map((t) => `<span class="tag ${t.cls}">${t.label}</span>`).join("");
}

function buildStackHtml(stack) {
  return stack.map((s) => `<span class="stack-pill">${s}</span>`).join("");
}

function buildMetricsHtml(metrics) {
  return metrics
    .map(
      (m) => `
      <div class="metric-item">
        <span class="metric-val">${m.val}</span>
        <span class="metric-lbl">${m.lbl}</span>
      </div>`
    )
    .join("");
}

function buildGithubBtn(url) {
  if (!url) return "";
  return `<a href="${url}" target="_blank" class="btn-outline" style="margin-top:1rem;font-size:13px;padding:7px 16px;">🕵️‍♂️ Kepoinn yuukk</a>`;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid || !PROJECTS) return;

  // Urutkan: featured duluan
  const sorted = [...PROJECTS].sort((a, b) => b.featured - a.featured);

  sorted.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card" + (p.featured ? " featured" : "");
    card.style.transitionDelay = `${i * 80}ms`;

    if (p.featured) {
      card.innerHTML = `
        <!-- Left: info -->
        <div class="project-left">
          <div class="project-tags">${buildTagsHtml(p.tags)}</div>
          <div class="project-title">${p.title}</div>
          <p class="project-desc">${p.description}</p>
          <div class="project-metrics">${buildMetricsHtml(p.metrics)}</div>
          <div class="project-stack">${buildStackHtml(p.stack)}</div>
          ${buildGithubBtn(p.github)}
        </div>
        <!-- Right: code snippet -->
        <div class="project-code">${buildCodeHtml(p.codeLines)}</div>
      `;
    } else {
      card.innerHTML = `
        <div class="project-tags">${buildTagsHtml(p.tags)}</div>
        <div class="project-title">${p.title}</div>
        <p class="project-desc">${p.description}</p>
        <div class="project-stack">${buildStackHtml(p.stack)}</div>
        ${buildGithubBtn(p.github)}
      `;
    }

    grid.appendChild(card);
  });
}

// ─── 2. SCROLL REVEAL (IntersectionObserver) ───────────────────────────────

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target); // animasi cukup sekali
        }
      });
    },
    { threshold: 0.12 }
  );

  // Semua elemen dengan atribut data-reveal
  document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));

  // Project cards
  document.querySelectorAll(".project-card").forEach((el) => observer.observe(el));

  // Experience items
  document.querySelectorAll(".exp-item").forEach((el) => observer.observe(el));
}

// ─── 3. SKILL BAR ANIMATION ────────────────────────────────────────────────

function initSkillBars() {
  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector(".skill-fill");
          if (fill) {
            // Trigger CSS transition: ubah width dari 0 → --target
            requestAnimationFrame(() => fill.classList.add("animate"));
          }
          entry.target.classList.add("revealed");
          skillObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".skill-item").forEach((el) => skillObserver.observe(el));
}

// ─── 4. NAVBAR BEHAVIOR ────────────────────────────────────────────────────

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const links  = document.getElementById("navLinks");

  // Tambah class scrolled saat di-scroll
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });

  // Hamburger toggle (mobile)
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    links.classList.toggle("open");
  });

  // Tutup menu saat link diklik (mobile)
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.classList.remove("open");
      links.classList.remove("open");
    });
  });

  // Active link saat scroll (highlight nav item sesuai section)
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) current = sec.getAttribute("id");
    });

    navAnchors.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href") === `#${current}`) {
        a.classList.add("active");
      }
    });
  });
}


// ─── INIT (jalankan setelah DOM siap) ──────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();     // render cards dari data.js
  initNavbar();         // navbar scroll & mobile toggle

  // Scroll reveal & skill bar perlu delay sedikit
  // biar project cards sudah di-render lebih dulu
  setTimeout(() => {
    initScrollReveal();
    initSkillBars();
  }, 100);
});