/* =====================================================================
   app.js — đọc dữ liệu từ content.js và dựng trang.
   Bạn KHÔNG cần sửa file này. Hãy chỉnh nội dung trong content.js.
   ===================================================================== */
(function () {
  "use strict";
  const P = window.PORTFOLIO || PORTFOLIO;
  const $ = (id) => document.getElementById(id);

  /* Tạo phần tử an toàn (không chèn HTML thô => tránh lỗi khi nội dung có ký tự đặc biệt) */
  function el(tag, opts, children) {
    const node = document.createElement(tag);
    opts = opts || {};
    if (opts.cls) node.className = opts.cls;
    if (opts.text != null) node.textContent = opts.text;
    if (opts.href) { node.href = opts.href; if (/^https?:/i.test(opts.href)) { node.target = "_blank"; node.rel = "noopener"; } }
    if (opts.attrs) Object.keys(opts.attrs).forEach((k) => node.setAttribute(k, opts.attrs[k]));
    (children || []).forEach((c) => c && node.appendChild(c));
    return node;
  }
  const icon = (name) => el("i", { cls: "fa " + name, attrs: { "aria-hidden": "true" } });

  /* Dựng một phần có tiêu đề. Nếu danh sách rỗng thì ẩn cả phần */
  function buildSection(id, isEmpty, buildBody) {
    const sec = $(id);
    if (isEmpty) { sec.hidden = true; return false; }
    sec.appendChild(el("div", { cls: "container reveal" }, [
      el("h2", { cls: "section-title", text: P.sections[id] }),
      buildBody()
    ]));
    return true;
  }

  document.title = P.siteTitle || P.name;

  /* ---------- Hero ---------- */
  (function hero() {
    const h = $("hero");
    const inner = el("div", { cls: "hero-inner reveal" });

    if (P.avatar) {
      const img = el("img", { cls: "avatar", attrs: { src: P.avatar, alt: "Ảnh đại diện của " + P.name } });
      img.onerror = function () { img.replaceWith(el("div", { cls: "avatar-fallback", text: (P.name || "?").trim().charAt(0).toUpperCase() })); };
      inner.appendChild(img);
    } else {
      inner.appendChild(el("div", { cls: "avatar-fallback", text: (P.name || "?").trim().charAt(0).toUpperCase() }));
    }

    inner.appendChild(el("h1", {}, [document.createTextNode("Xin chào, mình là "), el("span", { text: P.name })]));
    inner.appendChild(el("p", { cls: "role", text: P.role }));
    inner.appendChild(el("p", { cls: "tagline", text: P.tagline }));

    const actions = el("div", { cls: "hero-actions" });
    actions.appendChild(el("a", { cls: "btn primary", href: "#contact" }, [icon("fa-envelope"), document.createTextNode(" Liên hệ")]));
    if (P.cv && P.cv.url) actions.appendChild(el("a", { cls: "btn", href: P.cv.url }, [icon("fa-download"), document.createTextNode(" " + (P.cv.label || "Tải CV"))]));
    inner.appendChild(actions);

    if (P.social && P.social.length) {
      const row = el("div", { cls: "social-row" });
      P.social.forEach((s) => row.appendChild(el("a", { href: s.url, attrs: { "aria-label": s.label, title: s.label } }, [icon(s.icon)])));
      inner.appendChild(row);
    }
    h.appendChild(inner);
  })();

  /* ---------- Giới thiệu ---------- */
  buildSection("about", !(P.about && (P.about.bio || []).length), function () {
    const grid = el("div", { cls: "about-grid" });
    const text = el("div", { cls: "about-text" });
    P.about.bio.forEach((t) => text.appendChild(el("p", { text: t })));
    grid.appendChild(text);
    if ((P.about.facts || []).length) {
      const facts = el("div", { cls: "facts" });
      P.about.facts.forEach((f) => facts.appendChild(el("div", { cls: "fact" }, [
        icon(f.icon),
        el("div", {}, [el("small", { text: f.label }), el("strong", { text: f.value })])
      ])));
      grid.appendChild(facts);
    }
    return grid;
  });

  /* ---------- Học vấn ---------- */
  buildSection("education", !(P.education || []).length, function () {
    const tl = el("div", { cls: "timeline" });
    P.education.forEach((e) => tl.appendChild(el("div", { cls: "tl-item" }, [
      el("div", { cls: "tl-period", text: e.period }),
      el("h3", { text: e.school }),
      el("div", { cls: "tl-sub", text: e.major }),
      e.detail ? el("p", { cls: "tl-detail", text: e.detail }) : null
    ])));
    return tl;
  });

  /* ---------- Giải thưởng ---------- */
  buildSection("awards", !(P.awards || []).length, function () {
    const list = el("div", { cls: "awards-list" });
    P.awards.forEach((a) => list.appendChild(el("div", { cls: "award" }, [
      el("div", { cls: "award-year", text: a.year }),
      el("div", {}, [
        el("h3", { text: a.title }),
        a.org ? el("div", { cls: "org", text: a.org }) : null,
        a.detail ? el("p", { text: a.detail }) : null
      ])
    ])));
    return list;
  });

  /* ---------- Kỹ năng ---------- */
  buildSection("skills", !(P.skills || []).length, function () {
    const list = el("div", { cls: "skills-list" });
    P.skills.forEach((s) => {
      const lvl = Math.max(0, Math.min(100, Number(s.level) || 0));
      const fill = el("i");
      fill.dataset.level = lvl;
      list.appendChild(el("div", {}, [
        el("div", { cls: "skill-top" }, [el("span", { text: s.name }), el("span", { text: lvl + "%" })]),
        el("div", { cls: "bar" }, [fill])
      ]));
    });
    return list;
  });

  /* ---------- Dự án ---------- */
  buildSection("projects", !(P.projects || []).length, function () {
    const grid = el("div", { cls: "projects-grid" });
    P.projects.forEach((p) => {
      const imgBox = el("div", { cls: "project-img" });
      if (p.image) {
        const img = el("img", { attrs: { src: p.image, alt: p.title, loading: "lazy" } });
        img.onerror = function () { img.remove(); imgBox.appendChild(icon("fa-code")); };
        imgBox.appendChild(img);
      } else imgBox.appendChild(icon("fa-code"));

      const tags = el("div", { cls: "tags" });
      (p.tags || []).forEach((t) => tags.appendChild(el("span", { cls: "tag", text: t })));

      grid.appendChild(el("article", { cls: "project" }, [
        imgBox,
        el("div", { cls: "project-body" }, [
          el("h3", { text: p.title }),
          el("p", { text: p.description }),
          tags,
          p.link ? el("a", { cls: "project-link", href: p.link }, [document.createTextNode("Xem dự án "), icon("fa-arrow-right")]) : null
        ])
      ]));
    });
    return grid;
  });

  /* ---------- Sở thích & Món ăn ---------- */
  function cards(items) {
    const grid = el("div", { cls: "cards-grid" });
    items.forEach((i) => grid.appendChild(el("div", { cls: "mini-card" }, [
      el("div", { cls: "emoji", text: i.icon }),
      el("h3", { text: i.title }),
      el("p", { text: i.description })
    ])));
    return grid;
  }
  buildSection("hobbies", !(P.hobbies || []).length, () => cards(P.hobbies));
  buildSection("foods", !(P.foods || []).length, () => cards(P.foods));

  /* ---------- Liên hệ ---------- */
  buildSection("contact", !P.contact, function () {
    const c = P.contact;
    const list = el("div", { cls: "contact-list" });
    if (c.email) list.appendChild(el("a", { href: "mailto:" + c.email }, [icon("fa-envelope"), document.createTextNode(c.email)]));
    if (c.phone) list.appendChild(el("a", { href: "tel:" + c.phone.replace(/\s/g, "") }, [icon("fa-phone"), document.createTextNode(c.phone)]));
    if (c.location) list.appendChild(el("span", { cls: "item" }, [icon("fa-map-marker"), document.createTextNode(c.location)]));
    return el("div", { cls: "contact-box" }, [el("p", { text: c.message || "" }), list]);
  });

  /* ---------- Navbar & Footer ---------- */
  const brand = $("brand");
  brand.appendChild(document.createTextNode(P.name));
  brand.appendChild(el("span", { text: "." }));

  const navLinks = $("navLinks");
  ["about", "education", "awards", "skills", "projects", "hobbies", "foods", "contact"].forEach((id) => {
    if (!$(id).hidden) navLinks.appendChild(el("a", { href: "#" + id, text: P.sections[id] }));
  });
  navLinks.addEventListener("click", () => navLinks.classList.remove("open"));
  $("menuToggle").addEventListener("click", () => navLinks.classList.toggle("open"));

  /* Nút quay về Hub (ở thanh điều hướng, bên trái nút đổi giao diện) */
  if (P.hub && P.hub.url) {
    const hubBtn = el("a", { cls: "hub-btn", href: P.hub.url, attrs: { title: P.hub.label || "Về Hub" } }, [
      icon("fa-th-large"),
      el("span", { text: " " + (P.hub.label || "Về Hub") })
    ]);
    $("themeToggle").parentNode.insertBefore(hubBtn, $("themeToggle"));
  }

  $("footer").textContent ="© " + new Date().getFullYear() + " " + P.name + ". Mọi quyền được bảo lưu.";

  /* ---------- Giao diện sáng / tối ---------- */
  const root = document.documentElement;
  const themeBtn = $("themeToggle");
  function setTheme(t) {
    root.setAttribute("data-theme", t);
    themeBtn.innerHTML = t === "dark" ? '<i class="fa fa-sun-o"></i>' : '<i class="fa fa-moon-o"></i>';
    try { localStorage.setItem("theme", t); } catch (e) {}
  }
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  setTheme(saved || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  themeBtn.addEventListener("click", () => setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark"));

  /* ---------- Hiệu ứng khi cuộn ---------- */
  const navbar = $("navbar");
  window.addEventListener("scroll", () => navbar.classList.toggle("scrolled", window.scrollY > 10), { passive: true });

  const links = Array.from(navLinks.querySelectorAll("a"));
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("visible");
      en.target.querySelectorAll(".bar > i").forEach((b) => (b.style.width = b.dataset.level + "%"));
      reveal.unobserve(en.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((n) => reveal.observe(n));

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main .section").forEach((s) => { if (!s.hidden) spy.observe(s); });
})();