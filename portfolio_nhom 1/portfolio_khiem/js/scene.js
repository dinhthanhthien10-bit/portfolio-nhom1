/* Ảnh nền 4 khung: cuộn tới khung nào thì ảnh nền đổi sang ảnh của khung đó (mượt nhờ CSS transition).
   Mỗi khung có 2 ảnh, một cho ban ngày và một cho ban đêm; đổi theme thì ảnh cũng đổi theo. */
(() => {
  // 1. Sao nhấp nháy trên bầu trời hero (chỉ hiện ban đêm, xem CSS)
  document.querySelectorAll('.stars').forEach((box) => {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 46; i++) {
      const s = document.createElement('i');
      const size = 1 + Math.random() * 2.2;
      s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 60}%;width:${size}px;height:${size}px;--d:${2 + Math.random() * 4}s;--w:-${Math.random() * 5}s`;
      frag.appendChild(s);
    }
    box.appendChild(frag);
  });

  // 2. Chọn ảnh nền theo khung đang xem và theme hiện tại
  const slides = [...document.querySelectorAll('.bg-slide')];
  const frames = [...document.querySelectorAll('.frame')];
  const decos = [...document.querySelectorAll('.deco-f')];
  const dots = [...document.querySelectorAll('.dots a')];
  let current = 1;

  function render() {
    const time = document.documentElement.dataset.theme === 'dark' ? 'night' : 'day';
    slides.forEach((s) => s.classList.toggle('on', s.dataset.t === time && Number(s.dataset.i) === current));
    decos.forEach((d, i) => d.classList.toggle('on', i + 1 === current));
    document.dispatchEvent(new CustomEvent('scenechange', { detail: { frame: current, time } }));
    dots.forEach((d, i) => {
      d.classList.toggle('active', i + 1 === current);
      d.setAttribute('aria-current', i + 1 === current ? 'true' : 'false');
    });
  }

  // Khung nào đang cắt ngang giữa màn hình thì là khung hiện tại
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting || document.documentElement.classList.contains('js-pager')) return; // pager tự báo khung
      current = Number(e.target.dataset.frame);
      render();
    });
  }, { rootMargin: '-50% 0px -50% 0px' });
  frames.forEach((f) => spy.observe(f));

  document.addEventListener('framechange', (e) => { current = e.detail; render(); });
  document.addEventListener('themechange', render);
  render();

  // 3. Parallax nhẹ: nền và lớp trang trí trôi ngược hướng chuột; vòng sáng mềm đi theo con trỏ.
  //    Vòng lặp chỉ chạy khi chuột đang di chuyển để máy không phải làm việc khi đứng yên.
  const bg = document.querySelector('.bg');
  const deco = document.querySelector('.deco');
  const glow = document.querySelector('.cursor-glow');
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (fine && !still) {
    let tx = 0, ty = 0, cx = 0, cy = 0, mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my, running = false;
    function tick() {
      cx += (tx - cx) * .08; cy += (ty - cy) * .08;
      gx += (mx - gx) * .16; gy += (my - gy) * .16;
      bg.style.translate = `${(-cx * .7).toFixed(1)}px ${(-cy * .7).toFixed(1)}px`;
      deco.style.translate = `${(-cx * 1.4).toFixed(1)}px ${(-cy * 1.4).toFixed(1)}px`;
      glow.style.transform = `translate(${gx.toFixed(0)}px, ${gy.toFixed(0)}px)`;
      const moving = Math.abs(tx - cx) + Math.abs(ty - cy) + Math.abs(mx - gx) + Math.abs(my - gy) > .6;
      if (moving) requestAnimationFrame(tick); else running = false;
    }
    window.addEventListener('pointermove', (e) => {
      mx = e.clientX; my = e.clientY;
      tx = (mx / innerWidth - .5) * 36; ty = (my / innerHeight - .5) * 20;
      glow.classList.add('on');
      if (!running) { running = true; requestAnimationFrame(tick); }
    }, { passive: true });
    document.addEventListener('mouseleave', () => glow.classList.remove('on'));
  }

  // 4. Gõ chữ cho dòng chức danh ở hero
  const role = document.querySelector('.role[data-type]');
  if (role && !still) {
    const text = role.dataset.type;
    role.textContent = ''; role.classList.add('typing');
    let i = 0;
    setTimeout(function type() {
      role.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(type, 55);
      else setTimeout(() => role.classList.remove('typing'), 1800);
    }, 900);
  }
})();
