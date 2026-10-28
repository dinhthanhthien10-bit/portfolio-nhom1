/* Tương tác chính của portfolio. Mỗi khối bên dưới phụ trách một chức năng. */
(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const root = document.documentElement;

  // localStorage có thể bị chặn (chế độ riêng tư), nên luôn bọc try/catch
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* bỏ qua */ } }
  };

  let lang = store.get('lang') === 'en' ? 'en' : 'vi';
  const t = (key) => I18N[lang][key] || key;

  /* ---------- 1. Chế độ ngày / đêm ---------- */
  const themeBtn = $('#themeBtn');
  function setTheme(theme) {
    root.dataset.theme = theme;
    store.set('theme', theme);
    const dark = theme === 'dark';
    themeBtn.setAttribute('aria-pressed', dark);
    themeBtn.setAttribute('aria-label', t(dark ? 'theme_to_light' : 'theme_to_dark'));
    $('span', themeBtn).textContent = dark ? '☀' : '☾';
    document.dispatchEvent(new Event('themechange')); // để canvas đổi màu cánh hoa
  }
  themeBtn.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  /* ---------- 2. Chuyển ngôn ngữ Việt / Anh ---------- */
  const langBtn = $('#langBtn');
  function applyLang(next) {
    lang = next;
    store.set('lang', lang);
    root.lang = lang;
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-aria]').forEach((el) => {
      const key = el.dataset.i18nAria;
      if (I18N[lang][key]) el.setAttribute('aria-label', I18N[lang][key]);
    });
    langBtn.textContent = lang === 'vi' ? 'EN' : 'VI';
    setTheme(root.dataset.theme || 'light'); // cập nhật nhãn nút theme theo ngôn ngữ mới
  }
  langBtn.addEventListener('click', () => applyLang(lang === 'vi' ? 'en' : 'vi'));

  /* ---------- 3. Menu mobile ---------- */
  const menuBtn = $('#menuBtn');
  const nav = $('#nav');
  function toggleMenu(open) {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open);
  }
  menuBtn.addEventListener('click', () => toggleMenu(!nav.classList.contains('open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) toggleMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggleMenu(false); });

  /* ---------- 4. Làm nổi mục menu đang xem (scroll-spy) ---------- */
  const links = $$('#nav a');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach((s) => spy.observe(s));

  /* ---------- 5. Lọc dự án theo công nghệ ---------- */
  const filters = $$('.filter');
  const projects = $$('.project');
  filters.forEach((btn) => btn.addEventListener('click', () => {
    const key = btn.dataset.filter;
    filters.forEach((b) => {
      const on = b === btn;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on);
    });
    projects.forEach((p) => { p.hidden = key !== 'all' && !p.dataset.tags.split(' ').includes(key); });
  }));

  /* ---------- 6. Form liên hệ: kiểm tra dữ liệu bằng JavaScript ---------- */
  const form = $('#contactForm');
  const rules = {
    name: (v) => v.trim().length >= 2,
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    message: (v) => v.trim().length >= 10
  };
  function validateField(input) {
    const ok = rules[input.name](input.value);
    input.setAttribute('aria-invalid', !ok);
    $('#err-' + input.name).hidden = ok;
    return ok;
  }
  $$('input, textarea', form).forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => { if (input.getAttribute('aria-invalid') === 'true') validateField(input); });
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = $$('input, textarea', form);
    const results = fields.map(validateField); // chạy hết để hiện mọi lỗi cùng lúc
    const firstBad = fields[results.indexOf(false)];
    if (firstBad) { firstBad.focus(); return; }

    const data = new FormData(form);
    const body = `${data.get('message')}\n\n${data.get('name')} (${data.get('email')})`;
    window.location.href = `mailto:khiemanh94@gmail.com?subject=${encodeURIComponent(t('mail_subject'))}&body=${encodeURIComponent(body)}`;
    $('#formOk').hidden = false;
    form.reset();
  });

  /* ---------- Khởi động ---------- */
  if (!root.dataset.theme) root.dataset.theme = 'light';
  applyLang(lang);
})();
