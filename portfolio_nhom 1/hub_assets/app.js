/**
 * PORTFOLIO NHÓM 1 — APPLICATION LOGIC & VIEW ENGINE
 * Team 1 - Computer Science & Design Specialists
 */

const TEAM_MEMBERS = [
  {
    id: "bui-gia-hung",
    name: "Bùi Gia Hưng",
    role: "Smart Logistics & AI Developer",
    category: "ai-data",
    secondaryCategories: ["backend"],
    university: "Đại học Giao thông Vận tải TP.HCM (UTH)",
    avatar: "hub_assets/hung_avatar.jpg",
    status: "available",
    statusText: "Available for Projects",
    bio: "Sinh viên Năm 3 CNTT chuyên sâu Smart Logistics & AI tại UTH. Nghiên cứu thị giác máy tính YOLOv8, giải pháp giám sát chuỗi lạnh Cold Chain IoT và giải thuật tối ưu hóa chuỗi cung ứng.",
    skills: ["YOLOv8", "Python", "Computer Vision", "Cold Chain IoT", "C++", "C#", "DSA", "OpenCV"],
    highlights: [
      "Hệ thống giám sát chuỗi lạnh Cold Chain tích hợp IoT",
      "Mô hình nhận diện phương tiện giao thông YOLOv8",
      "Tối ưu thuật toán cấu trúc dữ liệu chuỗi cung ứng"
    ],
    entry: "./portfolio_hung/index1.html",
    socials: {
      github: "https://github.com/",
      email: "mailto:hung.buigia@example.com"
    },
    glowClass: "glow-ai",
    badgeCategory: "AI & Smart Logistics"
  },
  {
    id: "pham-gia-khiem",
    name: "Phạm Gia Khiêm (Ryuu)",
    role: "Android & Backend Developer",
    category: "mobile",
    secondaryCategories: ["backend"],
    university: "Đại học Giao thông Vận tải TP.HCM (UTH)",
    avatar: "hub_assets/khiem_avatar.jpg",
    status: "open",
    statusText: "Open to Work",
    bio: "Sinh viên CNTT năm 3 UTH định hướng lập trình di động Android hiện đại và kiến trúc Backend tin cậy. Đam mê tương tác mượt mà, mỹ học giao diện tinh tế phong cách Nhật Bản.",
    skills: ["Android", "Kotlin", "Java", "Backend API", "Database", "Git", "Canvas Animation", "RESTful"],
    highlights: [
      "Smart Heritage - Ứng dụng khám phá di sản văn hóa số",
      "Lost & Found - Nền tảng kết nối tìm kiếm đồ thất lạc",
      "Giao diện tương tác hiệu ứng cánh hoa rơi Petals Canvas"
    ],
    entry: "./portfolio_khiem/index.html",
    socials: {
      github: "https://github.com/",
      email: "mailto:khiem.phamgia@example.com"
    },
    glowClass: "glow-mobile",
    badgeCategory: "Mobile & Backend"
  },
  {
    id: "doan-dang-khoa",
    name: "Đoàn Đăng Khoa",
    role: "Frontend & Web Developer",
    category: "frontend",
    secondaryCategories: ["ui-ux"],
    university: "Đại học Giao thông Vận tải TP.HCM (UTH)",
    avatar: "hub_assets/khoa_avatar.png",
    status: "available",
    statusText: "Available for Hire",
    bio: "Sinh viên Công nghệ thông tin UTH. Yêu thích công nghệ web, thiết kế giao diện hiện đại, tối ưu trải nghiệm tương tác trực quan và khả năng tương thích cao trên mọi thiết bị.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI Development", "Web Layouts"],
    highlights: [
      "Thiết kế Portfolio cá nhân chuẩn Responsive toàn diện",
      "Hệ thống điều hướng động mượt mà cho website",
      "Tối ưu hóa bố cục giao diện người dùng thân thiện"
    ],
    entry: "./portfolio_khoa/index2.html",
    socials: {
      github: "https://github.com/",
      email: "mailto:khoa.doandang@example.com"
    },
    glowClass: "glow-frontend",
    badgeCategory: "Frontend & Web"
  },
  {
    id: "nguyen-dang-khoi",
    name: "Nguyễn Đăng Khôi",
    role: "Fullstack Developer & CS Student",
    category: "backend",
    secondaryCategories: ["frontend"],
    university: "Đại học Giao thông Vận tải TP.HCM (UTH)",
    avatar: "hub_assets/khoi_avatar.jpg",
    status: "available",
    statusText: "Available for Hire",
    bio: "Sinh viên CNTT năm 3 UTH. Biến ý tưởng thành hiện thực với code. Đam mê xây dựng webapp thực tế, hệ thống WebSocket giao tiếp thời gian thực và kiến trúc ứng dụng Django.",
    skills: ["JavaScript", "Python", "Django", "WebSocket", "TCP/IP", "C/C++", "HTML/CSS", "SQLite"],
    highlights: [
      "Chatties App - Ứng dụng chat thời gian thực WebSocket & TCP/IP",
      "Hệ thống webapp quản lý điểm sinh viên với Django & SQLite",
      "Giải Nhì Hackathon Sinh viên UTH 2024"
    ],
    entry: "./portfolio_khoi/index.html",
    socials: {
      github: "https://github.com/Khoi2310",
      email: "mailto:dangkhoinguyen2310@gmail.com",
      facebook: "https://www.facebook.com/baka2310"
    },
    glowClass: "glow-backend",
    badgeCategory: "Fullstack & Backend"
  },
  {
    id: "nguyen-duy-tan",
    name: "Nguyễn Duy Tân",
    role: "Frontend & Data Visualization Specialist",
    category: "frontend",
    secondaryCategories: ["ai-data", "ui-ux"],
    university: "Đại học Giao thông Vận tải TP.HCM (UTH)",
    avatar: "hub_assets/tan_avatar.png",
    status: "available",
    statusText: "Available for Projects",
    bio: "Lập trình viên Frontend kết hợp Trực quan hóa Dữ liệu (Data Visualization). Thiết kế giao diện sang trọng tông màu ấm Terracotta & Espresso với Tailwind CSS và biểu đồ phân tích chuyên sâu.",
    skills: ["React", "Tailwind CSS", "Data Visualization", "Chart.js", "D3.js", "JavaScript", "UI/UX"],
    highlights: [
      "Dashboard trực quan hóa dữ liệu và biểu đồ phân tích chuyên sâu",
      "Giao diện tông màu ấm Terracotta & Espresso sang trọng",
      "Trải nghiệm cuộn mượt mà (smooth scrolling) & tối ưu hóa A11y"
    ],
    entry: "./portfolio_tan/index3.html",
    socials: {
      github: "https://github.com/",
      email: "mailto:tan.nguyenduy@example.com"
    },
    glowClass: "glow-frontend",
    badgeCategory: "Frontend & Data"
  },
  {
    id: "dinh-thanh-thien",
    name: "Đinh Thanh Thiên",
    role: "UI/UX Designer & Web Developer",
    category: "ui-ux",
    secondaryCategories: ["frontend"],
    university: "Đại học Giao thông Vận tải TP.HCM (UTH)",
    avatar: "hub_assets/thien_avatar.jpg",
    status: "open",
    statusText: "Open to Work",
    bio: "Chuyên gia thiết kế giao diện UI/UX và phát triển web theo chuẩn quốc tế Tuts+. Tinh tế trong cấu trúc Typography, bố cục Resume & vCard phân cấp tỉ mỉ và chuẩn Accessibility A11y.",
    skills: ["UI/UX Design", "Figma", "Web Development", "CSS3 / SCSS", "Typography", "Accessibility (A11y)", "Design Systems"],
    highlights: [
      "Bộ sưu tập Resume & vCard Portfolio chuẩn thiết kế quốc tế",
      "Hệ thống phân cấp Typography chuẩn mực cho hồ sơ năng lực",
      "Tối ưu hóa khả năng tiếp cận (A11y) và trải nghiệm duyệt web"
    ],
    entry: "./portfolio_thien/index.html",
    socials: {
      github: "https://github.com/",
      email: "mailto:thien.dinhthanh@example.com"
    },
    glowClass: "glow-uiux",
    badgeCategory: "UI/UX & Design"
  }
];

const CATEGORIES = [
  { id: "all", label: "Tất cả thành viên" },
  { id: "frontend", label: "Frontend & Web" },
  { id: "backend", label: "Backend & Systems" },
  { id: "ai-data", label: "AI & Data Science" },
  { id: "mobile", label: "Mobile & Android" },
  { id: "ui-ux", label: "UI/UX & Design" }
];

// App State
const state = {
  searchTerm: "",
  activeCategory: "all",
  sortBy: "default",
  viewMode: "grid", // "grid" | "list"
  activeMemberId: null,
  deviceMode: "desktop", // "desktop" | "tablet" | "mobile"
  theme: localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderCategoryTabs();
  renderMembers();
  bindEvents();
  initRouting();
});

// Theme Management
function initTheme() {
  if (state.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", state.theme);
  if (state.theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  updateThemeIcon();
}

function updateThemeIcon() {
  const sunIcon = document.getElementById("theme-sun-icon");
  const moonIcon = document.getElementById("theme-moon-icon");
  if (sunIcon && moonIcon) {
    if (state.theme === "dark") {
      sunIcon.classList.remove("hidden");
      moonIcon.classList.add("hidden");
    } else {
      sunIcon.classList.add("hidden");
      moonIcon.classList.remove("hidden");
    }
  }
}

// Category Tabs Rendering with Pill Style
function renderCategoryTabs() {
  const container = document.getElementById("category-tabs-container");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => {
    const count = getCategoryCount(cat.id);
    const isActive = state.activeCategory === cat.id;
    return `
      <button 
        type="button"
        onclick="setCategory('${cat.id}')"
        class="category-tab px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/40 ${
          isActive 
            ? "bg-[#4F46E5] text-white shadow-md shadow-[#4F46E5]/25 scale-105" 
            : "bg-[#F1F5F9] dark:bg-slate-800 text-[#64748B] dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80"
        }"
        aria-pressed="${isActive}"
      >
        <span>${cat.label}</span>
        <span class="text-xs px-2 py-0.5 rounded-full ${
          isActive 
            ? "bg-white/25 text-white font-bold" 
            : "bg-white dark:bg-slate-700 text-[#64748B] dark:text-slate-400 font-medium"
        }">${count}</span>
      </button>
    `;
  }).join("");
}

function getCategoryCount(catId) {
  if (catId === "all") return TEAM_MEMBERS.length;
  return TEAM_MEMBERS.filter(m => m.category === catId || (m.secondaryCategories && m.secondaryCategories.includes(catId))).length;
}

function setCategory(catId) {
  state.activeCategory = catId;
  renderCategoryTabs();
  renderMembers();
}

// Filtering & Sorting
function getFilteredMembers() {
  return TEAM_MEMBERS.filter(m => {
    const matchCat = state.activeCategory === "all" || 
      m.category === state.activeCategory || 
      (m.secondaryCategories && m.secondaryCategories.includes(state.activeCategory));
    if (!matchCat) return false;

    if (!state.searchTerm.trim()) return true;
    const q = state.searchTerm.toLowerCase().trim();
    const matchName = m.name.toLowerCase().includes(q);
    const matchRole = m.role.toLowerCase().includes(q);
    const matchBio = m.bio.toLowerCase().includes(q);
    const matchSkills = m.skills.some(s => s.toLowerCase().includes(q));
    const matchHighlights = m.highlights.some(h => h.toLowerCase().includes(q));

    return matchName || matchRole || matchBio || matchSkills || matchHighlights;
  }).sort((a, b) => {
    if (state.sortBy === "name-asc") {
      return a.name.localeCompare(b.name, 'vi');
    }
    if (state.sortBy === "role") {
      return a.role.localeCompare(b.role, 'vi');
    }
    if (state.sortBy === "status") {
      return a.status === "available" ? -1 : 1;
    }
    return 0;
  });
}

// Render Members Grid / List
function renderMembers() {
  const container = document.getElementById("members-container");
  const resultCount = document.getElementById("result-count");
  const filtered = getFilteredMembers();

  if (resultCount) {
    resultCount.innerHTML = `Hiển thị <span class="font-bold text-[#4F46E5] dark:text-indigo-400">${filtered.length}</span> / ${TEAM_MEMBERS.length} thành viên Nhóm 1`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-18 h-18 mx-auto mb-4 rounded-2xl bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-[#4F46E5]">
          <svg class="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-[#0F172A] dark:text-white mb-2">Không tìm thấy thành viên phù hợp</h3>
        <p class="text-[#64748B] dark:text-slate-400 max-w-md mx-auto mb-6 text-sm">
          Không có thành viên Nhóm 1 nào khớp với từ khóa "<strong>${escapeHtml(state.searchTerm)}</strong>" trong danh mục này.
        </p>
        <button 
          onclick="resetFilters()" 
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4F46E5] text-white font-semibold text-sm hover:bg-indigo-700 shadow-md shadow-indigo-500/25 transition-all"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Đặt lại bộ lọc
        </button>
      </div>
    `;
    return;
  }

  if (state.viewMode === "grid") {
    container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8";
    container.innerHTML = filtered.map(member => renderMemberCard(member)).join("");
  } else {
    container.className = "space-y-4";
    container.innerHTML = filtered.map(member => renderMemberList(member)).join("");
  }
}

// Render Member Card (Grid Mode)
function renderMemberCard(m) {
  const isAvailable = m.status === "available";
  const statusColorClass = isAvailable ? "bg-[#10B981]" : "bg-blue-500";
  const statusPulseClass = isAvailable ? "pulse-emerald" : "";
  const statusBadgeClass = isAvailable 
    ? "text-[#059669] dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200/80 dark:border-emerald-800/80" 
    : "text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 border-blue-200/80 dark:border-blue-800/80";

  return `
    <article 
      class="nhom1-card card-glow-nhom1 ${m.glowClass} p-6 flex flex-col justify-between group"
      data-member-id="${m.id}"
    >
      <div>
        <!-- Top Status & Category Header -->
        <div class="flex items-center justify-between mb-5 gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${statusBadgeClass}">
            <span class="w-2 h-2 rounded-full ${statusColorClass} ${statusPulseClass}"></span>
            <span>${m.statusText}</span>
          </span>
          <span class="text-xs font-medium text-[#64748B] dark:text-slate-400 bg-[#F1F5F9] dark:bg-slate-800 px-3 py-1 rounded-full">
            ${m.badgeCategory}
          </span>
        </div>

        <!-- Avatar & Basic Info -->
        <div class="flex items-start gap-4 mb-4">
          <div class="relative flex-shrink-0">
            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm group-hover:scale-105 transition-transform duration-300 bg-slate-100 dark:bg-slate-800">
              <img 
                src="${m.avatar}" 
                alt="${m.name}" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=4F46E5&color=fff&size=128';"
                loading="lazy"
              />
            </div>
          </div>
          
          <div class="flex-1 min-w-0">
            <h3 class="text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white truncate group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-colors">
              ${m.name}
            </h3>
            <p class="text-xs sm:text-sm font-semibold text-[#4F46E5] dark:text-indigo-400 mb-1 leading-snug">
              ${m.role}
            </p>
            <p class="text-xs text-[#64748B] dark:text-slate-400 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span class="truncate">Nhóm 1 &bull; CNTT UTH</span>
            </p>
          </div>
        </div>

        <!-- Bio / Tagline -->
        <p class="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 line-clamp-3 mb-4 leading-relaxed bg-[#FAF8FF] dark:bg-slate-800/40 p-3 rounded-xl border border-indigo-50 dark:border-slate-800">
          "${m.bio}"
        </p>

        <!-- Highlights / Dự án nổi bật -->
        <div class="mb-4">
          <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Dự án tiêu biểu</p>
          <ul class="space-y-1.5 text-xs text-[#64748B] dark:text-slate-300">
            ${m.highlights.slice(0, 2).map(hl => `
              <li class="flex items-start gap-1.5 line-clamp-1">
                <span class="text-[#4F46E5] font-bold flex-shrink-0">&bull;</span>
                <span class="truncate">${hl}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Key Skills -->
        <div class="mb-5">
          <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Kỹ năng cốt lõi</p>
          <div class="flex flex-wrap gap-1.5">
            ${m.skills.slice(0, 5).map(skill => `
              <span class="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#F8FAFC] dark:bg-slate-800 text-[#0F172A] dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60">
                ${skill}
              </span>
            `).join("")}
            ${m.skills.length > 5 ? `
              <span class="text-xs font-bold px-2 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-[#4F46E5] dark:text-indigo-400">
                +${m.skills.length - 5}
              </span>
            ` : ""}
          </div>
        </div>
      </div>

      <!-- Footer Action Buttons -->
      <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
        <button 
          type="button"
          onclick="openViewer('${m.id}')"
          class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#DB2777] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-500/20 transition-all group/btn"
        >
          <span>Xem Portfolio</span>
          <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>

        <a 
          href="${m.entry}" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Mở tab mới"
          class="p-2.5 rounded-xl bg-[#F1F5F9] dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[#64748B] dark:text-slate-300 transition-colors focus:ring-2 focus:ring-[#4F46E5]/50"
          aria-label="Mở portfolio của ${m.name} trong tab mới"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>

        ${m.socials.github ? `
          <a 
            href="${m.socials.github}" 
            target="_blank" 
            rel="noopener noreferrer"
            title="GitHub Profile"
            class="p-2.5 rounded-xl bg-[#F1F5F9] dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[#64748B] dark:text-slate-300 transition-colors"
            aria-label="GitHub của ${m.name}"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
            </svg>
          </a>
        ` : ""}
      </div>
    </article>
  `;
}

// Render Member Item (List Mode)
function renderMemberList(m) {
  const isAvailable = m.status === "available";
  const statusColorClass = isAvailable ? "bg-[#10B981]" : "bg-blue-500";
  const statusPulseClass = isAvailable ? "pulse-emerald" : "";

  return `
    <article 
      class="nhom1-card card-glow-nhom1 ${m.glowClass} p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
      data-member-id="${m.id}"
    >
      <div class="flex items-center gap-4 flex-1 min-w-0">
        <div class="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white dark:border-slate-700 shadow-sm flex-shrink-0 bg-slate-100 dark:bg-slate-800">
          <img 
            src="${m.avatar}" 
            alt="${m.name}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=4F46E5&color=fff&size=128';"
            loading="lazy"
          />
        </div>

        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-base sm:text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-indigo-400 transition-colors truncate">
              ${m.name}
            </h3>
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#F1F5F9] dark:bg-slate-800 text-[#0F172A] dark:text-slate-300">
              <span class="w-1.5 h-1.5 rounded-full ${statusColorClass} ${statusPulseClass}"></span>
              ${m.statusText}
            </span>
          </div>
          <p class="text-xs sm:text-sm font-semibold text-[#4F46E5] dark:text-indigo-400 truncate">
            ${m.role}
          </p>
          <div class="flex items-center gap-1.5 mt-1 flex-wrap">
            ${m.skills.slice(0, 4).map(skill => `
              <span class="text-xs px-2 py-0.5 rounded-md bg-[#F8FAFC] dark:bg-slate-800 text-[#64748B] dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                ${skill}
              </span>
            `).join("")}
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2 w-full md:w-auto justify-end pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
        <button 
          type="button"
          onclick="openViewer('${m.id}')"
          class="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
        >
          <span>Xem Portfolio</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>

        <a 
          href="${m.entry}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="p-2 rounded-xl bg-[#F1F5F9] dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[#64748B] dark:text-slate-300 transition-colors"
          title="Mở tab mới"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </article>
  `;
}

// VIEW ENGINE: Fullscreen Modal / Device Switcher
function openViewer(memberId) {
  const member = TEAM_MEMBERS.find(m => m.id === memberId);
  if (!member) return;

  state.activeMemberId = memberId;
  window.location.hash = `portfolio/${memberId}`;

  const modal = document.getElementById("portfolio-viewer-modal");
  const iframe = document.getElementById("viewer-frame");
  const loading = document.getElementById("viewer-loading");
  const nameEl = document.getElementById("viewer-member-name");
  const roleEl = document.getElementById("viewer-member-role");
  const avatarEl = document.getElementById("viewer-member-avatar");
  const newTabBtn = document.getElementById("viewer-open-tab-btn");

  if (nameEl) nameEl.textContent = member.name;
  if (roleEl) roleEl.textContent = member.role;
  if (avatarEl) {
    avatarEl.src = member.avatar;
    avatarEl.alt = member.name;
  }
  if (newTabBtn) {
    newTabBtn.href = member.entry;
  }

  if (loading) loading.style.display = "flex";

  iframe.onload = () => {
    if (loading) loading.style.display = "none";
  };
  iframe.src = member.entry;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";

  applyDeviceMode();
}

function closeViewer() {
  const modal = document.getElementById("portfolio-viewer-modal");
  const iframe = document.getElementById("viewer-frame");

  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";

  iframe.src = "about:blank";
  state.activeMemberId = null;

  if (window.location.hash.startsWith("#portfolio/")) {
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
}

function navigateViewer(direction) {
  if (!state.activeMemberId) return;
  const currentIndex = TEAM_MEMBERS.findIndex(m => m.id === state.activeMemberId);
  if (currentIndex === -1) return;

  let nextIndex = currentIndex + direction;
  if (nextIndex < 0) nextIndex = TEAM_MEMBERS.length - 1;
  if (nextIndex >= TEAM_MEMBERS.length) nextIndex = 0;

  openViewer(TEAM_MEMBERS[nextIndex].id);
}

function setDeviceMode(mode) {
  state.deviceMode = mode;
  applyDeviceMode();
}

function applyDeviceMode() {
  const container = document.getElementById("viewer-device-container");
  const buttons = document.querySelectorAll("[data-device-btn]");

  if (!container) return;

  container.className = "device-container";
  if (state.deviceMode === "desktop") {
    container.classList.add("device-desktop");
  } else if (state.deviceMode === "tablet") {
    container.classList.add("device-tablet");
  } else if (state.deviceMode === "mobile") {
    container.classList.add("device-mobile");
  }

  buttons.forEach(btn => {
    const btnMode = btn.getAttribute("data-device-btn");
    if (btnMode === state.deviceMode) {
      btn.classList.add("bg-[#4F46E5]", "text-white");
      btn.classList.remove("text-slate-400", "hover:bg-slate-800");
    } else {
      btn.classList.remove("bg-[#4F46E5]", "text-white");
      btn.classList.add("text-slate-400", "hover:bg-slate-800");
    }
  });
}

// Routing & Hash Listeners
function initRouting() {
  const checkHash = () => {
    const hash = window.location.hash;
    if (hash.startsWith("#portfolio/")) {
      const memberId = hash.replace("#portfolio/", "");
      if (TEAM_MEMBERS.some(m => m.id === memberId)) {
        openViewer(memberId);
      }
    } else if (state.activeMemberId) {
      closeViewer();
    }
  };

  window.addEventListener("hashchange", checkHash);
  checkHash();
}

// Event Bindings
function bindEvents() {
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const sortSelect = document.getElementById("sort-select");
  const gridViewBtn = document.getElementById("view-grid-btn");
  const listViewBtn = document.getElementById("view-list-btn");
  const themeToggleBtn = document.getElementById("theme-toggle-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchTerm = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = state.searchTerm ? "block" : "none";
      }
      renderMembers();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      state.searchTerm = "";
      if (searchInput) searchInput.value = "";
      clearSearchBtn.style.display = "none";
      renderMembers();
      if (searchInput) searchInput.focus();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderMembers();
    });
  }

  if (gridViewBtn && listViewBtn) {
    gridViewBtn.addEventListener("click", () => {
      state.viewMode = "grid";
      gridViewBtn.classList.add("bg-[#4F46E5]", "text-white");
      gridViewBtn.classList.remove("text-slate-500", "dark:text-slate-400");
      listViewBtn.classList.remove("bg-[#4F46E5]", "text-white");
      listViewBtn.classList.add("text-slate-500", "dark:text-slate-400");
      renderMembers();
    });

    listViewBtn.addEventListener("click", () => {
      state.viewMode = "list";
      listViewBtn.classList.add("bg-[#4F46E5]", "text-white");
      listViewBtn.classList.remove("text-slate-500", "dark:text-slate-400");
      gridViewBtn.classList.remove("bg-[#4F46E5]", "text-white");
      gridViewBtn.classList.add("text-slate-500", "dark:text-slate-400");
      renderMembers();
    });
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  // Keyboard Shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.activeMemberId) {
      closeViewer();
    }
    if (state.activeMemberId) {
      if (e.key === "ArrowLeft") navigateViewer(-1);
      if (e.key === "ArrowRight") navigateViewer(1);
      if (e.key === "1") setDeviceMode("desktop");
      if (e.key === "2") setDeviceMode("tablet");
      if (e.key === "3") setDeviceMode("mobile");
    }
    if ((e.key === "/" || (e.ctrlKey && e.key === "k")) && !state.activeMemberId) {
      if (document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput?.focus();
      }
    }
  });
}

function resetFilters() {
  state.searchTerm = "";
  state.activeCategory = "all";
  state.sortBy = "default";
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");
  const clearSearchBtn = document.getElementById("clear-search-btn");

  if (searchInput) searchInput.value = "";
  if (sortSelect) sortSelect.value = "default";
  if (clearSearchBtn) clearSearchBtn.style.display = "none";

  renderCategoryTabs();
  renderMembers();
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
