/* =====================================================================
   FILE NỘI DUNG PORTFOLIO — CHỈ CẦN SỬA FILE NÀY
   ---------------------------------------------------------------------
   - Thay các nội dung mẫu bên dưới bằng thông tin của bạn.
   - Giữ nguyên dấu nháy "..." và dấu phẩy ở cuối mỗi dòng/mục.
   - Muốn thêm mục: copy nguyên một khối { ... }, dán thêm và sửa nội dung.
   - Muốn ẩn cả một phần (vd: Giải thưởng): để trống danh sách, ví dụ  awards: [],
   - Lưu file rồi tải lại trang (F5) để xem thay đổi.
   ===================================================================== */

const PORTFOLIO = {

  /* ---------- THÔNG TIN CHUNG ---------- */
  siteTitle: "Portfolio | Nguyễn Đăng Khôi",
  name: "Nguyễn Đăng Khôi",
  role: "Sinh viên Công nghệ thông tin",           // chức danh / nghề nghiệp
  tagline: "Biến ý tưởng thành hiện thực với code.",  // slogan / câu nói yêu thích
  avatar: "assets/img/avatar.jpg",                 // ảnh đại diện (nếu không có ảnh sẽ hiện chữ cái đầu)
  cv: { label: "Tải CV", url: "" },                  // để url trống nếu chưa có CV (nút sẽ ẩn)

  /* ---------- TIÊU ĐỀ CÁC PHẦN (có thể đổi tên) ---------- */
  sections: {
    about: "Về tôi",
    education: "Học vấn",
    awards: "Giải thưởng & Thành tích",
    skills: "Kỹ năng",
    projects: "Dự án",
    hobbies: "Sở thích",
    foods: "Món ăn yêu thích",
    contact: "Liên hệ"
  },

  /* ---------- GIỚI THIỆU ---------- */
  about: {
    bio: [
      "Xin chào! Mình là Nguyễn Đăng Khôi, hiện đang học năm 3 ngành Công nghệ thông tin.",
      "Mình đam mê lập trình và thích tham gia các dự án thực tế để nâng cao kỹ năng.",
      "Mục tiêu của mình là trở thành một lập trình viên toàn diện, có thể làm việc với nhiều công nghệ khác nhau."
    ],
    // icon lấy từ Font Awesome 4.7 (https://fontawesome.com/v4/icons/)
    facts: [
      { icon: "fa-birthday-cake", label: "Ngày sinh",  value: "23/10/2006" },
      { icon: "fa-map-marker",    label: "Nơi ở",      value: "TP. Hồ Chí Minh" },
      { icon: "fa-language",      label: "Ngôn ngữ",   value: "Tiếng Việt, Tiếng Anh" },
      { icon: "fa-heart",         label: "Châm ngôn",  value: "Vibe code iz da best" }
    ]
  },

  /* ---------- HỌC VẤN (mới nhất để lên đầu) ---------- */
  education: [
    {
      period: "2024 – nay",
      school: "Đại học Giao thông vận tải TP.HCM",
      major: "Công nghệ thông tin - Computer Science",
      detail: "Tham gia các dự án nhóm và các cuộc thi lập trình ở trường"
    },
    {
      period: "2019 – 2022",
      school: "THPT Hoàng Hoa Thám - HCM",
      major: "Chuyên Anh Văn",
      detail: "Tham gia các kì thi HSG Tiếng Anh cấp quận và đạt nhiều giải"
    }
  ],

  /* ---------- GIẢI THƯỞNG ---------- */
  awards: [
    { year: "2024", title: "Giải Nhì Hackathon Sinh viên", org: "Đại học Giao thông vận tải TP.HCM",      detail: "Xây dựng ứng dụng quản lý chi tiêu trong 48 giờ.(Cap)" },
    { year: "2023", title: "Học bổng khuyến khích học tập", org: "Đại học Giao thông vận tải TP.HCM",     detail: "Đạt học bổng 2 học kỳ liên tiếp.(Cap)" },
    { year: "2021", title: "Giải Ba HSG Tiếng Anh cấp thành phố", org: "Sở GD&ĐT", detail: "(real)" }
  ],

  /* ---------- KỸ NĂNG (level từ 0 đến 100) ---------- */
  skills: [
    { name: "HTML / CSS",  level: 90 },
    { name: "JavaScript",  level: 80 },
    { name: "Python",      level: 70 },
    { name: "Git / GitHub", level: 75 },
    { name: "Tiếng Anh",   level: 100 }
  ],

  /* ---------- DỰ ÁN ---------- */
  projects: [
    {
      title: "Ứng dụng Chat - Textbox",
      description: "App chat đơn giản sử dụng WebSocket và TCP/IP để hiển thị biểu đồ số lượng tin nhắn.",
      image: "assets/img/Chatties_icon.jpg",           // ảnh minh họa (có thể bỏ trống "")
      tags: ["C/C++", "WebSocket"],
      link: "https://github.com/Khoi2310/App_Chatties"                                       // link demo/GitHub (để trống nếu chưa có)
    },
    {
      title: "Quản lý điểm sinh viên(webapp)",
      description: "Hệ thống quản lý điểm sinh viên với giao diện người dùng thân thiện.",
      image: "assets/img/logo_full.jpg",
      tags: ["HTML", "CSS", "Django", "SQLite"],
      link: "https://github.com/vitruong240106/QuanLyDiem"
    }
  ],

  /* ---------- SỞ THÍCH (icon có thể là emoji) ---------- */
  hobbies: [
    { icon: "🎧", title: "Nghe nhạc",   description: "Các nghệ sĩ như Daniel Ceasar, Chris Brown vân vân và mây mây" },
    { icon: "🏀", title: "Bóng rổ",     description: "Lowkey retired baller" },
    { icon: "🎮", title: "Gaming",    description: "Valorant, CS2, GTA" },
    { icon: "✈️", title: "Phượt",     description: "Mình thích đi khám phá các vùng đất mới trên chiếc xe máy, đi tới các vùng núi.." }
  ],

  /* ---------- MÓN ĂN YÊU THÍCH ---------- */
  foods: [
    { icon: "🍜", title: "Phở bò",       description: "Tái nạm" },
    { icon: "🥖", title: "Bánh mì",      description: "Món ăn sáng quốc dân, 2 trứng nhiều pate chả cá(hoặc chả lụa)" },
    { icon: "🍚", title: "Cơm tấm",      description: "Sườn chả trứng all the way" },
    { icon: "🧋", title: "Trà sữa",      description: "Ít đường, yêu phô mai viên." }
  ],

  /* ---------- MẠNG XÃ HỘI (hiện ở đầu trang & phần Liên hệ) ---------- */
  social: [
    { icon: "fa-github",   label: "GitHub",   url: "https://github.com/Khoi2310" },
    { icon: "fa-linkedin", label: "LinkedIn", url: "https://linkedin.com/" },
    { icon: "fa-facebook", label: "Facebook", url: "https://www.facebook.com/baka2310" }
  ],

  /* ---------- LIÊN HỆ ---------- */
  contact: {
    message: "My Contact Info",
    email: "dangkhoinguyen2310@gmail.com",
    phone: "0123 456 789",
    location: "TP. Hồ Chí Minh, Việt Nam"
  },
  
  hub: { label: "Về Hub", url: "../index.html" }
};

