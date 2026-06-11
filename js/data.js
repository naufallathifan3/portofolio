// =============================================
// data.js — Semua konten project portofolio
// Edit file ini untuk update project lo.
// =============================================

const PROJECTS = [
  {
    id: 1,
    featured: true,                  // tampil di posisi pertama, full width
    title: "SIMRS UNISVET — Sistem Informasi Manajemen RS",
    description:
      "Pengembang Sistem Informasi Rumah Sakit berbasis website untuk praktek mahasiswa keperawatan. " +
      "Mencakup modul pendaftaran pasien, rekam medis, apotek, dan manajemen " +
      "antrian. Menerapkan fitur CRUD (Create, Read, Update, Delete) dengan manajemen database MySQL.",
    tags: [
      { label: "Data Engineering", cls: "tag-de" },
      { label: "SQL", cls: "tag-sql" },
    ],
    stack: ["MySQL", "PHP", "ERD Design", "Normalization", "Stored Procedure"],
    metrics: [
      { val: "12+", lbl: "tabel relasi" },
      { val: "5",   lbl: "modul sistem" },
      { val: "3NF", lbl: "normalisasi" },
    ],
    // Snippet kode yang tampil di kanan (featured card)
    codeLines: [
      { type: "cm",   text: "-- Query laporan harian pasien" },
      { type: "kw",   text: "SELECT" },
      { type: "text", text: "  p.nama, t.tgl_masuk," },
      { type: "fn",   text: "  COUNT" },
      { type: "text", text: "(d.id_diagnosa) AS total_diagnosa" },
      { type: "kw",   text: "FROM" },
      { type: "text", text: "  pasien p" },
      { type: "kw",   text: "JOIN" },
      { type: "text", text: "  transaksi t ON p.id = t.id_pasien" },
      { type: "kw",   text: "WHERE" },
      { type: "text", text: "  t.tgl_masuk = " },
      { type: "fn",   text: "CURDATE()" },
      { type: "kw",   text: "GROUP BY" },
      { type: "text", text: "  p.id" },
      { type: "cm",   text: "-- ✓ avg 120 records/hari" },
    ],
    github: "https://github.com/naufallathifan3/simrs",
  },

  {
    id: 2,
    featured: false,
    title: "Sistem Generator SK Otomatis — UNISSULA",
    description:
      "Membuat sistem berbasis website untuk generate Surat Keputusan (SK) mengajar dosen secara otomatis " +
      "Menggantikan proses manual berhari-hari menjadi hitungan menit. " +
      "PHP untuk generate dokumen Word dari template + MySQL sebagai data source.",
    tags: [
      { label: "Data Engineering", cls: "tag-de" },
      { label: "Automation", cls: "tag-da" },
    ],
    stack: ["Python", "MySQL", "python-docx", "Pandas"],
    github: "https://github.com/naufallathifan3/SK_Mengajar",
  },

  {
    id: 3,
    featured: false,
    title: "Object Detection dengan YOLO",
    description:
          "Membuat proyek individu untuk mendeteksi dan mengklasifikasi objek dari gambar menggunakan YOLO.",
    tags: [
      { label: "Machine learning", cls: "tag-da" },
      { label: "Python", cls: "tag-ml" },
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    github: "https://colab.research.google.com/drive/1i79O4r3ucy4JrovPdj5m8uol2H9XCZ_p?authuser=2",
  },

  {
    id: 4,
    featured: false,
    title: "Data Science",
    description:
          "Materi pembelajran yaitu; The Power of Data, Fundamental Data Science, Analisis Data, Machine Learning untuk Data Science.",
    tags: [
      { label: "Dicoding Academy", cls: "tag-da" },
      { label: "Machine Learning", cls: "tag-ml" },
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://www.dicoding.com/certificates/1RXYLKMJQPVM",
  },

  {
    id: 5,
    featured: false,
    title: "Belajar Dasar Structured Query Language (SQL)",
    description:
          "Materi pembelajran yaitu; Pengenalan basis data, Database Management System, dan Basic Query SQL",
    tags: [
      { label: "Dicoding Academy", cls: "tag-da" },
      { label: "SQL", cls: "tag-sql" },
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://www.dicoding.com/certificates/NVP74K9KRPR0",
  },

  {
    id: 6,
    featured: false,
    title: "Memulai Pemrograman dengan Python",
    description:
          "Materi pembelajran yaitu; berkenalan dengan python, berinteraksi dengan data, ekspresi dan penerapan python, control flow pada python, array dan pemrosesannya, matriks, subprogram, Object-Oriented Programming (OOP), style guide pada python, unit testig, dan library populer pada python",
    tags: [
      { label: "Dicoding Academy", cls: "tag-da" },
      { label: "Python", cls: "tag-ml" },
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Numpy"],
    github: "https://www.dicoding.com/certificates/NVP748VG4PR0",
  },
];
