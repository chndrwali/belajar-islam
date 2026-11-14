// Data halaman /sholat — melengkapi (bukan menduplikasi) materi "shalat",
// "niat-shalat", dan "thaharah-wudhu" di lib/islam/materials.ts.
// Penjelasan mengikuti madzhab Syafi'i yang umum dipakai di Indonesia.
// Nomor hadits/ayat tidak dicantumkan bila tidak yakin — hanya sumber umum.

export interface Bacaan {
  arabic: string;
  latin: string;
  meaning: string;
}

export interface SholatStep {
  name: string;
  movement: string;
  readings: Bacaan[];
  note?: string;
}

export interface SunnahPrayer {
  id: string;
  title: string;
  intro: string;
  time: string;
  rakaat: string;
  niat: Bacaan;
  points: string[];
  extraReadings: Bacaan[];
  virtues: string[];
}

export interface JenazahTakbir {
  no: number;
  title: string;
  reading: Bacaan;
  note?: string;
}

export const MADZHAB_NOTE =
  "Penjelasan di halaman ini mengikuti madzhab Syafi'i yang umum dipakai di Indonesia. Bila ada perbedaan pendapat antar madzhab, yang ditulis di sini adalah pendapat yang lazim diajarkan di Indonesia.";

// ---------------------------------------------------------------------------
// Bacaan yang dipakai berulang
// ---------------------------------------------------------------------------

export const BACAAN_TAKBIR: Bacaan = {
  arabic: "اللَّهُ أَكْبَرُ",
  latin: "Allahu Akbar.",
  meaning: "Allah Maha Besar.",
};

export const BACAAN_FATIHAH: Bacaan = {
  arabic: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
الرَّحْمَٰنِ الرَّحِيمِ
مَالِكِ يَوْمِ الدِّينِ
إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ`,
  latin:
    "Bismillahir-rahmanir-rahim. Alhamdu lillahi rabbil 'alamin. Ar-rahmanir-rahim. Maliki yaumiddin. Iyyaka na'budu wa iyyaka nasta'in. Ihdinash-shirathal mustaqim. Shirathal-ladzina an'amta 'alaihim, ghairil-maghdhubi 'alaihim wa ladh-dhallin.",
  meaning:
    "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang Maha Pengasih lagi Maha Penyayang. Pemilik hari pembalasan. Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami memohon pertolongan. Tunjukilah kami jalan yang lurus. Jalan orang-orang yang telah Engkau beri nikmat, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat.",
};

export const BACAAN_SHALAWAT_SINGKAT: Bacaan = {
  arabic: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ",
  latin: "Allahumma shalli 'ala Muhammad wa 'ala ali Muhammad.",
  meaning: "Ya Allah, limpahkanlah shalawat kepada Muhammad dan keluarga Muhammad.",
};

// ---------------------------------------------------------------------------
// Bagian 1 — Sholat wajib
// ---------------------------------------------------------------------------

export interface RakaatWajib {
  name: string;
  rakaat: number;
  time: string;
}

export const RAKAAT_WAJIB: RakaatWajib[] = [
  { name: "Subuh", rakaat: 2, time: "Sebelum matahari terbit" },
  { name: "Dzuhur", rakaat: 4, time: "Setelah matahari tergelincir" },
  { name: "Ashar", rakaat: 4, time: "Sore hari" },
  { name: "Maghrib", rakaat: 3, time: "Setelah matahari terbenam" },
  { name: "Isya", rakaat: 4, time: "Malam hari" },
];

export const SYARAT_SAH: string[] = [
  "Suci dari hadats (sudah berwudhu) dan najis — badan, pakaian, dan tempat shalat bersih.",
  "Menutup aurat.",
  "Menghadap kiblat.",
  "Sudah masuk waktu shalat.",
  "Niat dalam hati.",
];

export const PEMBATAL_SHOLAT: string[] = [
  "Berhadats, misalnya kentut atau buang air.",
  "Berbicara dengan sengaja di luar bacaan shalat.",
  "Makan atau minum.",
  "Tertawa terbahak-bahak.",
  "Bergerak banyak berturut-turut tanpa keperluan.",
  "Aurat terbuka.",
  "Membelakangi kiblat dengan sengaja.",
];

export const SHOLAT_STEPS: SholatStep[] = [
  {
    name: "Niat",
    movement:
      "Berdiri menghadap kiblat dengan tenang. Niat ada di dalam hati: sadari shalat apa yang akan dikerjakan dan untuk siapa — karena Allah.",
    readings: [],
    note: "Niat tidak wajib dilafalkan. Lafaz niat yang lazim diajarkan hanyalah bantuan belajar — dibahas rinci di materi Niat Shalat.",
  },
  {
    name: "Takbiratul Ihram",
    movement:
      "Angkat kedua tangan sejajar bahu (atau sejajar telinga), telapak tangan menghadap kiblat, lalu ucapkan takbir. Sejak takbir ini, hal-hal yang membatalkan shalat mulai berlaku.",
    readings: [BACAAN_TAKBIR],
  },
  {
    name: "Sedekap & Doa Iftitah",
    movement:
      "Letakkan tangan kanan di atas tangan kiri, di dada atau di bawah dada. Lalu baca doa iftitah, ta'awwudz, dan basmalah dengan pelan.",
    readings: [
      {
        arabic:
          "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا",
        latin:
          "Allahu akbar kabira, walhamdu lillahi katsira, wa subhanallahi bukratan wa ashila.",
        meaning:
          "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak, Maha Suci Allah di waktu pagi dan petang.",
      },
      {
        arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        latin: "A'udzu billahi minasy-syaithanir-rajim.",
        meaning: "Aku berlindung kepada Allah dari godaan setan yang terkutuk.",
      },
    ],
    note: "Doa iftitah di atas adalah versi singkat yang lazim diajarkan. Ada beberapa versi iftitah lain yang juga sah.",
  },
  {
    name: "Membaca Al-Fatihah & Surah Pendek",
    movement:
      "Tetap berdiri dengan sedekap. Baca Al-Fatihah di setiap rakaat — bacaan ini rukun, tidak boleh ditinggalkan. Setelah itu, pada dua rakaat pertama, disunnahkan membaca surah pendek atau sebagian ayat Al-Quran, misalnya Al-Ikhlas.",
    readings: [
      BACAAN_FATIHAH,
      {
        arabic: `قُلْ هُوَ اللَّهُ أَحَدٌ
اللَّهُ الصَّمَدُ
لَمْ يَلِدْ وَلَمْ يُولَدْ
وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ`,
        latin:
          "Qul huwallahu ahad. Allahush-shamad. Lam yalid wa lam yulad. Wa lam yakul lahu kufuwan ahad.",
        meaning:
          "Katakanlah: Dialah Allah Yang Maha Esa. Allah tempat bergantung segala sesuatu. Dia tidak beranak dan tidak diperanakkan. Dan tidak ada sesuatu pun yang setara dengan-Nya.",
      },
    ],
    note: "Pada rakaat ketiga dan keempat cukup membaca Al-Fatihah saja, tanpa surah tambahan.",
  },
  {
    name: "Ruku",
    movement:
      "Bertakbir lalu membungkuk: punggung lurus sejajar lantai, kepala sejajar punggung (tidak mendongak, tidak menunduk), kedua tangan memegang lutut dengan jari terbuka. Berhenti tenang sejenak (tuma'ninah) sambil membaca doa ruku.",
    readings: [
      {
        arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
        latin: "Subhana rabbiyal 'azhim. (dibaca 3 kali)",
        meaning: "Maha Suci Tuhanku Yang Maha Agung.",
      },
    ],
    note: "Tuma'ninah — tenang di tiap gerakan — adalah rukun. Shalat yang terburu-buru tanpa berhenti tenang tidak sah.",
  },
  {
    name: "I'tidal",
    movement:
      "Bangkit dari ruku hingga berdiri tegak kembali, kedua tangan lurus di samping badan. Berhenti tenang sejenak sambil membaca doa i'tidal.",
    readings: [
      {
        arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
        latin: "Sami'allahu liman hamidah.",
        meaning: "Allah mendengar orang yang memuji-Nya.",
      },
      {
        arabic: "رَبَّنَا لَكَ الْحَمْدُ",
        latin: "Rabbana lakal hamdu.",
        meaning: "Ya Tuhan kami, bagi-Mu segala puji.",
      },
    ],
  },
  {
    name: "Sujud",
    movement:
      "Bertakbir lalu sujud: dahi dan hidung menempel ke lantai, kedua telapak tangan menempel di samping kepala, kedua lutut menempel, dan ujung jari kedua kaki menekan lantai. Siku terangkat, tidak menempel ke lantai. Berhenti tenang sambil membaca doa sujud.",
    readings: [
      {
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        latin: "Subhana rabbiyal a'la. (dibaca 3 kali)",
        meaning: "Maha Suci Tuhanku Yang Maha Tinggi.",
      },
    ],
  },
  {
    name: "Duduk di Antara Dua Sujud",
    movement:
      "Bangkit dari sujud dan duduk iftirasy: kaki kiri diduduki, telapak kaki kanan ditegakkan dengan jari-jari menghadap kiblat, kedua tangan di atas paha. Berhenti tenang sambil membaca doa duduk.",
    readings: [
      {
        arabic:
          "رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي",
        latin:
          "Rabbighfirli warhamni wajburni warfa'ni warzuqni wahdini wa'afini wa'fu 'anni.",
        meaning:
          "Ya Tuhanku, ampunilah aku, kasihanilah aku, cukupkanlah kekuranganku, angkatlah derajatku, berilah aku rezeki, berilah aku petunjuk, sehatkanlah aku, dan maafkanlah aku.",
      },
    ],
  },
  {
    name: "Sujud Kedua & Berdiri ke Rakaat Berikutnya",
    movement:
      "Sujud kedua sama seperti sujud pertama, dengan bacaan yang sama. Lalu bangkit berdiri untuk rakaat berikutnya dengan bertakbir. Ulangi dari membaca Al-Fatihah sampai sujud untuk tiap rakaat.",
    readings: [
      {
        arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَى",
        latin: "Subhana rabbiyal a'la. (dibaca 3 kali)",
        meaning: "Maha Suci Tuhanku Yang Maha Tinggi.",
      },
    ],
    note: "Pada shalat 3–4 rakaat, setelah sujud kedua di rakaat kedua, duduk tasyahud awal (langkah 10) sebelum berdiri ke rakaat ketiga.",
  },
  {
    name: "Tasyahud Awal",
    movement:
      "Duduk setelah sujud kedua pada rakaat kedua (untuk shalat 3–4 rakaat): duduk iftirasy seperti duduk di antara dua sujud, telunjuk tangan kanan diangkat saat mengucapkan syahadat. Baca tasyahud sampai syahadat, lalu berdiri ke rakaat berikutnya.",
    readings: [
      {
        arabic:
          "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
        latin:
          "Attahiyyatul mubarakatush-shalawatuth-thayyibatu lillah. Assalamu 'alaika ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. Assalamu 'alaina wa 'ala 'ibadillahish-shalihin. Asyhadu alla ilaha illallah, wa asyhadu anna Muhammadan rasulullah.",
        meaning:
          "Segala penghormatan, keberkahan, shalat, dan kebaikan hanya bagi Allah. Keselamatan atasmu wahai Nabi, beserta rahmat dan berkah Allah. Keselamatan atas kami dan atas hamba-hamba Allah yang saleh. Aku bersaksi bahwa tidak ada Tuhan selain Allah, dan aku bersaksi bahwa Muhammad adalah utusan Allah.",
      },
    ],
    note: "Setelah tasyahud awal, disunnahkan membaca shalawat singkat kepada Nabi sebelum berdiri. Shalat Subuh (2 rakaat) tidak memakai tasyahud awal — langsung tasyahud akhir.",
  },
  {
    name: "Tasyahud Akhir & Shalawat",
    movement:
      "Duduk setelah sujud kedua pada rakaat terakhir: duduk tawarruk — kaki kiri diselipkan di bawah kaki kanan, telapak kaki kanan ditegakkan, dan duduk di atas lantai. Baca tasyahud seperti pada tasyahud awal, lalu lanjutkan dengan shalawat Ibrahimiyah. Telunjuk tangan kanan diangkat saat mengucapkan syahadat.",
    readings: [
      {
        arabic:
          "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
        latin:
          "Allahumma shalli 'ala Muhammad wa 'ala ali Muhammad, kama shallaita 'ala Ibrahim wa 'ala ali Ibrahim, innaka hamidum-majid. Allahumma barik 'ala Muhammad wa 'ala ali Muhammad, kama barakta 'ala Ibrahim wa 'ala ali Ibrahim, innaka hamidum-majid.",
        meaning:
          "Ya Allah, limpahkanlah shalawat kepada Muhammad dan keluarga Muhammad, sebagaimana Engkau limpahkan kepada Ibrahim dan keluarga Ibrahim. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia. Ya Allah, berkahilah Muhammad dan keluarga Muhammad, sebagaimana Engkau berkahi Ibrahim dan keluarga Ibrahim. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.",
      },
    ],
    note: "Bacaan tasyahudnya sama seperti pada tasyahud awal, baru dilanjutkan shalawat di atas.",
  },
  {
    name: "Salam",
    movement:
      "Menoleh ke kanan hingga pipi kanan terlihat dari belakang, ucapkan salam. Lalu menoleh ke kiri dengan cara yang sama dan ucapkan salam lagi.",
    readings: [
      {
        arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
        latin: "Assalamu'alaikum warahmatullah.",
        meaning: "Keselamatan dan rahmat Allah atas kalian.",
      },
    ],
    note: "Salam pertama (ke kanan) adalah rukun; salam kedua (ke kiri) disunnahkan.",
  },
];

// ---------------------------------------------------------------------------
// Bagian 2–4 — Sholat sunnah
// ---------------------------------------------------------------------------

export const SUNNAH_PRAYERS: SunnahPrayer[] = [
  {
    id: "taubat",
    title: "Sholat Taubat",
    intro:
      "Sholat sunnah dua rakaat yang dikerjakan ketika seseorang ingin bertaubat dari dosa. Dikerjakan kapan saja, kecuali pada waktu-waktu yang dilarang untuk shalat sunnah (misalnya tepat saat matahari terbit atau terbenam).",
    time: "Kapan saja (di luar waktu yang dilarang)",
    rakaat: "2 rakaat",
    niat: {
      arabic: "أُصَلِّي سُنَّةَ التَّوْبَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
      latin: "Ushalli sunnatat-taubati rak'ataini lillahi ta'ala.",
      meaning: "Aku niat shalat sunnah taubat dua rakaat karena Allah Ta'ala.",
    },
    points: [
      "Rakaat pertama: Al-Fatihah, lalu surah pendek. Rakaat kedua: sama.",
      "Gerakan dan bacaannya sama seperti shalat wajib pada umumnya.",
      "Setelah salam, perbanyak istighfar dan membaca sayyidul istighfar.",
      "Taubat yang diterima adalah taubat nasuha — taubat yang sungguh-sungguh.",
    ],
    extraReadings: [
      {
        arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ",
        latin: "Astaghfirullahal 'azhim.",
        meaning: "Aku memohon ampun kepada Allah Yang Maha Agung.",
      },
      {
        arabic:
          "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
        latin:
          "Allahumma anta rabbi, la ilaha illa anta, khalaqtani wa ana 'abduka, wa ana 'ala 'ahdika wa wa'dika mastatha'tu, a'udzu bika min syarri ma shana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidzanbi, faghfirli, fa innahu la yaghfirudz-dzunuba illa anta.",
        meaning:
          "Ya Allah, Engkaulah Tuhanku, tidak ada Tuhan selain Engkau. Engkau menciptakanku dan aku adalah hamba-Mu. Aku berada di atas janji-Mu semampuku. Aku berlindung kepada-Mu dari kejahatan yang telah kuperbuat. Aku mengakui nikmat-Mu atas diriku dan aku mengakui dosaku. Maka ampunilah aku, karena sesungguhnya tidak ada yang dapat mengampuni dosa kecuali Engkau.",
      },
    ],
    virtues: [
      "Syarat taubat nasuha: menyesal atas dosa yang dilakukan.",
      "Berhenti dari dosa itu saat ini juga.",
      "Bertekad sungguh-sungguh untuk tidak mengulanginya.",
      "Bila dosa itu terkait hak orang lain — misalnya mengambil hartanya atau menyakitinya — selesaikan dulu hak orang tersebut (kembalikan, minta maaf, atau minta dihalalkan).",
    ],
  },
  {
    id: "duha",
    title: "Sholat Duha",
    intro:
      "Sholat sunnah di pagi hari, setelah matahari naik. Sholat yang ringan dan mudah dijaga — dua rakaat saja sudah cukup untuk memulainya.",
    time: "Setelah matahari terbit sekitar 15 menit, sampai sebelum masuk waktu Dzuhur",
    rakaat: "2–12 rakaat (minimal 2, tiap 2 rakaat satu salam)",
    niat: {
      arabic: "أُصَلِّي سُنَّةَ الضُّحَى رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
      latin: "Ushalli sunnatadh-dhuha rak'ataini lillahi ta'ala.",
      meaning: "Aku niat shalat sunnah Duha dua rakaat karena Allah Ta'ala.",
    },
    points: [
      "Gerakan dan bacaannya sama seperti shalat wajib: Al-Fatihah lalu surah pendek di tiap rakaat.",
      "Boleh dikerjakan 2 rakaat, 4 rakaat, sampai 12 rakaat — sesuaikan dengan waktu dan kemampuan.",
      "Waktu terbaiknya adalah saat matahari mulai terik, menjelang siang.",
    ],
    extraReadings: [],
    virtues: [
      "Disebut sebagai sedekah untuk seluruh persendian tubuh (HR. Muslim).",
      "Amalan ringan di pagi hari yang menjaga hubungan dengan Allah sebelum kesibukan dimulai.",
    ],
  },
  {
    id: "tahajud",
    title: "Sholat Tahajud",
    intro:
      "Sholat sunnah malam yang dikerjakan setelah tidur. Waktu yang sunyi ini adalah waktu yang istimewa untuk berdoa dan mendekatkan diri kepada Allah.",
    time: "Sepertiga malam terakhir, setelah tidur",
    rakaat: "2–8 rakaat (tiap 2 rakaat satu salam), ditutup witir 1 atau 3 rakaat",
    niat: {
      arabic: "أُصَلِّي سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى",
      latin: "Ushalli sunnatat-tahajjudi rak'ataini lillahi ta'ala.",
      meaning: "Aku niat shalat sunnah tahajud dua rakaat karena Allah Ta'ala.",
    },
    points: [
      "Bangun di malam hari, berwudhu, lalu shalat dua rakaat demi dua rakaat.",
      "Bacaan: Al-Fatihah lalu surah — boleh surah yang panjang bila mampu, karena shalat malam memang dianjurkan dengan bacaan yang panjang.",
      "Setelah tahajud, tutup dengan shalat witir 1 atau 3 rakaat.",
      "Bila khawatir tidak sempat bangun, witir boleh dikerjakan sebelum tidur — lebih baik daripada tidak witir sama sekali.",
    ],
    extraReadings: [],
    virtues: [
      "Allah berfirman dalam QS Al-Isra ayat 79: shalat tahajud adalah ibadah tambahan yang mudah-mudahan mengangkat pelakunya ke tempat yang terpuji.",
      "Malam hari adalah waktu doa yang mustajab — gunakan untuk berdoa setelah shalat.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Bagian 5 — Sholat jenazah
// ---------------------------------------------------------------------------

export const JENAZAH_TAKBIR: JenazahTakbir[] = [
  {
    no: 1,
    title: "Takbir pertama — membaca Al-Fatihah",
    reading: BACAAN_FATIHAH,
    note: "Setelah takbir pertama, baca Al-Fatihah seperti pada shalat biasa.",
  },
  {
    no: 2,
    title: "Takbir kedua — membaca shalawat",
    reading: BACAAN_SHALAWAT_SINGKAT,
    note: "Shalawat yang dibaca sama seperti shalawat dalam tasyahud, versi singkatnya sudah cukup.",
  },
  {
    no: 3,
    title: "Takbir ketiga — mendoakan jenazah",
    reading: {
      arabic: "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ",
      latin: "Allahummaghfir lahu warhamhu wa'afihi wa'fu 'anhu.",
      meaning:
        "Ya Allah, ampunilah dia, kasihanilah dia, sehatkanlah dia, dan maafkanlah dia.",
    },
    note: "Untuk jenazah perempuan, kata ganti 'lahu' (dia, laki-laki) diganti 'laha'. Doa jenazah ini memiliki beberapa riwayat — yang ditulis di sini adalah lafaz yang lazim diajarkan di Indonesia.",
  },
  {
    no: 4,
    title: "Takbir keempat — doa penutup, lalu salam",
    reading: {
      arabic:
        "اللَّهُمَّ لَا تَحْرِمْنَا أَجْرَهُ وَلَا تَفْتِنَّا بَعْدَهُ وَاغْفِرْ لَنَا وَلَهُ",
      latin: "Allahumma la tahrimna ajrahu wa la taftinna ba'dahu waghfir lana wa lahu.",
      meaning:
        "Ya Allah, janganlah Engkau haramkan kami dari pahalanya, janganlah Engkau beri kami fitnah setelahnya, dan ampunilah kami dan dia.",
    },
    note: "Setelah doa ini, ucapkan salam ke kanan (dan ke kiri, bila mengikuti kebiasaan setempat).",
  },
];

export const JENAZAH_NOTES: string[] = [
  "Shalat jenazah adalah fardhu kifayah — bila sebagian kaum muslimin sudah mengerjakannya, gugurlah kewajiban bagi yang lain.",
  "Dikerjakan dengan berdiri saja — tanpa ruku dan tanpa sujud — dengan 4 kali takbir.",
  "Posisi imam: berdiri di depan jenazah, sejajar kepala untuk jenazah laki-laki dan sejajar bagian tengah untuk jenazah perempuan (menurut madzhab Syafi'i). Makmum berdiri di belakang imam dalam saf.",
  "Doa untuk jenazah tidak berhenti di shalat ini — mendoakan orang yang sudah wafat bisa terus dilakukan kapan saja.",
];
