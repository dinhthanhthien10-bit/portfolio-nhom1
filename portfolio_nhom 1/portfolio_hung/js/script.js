/**
 * PORTFOLIO BÙI GIA HƯNG - SMART LOGISTICS & AI DEVELOPER
 * Clean, Modular Vanilla JavaScript
 * Features:
 *  1. ThemeManager (Dark / Light Mode + LocalStorage)
 *  2. NavigationManager (Sticky, Active Scrollspy, Mobile Drawer)
 *  3. StatsCounter (IntersectionObserver GPA 0.00 -> 3.61)
 *  4. ProjectFilter (Category Filtering)
 *  5. YoloSimulator (Interactive AI Computer Vision Test Model)
 *  6. ContactFormValidator (Regex Email + Custom Toast Feedback)
 *  7. BackToTop Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  NavigationManager.init();
  StatsCounter.init();
  ProjectFilter.init();
  YoloSimulator.init();
  ContactFormValidator.init();
  BackToTop.init();
  ScrollRevealManager.init();
  SkillBarAnimator.init();
  AvatarTiltEffect.init();
  TypewriterEffect.init();
});

/* ==========================================================================
   1. THEME MANAGER (DARK / LIGHT MODE)
   ========================================================================== */
const ThemeManager = {
  themeKey: 'bgh_theme',
  toggleBtn: null,
  themeIcon: null,

  init() {
    this.toggleBtn = document.getElementById('themeToggleBtn');
    this.themeIcon = this.toggleBtn ? this.toggleBtn.querySelector('i') : null;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem(this.themeKey);
    const initialTheme = savedTheme || 'light'; // Clean Minimalist Black & White palette

    this.applyTheme(initialTheme);

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
      });
    }
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.themeKey, theme);

    if (this.themeIcon) {
      if (theme === 'dark') {
        this.themeIcon.className = 'fa-solid fa-sun';
        this.toggleBtn.setAttribute('title', 'Chuyển sang Giao diện Sáng');
      } else {
        this.themeIcon.className = 'fa-solid fa-moon';
        this.toggleBtn.setAttribute('title', 'Chuyển sang Giao diện Tối');
      }
    }
  }
};

/* ==========================================================================
   2. NAVIGATION & MOBILE DRAWER MANAGER
   ========================================================================== */
const NavigationManager = {
  navbar: null,
  hamburgerBtn: null,
  mobileDrawer: null,
  drawerBackdrop: null,
  navLinks: [],
  sections: [],

  init() {
    this.navbar = document.getElementById('navbar');
    this.hamburgerBtn = document.getElementById('hamburgerBtn');
    this.mobileDrawer = document.getElementById('mobileDrawer');
    this.drawerBackdrop = document.getElementById('drawerBackdrop');
    this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    this.sections = document.querySelectorAll('section[id]');

    // Scroll Navbar effect
    window.addEventListener('scroll', () => this.handleScroll(), { passive: true });

    // Hamburger Mobile Drawer
    if (this.hamburgerBtn && this.mobileDrawer) {
      this.hamburgerBtn.addEventListener('click', () => this.toggleDrawer());
      if (this.drawerBackdrop) {
        this.drawerBackdrop.addEventListener('click', () => this.closeDrawer());
      }
    }

    // Close drawer when clicking mobile links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeDrawer();
      });
    });

    // Keyboard ESC close
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeDrawer();
    });

    this.handleScroll();
  },

  handleScroll() {
    const scrollY = window.scrollY;

    // Sticky navbar shadow
    if (this.navbar) {
      if (scrollY > 40) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    }

    // ScrollSpy active link
    let currentSectionId = '';
    this.sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      this.navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  },

  toggleDrawer() {
    const isOpen = this.mobileDrawer.classList.contains('open');
    if (isOpen) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  },

  openDrawer() {
    this.mobileDrawer.classList.add('open');
    this.hamburgerBtn.classList.add('active');
    if (this.drawerBackdrop) this.drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeDrawer() {
    if (this.mobileDrawer) this.mobileDrawer.classList.remove('open');
    if (this.hamburgerBtn) this.hamburgerBtn.classList.remove('active');
    if (this.drawerBackdrop) this.drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
};

/* ==========================================================================
   3. STATS & GPA ANIMATED COUNTER
   ========================================================================== */
const StatsCounter = {
  hasAnimated: false,

  init() {
    const counterElements = document.querySelectorAll('[data-counter-target]');
    if (!counterElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          counterElements.forEach(el => this.animateValue(el));
          obs.disconnect(); // Animate once
        }
      });
    }, { threshold: 0.25 });

    // Observe stats banner or education section
    const triggerTarget = document.getElementById('statsBanner') || document.getElementById('education');
    if (triggerTarget) {
      observer.observe(triggerTarget);
    } else {
      counterElements.forEach(el => observer.observe(el));
    }
  },

  animateValue(element) {
    const target = parseFloat(element.getAttribute('data-counter-target'));
    const isDecimal = element.getAttribute('data-counter-decimal') === 'true';
    const duration = parseInt(element.getAttribute('data-counter-duration') || '1800', 10);
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = target * easeOut;

      if (isDecimal) {
        element.textContent = currentVal.toFixed(2);
      } else {
        element.textContent = Math.floor(currentVal).toString();
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (isDecimal) {
          element.textContent = target.toFixed(2);
        } else {
          element.textContent = target.toString();
        }
      }
    };

    requestAnimationFrame(update);
  }
};

/* ==========================================================================
   4. PROJECT FILTER (TẤT CẢ / AI & VISION / LOGISTICS & DSA)
   ========================================================================== */
const ProjectFilter = {
  filterButtons: [],
  projectCards: [],

  init() {
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.projectCards = document.querySelectorAll('.project-card');

    if (!this.filterButtons.length || !this.projectCards.length) return;

    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterCategory = btn.getAttribute('data-filter');

        // Update active button state
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter projects with smooth CSS transition
        this.projectCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (filterCategory === 'all' || cardCategory === filterCategory) {
            card.style.display = 'flex';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            });
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px) scale(0.96)';
            setTimeout(() => {
              if (card.style.opacity === '0') {
                card.style.display = 'none';
              }
            }, 250);
          }
        });
      });
    });
  }
};

/* ==========================================================================
   5. SÁNG TẠO NÂNG CAO: COMPONENT MÔ PHỎNG AI YOLOV8
   - Quét tia laser thời gian thực
   - Bounding Box động khớp biển số
   - Terminal Logs typewriter tự động
   - Âm thanh Web Audio API synth hiệu ứng công nghệ
   ========================================================================== */
const YoloSimulator = {
  // Preset test samples
  samples: {
    suv: {
      name: 'SUV Barie Cổng Kho',
      image: 'assets/images/project-yolo.jpg',
      plate: '51H-999.99',
      confidence: '98.4%',
      latency: '13.8 ms',
      vehicleType: 'SUV Passenger',
      gateStatus: 'ĐỦ ĐIỀU KIỆN - MỞ BARIE',
      statusClass: 'status-success',
      bbox: { top: '59%', left: '42%', width: '6.2%', height: '5.2%' },
      tag: 'VN_PLATE: 51H-999.99 | 98.4%'
    },
    truck: {
      name: 'Xe Tải Lạnh Cold Chain',
      image: 'assets/images/sample-truck.jpg',
      plate: '29C-864.52',
      confidence: '97.2%',
      latency: '14.5 ms',
      vehicleType: 'Refrigerated Truck',
      gateStatus: 'VÀO BẾN NẠP LẠNH (BAY 04)',
      statusClass: 'status-success',
      bbox: { top: '65%', left: '46%', width: '8%', height: '5.5%' },
      tag: 'VN_PLATE: 29C-864.52 | 97.2%'
    },
    van: {
      name: 'Xe Bán Tải Logistics',
      image: 'assets/images/sample-car2.jpg',
      plate: '60A-712.38',
      confidence: '99.1%',
      latency: '12.4 ms',
      vehicleType: 'Commercial Van',
      gateStatus: 'KIỂM DUYỆT XE HỢP LỆ',
      statusClass: 'status-success',
      bbox: { top: '68%', left: '44%', width: '9.5%', height: '6%' },
      tag: 'VN_PLATE: 60A-712.38 | 99.1%'
    }
  },

  currentSampleKey: 'suv',
  isRunning: false,

  // DOM elements
  videoFeed: null,
  laserLine: null,
  boundingBox: null,
  hudTag: null,
  terminalLogs: null,
  runBtn: null,
  sampleButtons: [],
  resPlate: null,
  resConf: null,
  resSpeed: null,
  resStatus: null,

  init() {
    this.videoFeed = document.getElementById('simVideoFeed');
    this.laserLine = document.getElementById('simLaserLine');
    this.boundingBox = document.getElementById('simBoundingBox');
    this.hudTag = document.getElementById('simHudTag');
    this.terminalLogs = document.getElementById('simTerminalLogs');
    this.runBtn = document.getElementById('simRunBtn');
    this.sampleButtons = document.querySelectorAll('.sim-sample-btn');

    this.resPlate = document.getElementById('resPlate');
    this.resConf = document.getElementById('resConf');
    this.resSpeed = document.getElementById('resSpeed');
    this.resStatus = document.getElementById('resStatus');

    if (!this.runBtn || !this.videoFeed) return;

    // Attach sample switchers
    this.sampleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.isRunning) return;
        const sampleKey = btn.getAttribute('data-sample');
        if (this.samples[sampleKey]) {
          this.sampleButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.switchSample(sampleKey);
        }
      });
    });

    // Run Test Model Button
    this.runBtn.addEventListener('click', () => {
      this.executeModelTest();
    });

    // Set initial frame
    this.switchSample('suv', false);
  },

  switchSample(sampleKey, clearLogs = true) {
    this.currentSampleKey = sampleKey;
    const data = this.samples[sampleKey];
    this.videoFeed.src = data.image;

    // Reset detection HUD
    this.boundingBox.classList.remove('detected');
    this.laserLine.classList.remove('scanning');

    // Reset results display
    this.resPlate.textContent = '---';
    this.resConf.textContent = '0.0%';
    this.resSpeed.textContent = '-- ms';
    this.resStatus.textContent = 'SẴN SÀNG';
    this.resStatus.style.color = 'var(--text-secondary)';

    if (clearLogs && this.terminalLogs) {
      this.terminalLogs.innerHTML = `
        <div class="log-entry">
          <span class="log-time">[00:00:00]</span>
          <span class="log-tag info">[SYSTEM]</span>
          <span class="log-msg">Đã nạp ảnh mẫu: "${data.name}". Sẵn sàng kích hoạt YOLOv8 pipeline.</span>
        </div>
      `;
    }
  },

  // Synthesize lightweight sci-fi sound effects via Web Audio API
  playSound(type = 'beep') {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      if (type === 'scan') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'success') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      }
    } catch (e) {
      // Audio not permitted without interaction or unsupported, fail silently
    }
  },

  executeModelTest() {
    if (this.isRunning) return;
    this.isRunning = true;

    const data = this.samples[this.currentSampleKey];

    // UI state updates
    this.runBtn.disabled = true;
    this.runBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang phân tích YOLOv8...';
    this.laserLine.classList.add('scanning');
    this.boundingBox.classList.remove('detected');

    this.resStatus.textContent = 'ĐANG SUY LUẬN...';
    this.resStatus.style.color = 'var(--accent-amber)';

    this.playSound('scan');

    // Clear logs and prepare sequence
    this.terminalLogs.innerHTML = '';

    const logSequence = [
      { delay: 100, tag: 'INFO', type: 'info', msg: `Tải trọng số mô hình: weights/yolov8n_license_plate.pt (PyTorch FP16)` },
      { delay: 350, tag: 'PREPROCESS', type: 'info', msg: `Resize khung hình 640x640, chuẩn hóa tensor RGB pixel values [0..1]` },
      { delay: 650, tag: 'INFERENCE', type: 'info', msg: `Forward pass GPU (CUDA:0) -> Backbone CSPDarknet & C2f Feature Extractor` },
      { delay: 950, tag: 'NMS', type: 'warn', msg: `Non-Maximum Suppression (IoU=0.50) -> Loại bỏ 8,400 candidate anchor boxes` },
      { delay: 1300, tag: 'DETECT', type: 'success', msg: `PHÁT HIỆN: Class 'License_Plate' | Tọa độ BBox: [X:${data.bbox.left}, Y:${data.bbox.top}]` },
      { delay: 1600, tag: 'OCR', type: 'success', msg: `PaddleOCR / EasyOCR: Nhận dạng ký tự biển số -> "${data.plate}" (Confidence: ${data.confidence})` },
      { delay: 1900, tag: 'LOGISTICS', type: 'success', msg: `Quyết định hệ thống kiểm soát: ${data.gateStatus}` }
    ];

    logSequence.forEach(item => {
      setTimeout(() => {
        this.appendLog(item.tag, item.type, item.msg);
      }, item.delay);
    });

    // Final result popup
    setTimeout(() => {
      this.playSound('success');
      this.laserLine.classList.remove('scanning');

      // Position Bounding Box
      this.boundingBox.style.top = data.bbox.top;
      this.boundingBox.style.left = data.bbox.left;
      this.boundingBox.style.width = data.bbox.width;
      this.boundingBox.style.height = data.bbox.height;
      this.hudTag.textContent = data.tag;
      this.boundingBox.classList.add('detected');

      // Update Result Boxes
      this.resPlate.innerHTML = `<span class="plate-display">${data.plate}</span>`;
      this.resConf.textContent = data.confidence;
      this.resSpeed.textContent = data.latency;
      this.resStatus.textContent = data.gateStatus;
      this.resStatus.style.color = 'var(--text-primary)';

      // Re-enable button
      this.runBtn.disabled = false;
      this.runBtn.innerHTML = '<i class="fa-solid fa-play"></i> Chạy Test Model YOLOv8';
      this.isRunning = false;
    }, 2050);
  },

  appendLog(tag, type, msg) {
    if (!this.terminalLogs) return;
    const now = new Date();
    const timeStr = `[${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}.${String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0')}]`;

    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `
      <span class="log-time">${timeStr}</span>
      <span class="log-tag ${type}">[${tag}]</span>
      <span class="log-msg">${msg}</span>
    `;

    this.terminalLogs.appendChild(entry);
    this.terminalLogs.scrollTop = this.terminalLogs.scrollHeight;
  }
};

/* ==========================================================================
   6. CONTACT FORM VALIDATOR & TOAST NOTIFICATION
   ========================================================================== */
const ContactFormValidator = {
  form: null,
  toast: null,
  toastTimeout: null,

  init() {
    this.form = document.getElementById('contactForm');
    this.toast = document.getElementById('contactToast');

    if (!this.form) return;

    // Realtime input clean error on typing
    const inputs = this.form.querySelectorAll('.form-control');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        const group = input.closest('.form-group');
        if (group && group.classList.contains('has-error')) {
          group.classList.remove('has-error');
        }
      });
    });

    // Submit handler
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  },

  handleSubmit() {
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    let isValid = true;

    // 1. Name validation
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      this.setError(nameInput, 'Vui lòng nhập họ tên của bạn (tối thiểu 2 ký tự)');
      isValid = false;
    } else {
      this.clearError(nameInput);
    }

    // 2. Email validation (RFC standard regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      this.setError(emailInput, 'Vui lòng nhập địa chỉ email để Gia Hưng phản hồi');
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      this.setError(emailInput, 'Định dạng email không hợp lệ (Ví dụ: name@company.com)');
      isValid = false;
    } else {
      this.clearError(emailInput);
    }

    // 3. Subject validation
    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      this.setError(subjectInput, 'Vui lòng nhập tiêu đề trao đổi (tối thiểu 3 ký tự)');
      isValid = false;
    } else {
      this.clearError(subjectInput);
    }

    // 4. Message validation
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      this.setError(messageInput, 'Vui lòng nhập nội dung tin nhắn (tối thiểu 10 ký tự)');
      isValid = false;
    } else {
      this.clearError(messageInput);
    }

    if (!isValid) return;

    // Form is valid! Simulate instant dispatch
    const submitBtn = this.form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang gửi tin nhắn...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      this.showToast('Tin nhắn đã được gửi thành công!', `Cảm ơn ${nameInput.value.trim()}! Gia Hưng sẽ check hộp thư và phản hồi lại bạn sớm nhất.`);
      this.form.reset();
    }, 800);
  },

  setError(input, message) {
    const group = input.closest('.form-group');
    if (!group) return;
    group.classList.add('has-error');
    const errorEl = group.querySelector('.form-error-msg');
    if (errorEl) {
      errorEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> ${message}`;
    }
  },

  clearError(input) {
    const group = input.closest('.form-group');
    if (group) group.classList.remove('has-error');
  },

  showToast(title, message) {
    if (!this.toast) return;
    const titleEl = this.toast.querySelector('.toast-title');
    const msgEl = this.toast.querySelector('.toast-message');

    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;

    this.toast.classList.add('show');

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toast.classList.remove('show');
    }, 5500);
  }
};

/* ==========================================================================
   7. BACK TO TOP BUTTON
   ========================================================================== */
const BackToTop = {
  button: null,

  init() {
    this.button = document.getElementById('backToTopBtn');
    if (!this.button) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        this.button.classList.add('show');
      } else {
        this.button.classList.remove('show');
      }
    }, { passive: true });

    this.button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

/* ==========================================================================
   8. SCROLL REVEAL MANAGER (SMOOTH INTERSECTION OBSERVER)
   ========================================================================== */
const ScrollRevealManager = {
  init() {
    const reveals = document.querySelectorAll('.reveal, .reveal-scale');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }
};

/* ==========================================================================
   9. SKILL BAR ANIMATOR (PROGRESS FILL ON VIEWPORT ENTER)
   ========================================================================== */
const SkillBarAnimator = {
  hasAnimated: false,

  init() {
    const fills = document.querySelectorAll('.skill-bar-fill');
    if (!fills.length) return;

    // Cache target widths from inline styles or data attributes
    fills.forEach(fill => {
      const target = fill.style.width || '80%';
      fill.setAttribute('data-target-width', target);
      fill.style.width = '0%';
    });

    const triggerSection = document.getElementById('skills');
    if (!triggerSection) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          fills.forEach(fill => {
            const targetWidth = fill.getAttribute('data-target-width');
            setTimeout(() => {
              fill.style.width = targetWidth;
            }, 180);
          });
          obs.disconnect();
        }
      });
    }, { threshold: 0.18 });

    observer.observe(triggerSection);
  }
};

/* ==========================================================================
   10. AVATAR 3D TILT EFFECT (HIGH-END TACTILE MOUSE INTERACTION)
   ========================================================================== */
const AvatarTiltEffect = {
  wrapper: null,
  card: null,

  init() {
    this.wrapper = document.querySelector('.avatar-wrapper');
    this.card = document.querySelector('.avatar-card');
    if (!this.wrapper || !this.card) return;

    // Only apply on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let ticking = false;

    this.wrapper.addEventListener('mousemove', (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.handleTilt(e);
          ticking = false;
        });
        ticking = true;
      }
    });

    this.wrapper.addEventListener('mouseleave', () => {
      this.card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  },

  handleTilt(e) {
    const rect = this.wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const maxTilt = 8; // degrees
    const rotateX = (-y / (rect.height / 2)) * maxTilt;
    const rotateY = (x / (rect.width / 2)) * maxTilt;

    this.card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
  }
};

/* ==========================================================================
   11. DYNAMIC TYPEWRITER & PHRASE ROTATOR EFFECT (CHỮ TỰ NHẢY ĐỘNG)
   ========================================================================== */
const TypewriterEffect = {
  textElement: null,
  iconElement: null,

  phrases: [
    { text: "Sinh viên Năm 3 CNTT — Chuyên ngành Smart Logistics (UTH)", icon: "fa-truck-ramp-box" },
    { text: "Nghiên cứu Thị giác Máy tính YOLOv8 & OpenCV", icon: "fa-crosshairs" },
    { text: "Hệ thống Telemetry Dự Báo Chuỗi Lạnh Cold Chain", icon: "fa-snowflake" },
    { text: "Tối ưu hóa Thuật toán Vận tải & Phân bổ Kho (DSA)", icon: "fa-diagram-project" },
    { text: "Xây dựng Website E-Commerce & Full-stack Web App", icon: "fa-cart-shopping" }
  ],

  phraseIndex: 0,
  charIndex: 0,
  isDeleting: false,
  typingSpeed: 55,
  deletingSpeed: 25,
  delayBetweenPhrases: 1900,
  timerId: null,

  init() {
    this.textElement = document.getElementById('heroTypingText');
    this.iconElement = document.getElementById('typingIcon');

    if (!this.textElement) return;

    // Clear initial static text and start typing
    this.textElement.textContent = "";
    this.charIndex = 0;
    this.isDeleting = false;
    this.typeLoop();
  },

  typeLoop() {
    const current = this.phrases[this.phraseIndex];
    const fullText = current.text;

    if (this.isDeleting) {
      this.charIndex--;
      this.textElement.textContent = fullText.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.textElement.textContent = fullText.substring(0, this.charIndex);
    }

    let nextSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.charIndex === fullText.length) {
      // Pause at the end of the full phrase
      nextSpeed = this.delayBetweenPhrases;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      // Finished deleting, rotate to next phrase
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;

      // Update icon dynamically
      if (this.iconElement) {
        this.iconElement.className = `fa-solid ${this.phrases[this.phraseIndex].icon}`;
      }
      nextSpeed = 300;
    }

    this.timerId = setTimeout(() => this.typeLoop(), nextSpeed);
  }
};
