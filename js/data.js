// ============================================
//  DATA.JS — Konten portofolio ZARIL GIFARI
// ============================================

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';
const SI = 'https://cdn.simpleicons.org/';

const DATA = {

  // ---- SKILLS ----
  skills: {
    programming: [
      { name: "C# / .NET",          level: 80, icon: DI + 'csharp/csharp-original.svg' },
      { name: "C / C++",            level: 78, icon: DI + 'cplusplus/cplusplus-original.svg' },
      { name: "Python",             level: 82, icon: DI + 'python/python-original.svg' },
      { name: "JavaScript",         level: 85, icon: DI + 'javascript/javascript-original.svg' },
      { name: "PHP / Laravel",      level: 75, icon: DI + 'laravel/laravel-original.svg' },
      { name: "Node.js / NestJS",   level: 78, icon: DI + 'nestjs/nestjs-original.svg' },
      { name: "React + TypeScript", level: 72, icon: DI + 'react/react-original.svg' },
      { name: "MySQL / Supabase",   level: 80, icon: DI + 'supabase/supabase-original.svg' },
      { name: "HTML / CSS",         level: 90, icon: DI + 'html5/html5-original.svg' },
      { name: "Tailwind CSS",       level: 82, icon: DI + 'tailwindcss/tailwindcss-original.svg' },
      { name: "MongoDB Atlas",      level: 68, icon: DI + 'mongodb/mongodb-original.svg' },
      { name: "Git & GitHub",       level: 80, icon: DI + 'git/git-original.svg' },
    ],
    hardware: [
      { name: "Arduino IDE",              level: 82, icon: DI + 'arduino/arduino-original.svg' },
      { name: "ESP32 / ESP8266",          level: 78, icon: SI + 'espressif/ffffff' },
      { name: "RFID & Sensor",            level: 75, icon: null },
      { name: "Cisco Packet Tracer",      level: 78, icon: SI + 'cisco/00bceb' },
      { name: "Jaringan Komputer (CCNA)", level: 72, icon: SI + 'cisco/00bceb' },
      { name: "Linux System",             level: 68, icon: DI + 'linux/linux-original.svg' },
      { name: "IoT / MQTT",               level: 70, icon: SI + 'mqtt/660066' },
    ],
    multimedia: [
      { name: "Adobe Photoshop",    level: 80, icon: DI + 'photoshop/photoshop-original.svg' },
      { name: "Adobe Illustrator",  level: 72, icon: DI + 'illustrator/illustrator-plain.svg' },
      { name: "Adobe InDesign",     level: 65, icon: SI + 'adobeindesign/FF3366' },
      { name: "Adobe Premiere Pro", level: 70, icon: DI + 'premierepro/premierepro-original.svg' },
      { name: "Adobe After Effects",level: 62, icon: DI + 'aftereffects/aftereffects-original.svg' },
      { name: "Figma",              level: 78, icon: DI + 'figma/figma-original.svg' },
      { name: "Canva",              level: 88, icon: SI + 'canva/00C4CC' },
    ],
  },

  // ---- PROJECTS ----
  projects: [
    {
      id: 1,
      title: "Platform Web Sampah Modern",
      category: "web",
      categoryLabel: "Web Dev",
      color: "#3182ce",
      image: "assets/projects/sampah.png",
      desc: "Sistem informasi dan manajemen pengelolaan sampah berbasis web modern menggunakan Supabase sebagai backend untuk manajemen data yang tepat dan akurat.",
      fullDesc: "Membangun sistem informasi dan manajemen pengelolaan sampah berbasis web modern, menggunakan Supabase sebagai backend untuk manajemen data yang tepat dan akurat. Platform ini mempermudah proses pengelolaan limbah agar lebih efisien dan ramah lingkungan, dengan antarmuka yang bersih dan responsif.",
      role: "Full-Stack Developer",
      challenge: "Merancang skema database di Supabase yang mampu menangani berbagai jenis kategori sampah dan proses pengelolaan secara real-time, serta memastikan autentikasi pengguna berjalan aman.",
      result: "Platform berhasil mengotomatisasi proses pengelolaan limbah dan meningkatkan efisiensi pencatatan data dibandingkan sistem manual sebelumnya.",
      tags: ["Supabase", "JavaScript", "HTML/CSS", "Web Modern"],
      demo: "#",
      repo: "https://github.com/",
    },
    {
      id: 2,
      title: "Student Management System",
      category: "web",
      categoryLabel: "Web Dev",
      color: "#9f7aea",
      image: null,
      desc: "Sistem manajemen data mahasiswa full-stack berbasis cloud dengan React + TypeScript (frontend) dan NestJS (backend), terintegrasi MongoDB Atlas.",
      fullDesc: "Membangun sistem manajemen data mahasiswa full-stack yang memudahkan pengelolaan data (tambah, lihat, edit, hapus) secara efisien dengan data tersimpan aman di cloud database. Frontend interaktif dibangun menggunakan React dengan TypeScript. Backend REST API menggunakan NestJS (Node.js) untuk menangani logika bisnis dan operasi CRUD data mahasiswa.",
      role: "Full-Stack Developer",
      challenge: "Mengimplementasikan MongoDB Atlas untuk menyimpan data mahasiswa di cloud database yang terintegrasi antara frontend (port 3000) dan backend (port 3001) menggunakan Axios untuk komunikasi HTTP yang efisien.",
      result: "Sistem CRUD mahasiswa berfungsi penuh dengan arsitektur terpisah antara frontend dan backend, komunikasi API berjalan lancar, dan data tersimpan aman di MongoDB Atlas.",
      tags: ["React", "TypeScript", "NestJS", "MongoDB Atlas", "REST API", "Axios"],
      demo: "#",
      repo: "https://github.com/",
    },
    {
      id: 3,
      title: "Smart Academic Door Lock",
      category: "iot",
      categoryLabel: "IoT",
      color: "#48bb78",
      image: "assets/projects/door-lock.png",
      desc: "Sistem keamanan pintu otomatis berbasis mikrokontroler ESP32 dan RFID untuk akses ruang akademik yang aman dan terkontrol secara real-time.",
      fullDesc: "Merancang sistem keamanan pintu otomatis menggunakan mikrokontroler ESP32 dan modul RFID untuk memastikan akurasi sensor akses. Sistem ini memastikan data kunci dari komponen yang digunakan dan diuji untuk efisiensi akses real-time. Proyek ini juga dipresentasikan dalam Ignition Informatika Kategori IoT di Universitas Amikom Yogyakarta.",
      role: "Hardware Engineer & IoT Developer",
      challenge: "Memastikan akurasi pembacaan RFID dan respons aktuator kunci yang cepat (< 200ms), serta mengamankan sistem dari tag RFID tidak sah.",
      result: "Proyek berhasil dipresentasikan sebagai karya IoT di Ignition Informatika Universitas Amikom Yogyakarta (Feb 2026) dengan performa akses kunci yang akurat dan responsif.",
      tags: ["Arduino IDE", "ESP32", "RFID", "IoT", "C++"],
      demo: "#",
      repo: "https://github.com/",
    },
    {
      id: 4,
      title: "Dashboard Prediksi Instalasi Google Play Store",
      category: "data",
      categoryLabel: "Data Science",
      color: "#dd6b20",
      image: "assets/projects/dashboard.png",
      desc: "Dashboard analitik interaktif untuk memprediksi jumlah instalasi aplikasi menggunakan model Multiple Linear Regression dengan R² 92.97%.",
      fullDesc: "Membangun dashboard analitik interaktif untuk memprediksi jumlah instalasi aplikasi di Google Play Store menggunakan model Multiple Linear Regression, mencapai R² 92.97% dan MAPE 8.64% pada data uji. Melakukan exploratory data analysis (EDA) dan preprocessing pada 10.841 baris dataset Kaggle. Mengembangkan antarmuka visualisasi data interaktif (Chart.js) serta fitur simulasi prediksi real-time.",
      role: "Data Analyst / ML Engineer",
      challenge: "Memvalidasi kelayakan model melalui pengujian asumsi klasik regresi (VIF, normalitas, heteroskedastisitas) dan K-Fold Cross Validation (k=5) untuk memastikan model bebas overfitting.",
      result: "Menemukan bahwa jumlah ulasan (Reviews) adalah prediktor paling dominan (korelasi 0.958). Model berhasil memprediksi dengan akurat dan divisualisasikan secara interaktif.",
      tags: ["Python", "scikit-learn", "HTML/CSS", "JavaScript", "Chart.js"],
      demo: "#",
      repo: "https://github.com/",
    },
  ],

  // ---- EXPERIENCE ----
  experience: [
    {
      title: "Staff Divisi Acara",
      org: "PIMAPRISMA",
      period: "29 Nov – 6 Des 2025",
      desc: "Menyusun konsep dan rundown kegiatan untuk memastikan kelancaran event berlangsung. Mengkoordinasikan antar-divisi dan manajemen waktu lapangan untuk efisiensi pelaksanaan agenda.",
      num: "01",
    },
    {
      title: "Sie Acara — Dedicated to School",
      org: "HMMD · SMA Negeri 1 Pl",
      period: "12 – 21 Juni 2025",
      desc: "Merancang model-model teknologi untuk siswa guna memudahkan tugas yang berkaitan dengan teknologi sekolah. Memastikan jadwal kegiatan berjalan lancar dan kondusif.",
      num: "02",
    },
    {
      title: "Peserta Ignition Informatika — IoT",
      org: "Universitas Amikom Yogyakarta",
      period: "Februari 2026",
      desc: "Mempresentasikan karya Smart Door Lock berbasis ESP32 & RFID dalam kompetisi/pameran Ignition Informatika Kategori IoT tingkat universitas.",
      num: "03",
    },
    {
      title: "Peserta Public Speaking",
      org: "HMMAS · Universitas Amikom Yogyakarta",
      period: "September 2024",
      desc: "Mengikuti pelatihan public speaking resmi untuk mengembangkan kemampuan komunikasi dan presentasi.",
      num: "04",
    },
  ],

  // ---- CERTIFICATIONS ----
  certs: [
    { name: "Asisten Praktikum Komputer Grafis",  issuer: "Universitas Amikom Yogyakarta",         year: "Semester Genap 2025/2026" },
    { name: "Asisten Praktikum Sistem Operasi",   issuer: "Universitas Amikom Yogyakarta",         year: "Semester Genap 2025/2026" },
    { name: "Introduction to Networks",           issuer: "Cisco Networking Academy",              year: "Feb 2026" },
    { name: "Ignition Informatika — Kategori IoT", issuer: "Universitas Amikom Yogyakarta",         year: "Feb 2026" },
    { name: "Seminar Pemilihan",                   issuer: "Universitas Amikom Yogyakarta",         year: "Mar 2026" },
    { name: "Peserta Public Speaking",             issuer: "HMMAS · Universitas Amikom Yogyakarta", year: "Sep 2024" },
  ],

};
