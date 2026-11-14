import type { Material, SectionKey } from "./types";

export const SECTION_INFO: Record<SectionKey, { name: string; description: string }> = {
  akidah: {
    name: "Akidah",
    description: "Fondasi keyakinan seorang muslim: mengenal Allah, rukun iman, rukun Islam, dan kehidupan akhirat.",
  },
  ibadah: {
    name: "Ibadah",
    description: "Tata cara ibadah sehari-hari: bersuci, shalat, puasa, zakat, dan haji.",
  },
  quran: {
    name: "Al-Quran",
    description: "Mengenal Al-Quran sebagai pedoman hidup dan dasar-dasar membacanya dengan benar.",
  },
  sirah: {
    name: "Sirah & Teladan",
    description: "Kisah para nabi dan teladan Nabi Muhammad sebagai bekal meneladani kehidupan mereka.",
  },
  akhlak: {
    name: "Akhlak & Hidup",
    description: "Adab sehari-hari dan batas halal-haram yang menuntun cara hidup seorang muslim.",
  },
};

export const MATERIALS: Material[] = [
  {
    slug: "mengenal-allah",
    section: "akidah",
    sectionName: "Akidah",
    title: "Mengenal Allah",
    short: "Siapa Allah, Asmaul Husna, dan cara mengenal-Nya lewat nama, sifat, dan ciptaan-Nya.",
    estimatedMinutes: 30,
    keyPoints: [
      "Allah Maha Esa (Ahad): tidak ada tuhan selain Allah, tidak beranak dan tidak diperanakkan (QS Al-Ikhlas: 1-4).",
      "Asmaul Husna: 99 nama Allah yang indah — tiap nama menggambarkan sifat-Nya, misal Ar-Rahman (Maha Pengasih), Ar-Rahim (Maha Penyayang), Al-Malik (Maha Merajai).",
      "Mengenal Allah lewat dua jalan: wahyu (Al-Quran dan hadits) dan tadabbur ciptaan (langit, bumi, diri sendiri).",
      "Allah Maha Mengetahui, Maha Mendengar, Maha Melihat — tidak ada yang luput dari-Nya.",
      "Syirik (menyekutukan Allah) adalah dosa terbesar; tauhid adalah fondasi seluruh agama.",
      "Mengenal Allah bukan hafalan nama saja — tiap nama mengajak bersikap: Ar-Razzaq mengajak tenang soal rezeki, Ar-Rahman mengajak bersyukur.",
    ],
    example: "Seorang teman berkata rezekinya seret padahal sudah bekerja keras. Nama Allah mana yang paling menenangkan untuk direnungkan?",
    exampleAnswer: "Ar-Razzaq (Maha Pemberi Rezeki) — rezeki sudah diatur Allah; usaha tetap wajib, tapi hati tenang karena hasilnya di tangan-Nya. Juga Ar-Rahman — nikmat yang sudah ada patut disyukuri.",
    sections: [
      {
        heading: "Allah Maha Esa",
        body: [
          "Pertanyaan paling mendasar dalam agama ini adalah siapa yang kita sembah, dan jawabannya ditegaskan dengan sangat ringkas dalam surah Al-Ikhlas. Allah itu Ahad, Maha Esa, satu-satunya Tuhan yang berhak disembah. Tidak ada tuhan selain Dia, dan tidak ada satu pun yang setara dengan-Nya. Surah ini hanya empat ayat, tetapi isinya menjadi fondasi seluruh ajaran Islam, sehingga wajar bila seorang pemula menghafalnya paling awal.",
          "Allah tidak beranak dan tidak diperanakkan. Kalimat ini menutup pintu bagi segala bentuk penyerupaan Allah dengan makhluk, sebab beranak dan diperanakkan adalah sifat makhluk yang butuh keturunan dan berasal dari sesuatu. Allah tidak butuh apa pun dan tidak berasal dari apa pun, sedangkan segala sesuatu selain Dia justru membutuhkan-Nya. Memahami hal ini membuat hati tidak lagi mencari sesembahan lain, baik itu benda, manusia, maupun kekuasaan.",
          "Kepercayaan kepada keesaan Allah ini disebut tauhid, dan ia menjadi fondasi seluruh agama. Seluruh ibadah, doa, dan harapan seorang muslim bermuara pada satu arah, yaitu Allah semata. Ketika tauhid kokoh, hidup menjadi sederhana dalam arti yang baik, karena kita tidak lagi bergantung pada banyak pihak yang tidak mampu memberi dan menolong, melainkan hanya pada satu Tuhan yang Maha Kuasa.",
        ],
      },
      {
        heading: "Asmaul Husna: Sembilan Puluh Sembilan Nama yang Indah",
        body: [
          "Allah memperkenalkan diri-Nya lewat nama-nama yang indah, yang dikenal dengan sebutan Asmaul Husna. Jumlahnya sembilan puluh sembilan, dan tiap nama menggambarkan satu sifat Allah yang sempurna. Ada Ar-Rahman yang berarti Maha Pengasih, ada Ar-Rahim yang berarti Maha Penyayang, ada Al-Malik yang berarti Maha Merajai, dan ada nama-nama lain yang masing-masing membuka satu sisi pengenalan tentang siapa Allah.",
          "Nama-nama ini bukan sekadar daftar untuk dihafal lalu selesai, melainkan pintu untuk memahami bagaimana Allah memperlakukan hamba-Nya. Ketika kita merenungkan Ar-Rahman, kita sadar bahwa kasih Allah meliputi segala sesuatu, bahkan sebelum kita meminta. Ketika kita merenungkan Al-Malik, kita sadar bahwa seluruh kerajaan langit dan bumi berada dalam genggaman-Nya, sehingga tidak ada yang terjadi di luar kendali-Nya.",
          "Menghafal Asmaul Husna adalah amalan yang baik, tetapi tujuan yang lebih dalam adalah merenungkannya dan menghidupkannya dalam sikap. Daftar lengkap sembilan puluh sembilan nama bisa dilihat di halaman Asmaul Husna pada web ini, lengkap dengan tulisan Arab, bacaan Latin, dan arti singkatnya, agar kita bisa mempelajarinya sedikit demi sedikit tanpa terburu-buru.",
        ],
      },
      {
        heading: "Dua Jalan Mengenal Allah",
        body: [
          "Ada dua jalan besar untuk mengenal Allah, dan keduanya saling melengkapi. Jalan pertama adalah wahyu, yaitu Al-Quran dan hadits, karena dari sanalah kita mengetahui nama dan sifat Allah secara pasti. Tanpa wahyu, manusia hanya bisa menebak-nebak tentang Tuhan, dan tebakan itu sering berujung pada penyembahan yang keliru. Wahyu menjaga pengenalan kita agar tetap lurus dan bersumber dari Allah sendiri.",
          "Jalan kedua adalah tadabbur, yaitu merenungkan ciptaan Allah. Langit yang terbentang tanpa tiang, bumi yang menumbuhkan makanan, pergantian siang dan malam, hingga tubuh kita sendiri yang bekerja dengan begitu rapi, semuanya adalah tanda-tanda yang mengajak hati untuk mengakui adanya Pencipta yang Maha Bijaksana. Orang yang mau berhenti sejenak dan memperhatikan ciptaannya akan menemukan jejak kebesaran Allah di mana-mana.",
          "Kedua jalan ini tidak bertentangan. Wahyu memberi tahu kita siapa Allah, dan ciptaan mengajak kita merasakan kebesaran-Nya secara langsung. Seorang muslim yang mempelajari Al-Quran sekaligus memperhatikan alam akan mendapati imannya tumbuh dari dua arah, dari ilmu yang benar dan dari hati yang tersentuh.",
        ],
      },
      {
        heading: "Allah Maha Mengetahui, Maha Mendengar, Maha Melihat",
        body: [
          "Di antara sifat Allah yang paling menenangkan sekaligus paling menggetarkan adalah bahwa Dia Maha Mengetahui, Maha Mendengar, dan Maha Melihat. Tidak ada satu pun yang luput dari-Nya, baik yang tampak maupun yang tersembunyi di dalam hati. Doa yang dibisikkan pelan di tengah malam didengar-Nya, air mata yang jatuh tanpa saksi dilihat-Nya, dan niat yang belum terucap pun diketahui-Nya.",
          "Kesadaran ini mengubah cara kita bersikap dalam kesendirian. Orang yang yakin bahwa Allah melihatnya tidak akan berani berbuat dosa hanya karena tidak ada manusia yang mengawasi, dan orang yang yakin bahwa Allah mendengarnya tidak akan merasa doanya sia-sia hanya karena belum terkabul. Kesadaran ini adalah penjaga akhlak yang paling kuat, karena ia bekerja bahkan ketika tidak ada siapa pun di sekitar kita.",
          "Di sisi lain, sifat ini juga menjadi sumber ketenangan bagi orang yang terzalimi atau tidak dipahami manusia. Ketika tidak ada yang membela dan tidak ada yang mendengar keluhan kita, Allah tetap mendengar dan melihat. Keadilan-Nya tidak pernah tidur, dan setiap kebaikan sekecil apa pun tercatat di sisi-Nya.",
        ],
      },
      {
        heading: "Syirik: Dosa Terbesar",
        body: [
          "Lawan dari tauhid adalah syirik, yaitu menyekutukan Allah dengan sesuatu yang lain, baik dengan menyembah selain-Nya, meminta pertolongan kepada selain-Nya dalam hal yang hanya Allah mampu melakukannya, maupun meyakini ada yang setara dengan-Nya. Syirik disebut sebagai dosa terbesar, karena ia merusak fondasi agama itu sendiri, dan amal sebanyak apa pun tidak ada artinya bila fondasinya runtuh.",
          "Syirik tidak selalu tampak terang-terangan seperti menyembah patung. Ia bisa menyelinap halus dalam hati, misalnya ketika seseorang menggantungkan harapan hidupnya sepenuhnya pada jimat, pada ramalan, atau pada manusia tertentu seolah-olah merekalah yang menentukan nasib. Karena itu seorang muslim perlu terus memeriksa hatinya, agar ibadah dan harapan hanya tertuju kepada Allah.",
          "Menjauhi syirik bukan berarti kita tidak boleh meminta tolong kepada manusia dalam hal-hal biasa, seperti meminta bantuan tetangga mengangkat barang atau berobat ke dokter. Yang dilarang adalah meyakini ada selain Allah yang memiliki kuasa mutlak atas rezeki, keselamatan, dan takdir. Selama hati kita sadar bahwa segala sebab hanyalah perantara dan Allah-lah yang menentukan hasilnya, tauhid kita tetap terjaga.",
        ],
      },
      {
        heading: "Mengenal Allah Mengubah Sikap",
        body: [
          "Mengenal Allah bukan sekadar hafalan nama, melainkan jalan untuk mengubah sikap. Tiap nama Allah mengajak kita bersikap dengan cara tertentu. Nama Ar-Razzaq, Maha Pemberi Rezeki, mengajak kita tenang soal rezeki, karena rezeki sudah diatur oleh Allah dan usaha kita hanyalah bagian dari ikhtiar. Orang yang meyakini hal ini tetap bekerja keras, tetapi hatinya tidak cemas berlebihan bila hasilnya belum sesuai harapan.",
          "Nama Ar-Rahman mengajak kita bersyukur, karena kasih Allah tercurah bahkan kepada orang yang belum meminta. Ketika kita sadar bahwa udara yang kita hirup, kesehatan yang kita nikmati, dan keluarga yang menemani kita adalah pemberian dari Ar-Rahman, hati menjadi lebih mudah berterima kasih daripada mengeluh. Syukur seperti ini bukan sekadar ucapan, melainkan sikap hidup.",
          "Begitu pula nama-nama yang lain, masing-masing mengajak pada sikap yang berbeda, ada yang mengajak rendah hati, ada yang mengajak pemaaf, ada yang mengajak berani karena yakin Allah Maha Menolong. Karena itu belajar mengenal Allah adalah belajar seumur hidup, dan setiap kali kita memahami satu nama lebih dalam, satu sisi kehidupan kita ikut berubah.",
        ],
      },
    ],
    sources: [
      "Al-Quran, QS Al-Ikhlas: 1-4",
      "Al-Quran dan hadits sebagai sumber pengenalan Allah",
      "Daftar Asmaul Husna pada web ini",
    ],
  },
  {
    slug: "rukun-iman",
    section: "akidah",
    sectionName: "Akidah",
    title: "Rukun Iman",
    short: "Enam fondasi iman: Allah, malaikat, kitab, rasul, hari akhir, qada dan qadar.",
    estimatedMinutes: 30,
    keyPoints: [
      "Rukun iman ada 6: iman kepada Allah, malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan qada serta qadar.",
      "Iman = membenarkan dalam hati, mengucapkan dengan lisan, dan mengamalkannya.",
      "Malaikat diciptakan dari cahaya, tidak makan minum, dan selalu taat — Jibril menyampaikan wahyu.",
      "Kitab Allah: Taurat, Zabur, Injil, dan Al-Quran sebagai penyempurna dan pedoman terakhir.",
      "Hari akhir: kehidupan dunia berakhir, ada hisab (perhitungan amal) dan balasan surga atau neraka.",
      "Qada dan qadar: segala sesuatu terjadi atas ketetapan Allah; manusia tetap wajib berusaha dan berdoa.",
      "Iman bisa naik dan turun — naik dengan ketaatan, turun dengan maksiat; dijaga dengan belajar dan amal.",
    ],
    example: "Kenapa iman disebut bisa naik dan turun? Beri satu contoh dari keseharian.",
    exampleAnswer: "Karena iman terikat amal: setelah shalat berjamaah dan membaca Quran hati terasa dekat dengan Allah (naik); setelah lalai dan maksiat hati terasa jauh (turun). Obatnya kembali belajar dan beramal.",
    sections: [
      {
        heading: "Apa Itu Iman",
        body: [
          "Iman sering diterjemahkan sebagai percaya, tetapi maknanya lebih dalam dari sekadar percaya di dalam hati. Iman adalah membenarkan dalam hati, mengucapkan dengan lisan, dan mengamalkannya dengan perbuatan. Tiga unsur ini tidak bisa dipisahkan, karena hati yang membenarkan tetapi lisan dan perbuatan tidak mengikuti adalah iman yang belum utuh, dan perbuatan tanpa keyakinan hati hanyalah gerakan tanpa ruh.",
          "Ada enam fondasi yang disebut rukun iman, yaitu iman kepada Allah, kepada malaikat-Nya, kepada kitab-kitab-Nya, kepada rasul-rasul-Nya, kepada hari akhir, dan kepada qada serta qadar. Keenamnya membentuk satu bangunan keyakinan yang utuh, dan seorang muslim diajak untuk memahami masing-masing dengan tenang, satu demi satu, tanpa perlu menghafal semuanya dalam sekali duduk.",
          "Rukun iman ini berbeda dengan rukun Islam. Rukun Islam berbicara tentang amal yang tampak, seperti shalat dan puasa, sedangkan rukun iman berbicara tentang keyakinan yang ada di dalam hati. Keduanya saling menguatkan, karena amal tanpa iman menjadi kosong, dan iman tanpa amal menjadi pengakuan yang tidak terbukti.",
        ],
      },
      {
        heading: "Iman kepada Allah dan Malaikat",
        body: [
          "Rukun pertama adalah iman kepada Allah, dan ini adalah fondasi dari lima rukun yang lain. Mengimani Allah berarti meyakini bahwa Dia ada, Maha Esa, dan hanya Dia yang berhak disembah, sebagaimana telah dibahas pada materi Mengenal Allah. Semua rukun iman yang lain berdiri di atas keyakinan ini, sehingga bila fondasinya goyah, seluruh bangunan ikut goyah.",
          "Rukun kedua adalah iman kepada malaikat, makhluk Allah yang diciptakan dari cahaya. Malaikat tidak makan dan tidak minum, tidak pernah membangkang, dan selalu taat melaksanakan perintah Allah. Di antara mereka ada Jibril yang bertugas menyampaikan wahyu kepada para rasul, dan ada pula malaikat lain yang bertugas menjaga manusia, mencatat amal, dan melaksanakan tugas-tugas yang Allah tetapkan.",
          "Kita tidak bisa melihat malaikat dengan mata biasa, tetapi iman kepada mereka mengajari kita bahwa dunia ini tidak hanya berisi apa yang terlihat. Ada makhluk Allah yang bekerja dalam diam, dan ada catatan amal yang tidak pernah berhenti ditulis. Kesadaran ini membuat seorang muslim lebih berhati-hati dalam bersikap, karena ia tahu bahwa setiap perbuatan, baik maupun buruk, sedang dicatat.",
        ],
      },
      {
        heading: "Iman kepada Kitab dan Rasul",
        body: [
          "Rukun ketiga adalah iman kepada kitab-kitab Allah. Allah menurunkan petunjuk kepada manusia melalui kitab-kitab-Nya, di antaranya Taurat, Zabur, Injil, dan Al-Quran sebagai penyempurna dan pedoman terakhir. Setiap kitab diturunkan sesuai dengan zamannya, dan Al-Quran adalah pedoman yang berlaku sampai akhir zaman, yang dijaga keasliannya oleh Allah sendiri.",
          "Rukun keempat adalah iman kepada rasul-rasul Allah, yaitu manusia pilihan yang diutus untuk menyampaikan wahyu kepada umatnya. Jumlah rasul sangat banyak, tetapi yang wajib kita ketahui namanya ada dua puluh lima, dari Nabi Adam sampai Nabi Muhammad. Mereka semua membawa ajaran yang sama pada pokoknya, yaitu menyembah Allah semata, meskipun syariatnya berbeda sesuai zamannya.",
          "Mengimani kitab dan rasul berarti kita tidak memilih-milih ajaran sesuai selera. Kita menerima Al-Quran sebagai pedoman dan Nabi Muhammad sebagai teladan terakhir, dan kita menghormati para nabi sebelumnya tanpa membeda-bedakan kedudukan mereka sebagai utusan Allah. Sikap ini menjaga hati dari fanatisme yang sempit dan dari keraguan terhadap wahyu.",
        ],
      },
      {
        heading: "Iman kepada Hari Akhir",
        body: [
          "Rukun kelima adalah iman kepada hari akhir, yaitu keyakinan bahwa kehidupan dunia akan berakhir dan seluruh manusia akan dibangkitkan untuk dihisab amalnya. Setelah mati ada alam kubur sebagai masa penantian, lalu datang hari kiamat, lalu hisab, dan akhirnya balasan berupa surga bagi yang beriman dan beramal saleh, serta neraka bagi yang ingkar dan bermaksiat.",
          "Iman kepada hari akhir mengubah cara seseorang memandang dunia. Dunia tidak lagi menjadi tujuan akhir, melainkan ladang tempat menanam amal. Orang yang meyakini adanya hisab akan berpikir dua kali sebelum berbuat zalim, karena ia tahu bahwa tidak ada perbuatan yang hilang, sekecil apa pun, dan semuanya akan dihitung seadil-adilnya.",
          "Keyakinan ini juga menjadi penghibur bagi orang yang sabar dalam kesulitan. Ketika kebaikan di dunia tidak dibalas dengan kebaikan, dan ketika kezaliman tampak menang untuk sementara, iman kepada hari akhir mengingatkan bahwa keadilan Allah tidak pernah tertunda selamanya. Balasan yang sesungguhnya menunggu di akhirat, dan itu cukup untuk membuat hati tetap tenang.",
        ],
      },
      {
        heading: "Iman kepada Qada dan Qadar",
        body: [
          "Rukun keenam adalah iman kepada qada dan qadar, yaitu keyakinan bahwa segala sesuatu terjadi atas ketetapan Allah. Tidak ada satu pun peristiwa yang luput dari ilmu dan kehendak-Nya, baik yang menyenangkan maupun yang menyedihkan. Keyakinan ini bukan alasan untuk pasrah tanpa usaha, melainkan justru sebaliknya, manusia tetap wajib berusaha dan berdoa, karena usaha dan doa itu sendiri adalah bagian dari ketetapan Allah.",
          "Qada dan qadar sering disalahpahami sebagai takdir yang membuat manusia tidak perlu berbuat apa-apa. Padahal Islam mengajarkan keseimbangan, yaitu kita berusaha sekuat tenaga dengan cara yang benar, lalu menyerahkan hasilnya kepada Allah. Bila hasilnya sesuai harapan, kita bersyukur, dan bila tidak, kita bersabar dan mencari hikmahnya, tanpa menyalahkan takdir sebagai alasan untuk berhenti berusaha.",
          "Dalam kehidupan sehari-hari, iman kepada qada dan qadar terasa manfaatnya saat rencana gagal atau musibah datang. Orang yang mengimani takdir tidak mudah hancur oleh kegagalan, karena ia yakin bahwa apa yang menimpanya tidak mungkin meleset, dan apa yang luput darinya memang bukan bagiannya. Hati yang seperti ini lebih tenang, lebih lapang, dan lebih siap untuk bangkit kembali.",
        ],
      },
      {
        heading: "Iman yang Naik dan Turun",
        body: [
          "Iman tidak selalu berada pada tingkat yang sama. Ia bisa naik dan bisa turun. Iman naik dengan ketaatan, seperti setelah shalat berjamaah, membaca Al-Quran, atau menolong orang lain, hati terasa dekat dengan Allah dan ringan berbuat baik. Sebaliknya iman turun dengan maksiat dan kelalaian, hati terasa jauh, berat beribadah, dan mudah tergoda melakukan hal yang dilarang.",
          "Naik turunnya iman adalah hal yang wajar dan dialami oleh setiap muslim, sehingga tidak perlu panik ketika merasa iman sedang melemah. Yang penting adalah menyadari kondisinya dan segera kembali, bukan membiarkannya terus menurun. Obatnya adalah kembali belajar dan beramal, meskipun dimulai dari hal kecil, seperti menjaga shalat tepat waktu atau membaca beberapa ayat Al-Quran setiap hari.",
          "Menjaga iman adalah pekerjaan seumur hidup, bukan tugas sekali selesai. Lingkungan yang baik, teman yang mengingatkan, dan kebiasaan ibadah yang terjaga akan membantu iman tetap stabil. Karena itu jangan menunggu iman terasa sempurna untuk mulai beramal, justru amal itulah yang membuat iman tumbuh sedikit demi sedikit.",
          "Selain belajar dan beramal, menjaga iman juga dilakukan dengan berdoa, memohon kepada Allah agar hati diteguhkan di atas agama-Nya. Doa adalah pengakuan bahwa iman bukan milik kita yang bisa dijaga sendiri, melainkan karunia Allah yang perlu dimohon terus-menerus. Orang yang berdoa agar imannya dijaga menunjukkan bahwa ia sadar akan kelemahannya, dan kesadaran itu sendiri adalah bagian dari iman yang sehat.",
        ],
      },
    ],
    sources: [
      "Al-Quran, QS Al-Ikhlas: 1-4",
      "Al-Quran dan hadits tentang rukun iman",
      "Materi Mengenal Allah dan Mengenal Akhirat pada web ini",
    ],
  },
  {
    slug: "rukun-islam",
    section: "akidah",
    sectionName: "Akidah",
    title: "Rukun Islam",
    short: "Lima pilar Islam: syahadat, shalat, zakat, puasa, dan haji.",
    estimatedMinutes: 30,
    keyPoints: [
      "Rukun Islam ada 5: syahadat, shalat, zakat, puasa Ramadan, dan haji bagi yang mampu.",
      "Syahadat: 'La ilaha illallah, Muhammadur rasulullah' — tidak ada tuhan selain Allah dan Muhammad utusan Allah.",
      "Shalat: ibadah wajib 5 waktu, tiang agama, pembeda muslim dengan yang bukan.",
      "Zakat: membersihkan harta dan menolong yang berhak menerima.",
      "Puasa Ramadan: menahan makan, minum, dan hawa nafsu dari fajar sampai maghrib selama sebulan.",
      "Haji: ke Baitullah di Makkah bagi yang mampu secara fisik dan harta.",
      "Kelima rukun ini fondasi — di atasnya dibangun akhlak dan muamalah sehari-hari.",
    ],
    example: "Seorang mualaf baru mengucap syahadat. Apa langkah berikutnya yang paling penting ia pelajari?",
    exampleAnswer: "Shalat — rukun kedua dan ibadah harian. Pelajari wudhu, niat, dan bacaan shalat langkah demi langkah, lalu zakat dan puasa menyusul.",
    sections: [
      {
        heading: "Lima Pilar yang Menopang Agama",
        body: [
          "Rukun Islam ada lima, yaitu syahadat, shalat, zakat, puasa Ramadan, dan haji bagi yang mampu. Kelimanya diibaratkan sebagai pilar-pilar yang menopang sebuah bangunan, dan bila satu pilar runtuh, bangunan itu menjadi tidak kokoh. Seorang muslim diajak untuk memahami kelima rukun ini bukan sebagai beban, melainkan sebagai fondasi yang membuat seluruh kehidupan beragamanya berdiri tegak.",
          "Urutan rukun ini pun bermakna. Syahadat menjadi pintu masuk, shalat menjadi ibadah harian yang menjaga hubungan dengan Allah, zakat dan puasa melatih kepedulian dan pengendalian diri sepanjang tahun, dan haji menjadi puncak ibadah bagi yang mampu. Masing-masing rukun memiliki waktunya sendiri, ada yang sekali seumur hidup, ada yang setahun sekali, dan ada yang lima kali sehari, sehingga agama ini hadir dalam setiap skala waktu kehidupan.",
          "Kelima rukun ini adalah fondasi, dan di atasnya dibangun akhlak dan muamalah sehari-hari, seperti jujur dalam berdagang, berbakti kepada orang tua, dan berbuat baik kepada tetangga. Seseorang yang menjaga rukunnya tetapi mengabaikan akhlaknya berarti baru membangun fondasi tanpa mendirikan bangunannya, dan sebaliknya akhlak tanpa fondasi rukun akan kehilangan arah.",
        ],
      },
      {
        heading: "Syahadat: Pintu Masuk Islam",
        body: [
          "Rukun pertama adalah syahadat, yaitu persaksian bahwa tidak ada tuhan selain Allah dan Muhammad adalah utusan Allah. Kalimatnya berbunyi la ilaha illallah, Muhammadur rasulullah, dan kalimat ini diucapkan dengan lisan sekaligus dibenarkan dalam hati. Dengan mengucapkan syahadat, seseorang memasuki Islam dan menjadi bagian dari umat muslim.",
          "Syahadat bukan sekadar ucapan seremonial, melainkan janji hidup. La ilaha illallah berarti kita menolak segala sesembahan selain Allah dan hanya mengarahkan ibadah kepada-Nya, sedangkan Muhammadur rasulullah berarti kita menerima Nabi Muhammad sebagai teladan dan pembawa ajaran yang harus diikuti. Dua kalimat ini menjadi kompas bagi seluruh keputusan seorang muslim setelahnya.",
          "Bagi seorang mualaf yang baru mengucap syahadat, langkah berikutnya yang paling penting adalah mempelajari shalat, karena shalat adalah ibadah harian yang akan ia kerjakan lima kali sehari. Pelajarilah wudhu, niat, dan bacaan shalat langkah demi langkah, tanpa perlu terburu-buru menguasai semuanya sekaligus, lalu zakat dan puasa akan menyusul seiring waktu.",
        ],
      },
      {
        heading: "Shalat: Tiang Agama",
        body: [
          "Rukun kedua adalah shalat, ibadah wajib lima waktu yang disebut sebagai tiang agama. Bila tiang ini roboh, seluruh bangunan agama ikut roboh, dan bila tiang ini tegak, seluruh bangunan menjadi kokoh. Shalat adalah ibadah yang pertama kali dihisab di hari akhir, dan ia menjadi pembeda antara seorang muslim dengan yang bukan.",
          "Shalat dikerjakan lima kali sehari, yaitu Subuh, Dzuhur, Ashar, Maghrib, dan Isya, dan tiap waktu memiliki jumlah rakaatnya masing-masing. Frekuensi ini bukan tanpa makna, karena shalat yang tersebar sepanjang hari menjaga hati agar tidak terlalu lama jauh dari Allah. Setiap kali kesibukan dunia mulai menyeret, datang waktu shalat yang mengajak kita berhenti sejenak dan kembali mengingat-Nya.",
          "Tata cara dan bacaan shalat dibahas secara rinci pada materi Shalat di bagian Ibadah, karena materi ini hanya memberikan gambaran besarnya. Yang penting dipahami di sini adalah bahwa shalat bukan sekadar gerakan dan bacaan, melainkan pertemuan seorang hamba dengan Tuhannya, dan pertemuan itu dijaga lima kali sehari agar hubungan tersebut tidak pernah putus terlalu lama.",
        ],
      },
      {
        heading: "Zakat dan Puasa: Membersihkan Harta dan Jiwa",
        body: [
          "Rukun ketiga adalah zakat, yaitu kewajiban mengeluarkan sebagian harta untuk membersihkannya dan menolong mereka yang berhak menerima. Zakat mengajarkan bahwa harta yang kita miliki tidak sepenuhnya milik kita, ada hak orang lain di dalamnya, dan dengan menunaikannya hati menjadi bersih dari sifat kikir serta hubungan dengan sesama menjadi lebih erat.",
          "Rukun keempat adalah puasa Ramadan, yaitu menahan makan, minum, dan hawa nafsu dari terbit fajar sampai terbenam matahari selama sebulan penuh. Puasa melatih takwa dan pengendalian diri, sekaligus menumbuhkan empati kepada orang yang lapar, karena kita merasakan sendiri bagaimana rasanya menahan lapar dan haus. Sebulan berpuasa setiap tahun menjadi latihan rohani yang teratur dan terjadwal.",
          "Zakat dan puasa saling melengkapi. Zakat membersihkan harta dan melatih kedermawanan, sedangkan puasa membersihkan jiwa dan melatih kesabaran. Keduanya sama-sama ibadah yang tidak hanya berdampak pada diri sendiri, tetapi juga pada masyarakat, karena zakat mengalirkan harta kepada yang membutuhkan dan puasa menumbuhkan kepekaan sosial.",
        ],
      },
      {
        heading: "Haji: Puncak Ibadah bagi yang Mampu",
        body: [
          "Rukun kelima adalah haji, yaitu ibadah ke Baitullah di Makkah bagi yang mampu secara fisik dan harta, yang dilakukan pada bulan Dzulhijjah. Haji hanya diwajibkan sekali seumur hidup bagi yang mampu, dan kewajiban ini mengandung keadilan, karena Allah tidak membebani seseorang di luar kemampuannya. Mereka yang belum mampu tidak berdosa, dan tetap bisa beribadah dengan cara lain, termasuk umrah bila ada kesempatan.",
          "Haji adalah perjalanan yang mempertemukan jutaan muslim dari seluruh dunia dalam satu pakaian yang sama, satu tujuan yang sama, dan satu seruan yang sama. Perbedaan suku, bahasa, dan kekayaan seolah hilang di sana, dan yang tersisa hanyalah hamba-hamba Allah yang sama-sama datang untuk memenuhi panggilan-Nya. Pengalaman ini menjadi pelajaran besar tentang persatuan dan kesetaraan di hadapan Allah.",
          "Rincian rukun haji, seperti ihram, wukuf di Arafah, tawaf, sai, dan tahalul, dibahas pada materi Zakat, Haji dan Umrah di bagian Ibadah. Yang penting dipahami di sini adalah kedudukan haji sebagai puncak dari kelima rukun, sebuah ibadah yang menutup rangkaian fondasi Islam bagi mereka yang Allah beri kemampuan untuk menunaikannya.",
        ],
      },
      {
        heading: "Fondasi untuk Kehidupan Sehari-hari",
        body: [
          "Kelima rukun Islam bukanlah tujuan akhir, melainkan fondasi tempat berdirinya seluruh kehidupan seorang muslim. Di atas fondasi inilah dibangun akhlak yang baik, muamalah yang jujur, dan hubungan yang sehat dengan keluarga serta masyarakat. Seseorang yang shalatnya terjaga tetapi menipu dalam berdagang berarti fondasinya ada tetapi bangunannya belum berdiri dengan benar.",
          "Sebaliknya, seseorang yang berakhlak baik tetapi mengabaikan rukunnya juga belum utuh, karena akhlak yang tidak berpijak pada ibadah akan mudah goyah ketika diuji. Islam menggabungkan keduanya, ibadah yang menegakkan hubungan dengan Allah dan akhlak yang menjaga hubungan dengan manusia, sehingga keduanya saling menguatkan dalam kehidupan sehari-hari.",
          "Bagi pemula, cara terbaik mempelajari rukun Islam adalah satu demi satu, dimulai dari syahadat, lalu shalat, lalu yang lain menyusul. Tidak perlu merasa terbebani harus menguasai semuanya dalam semalam, karena agama ini dibangun selangkah demi selangkah, dan setiap langkah yang diambil dengan ikhlas akan memudahkan langkah berikutnya.",
          "Syahadat juga hadir di dalam shalat setiap hari, karena bacaan tasyahud mengandung persaksian yang sama, sehingga seorang muslim mengucapkan kembali pintu masuk Islamnya di setiap shalat. Pengulangan ini bukan tanpa makna, karena ia mengingatkan kita setiap hari tentang janji yang pernah kita ucapkan, dan mengajak kita untuk memperbarui janji itu dalam hati, bukan sekadar mengucapkannya dengan lisan.",
        ],
      },
    ],
    sources: [
      "Al-Quran dan hadits tentang rukun Islam",
      "Materi Shalat dan Zakat, Haji dan Umrah pada web ini",
    ],
  },
  {
    slug: "mengenal-akhirat",
    section: "akidah",
    sectionName: "Akidah",
    title: "Mengenal Akhirat",
    short: "Kehidupan setelah kematian: alam kubur, hari kiamat, hisab, surga dan neraka.",
    estimatedMinutes: 30,
    keyPoints: [
      "Dunia adalah ladang akhirat: apa yang ditanam di dunia, dituai hasilnya setelah mati.",
      "Setelah mati ada alam kubur (barzakh) — penantian menuju hari kiamat.",
      "Hari kiamat: hari kebangkitan seluruh manusia untuk dihisab amalnya.",
      "Hisab: amal dihitung seadil-adilnya; kebaikan sekecil apa pun tidak hilang.",
      "Surga: balasan bagi yang beriman dan beramal saleh; neraka: balasan bagi yang ingkar dan bermaksiat.",
      "Mengingat akhirat membuat hidup terarah: tidak rakus dunia, tidak putus asa saat sulit.",
    ],
    example: "Bagaimana mengingat akhirat mengubah cara seseorang menghadapi kegagalan?",
    exampleAnswer: "Kegagalan dunia tidak lagi terasa final — ia jadi ujian dan ladang pahala bila dihadapi dengan sabar. Tujuan akhirnya bukan dunia, tapi ridha Allah.",
    sections: [
      {
        heading: "Dunia adalah Ladang",
        body: [
          "Ada peribahasa yang sering dikutip para ulama, yaitu dunia adalah ladang akhirat. Maksudnya, apa yang kita tanam di dunia inilah yang akan kita tuai hasilnya setelah mati. Orang yang menanam kebaikan akan memanen kebaikan, dan orang yang menanam keburukan akan memanen akibatnya. Perumpamaan ladang ini sangat membumi, karena setiap orang paham bahwa petani tidak bisa memanen apa yang tidak pernah ia tanam.",
          "Cara pandang ini mengubah cara seseorang memperlakukan waktunya. Waktu tidak lagi sekadar dihabiskan, melainkan ditanam. Satu jam yang dipakai untuk belajar, menolong orang lain, atau beribadah adalah benih yang suatu hari akan tumbuh menjadi pahala. Sebaliknya, waktu yang dihabiskan untuk maksiat adalah benih yang kelak akan berbuah penyesalan.",
          "Tentu saja ini bukan berarti dunia harus ditinggalkan sepenuhnya. Islam tidak mengajarkan untuk membenci dunia, melainkan untuk menempatkannya pada posisi yang benar, yaitu sebagai sarana, bukan tujuan. Bekerja, berkeluarga, dan menikmati nikmat Allah adalah hal yang baik, selama semuanya tidak membuat kita lupa bahwa ada kehidupan setelah dunia ini.",
        ],
      },
      {
        heading: "Alam Kubur: Masa Penantian",
        body: [
          "Setelah mati, manusia memasuki alam kubur, yang disebut juga alam barzakh, yaitu masa penantian menuju hari kiamat. Barzakh berarti pembatas, karena alam ini menjadi pembatas antara kehidupan dunia dan kehidupan akhirat. Di sana, seorang hamba menunggu datangnya hari kebangkitan, dan penantiannya itu sudah dipengaruhi oleh amal yang ia bawa dari dunia.",
          "Al-Quran dan hadits menggambarkan bahwa alam kubur bisa menjadi taman dari taman-taman surga bagi orang beriman, atau sebaliknya menjadi tempat yang sempit bagi mereka yang ingkar. Gambaran ini bukan untuk menakut-nakuti semata, melainkan untuk mengingatkan bahwa kematian bukanlah akhir dari segalanya, melainkan awal dari perjalanan yang lebih panjang.",
          "Karena itu, persiapan menghadapi alam kubur dimulai sejak di dunia, dengan amal saleh, doa, dan ilmu yang bermanfaat. Tidak ada bekal lain yang bisa dibawa, karena harta, jabatan, dan popularitas semuanya tertinggal di dunia. Yang menemani hanyalah amal, dan karena itulah amal menjadi harta yang paling berharga bagi seorang muslim.",
        ],
      },
      {
        heading: "Hari Kiamat dan Kebangkitan",
        body: [
          "Hari kiamat adalah hari kebangkitan seluruh manusia, dari yang pertama sampai yang terakhir, untuk menghadapi perhitungan amal. Pada hari itu, dunia yang kita kenal berakhir, dan manusia dibangkitkan dari kuburnya dalam keadaan yang sama, tanpa membawa apa pun kecuali amalnya. Tidak ada lagi perbedaan kaya dan miskin, kuat dan lemah, karena semua berdiri sama di hadapan Allah.",
          "Kapan tepatnya hari kiamat terjadi adalah ilmu yang hanya Allah yang tahu, dan tidak ada satu pun makhluk yang diberi tahu waktunya. Yang diajarkan kepada kita bukanlah menebak tanggalnya, melainkan mempersiapkan diri menghadapinya, karena ia pasti datang dan tidak ada yang bisa menghindar. Orang yang sibuk menebak-nebak waktunya justru sering lalai mempersiapkan bekalnya.",
          "Gambaran hari kiamat dalam Al-Quran memang menggetarkan, tetapi tujuannya bukan membuat manusia putus asa, melainkan membuatnya sadar dan kembali. Rasa takut yang sehat adalah rasa takut yang mendorong pada amal, bukan rasa takut yang melumpuhkan. Setelah rasa takut itu muncul, langkah berikutnya adalah memperbaiki diri selagi masih ada waktu.",
        ],
      },
      {
        heading: "Hisab: Perhitungan yang Adil",
        body: [
          "Setelah kebangkitan, datanglah hisab, yaitu perhitungan amal yang dilakukan seadil-adilnya. Setiap perbuatan, baik besar maupun kecil, akan dihitung, dan kebaikan sekecil apa pun tidak akan hilang begitu saja. Keadilan Allah pada hari itu sempurna, karena tidak ada satu pun yang terzalimi dan tidak ada satu pun amal yang terlewat.",
          "Hisab ini juga mengingatkan kita bahwa penilaian Allah berbeda dengan penilaian manusia. Manusia hanya melihat yang tampak, sedangkan Allah menilai niat yang tersembunyi. Amal yang tampak kecil di mata manusia bisa menjadi besar di sisi Allah bila dikerjakan dengan ikhlas, dan amal yang tampak besar bisa menjadi kecil bila dikerjakan karena riya atau ingin dipuji.",
          "Kesadaran akan hisab membuat seorang muslim lebih jujur dalam beramal. Ia tidak lagi sibuk mencari pengakuan manusia, karena ia tahu bahwa pengakuan yang sesungguhnya datang dari Allah. Ia juga lebih berhati-hati dalam berbuat dosa, karena ia tahu bahwa tidak ada yang bisa disembunyikan pada hari perhitungan itu.",
        ],
      },
      {
        heading: "Surga dan Neraka",
        body: [
          "Ujung dari perjalanan akhirat adalah balasan, yaitu surga bagi yang beriman dan beramal saleh, dan neraka bagi yang ingkar dan bermaksiat. Surga adalah tempat kenikmatan yang tidak pernah terbayangkan, yang Allah sediakan bagi hamba-hamba-Nya yang taat, sedangkan neraka adalah tempat azab bagi mereka yang menolak kebenaran dan terus menerus berbuat maksiat tanpa bertaubat.",
          "Surga dan neraka bukan sekadar ancaman dan janji yang jauh, melainkan tujuan yang seharusnya memengaruhi keputusan kita setiap hari. Setiap kali kita memilih untuk berbuat baik meskipun sulit, kita sedang berjalan menuju surga, dan setiap kali kita memilih maksiat meskipun terasa nikmat sesaat, kita sedang menjauhi jalan itu. Pilihan-pilihan kecil inilah yang menentukan arah perjalanan kita.",
          "Yang penting diingat adalah bahwa pintu taubat selalu terbuka selama nyawa masih di kandung badan. Sebesar apa pun dosa yang pernah dilakukan, Allah Maha Pengampun bagi siapa yang kembali dengan sungguh-sungguh. Karena itu, mengenal akhirat bukan untuk membuat kita putus asa, melainkan untuk membuat kita segera kembali setiap kali terjatuh.",
        ],
      },
      {
        heading: "Mengingat Akhirat Membuat Hidup Terarah",
        body: [
          "Mengingat akhirat membuat hidup terarah, karena ia memberi ukuran yang benar untuk menilai keberhasilan. Orang yang mengingat akhirat tidak rakus terhadap dunia, karena ia tahu bahwa dunia hanyalah ladang, bukan tujuan akhir. Ia bekerja dan berusaha dengan sungguh-sungguh, tetapi tidak menghalalkan segala cara demi harta, karena ia tahu bahwa harta yang diperoleh dengan cara yang haram akan menjadi beban di akhirat.",
          "Di sisi lain, mengingat akhirat juga membuat seseorang tidak putus asa saat sulit. Kegagalan dunia tidak lagi terasa final, karena ia menjadi ujian dan ladang pahala bila dihadapi dengan sabar. Orang yang kehilangan pekerjaan, gagal dalam usaha, atau ditimpa musibah, masih bisa tenang karena ia tahu bahwa tujuan akhirnya bukan dunia, melainkan ridha Allah.",
          "Inilah keseimbangan yang diajarkan Islam, yaitu bekerja keras di dunia tanpa diperbudak olehnya, dan berharap pada akhirat tanpa meninggalkan tanggung jawab di dunia. Orang yang hidup dengan keseimbangan ini akan lebih tenang, lebih lapang, dan lebih siap menghadapi apa pun yang datang, karena ia tahu ke mana arah hidupnya.",
          "Ada pula amal yang pahalanya terus mengalir setelah seseorang wafat, sebagaimana disebutkan dalam sebuah hadits, yaitu sedekah jariyah, ilmu yang bermanfaat, dan anak saleh yang mendoakannya. Ketiga amal ini adalah investasi akhirat yang tidak berhenti ketika nyawa berhenti, dan karena itu, seorang muslim yang mengingat akhirat akan berusaha menanam ketiganya selagi masih hidup, agar panennya terus berlanjut meskipun ia sudah tiada.",
        ],
      },
    ],
    sources: [
      "Al-Quran dan hadits tentang hari akhir, hisab, surga, dan neraka",
      "Materi Rukun Iman pada web ini",
    ],
  },
  {
    slug: "thaharah-wudhu",
    section: "ibadah",
    sectionName: "Ibadah",
    title: "Thaharah & Wudhu",
    short: "Bersuci sebelum ibadah: hadats, tata cara wudhu, dan yang membatalkannya.",
    estimatedMinutes: 30,
    keyPoints: [
      "Thaharah artinya bersuci — syarat sah shalat dan ibadah lain.",
      "Hadats kecil (misal buang air) disucikan dengan wudhu; hadats besar (misal junub, haid) dengan mandi.",
      "Tata cara wudhu: niat, basuh muka, basuh tangan sampai siku, usap kepala, basuh kaki sampai mata kaki, tertib berurutan.",
      "Sunnah wudhu: membaca basmalah, berkumur, membasuh tiga kali, mendahulukan kanan.",
      "Yang membatalkan wudhu: keluarnya sesuatu dari dua jalan, tidur nyenyak, hilang akal, dan (menurut madzhab Syafi'i yang umum di Indonesia) bersentuhan kulit laki-laki dan perempuan bukan mahram.",
      "Air untuk bersuci harus suci dan mensucikan — air mutlak seperti air hujan, sumur, dan sungai.",
      "Tayamum (bersuci dengan debu suci) pengganti wudhu bila tidak ada air atau sakit yang menghalangi air.",
    ],
    example: "Seseorang berwudhu lalu tertidur pulas sebelum shalat. Apa yang harus ia lakukan?",
    exampleAnswer: "Berwudhu lagi — tidur nyenyak membatalkan wudhu. Wudhunya tidak sah dipakai shalat.",
    sections: [
      {
        heading: "Apa Itu Thaharah",
        body: [
          "Thaharah artinya bersuci, dan ia adalah syarat sah shalat serta ibadah-ibadah lain. Seorang muslim tidak bisa menghadap Allah dalam shalat bila dirinya belum suci, karena kesucian adalah bagian dari penghormatan kepada ibadah itu sendiri. Bersuci bukan sekadar soal kebersihan fisik, melainkan juga kesiapan hati untuk beribadah dengan tenang dan khusyuk.",
          "Ada dua hal yang membuat seseorang tidak suci, yaitu hadats dan najis. Hadats adalah keadaan tidak suci yang melekat pada diri seseorang, misalnya setelah buang air atau setelah haid, sedangkan najis adalah kotoran yang menempel pada badan, pakaian, atau tempat. Keduanya harus dibersihkan sebelum shalat, tetapi caranya berbeda, dan materi ini akan membahas hadats terlebih dahulu.",
          "Kebiasaan bersuci juga membentuk karakter. Orang yang terbiasa menjaga wudhu akan terbiasa menjaga kebersihan dirinya sepanjang hari, dan orang yang menjaga kebersihan dirinya akan lebih mudah menjaga kebersihan hatinya. Thaharah adalah pintu masuk menuju ibadah, dan pintu itu dijaga setiap hari, lima kali sehari, bersamaan dengan datangnya waktu shalat.",
          "Selain hadats, thaharah juga mencakup membersihkan najis yang menempel pada badan, pakaian, atau tempat shalat. Najis dibersihkan dengan air sampai hilang warna, bau, dan rasanya, dan bila najis itu berasal dari anjing atau babi, cara membersihkannya memiliki ketentuan khusus yang bisa dipelajari dari kitab fikih atau ustadz tepercaya. Membersihkan najis adalah bagian dari thaharah yang sama pentingnya dengan berwudhu, karena shalat tidak sah bila badan atau pakaian masih terkena najis.",
        ],
      },
      {
        heading: "Hadats Kecil dan Hadats Besar",
        body: [
          "Hadats terbagi menjadi dua, yaitu hadats kecil dan hadats besar. Hadats kecil terjadi karena hal-hal yang biasa, misalnya buang air kecil atau buang air besar, dan ia disucikan dengan wudhu. Hadats besar terjadi karena hal-hal yang lebih besar, misalnya junub dan haid, dan ia disucikan dengan mandi wajib, yang juga dikenal dengan sebutan mandi janabah atau mandi besar.",
          "Perbedaan ini penting dipahami agar kita tidak keliru dalam bersuci. Seseorang yang berhadas besar tidak cukup hanya berwudhu, ia harus mandi terlebih dahulu, barulah setelah itu ia bisa berwudhu dan shalat. Sebaliknya, seseorang yang hanya berhadas kecil cukup berwudhu, dan tidak perlu mandi. Memahami perbedaan ini membuat ibadah kita sah dan tidak diragukan.",
          "Dalam kehidupan sehari-hari, hadats kecil jauh lebih sering terjadi, karena buang air adalah kebutuhan yang berulang setiap hari. Karena itu wudhu menjadi amalan yang paling sering dikerjakan seorang muslim, dan menguasainya dengan benar adalah langkah pertama yang sangat penting bagi siapa pun yang baru belajar shalat.",
        ],
      },
      {
        heading: "Tata Cara Wudhu",
        body: [
          "Tata cara wudhu dimulai dengan niat di dalam hati, yaitu keinginan untuk berwudhu karena Allah. Setelah itu, basuhlah muka, lalu basuh kedua tangan sampai siku, lalu usap kepala, lalu basuh kedua kaki sampai mata kaki. Keempat anggota ini harus dibasuh secara tertib dan berurutan, karena urutan termasuk bagian dari tata cara wudhu yang benar.",
          "Membasuh muka berarti membasuh seluruh wajah, dari tempat tumbuhnya rambut sampai ke dagu, dan dari telinga kanan sampai telinga kiri. Membasuh tangan sampai siku berarti air harus mencapai siku, bukan hanya sampai pergelangan. Mengusap kepala cukup dengan mengusap sebagian kepala, dan membasuh kaki sampai mata kaki berarti air harus mencapai mata kaki, termasuk sela-sela jari kaki.",
          "Ketertiban dalam wudhu bukan sekadar aturan formal, melainkan latihan kedisiplinan dalam beribadah. Orang yang terbiasa tertib dalam wudhu akan lebih mudah tertib dalam shalat dan dalam urusan lainnya. Karena itu, pelajari urutannya dengan tenang, praktikkan perlahan, dan jangan terburu-buru, karena wudhu yang benar adalah fondasi shalat yang benar.",
        ],
      },
      {
        heading: "Sunnah-sunnah Wudhu",
        body: [
          "Di samping tata cara wajib, ada sunnah-sunnah wudhu yang bila dikerjakan akan menambah kesempurnaan wudhu kita. Di antaranya adalah membaca basmalah sebelum memulai, berkumur-kumur, membasuh tiap anggota sebanyak tiga kali, dan mendahulukan anggota yang kanan sebelum yang kiri. Sunnah-sunnah ini diajarkan Nabi Muhammad dalam praktik wudhunya sehari-hari.",
          "Membaca basmalah di awal wudhu mengingatkan kita bahwa bersuci adalah ibadah, bukan sekadar mencuci muka. Berkumur membersihkan mulut, tempat keluarnya ucapan, dan membasuh tiga kali memastikan air benar-benar merata ke seluruh anggota. Mendahulukan yang kanan adalah kebiasaan Nabi dalam banyak hal, termasuk dalam berwudhu, dan mengikuti kebiasaan beliau adalah bagian dari meneladani sunnah.",
          "Sunnah wudhu tidak wajib, sehingga wudhu tetap sah bila sunnah-sunnah ini terlewat, tetapi mengerjakannya membuat wudhu kita lebih sempurna dan lebih berpahala. Bagi pemula, tidak perlu memaksakan diri menguasai semua sunnah sekaligus. Kuasai dulu tata cara wajibnya, lalu tambahkan sunnah satu demi satu sampai menjadi kebiasaan.",
        ],
      },
      {
        heading: "Yang Membatalkan Wudhu",
        body: [
          "Wudhu bisa batal, dan bila batal, seseorang harus berwudhu lagi sebelum shalat. Yang membatalkan wudhu antara lain keluarnya sesuatu dari dua jalan, yaitu depan dan belakang, tidur nyenyak, dan hilang akal, misalnya karena pingsan atau mabuk. Seseorang yang berwudhu lalu tertidur pulas sebelum shalat, misalnya, harus berwudhu lagi, karena wudhunya sudah batal dan tidak sah dipakai shalat.",
          "Menurut madzhab Syafi'i yang umum di Indonesia, bersentuhan kulit antara laki-laki dan perempuan yang bukan mahram juga membatalkan wudhu. Madzhab adalah aliran pemahaman fikih, dan di Indonesia mayoritas muslim mengikuti madzhab Syafi'i dalam masalah ibadah. Perbedaan pendapat antar madzhab dalam hal ini adalah hal yang wajar, dan yang penting adalah kita mengikuti satu pemahaman dengan konsisten dan tidak bingung sendiri.",
          "Mengetahui hal-hal yang membatalkan wudhu membantu kita menjaga wudhu sepanjang hari. Banyak muslim yang membiasakan diri tetap dalam keadaan berwudhu, dan mereka berwudhu lagi setiap kali wudhunya batal, agar selalu siap shalat kapan pun waktunya tiba. Kebiasaan ini adalah latihan kesucian yang sederhana tetapi sangat berpengaruh pada kehidupan sehari-hari.",
        ],
      },
      {
        heading: "Air untuk Bersuci dan Tayamum",
        body: [
          "Air yang digunakan untuk bersuci harus suci dan mensucikan, yaitu air mutlak yang belum tercampur oleh sesuatu yang mengubah sifatnya. Contoh air mutlak adalah air hujan, air sumur, air sungai, dan air laut. Air yang sudah tercampur sabun atau bahan lain sehingga berubah warna, bau, dan rasanya tidak lagi bisa digunakan untuk bersuci, meskipun tetap bisa digunakan untuk keperluan lain.",
          "Bila tidak ada air, atau bila ada halangan yang membuat seseorang tidak boleh terkena air, misalnya sakit yang bisa bertambah parah bila terkena air, maka Islam memberikan keringanan berupa tayamum. Tayamum adalah bersuci dengan debu yang suci, yaitu dengan mengusap muka dan kedua tangan dengan debu, dan ia menjadi pengganti wudhu atau mandi dalam keadaan darurat.",
          "Keringanan ini menunjukkan bahwa Islam adalah agama yang memudahkan, bukan menyulitkan. Syarat bersuci tetap ada, tetapi bila syarat itu tidak bisa dipenuhi karena keadaan, Allah memberikan jalan pengganti yang mudah. Seorang muslim yang memahami hal ini tidak akan merasa ibadah sebagai beban, melainkan sebagai ajaran yang memperhatikan kondisi manusia.",
        ],
      },
    ],
    sources: [
      "Al-Quran dan hadits tentang wudhu dan bersuci",
      "Fikih madzhab Syafi'i yang umum di Indonesia",
    ],
  },
  {
    slug: "shalat",
    section: "ibadah",
    sectionName: "Ibadah",
    title: "Shalat: Tata Cara & Bacaan",
    short: "Shalat lima waktu: syarat, rukun, bacaan pokok, dan rakaatnya.",
    estimatedMinutes: 35,
    keyPoints: [
      "Shalat wajib 5 waktu: Subuh 2 rakaat, Dzuhur 4, Ashar 4, Maghrib 3, Isya 4.",
      "Syarat sah shalat: suci dari hadats dan najis, menutup aurat, menghadap kiblat, sudah masuk waktu, dan niat.",
      "Rukun shalat: takbiratul ihram, berdiri (bagi yang mampu), membaca Al-Fatihah, ruku, i'tidal, sujud, duduk di antara dua sujud, duduk tasyahud akhir, salam.",
      "Bacaan pokok: Al-Fatihah di tiap rakaat, lalu surah pendek; doa ruku 'Subhana rabbiyal 'azhim', doa sujud 'Subhana rabbiyal a'la'.",
      "Tuma'ninah (tenang) di tiap gerakan adalah rukun — shalat yang terburu-buru tidak sah.",
      "Shalat berjamaah di masjid lebih utama 27 derajat daripada sendiri (HR. Bukhari dan Muslim).",
      "Yang tertinggal (masbuk) mengikuti imam lalu menyempurnakan rakaat yang kurang setelah imam salam.",
    ],
    example: "Seseorang baru masuk masjid saat imam sudah ruku di rakaat kedua shalat Dzuhur. Berapa rakaat yang harus ia sempurnakan setelah salam?",
    exampleAnswer: "Ia tertinggal 1 rakaat (rakaat pertama) — setelah imam salam, ia berdiri dan menambah 1 rakaat. Rakaat yang didapat bersama imam dihitung bila ia sempat ruku bersama imam.",
    sections: [
      {
        heading: "Shalat Lima Waktu",
        body: [
          "Shalat wajib dikerjakan lima waktu dalam sehari, yaitu Subuh dua rakaat, Dzuhur empat rakaat, Ashar empat rakaat, Maghrib tiga rakaat, dan Isya empat rakaat. Kelima waktu ini tersebar sepanjang hari, dari sebelum terbit matahari sampai malam hari, sehingga seorang muslim tidak pernah terlalu lama jauh dari Allah. Setiap kali kesibukan mulai menyeret, datang waktu shalat yang mengajak berhenti dan kembali.",
          "Jumlah rakaat tiap waktu sudah ditetapkan dan tidak boleh diubah-ubah. Subuh yang dua rakaat tidak boleh ditambah menjadi empat, dan Maghrib yang tiga rakaat tidak boleh dikurangi menjadi dua. Ketetapan ini mengajarkan ketaatan, karena kita mengerjakan shalat sebagaimana yang diajarkan, bukan sebagaimana yang kita rasa lebih nyaman.",
          "Bagi pemula, menghafal jumlah rakaat ini adalah langkah awal yang penting. Setelah hafal, langkah berikutnya adalah mempelajari bacaan dan gerakannya satu demi satu. Tidak perlu menguasai semuanya dalam sehari, karena shalat adalah amalan harian, dan setiap hari kita punya kesempatan untuk memperbaikinya sedikit demi sedikit.",
        ],
      },
      {
        heading: "Syarat Sah Shalat",
        body: [
          "Sebelum shalat dimulai, ada syarat-syarat yang harus dipenuhi agar shalat menjadi sah. Pertama, suci dari hadats dan najis, yaitu sudah berwudhu dan badan, pakaian, serta tempat shalat bersih dari najis. Kedua, menutup aurat, yaitu bagian tubuh yang wajib ditutup saat shalat. Ketiga, menghadap kiblat, yaitu arah Ka'bah di Makkah.",
          "Syarat berikutnya adalah sudah masuk waktu shalat. Shalat Dzuhur tidak sah dikerjakan sebelum waktunya masuk, dan shalat Subuh tidak sah dikerjakan setelah matahari terbit, karena waktunya sudah habis. Karena itu, mengetahui jadwal shalat di daerah masing-masing adalah hal yang penting, dan kini jadwal itu mudah dilihat di masjid, kalender, atau aplikasi.",
          "Syarat terakhir adalah niat, yaitu keinginan dalam hati untuk mengerjakan shalat tertentu karena Allah. Niat dibahas lebih rinci pada materi Niat Shalat, tetapi yang penting dipahami di sini adalah bahwa shalat tanpa niat tidak sah, karena niatlah yang membedakan gerakan shalat dengan gerakan olahraga biasa. Niat ada di hati, dan ia menyertai takbiratul ihram di awal shalat.",
        ],
      },
      {
        heading: "Rukun-rukun Shalat",
        body: [
          "Rukun shalat adalah bagian-bagian yang wajib ada dalam shalat, dan bila satu rukun tertinggal, shalat menjadi tidak sah. Rukun-rukun itu adalah takbiratul ihram, berdiri bagi yang mampu, membaca Al-Fatihah, ruku, itidal, sujud, duduk di antara dua sujud, duduk tasyahud akhir, dan salam. Urutannya pun harus dijaga, karena shalat adalah ibadah yang tertib.",
          "Takbiratul ihram adalah ucapan Allahu Akbar di awal shalat, yang menandai dimulainya ibadah dan diharamkannya hal-hal yang membatalkan shalat, seperti berbicara dan makan. Setelah itu, seseorang berdiri dan membaca Al-Fatihah, lalu ruku dengan tenang, bangkit ke itidal, sujud, duduk di antara dua sujud, dan begitu seterusnya sampai duduk tasyahud akhir dan mengucapkan salam ke kanan dan ke kiri.",
          "Bagi yang tidak mampu berdiri karena sakit atau uzur, shalat boleh dikerjakan dengan duduk atau berbaring, sesuai kemampuannya. Keringanan ini menunjukkan bahwa Islam tidak membebani seseorang di luar kemampuannya, dan yang dinilai adalah kesungguhan dalam beribadah sesuai keadaan masing-masing.",
        ],
      },
      {
        heading: "Bacaan Pokok dalam Shalat",
        body: [
          "Bacaan yang paling pokok dalam shalat adalah Al-Fatihah, yang wajib dibaca di tiap rakaat. Surah ini terdiri dari tujuh ayat, dan ia menjadi pembuka setiap rakaat shalat, baik shalat wajib maupun shalat sunnah. Setelah Al-Fatihah, disunnahkan membaca surah pendek atau sebagian ayat Al-Quran, terutama pada dua rakaat pertama.",
          "Dalam ruku, bacaan yang dibaca adalah Subhana rabbiyal azhim, yang berarti Maha Suci Tuhanku yang Maha Agung, dan dalam sujud, bacaannya adalah Subhana rabbiyal ala, yang berarti Maha Suci Tuhanku yang Maha Tinggi. Kedua bacaan ini dibaca dengan tenang, dan jumlahnya minimal satu kali, meskipun disunnahkan membacanya tiga kali.",
          "Bacaan-bacaan shalat yang lain, seperti doa itidal, doa duduk di antara dua sujud, dan bacaan tasyahud, bisa dipelajari bertahap setelah bacaan pokok dikuasai. Bagi pemula, menghafal Al-Fatihah dan doa ruku serta sujud adalah prioritas, karena ketiganya adalah bacaan yang akan dipakai di setiap rakaat shalat.",
        ],
      },
      {
        heading: "Tumaninah: Tenang dalam Setiap Gerakan",
        body: [
          "Tumaninah artinya tenang, yaitu berhenti sejenak dan diam dalam tiap gerakan shalat sebelum berpindah ke gerakan berikutnya. Tumaninah adalah rukun shalat, sehingga shalat yang dikerjakan terburu-buru, tanpa berhenti tenang di tiap gerakan, menjadi tidak sah. Shalat bukan lomba kecepatan, melainkan ibadah yang menuntut ketenangan.",
          "Dalam praktiknya, tumaninah berarti ketika ruku, kita berhenti dan diam sejenak setelah membaca doa ruku, lalu bangkit ke itidal dengan tenang, lalu sujud dengan tenang, dan begitu seterusnya. Gerakan yang tergesa-gesa, seperti sujud yang belum sempat diam sudah bangkit lagi, adalah tanda shalat yang kehilangan tumaninah, dan shalat seperti itu perlu diperbaiki.",
          "Tumaninah juga berpengaruh pada kekhusyukan. Orang yang shalat dengan tenang akan lebih mudah merasakan kehadiran Allah dalam shalatnya, sedangkan orang yang shalat terburu-buru sering kali selesai shalat tanpa mengingat apa yang ia baca. Karena itu, memperlambat shalat dan menjaga tumaninah adalah salah satu perbaikan paling sederhana sekaligus paling berdampak.",
          "Khusyuk sendiri adalah tujuan yang lebih dalam dari tumaninah, yaitu hati yang hadir dan memahami apa yang dibaca dalam shalat. Cara melatihnya adalah dengan mempelajari arti bacaan shalat, sedikit demi sedikit, agar ketika membaca Al-Fatihah atau doa ruku, hati ikut memahami maknanya. Shalat yang dibaca dengan pemahaman akan terasa berbeda dengan shalat yang dibaca tanpa pemahaman, meskipun gerakannya sama persis.",
        ],
      },
      {
        heading: "Shalat Berjamaah dan Masbuk",
        body: [
          "Shalat berjamaah di masjid lebih utama dua puluh tujuh derajat daripada shalat sendiri, sebagaimana disebutkan dalam hadits riwayat Bukhari dan Muslim. Keutamaan ini bukan hanya soal pahala, melainkan juga soal kebersamaan, karena shalat berjamaah mempertemukan muslim dari berbagai latar belakang dalam satu saf, satu imam, dan satu tujuan, sehingga ukhuwah terjaga setiap hari.",
          "Dalam shalat berjamaah, makmum mengikuti gerakan imam dan tidak boleh mendahului atau terlambat terlalu jauh. Imam adalah pemimpin shalat, dan makmum mengikuti dengan tertib. Bila imam salah, makmum mengingatkan dengan cara yang diajarkan, dan bila imam lupa, makmum mengikuti sujud sahwi bersamanya.",
          "Seseorang yang tertinggal dari imam disebut masbuk, dan ia harus mengikuti imam terlebih dahulu, lalu menyempurnakan rakaat yang kurang setelah imam mengucapkan salam. Misalnya, seseorang baru masuk masjid saat imam sudah ruku di rakaat kedua shalat Dzuhur, maka ia tertinggal satu rakaat, yaitu rakaat pertama, dan setelah imam salam, ia berdiri dan menambah satu rakaat. Rakaat yang didapat bersama imam dihitung bila ia sempat ruku bersama imam.",
          "Bila seseorang datang dan mendapati imam sudah selesai shalat, ia tetap bisa shalat sendiri, dan shalatnya tetap sah, meskipun ia kehilangan keutamaan berjamaah. Karena itu, jangan sampai keterlambatan membuat seseorang meninggalkan shalat sama sekali, karena shalat sendiri jauh lebih baik daripada tidak shalat, dan setiap shalat yang dikerjakan, berjamaah maupun sendiri, adalah langkah menjaga hubungan dengan Allah.",
        ],
      },
    ],
    sources: [
      "HR. Bukhari dan Muslim tentang keutamaan shalat berjamaah",
      "Al-Quran dan hadits tentang tata cara shalat",
      "Materi Thaharah dan Wudhu serta Niat Shalat pada web ini",
    ],
  },
  {
    slug: "niat-shalat",
    section: "ibadah",
    sectionName: "Ibadah",
    title: "Niat Shalat Wajib & Sunnah",
    short: "Niat dalam hati, lafaz sebagai bantuan belajar — bukan bacaan yang wajib dilafalkan.",
    estimatedMinutes: 25,
    keyPoints: [
      "Niat adalah kehendak dalam hati untuk mengerjakan shalat tertentu karena Allah.",
      "Lafaz niat berikut merupakan contoh bantuan belajar yang lazim dalam tradisi Syafi'i, bukan bacaan yang wajib dilafalkan atau lafaz khusus dari hadis Nabi.",
      "Jika dilafalkan, cukup sekali sebelum takbiratul ihram; niat dalam hati menyertai takbir.",
      "Tidak perlu diulang karena ragu — keraguan setelah niat tidak membatalkan shalat.",
      "Contoh lafaz Subuh: 'Ushalli fardhash-shubhi rak'ataini mustaqbilal qiblati ada'an lillahi ta'ala' (Aku niat shalat fardhu Subuh dua rakaat menghadap kiblat karena Allah).",
      "Niat shalat sunnah menyebut jenisnya, misal shalat sunnah rawatib atau tahajud.",
    ],
    example: "Seseorang ragu apakah niatnya sudah benar setelah takbir. Apa yang ia lakukan?",
    exampleAnswer: "Lanjutkan shalat — niat adanya di hati saat takbir, keraguan setelahnya tidak membatalkan. Tidak perlu mengulang dari awal.",
    sections: [
      {
        heading: "Niat Ada di Hati",
        body: [
          "Niat adalah kehendak dalam hati untuk mengerjakan shalat tertentu karena Allah. Ia bukan ucapan yang harus dilafalkan dengan suara, melainkan kesadaran di dalam hati tentang shalat apa yang sedang dikerjakan dan untuk siapa. Ketika seseorang berdiri menghadap kiblat dan sadar bahwa ia akan mengerjakan shalat Subuh karena Allah, maka niat itu sudah ada.",
          "Pemahaman ini penting, karena banyak pemula yang mengira shalatnya tidak sah bila tidak mengucapkan lafaz niat dengan sempurna. Padahal yang wajib adalah niat dalam hati, dan niat itu hadir secara alami ketika seseorang bersiap mengerjakan shalat. Seseorang yang berjalan ke masjid untuk shalat Dzuhur, misalnya, sudah membawa niat shalat Dzuhur di dalam hatinya.",
          "Niat juga yang membedakan satu shalat dengan shalat yang lain. Shalat Subuh dan shalat Dzuhur gerakannya sama, tetapi niatnya berbeda, dan perbedaan niat itulah yang membuat keduanya menjadi ibadah yang berbeda. Karena itu, sebelum takbir, luangkan sejenak untuk menyadari shalat apa yang akan dikerjakan, dan niat itu akan menyertai takbiratul ihram.",
        ],
      },
      {
        heading: "Lafaz Niat sebagai Bantuan Belajar",
        body: [
          "Lafaz niat yang sering diajarkan di Indonesia, seperti ushalli fardhash-shubhi rakataini mustaqbilal qiblati adaan lillahi taala, merupakan contoh bantuan belajar yang lazim dalam tradisi Syafi'i, bukan bacaan yang wajib dilafalkan dan bukan lafaz khusus dari hadits Nabi. Lafaz ini membantu pemula untuk memusatkan hati dan mengingat shalat apa yang sedang dikerjakan, terutama bagi mereka yang baru belajar dan belum terbiasa membedakan niat tiap shalat.",
          "Bila seseorang memilih untuk melafalkan niat, cukup sekali sebelum takbiratul ihram, dan niat dalam hati menyertai takbir. Tidak perlu melafalkannya berulang-ulang, dan tidak perlu mengeraskan suara, karena lafaz ini hanyalah bantuan, bukan bagian dari rukun shalat. Yang menjadi rukun adalah niat di dalam hati, bukan lafaznya.",
          "Sikap yang sehat terhadap lafaz niat adalah memandangnya sebagai alat bantu, bukan sebagai kewajiban. Bagi yang merasa terbantu dengan melafalkannya, silakan melafalkan, dan bagi yang sudah terbiasa dengan niat di hati tanpa lafaz, itu pun sah. Yang tidak boleh adalah meyakini bahwa shalat menjadi tidak sah hanya karena lafaznya tidak diucapkan, karena keyakinan seperti itu tidak berdasar pada hadits Nabi.",
        ],
      },
      {
        heading: "Contoh Lafaz Niat Shalat Subuh",
        body: [
          "Sebagai contoh, lafaz niat shalat Subuh berbunyi ushalli fardhash-shubhi rakataini mustaqbilal qiblati adaan lillahi taala, yang artinya aku niat shalat fardhu Subuh dua rakaat menghadap kiblat karena Allah. Lafaz ini menyebutkan jenis shalatnya, yaitu fardhu Subuh, jumlah rakaatnya, yaitu dua rakaat, arahnya, yaitu menghadap kiblat, dan tujuannya, yaitu karena Allah.",
          "Pola yang sama berlaku untuk shalat wajib yang lain, dengan mengganti nama shalat dan jumlah rakaatnya. Shalat Dzuhur empat rakaat, Ashar empat rakaat, Maghrib tiga rakaat, dan Isya empat rakaat, masing-masing dengan lafaz yang mengikuti pola yang sama. Bagi pemula, menghafal satu lafaz saja sudah cukup sebagai contoh, dan sisanya akan mudah diikuti setelah polanya dipahami.",
          "Yang perlu diingat, lafaz ini adalah contoh bantuan belajar, bukan hafalan yang menentukan sah atau tidaknya shalat. Jangan sampai seseorang menunda shalat hanya karena belum hafal lafaznya, karena shalat bisa dimulai dengan niat di hati, dan lafaz bisa dipelajari sambil berjalan.",
        ],
      },
      {
        heading: "Niat Shalat Sunnah",
        body: [
          "Niat shalat sunnah menyebut jenis shalat sunnahnya, misalnya shalat sunnah rawatib, yaitu shalat sunnah yang mengiringi shalat wajib, atau shalat tahajud, yaitu shalat malam yang dikerjakan setelah tidur. Penyebutan jenis ini penting, karena shalat sunnah ada banyak macamnya, dan niatlah yang menentukan shalat sunnah apa yang sedang dikerjakan.",
          "Shalat sunnah rawatib dikerjakan sebelum atau sesudah shalat wajib, dan jumlah rakaatnya berbeda-beda untuk tiap waktu. Shalat tahajud dikerjakan di malam hari, setelah bangun tidur, dan jumlah rakaatnya tidak ditetapkan secara khusus, sehingga seseorang bisa mengerjakan dua rakaat, empat rakaat, atau lebih sesuai kemampuannya.",
          "Prinsip niat untuk shalat sunnah sama dengan shalat wajib, yaitu niat ada di hati dan menyertai takbir. Lafaz bisa digunakan sebagai bantuan belajar, tetapi tidak wajib dilafalkan. Yang terpenting adalah hati sadar sedang mengerjakan shalat sunnah jenis apa, dan untuk siapa shalat itu dikerjakan.",
        ],
      },
      {
        heading: "Ragu Setelah Niat",
        body: [
          "Keraguan setelah niat adalah hal yang sering dialami pemula, dan kadang juga dialami mereka yang sudah lama shalat. Seseorang mungkin bertanya-tanya di tengah shalat, apakah niatnya tadi sudah benar, apakah ia sudah berniat shalat Dzuhur atau malah shalat yang lain, dan keraguan seperti ini bisa mengganggu kekhusyukan bila tidak ditangani dengan benar.",
          "Jawabannya sederhana, yaitu lanjutkan shalat. Keraguan setelah niat tidak membatalkan shalat, karena niat adanya di hati saat takbir, dan keraguan yang muncul setelahnya tidak menghapus niat yang sudah ada. Tidak perlu mengulang shalat dari awal, dan tidak perlu membatalkan shalat hanya karena ragu, karena was-was seperti ini justru sering datang dari godaan yang ingin mengganggu ibadah.",
          "Bila keraguan ini sering muncul, cara mengatasinya adalah dengan melatih kesadaran sebelum takbir. Luangkan satu detik sebelum mengucapkan Allahu Akbar untuk menyadari shalat apa yang akan dikerjakan, lalu bertakbir dengan tenang. Dengan latihan seperti ini, keraguan akan berkurang dengan sendirinya, dan shalat menjadi lebih khusyuk.",
        ],
      },
      {
        heading: "Niat di Luar Shalat",
        body: [
          "Prinsip niat tidak hanya berlaku dalam shalat, melainkan dalam seluruh ibadah. Puasa, zakat, dan haji semuanya membutuhkan niat, karena niatlah yang membedakan ibadah dengan kebiasaan biasa. Orang yang menahan makan karena berpuasa dan orang yang menahan makan karena sedang diet melakukan hal yang sama secara lahiriah, tetapi niatnya berbeda, dan perbedaan niat itulah yang membuat satu menjadi ibadah dan satu lagi bukan.",
          "Dalam kehidupan sehari-hari, niat juga membedakan amal yang berpahala dengan amal yang tidak. Memberi kepada orang lain bisa menjadi sedekah bila diniatkan karena Allah, dan bisa menjadi sekadar kebiasaan bila dilakukan tanpa niat apa-apa. Karena itu, membiasakan diri berniat sebelum beramal adalah latihan hati yang sangat berharga.",
          "Niat yang ikhlas adalah niat yang hanya mengharap ridha Allah, bukan pujian manusia atau keuntungan dunia. Ikhlas memang tidak mudah, dan ia perlu dilatih terus-menerus, tetapi setiap kali kita berniat karena Allah, kita sedang melatih hati untuk bersih dari riya dan pamrih, dan latihan itulah yang membuat ibadah kita semakin bernilai.",
          "Niat juga yang membedakan shalat wajib dengan shalat sunnah yang waktunya berdekatan, misalnya shalat sunnah sebelum Dzuhur dengan shalat Dzuhur itu sendiri. Gerakannya sama dan waktunya berdekatan, tetapi niatnya berbeda, dan perbedaan niat itulah yang membuat satu menjadi shalat sunnah dan satu lagi menjadi shalat wajib. Karena itu, sebelum bertakbir, biasakan menyadari dengan jelas shalat apa yang sedang dikerjakan, agar niatnya tidak tertukar.",
        ],
      },
    ],
    sources: [
      "Tradisi fikih Syafi'i tentang lafaz niat sebagai bantuan belajar",
      "Al-Quran dan hadits tentang niat dalam ibadah",
    ],
  },
  {
    slug: "puasa",
    section: "ibadah",
    sectionName: "Ibadah",
    title: "Puasa",
    short: "Puasa Ramadan dan puasa sunnah: niat, yang membatalkan, dan hikmahnya.",
    estimatedMinutes: 30,
    keyPoints: [
      "Puasa Ramadan adalah rukun Islam keempat: menahan makan, minum, dan hawa nafsu dari terbit fajar sampai terbenam matahari.",
      "Niat puasa Ramadan dilakukan malam hari sebelum fajar.",
      "Sunnah saat puasa: sahur (meski sedikit), menyegerakan berbuka, berbuka dengan kurma atau air.",
      "Yang membatalkan puasa: makan/minum dengan sengaja, muntah dengan sengaja, haid/nifas, dan jimak di siang hari.",
      "Yang tidak membatalkan: lupa makan/minum, berkumur, dan muntah tidak sengaja.",
      "Puasa sunnah: Senin-Kamis, Ayyamul Bidh (13, 14, 15 tiap bulan Hijriah), dan 6 hari Syawal.",
      "Hikmah puasa: melatih takwa, empati pada yang lapar, dan mengendalikan hawa nafsu (QS Al-Baqarah: 183).",
    ],
    example: "Seseorang lupa lalu minum segelas air di siang Ramadan. Batal atau tidak puasanya?",
    exampleAnswer: "Tidak batal — makan/minum karena lupa dimaafkan. Ia lanjutkan puasanya sampai maghrib.",
    sections: [
      {
        heading: "Puasa Ramadan: Rukun Keempat",
        body: [
          "Puasa Ramadan adalah rukun Islam keempat, yaitu menahan makan, minum, dan hawa nafsu dari terbit fajar sampai terbenam matahari selama sebulan penuh. Puasa bukan sekadar menahan lapar dan haus, melainkan ibadah yang melatih seluruh diri, dari lisan yang dijaga dari ucapan buruk, sampai hati yang dilatih untuk sabar dan bersyukur.",
          "Waktu puasa dimulai dari terbit fajar, yaitu ketika waktu Subuh masuk, dan berakhir saat matahari terbenam, yaitu ketika waktu Maghrib masuk. Di antara dua waktu itu, seorang muslim menahan diri dari hal-hal yang membatalkan puasa, dan setelah Maghrib, ia berbuka dan boleh makan serta minum seperti biasa sampai fajar berikutnya.",
          "Puasa Ramadan diwajibkan bagi setiap muslim yang sudah baligh, berakal, dan mampu. Anak-anak yang belum baligh tidak wajib berpuasa, tetapi boleh dilatih secara bertahap, misalnya berpuasa setengah hari, agar mereka terbiasa ketika sudah wajib. Orang yang sakit atau sedang dalam perjalanan diberi keringanan, dan pembahasan tentang keringanan ini bisa dipelajari lebih lanjut dari kitab fikih atau ustadz tepercaya.",
        ],
      },
      {
        heading: "Niat Puasa",
        body: [
          "Niat puasa Ramadan dilakukan pada malam hari sebelum fajar. Artinya, seseorang berniat di dalam hatinya pada malam hari bahwa esok ia akan berpuasa Ramadan karena Allah. Niat ini cukup di dalam hati, dan tidak perlu diucapkan dengan lafaz tertentu, meskipun ada lafaz niat puasa yang lazim diajarkan sebagai bantuan belajar, sebagaimana lafaz niat shalat.",
          "Niat puasa berbeda dengan niat shalat dalam hal waktunya. Niat shalat menyertai takbir di awal shalat, sedangkan niat puasa Ramadan dilakukan sebelum fajar, karena puasa dimulai sejak fajar dan tidak ada takbir pembuka seperti dalam shalat. Seseorang yang bangun sahur dan makan sahur dengan kesadaran bahwa ia akan berpuasa esok hari, pada dasarnya sudah membawa niat itu di dalam hatinya.",
          "Bila seseorang lupa berniat di malam hari, maka menurut madzhab Syafi'i yang umum di Indonesia, puasa Ramadan hari itu tidak sah dan harus diganti di hari lain, karena niat malam adalah syarat puasa Ramadan. Karena itu, membiasakan diri berniat setiap malam, misalnya sebelum tidur atau saat sahur, adalah kebiasaan yang baik selama bulan Ramadan.",
        ],
      },
      {
        heading: "Sunnah Saat Berpuasa",
        body: [
          "Ada beberapa sunnah yang dianjurkan saat berpuasa, dan yang pertama adalah sahur, meskipun hanya sedikit. Sahur adalah makan atau minum sebelum fajar, dan ia mengandung keberkahan, karena ia memberi kekuatan untuk berpuasa sepanjang hari. Nabi menganjurkan sahur dan menganjurkan untuk mengakhirkannya mendekati fajar, agar jarak antara sahur dan berbuka tidak terlalu panjang.",
          "Sunnah berikutnya adalah menyegerakan berbuka begitu matahari terbenam, dan tidak menunda-nunda tanpa keperluan. Berbuka disunnahkan dengan kurma, dan bila tidak ada kurma, dengan air. Kurma dan air adalah makanan dan minuman yang sederhana, tetapi keduanya cukup untuk mengembalikan energi setelah seharian berpuasa, dan mengikuti cara berbuka Nabi adalah bagian dari meneladani sunnah beliau.",
          "Sunnah-sunnah ini tampak sederhana, tetapi maknanya dalam. Sahur mengajarkan persiapan, menyegerakan berbuka mengajarkan bahwa ibadah tidak perlu dipersulit, dan berbuka dengan kurma atau air mengajarkan kesederhanaan. Orang yang menjalankan sunnah-sunnah ini akan merasakan puasanya lebih ringan dan lebih bermakna.",
        ],
      },
      {
        heading: "Yang Membatalkan Puasa",
        body: [
          "Ada hal-hal yang membatalkan puasa, dan yang paling utama adalah makan dan minum dengan sengaja di siang hari. Bila seseorang sengaja makan atau minum padahal ia tahu sedang berpuasa, maka puasanya batal dan ia wajib menggantinya di hari lain. Selain makan dan minum, muntah dengan sengaja, haid atau nifas, dan jimak di siang hari juga membatalkan puasa.",
          "Yang tidak membatalkan puasa antara lain makan atau minum karena lupa, berkumur, dan muntah yang tidak disengaja. Seseorang yang lupa lalu minum segelas air di siang Ramadan, misalnya, puasanya tidak batal, karena makan dan minum karena lupa dimaafkan. Ia cukup melanjutkan puasanya sampai Maghrib, tanpa perlu mengganti hari itu.",
          "Perbedaan antara sengaja dan tidak sengaja ini menunjukkan bahwa Islam menilai perbuatan berdasarkan kesadaran dan niat pelakunya. Orang yang lupa tidak disalahkan atas kelupannya, sedangkan orang yang sengaja melanggar harus menanggung akibatnya. Prinsip ini berlaku dalam banyak ibadah, dan ia membuat agama ini terasa adil dan manusiawi.",
        ],
      },
      {
        heading: "Puasa Sunnah",
        body: [
          "Di samping puasa Ramadan yang wajib, ada puasa-puasa sunnah yang bisa dikerjakan sepanjang tahun. Di antaranya adalah puasa Senin dan Kamis, puasa Ayyamul Bidh, yaitu puasa pada tanggal tiga belas, empat belas, dan lima belas tiap bulan Hijriah, dan puasa enam hari di bulan Syawal setelah Ramadan. Puasa-puasa ini tidak wajib, tetapi pahalanya besar dan menjadi latihan untuk menjaga kebiasaan berpuasa setelah Ramadan selesai.",
          "Puasa Senin dan Kamis adalah puasa yang paling sering dikerjakan Nabi, dan ia menjadi kebiasaan yang baik bagi siapa pun yang ingin menjaga puasa secara rutin. Puasa Ayyamul Bidh dikerjakan pada pertengahan bulan Hijriah, ketika bulan purnama, dan puasa enam hari Syawal dikerjakan setelah Ramadan, sebagai penyempurna puasa sebulan penuh.",
          "Bagi pemula, memulai puasa sunnah bisa dilakukan dari yang paling ringan, misalnya satu hari dalam seminggu, lalu ditambah secara bertahap. Tidak perlu memaksakan diri mengerjakan semua puasa sunnah sekaligus, karena yang terpenting adalah konsistensi, dan puasa sunnah yang sedikit tetapi rutin lebih baik daripada puasa yang banyak tetapi hanya sekali lalu berhenti.",
        ],
      },
      {
        heading: "Hikmah Puasa",
        body: [
          "Hikmah puasa yang paling utama disebutkan dalam Al-Quran, yaitu agar kita menjadi orang yang bertakwa, sebagaimana firman Allah dalam QS Al-Baqarah ayat 183. Takwa adalah kesadaran bahwa Allah selalu mengawasi, dan puasa melatih kesadaran itu dengan cara yang paling nyata, karena orang yang berpuasa menahan diri dari makan dan minum meskipun tidak ada manusia yang melihat, semata-mata karena Allah memerintahkannya.",
          "Hikmah berikutnya adalah empati kepada orang yang lapar. Orang yang terbiasa kenyang sering lupa bagaimana rasanya lapar, tetapi setelah berpuasa seharian, ia merasakan sendiri apa yang dirasakan oleh orang miskin setiap hari. Rasa lapar itu menumbuhkan kepekaan sosial, dan kepekaan itu mendorong seseorang untuk lebih dermawan dan lebih peduli kepada sesama.",
          "Hikmah ketiga adalah pengendalian hawa nafsu. Puasa mengajarkan bahwa nafsu bisa dikendalikan, dan bahwa manusia tidak harus menuruti setiap keinginannya. Orang yang mampu menahan lapar dan haus selama sebulan akan lebih mudah menahan amarah, menahan lisan dari ucapan buruk, dan menahan diri dari maksiat, karena ia sudah terbiasa berkata tidak kepada dirinya sendiri.",
          "Ramadan juga adalah bulan Al-Quran, karena pada bulan inilah Al-Quran pertama kali diturunkan, dan di dalamnya ada malam Lailatul Qadar, malam yang lebih baik dari seribu bulan, yang dicari pada sepuluh malam terakhir Ramadan. Karena itu, banyak muslim yang menambah bacaan Al-Quran dan shalat malam di bulan Ramadan, agar puasanya tidak hanya menahan lapar, tetapi juga menjadi bulan yang penuh dengan ibadah dan kedekatan kepada Allah.",
        ],
      },
    ],
    sources: [
      "Al-Quran, QS Al-Baqarah: 183",
      "Al-Quran dan hadits tentang puasa Ramadan dan puasa sunnah",
    ],
  },
  {
    slug: "zakat-haji",
    section: "ibadah",
    sectionName: "Ibadah",
    title: "Zakat, Haji & Umrah",
    short: "Zakat fitrah dan mal, haji bagi yang mampu, dan umrah sebagai pengenalan.",
    estimatedMinutes: 30,
    keyPoints: [
      "Zakat fitrah: wajib bagi tiap muslim di akhir Ramadan, sebesar 1 sha' (sekitar 2,5 kg) makanan pokok, dibayarkan sebelum shalat Idul Fitri.",
      "Zakat mal: zakat harta bila mencapai nisab (batas minimal) dan haul (satu tahun), umumnya 2,5%.",
      "Penerima zakat ada 8 golongan, di antaranya fakir, miskin, dan amil (QS At-Taubah: 60).",
      "Haji adalah rukun Islam kelima, wajib bagi yang mampu fisik dan harta, dilakukan di Makkah pada bulan Dzulhijjah.",
      "Rukun haji: ihram, wukuf di Arafah, tawaf, sa'i, dan tahalul.",
      "Umrah: ibadah ke Baitullah yang bisa dilakukan kapan saja; rukunnya ihram, tawaf, sa'i, dan tahalul.",
      "Zakat membersihkan harta, haji membersihkan jiwa — keduanya ibadah yang menumbuhkan kepedulian.",
    ],
    example: "Kapan batas terakhir membayar zakat fitrah?",
    exampleAnswer: "Sebelum shalat Idul Fitri. Bila dibayar sesudahnya, nilainya menjadi sedekah biasa, bukan zakat fitrah.",
    sections: [
      {
        heading: "Zakat Fitrah: Kewajiban di Akhir Ramadan",
        body: [
          "Zakat fitrah adalah zakat yang wajib bagi setiap muslim di akhir bulan Ramadan, sebesar satu sha, yaitu sekitar dua setengah kilogram makanan pokok, dan dibayarkan sebelum shalat Idul Fitri. Makanan pokok di Indonesia umumnya adalah beras, dan zakat fitrah bisa dibayarkan dalam bentuk beras atau dalam bentuk uang senilai beras tersebut, sesuai ketentuan yang berlaku di daerah masing-masing.",
          "Batas terakhir membayar zakat fitrah adalah sebelum shalat Idul Fitri. Bila dibayarkan sesudah shalat Idul Fitri, nilainya menjadi sedekah biasa, bukan zakat fitrah. Batas ini penting, karena zakat fitrah memang dimaksudkan agar orang miskin bisa ikut merayakan Idul Fitri dengan layak, dan bila dibayarkan terlambat, tujuan itu tidak tercapai.",
          "Zakat fitrah diwajibkan bagi setiap muslim, termasuk anak-anak dan bayi, dan kepala keluarga biasanya membayarkan zakat fitrah untuk seluruh anggota keluarganya. Kewajiban ini tidak mengenal batas harta seperti zakat mal, karena zakat fitrah adalah kewajiban jiwa, bukan kewajiban harta, dan ia menjadi penutup yang indah bagi ibadah puasa Ramadan.",
        ],
      },
      {
        heading: "Zakat Mal: Zakat Harta",
        body: [
          "Zakat mal adalah zakat harta, yang wajib dikeluarkan bila harta seseorang mencapai nisab, yaitu batas minimal, dan haul, yaitu masa kepemilikan selama satu tahun. Kadar zakat mal umumnya dua setengah persen dari harta yang dimiliki, dan harta yang wajib dizakati meliputi uang, emas, perak, barang dagangan, dan jenis harta lain yang memenuhi syarat.",
          "Nisab dan haul adalah dua syarat yang membuat zakat mal berbeda dengan zakat fitrah. Seseorang yang hartanya belum mencapai nisab tidak wajib berzakat, dan seseorang yang hartanya baru dimiliki kurang dari setahun juga belum wajib berzakat. Syarat ini menunjukkan keadilan, karena zakat hanya diwajibkan bagi mereka yang benar-benar memiliki kelebihan harta.",
          "Perhitungan zakat mal bisa menjadi rumit bila jenis hartanya beragam, misalnya seseorang memiliki tabungan, emas, dan barang dagangan sekaligus. Dalam hal seperti ini, cara yang paling aman adalah bertanya kepada lembaga zakat atau ustadz yang memahami fikih zakat, agar perhitungannya benar dan zakatnya sah.",
        ],
      },
      {
        heading: "Siapa yang Berhak Menerima Zakat",
        body: [
          "Penerima zakat ada delapan golongan, sebagaimana disebutkan dalam Al-Quran surah At-Taubah ayat 60. Di antaranya adalah fakir, yaitu orang yang sangat miskin dan tidak memiliki penghasilan yang cukup, miskin, yaitu orang yang memiliki penghasilan tetapi tidak mencukupi kebutuhannya, dan amil, yaitu orang yang bertugas mengumpulkan dan menyalurkan zakat.",
          "Lima golongan lainnya adalah mualaf yang hatinya sedang dilunakkan, budak yang sedang memerdekakan dirinya, orang yang berutang untuk keperluan yang dibenarkan, orang yang berjuang di jalan Allah, dan musafir yang kehabisan bekal di perjalanan. Kedelapan golongan ini menunjukkan bahwa zakat bukan sekadar bantuan untuk orang miskin, melainkan sistem sosial yang mencakup berbagai kebutuhan umat.",
          "Dalam praktiknya, zakat di Indonesia umumnya disalurkan melalui lembaga amil zakat atau masjid, yang akan menyalurkannya kepada golongan yang berhak. Menyalurkan zakat melalui lembaga yang terpercaya adalah cara yang baik, karena lembaga tersebut memahami siapa saja yang berhak menerima dan bagaimana cara menyalurkannya dengan tepat.",
        ],
      },
      {
        heading: "Haji: Rukun Kelima",
        body: [
          "Haji adalah rukun Islam kelima, yang wajib bagi yang mampu secara fisik dan harta, dan dilakukan di Makkah pada bulan Dzulhijjah. Kemampuan di sini mencakup biaya perjalanan, kesehatan fisik, dan keamanan perjalanan, sehingga seseorang yang belum mampu tidak berdosa bila belum berhaji, dan ia tetap bisa beribadah dengan cara lain sambil menabung dan mempersiapkan diri.",
          "Haji adalah perjalanan yang mempertemukan jutaan muslim dari seluruh dunia, dari berbagai suku, bahasa, dan warna kulit, dalam satu pakaian yang sama dan satu tujuan yang sama. Di sana, perbedaan duniawi seolah hilang, dan yang tersisa hanyalah hamba-hamba Allah yang datang memenuhi panggilan-Nya. Pengalaman ini menjadi pelajaran besar tentang persatuan dan kesetaraan.",
          "Di Indonesia, antrean haji bisa sangat panjang, sehingga seseorang yang mendaftar hari ini mungkin baru berangkat bertahun-tahun kemudian. Karena itu, niat dan pendaftaran sejak dini adalah langkah yang bijak bagi mereka yang mampu, dan sambil menunggu giliran, mereka bisa memperdalam ilmu tentang manasik haji agar ketika tiba waktunya, ibadahnya berjalan dengan baik.",
        ],
      },
      {
        heading: "Rukun Haji dan Umrah",
        body: [
          "Rukun haji ada lima, yaitu ihram, wukuf di Arafah, tawaf, sai, dan tahalul. Ihram adalah niat memasuki ibadah haji dengan mengenakan pakaian ihram, wukuf adalah berdiam di padang Arafah pada tanggal sembilan Dzulhijjah, tawaf adalah mengelilingi Ka'bah tujuh kali, sai adalah berjalan antara bukit Shafa dan Marwah tujuh kali, dan tahalul adalah mencukur rambut sebagai tanda keluar dari ihram.",
          "Umrah adalah ibadah ke Baitullah yang bisa dilakukan kapan saja sepanjang tahun, dan rukunnya lebih sedikit daripada haji, yaitu ihram, tawaf, sai, dan tahalul. Umrah tidak menggantikan kewajiban haji, tetapi ia adalah ibadah yang sangat dianjurkan, dan banyak muslim yang mengerjakan umrah sebagai pengenalan sebelum berhaji, atau sebagai ibadah tersendiri bila belum mampu berhaji.",
          "Rincian manasik haji dan umrah, termasuk larangan-larangan selama ihram dan tata cara tiap rukunnya, sebaiknya dipelajari secara khusus sebelum berangkat, melalui bimbingan manasik yang diselenggarakan oleh travel atau lembaga haji. Materi ini hanya memberikan gambaran besarnya, dan persiapan yang matang akan membuat ibadah di Tanah Suci berjalan dengan tenang dan khusyuk.",
        ],
      },
      {
        heading: "Membersihkan Harta, Membersihkan Jiwa",
        body: [
          "Zakat membersihkan harta, dan haji membersihkan jiwa, dan keduanya adalah ibadah yang menumbuhkan kepedulian. Zakat mengajarkan bahwa harta yang kita miliki mengandung hak orang lain, dan dengan menunaikannya, hati menjadi bersih dari sifat kikir dan tangan menjadi terbiasa memberi. Haji mengajarkan bahwa manusia sama di hadapan Allah, dan dengan menjalaninya, hati menjadi bersih dari kesombongan dan jiwa menjadi lebih dekat kepada Allah.",
          "Kepedulian yang ditumbuhkan oleh zakat dan haji tidak berhenti pada ibadah itu sendiri. Orang yang terbiasa berzakat akan lebih peka terhadap kesulitan tetangganya, dan orang yang pernah berhaji akan lebih menghargai persatuan umat. Kedua ibadah ini, dengan caranya masing-masing, membentuk muslim yang tidak hanya saleh secara pribadi, tetapi juga bermanfaat bagi masyarakat.",
          "Bagi pemula, langkah pertama adalah memahami kewajiban zakat fitrah yang datang setiap tahun, lalu mempelajari zakat mal bila sudah memiliki harta yang mencapai nisab, dan mempersiapkan haji sebagai cita-cita jangka panjang. Ketiganya adalah bagian dari perjalanan yang sama, yaitu perjalanan seorang hamba yang membersihkan harta dan jiwanya, selangkah demi selangkah, menuju ridha Allah.",
          "Di samping zakat yang wajib, ada pula sedekah yang hukumnya sunnah, yaitu pemberian sukarela yang bisa dilakukan kapan saja dan dalam jumlah berapa saja. Sedekah tidak terikat nisab dan haul seperti zakat, dan penerimanya pun lebih luas, karena sedekah boleh diberikan kepada siapa saja yang membutuhkan, termasuk kepada orang yang tidak termasuk delapan golongan penerima zakat. Zakat adalah kewajiban yang terukur, sedangkan sedekah adalah kebaikan yang tidak berbatas.",
        ],
      },
    ],
    sources: [
      "Al-Quran, QS At-Taubah: 60",
      "Al-Quran dan hadits tentang zakat, haji, dan umrah",
    ],
  },
  {
    slug: "mengenal-quran",
    section: "quran",
    sectionName: "Al-Quran",
    title: "Mengenal Al-Quran",
    short: "Wahyu Allah: 114 surah, 30 juz, dan cara memperlakukannya.",
    estimatedMinutes: 30,
    keyPoints: [
      "Al-Quran adalah wahyu Allah yang diturunkan kepada Nabi Muhammad melalui Malaikat Jibril.",
      "Terdiri dari 114 surah dan 30 juz; surah pertama Al-Fatihah, terakhir An-Nas.",
      "Surah Makkiyah diturunkan di Makkah (umumnya tentang akidah), Madaniyah di Madinah (umumnya tentang hukum dan masyarakat).",
      "Al-Quran adalah pedoman hidup: petunjuk, obat hati, dan sumber hukum.",
      "Adab membaca: berwudhu, menghadap kiblat, membaca dengan tartil (perlahan dan benar), dan merenungkan maknanya.",
      "Membaca satu huruf Al-Quran bernilai sepuluh kebaikan (HR. Tirmidzi).",
      "Menghafal Al-Quran (tahfidz) dimulai dari surah-surah pendek juz 30.",
    ],
    example: "Kenapa membaca Al-Quran dianjurkan tartil, tidak terburu-buru?",
    exampleAnswer: "Karena Al-Quran dibaca untuk dipahami dan direnungkan, bukan sekadar selesai. Tartil menjaga tajwid dan memberi ruang hati menyerap maknanya.",
    sections: [
      {
        heading: "Wahyu Allah kepada Nabi Muhammad",
        body: [
          "Al-Quran adalah wahyu Allah yang diturunkan kepada Nabi Muhammad melalui Malaikat Jibril. Wahyu ini turun secara bertahap selama kurang lebih dua puluh tiga tahun, sesuai dengan peristiwa dan kebutuhan yang dihadapi umat Islam pada saat itu. Cara turun yang bertahap ini membuat Al-Quran mudah dipahami dan diamalkan, karena tiap ayat turun pada saat yang tepat untuk menjawab persoalan yang sedang dihadapi.",
          "Wahyu pertama turun di Gua Hira, ketika Nabi Muhammad sedang menyendiri dan merenung, dan Malaikat Jibril datang membawakan perintah bacalah dengan nama Tuhanmu. Peristiwa ini menjadi awal kenabian, dan sejak saat itu, wahyu terus turun, membimbing Nabi dan umatnya, hingga akhirnya Al-Quran menjadi lengkap seperti yang kita kenal hari ini.",
          "Sebagai wahyu Allah, Al-Quran bukanlah karangan manusia, dan ia dijaga keasliannya oleh Allah sendiri. Jutaan muslim di seluruh dunia menghafalnya, dan mushaf-mushaf yang tersebar di berbagai negara memiliki isi yang sama, sehingga Al-Quran menjadi kitab yang paling terjaga keasliannya di antara kitab-kitab suci yang ada.",
        ],
      },
      {
        heading: "114 Surah dan 30 Juz",
        body: [
          "Al-Quran terdiri dari seratus empat belas surah dan tiga puluh juz. Surah pertama adalah Al-Fatihah, yang dibaca di setiap rakaat shalat, dan surah terakhir adalah An-Nas, yang menjadi penutup kitab ini. Pembagian menjadi surah dan juz ini memudahkan kita dalam membaca, menghafal, dan merujuk pada ayat-ayat tertentu.",
          "Juz adalah pembagian Al-Quran menjadi tiga puluh bagian yang sama panjang, yang dibuat untuk memudahkan orang yang ingin mengkhatamkan Al-Quran dalam sebulan, dengan membaca satu juz setiap hari. Juz tiga puluh, yang berisi surah-surah pendek, adalah juz yang paling sering dibaca dan dihafal oleh pemula, karena surah-surahnya pendek dan mudah diingat.",
          "Mengenal struktur ini membantu kita dalam belajar. Seseorang yang baru mulai bisa menargetkan untuk menghafal surah-surah pendek di juz tiga puluh terlebih dahulu, lalu melangkah ke juz dua puluh sembilan, dan begitu seterusnya. Dengan cara ini, menghafal Al-Quran terasa seperti perjalanan yang bertahap, bukan beban yang harus diselesaikan sekaligus.",
        ],
      },
      {
        heading: "Surah Makkiyah dan Madaniyah",
        body: [
          "Surah-surah Al-Quran terbagi menjadi dua kelompok besar berdasarkan tempat diturunkannya, yaitu surah Makkiyah yang diturunkan di Makkah, dan surah Madaniyah yang diturunkan di Madinah. Surah Makkiyah umumnya berbicara tentang akidah, yaitu keesaan Allah, hari akhir, dan kisah para nabi, karena pada masa Makkah, umat Islam masih dalam tahap membangun fondasi keyakinan.",
          "Surah Madaniyah umumnya berbicara tentang hukum dan masyarakat, seperti hukum waris, hukum pernikahan, dan aturan bermuamalah, karena pada masa Madinah, umat Islam sudah membentuk masyarakat dan membutuhkan aturan-aturan yang mengatur kehidupan bersama. Perbedaan tema ini mencerminkan perjalanan dakwah yang bertahap, dari membangun iman terlebih dahulu, lalu membangun masyarakat di atas fondasi iman tersebut.",
          "Memahami perbedaan ini membantu kita dalam membaca Al-Quran. Ketika membaca surah Makkiyah, kita akan merasakan nada yang lebih menggugah hati dan mengajak merenung, sedangkan ketika membaca surah Madaniyah, kita akan menemukan aturan-aturan yang lebih rinci tentang kehidupan bermasyarakat. Keduanya saling melengkapi, dan keduanya adalah bagian dari petunjuk Allah yang utuh.",
        ],
      },
      {
        heading: "Al-Quran sebagai Pedoman Hidup",
        body: [
          "Al-Quran adalah pedoman hidup, yang berfungsi sebagai petunjuk, obat hati, dan sumber hukum. Sebagai petunjuk, Al-Quran menunjukkan jalan yang benar dalam berbagai persoalan, dari akidah sampai muamalah, dan dari ibadah sampai akhlak. Orang yang menjadikan Al-Quran sebagai pedoman tidak akan kebingungan mencari arah, karena petunjuk itu sudah tertulis dengan jelas.",
          "Sebagai obat hati, Al-Quran menenangkan jiwa yang gelisah dan menghibur hati yang sedih. Banyak orang yang merasakan ketenangan setelah membaca Al-Quran, bukan karena mereka memahami semua ayatnya, melainkan karena bacaan itu sendiri membawa ketenangan, dan maknanya menyentuh hati yang sedang membutuhkan penghiburan.",
          "Sebagai sumber hukum, Al-Quran menjadi rujukan utama dalam menetapkan halal dan haram, serta dalam mengatur kehidupan bermasyarakat. Para ulama merujuk pada Al-Quran terlebih dahulu sebelum merujuk pada sumber yang lain, dan setiap hukum yang bertentangan dengan Al-Quran tidak bisa diterima. Kedudukan ini membuat Al-Quran menjadi fondasi bagi seluruh ajaran Islam.",
          "Al-Quran juga diturunkan sebagai pembeda antara yang benar dan yang salah, sehingga orang yang membacanya dengan sungguh-sungguh akan memiliki ukuran yang jelas dalam menilai persoalan hidup. Ketika ragu tentang suatu hal, kembalilah kepada Al-Quran dan kepada sunnah Nabi, dan bila masih ragu, bertanyalah kepada orang yang berilmu, karena bertanya adalah jalan keluar dari keraguan, bukan tanda kelemahan.",
        ],
      },
      {
        heading: "Adab Membaca Al-Quran",
        body: [
          "Membaca Al-Quran memiliki adab-adab yang sebaiknya dijaga, dan yang pertama adalah berwudhu sebelum membacanya. Berwudhu adalah tanda penghormatan kepada kitab suci, dan ia juga membantu hati menjadi lebih tenang dan siap menerima makna ayat-ayat yang dibaca. Setelah berwudhu, disunnahkan menghadap kiblat, sebagai tanda kesungguhan dalam beribadah.",
          "Adab berikutnya adalah membaca dengan tartil, yaitu perlahan dan benar, tidak terburu-buru. Al-Quran dibaca untuk dipahami dan direnungkan, bukan sekadar selesai, dan tartil menjaga tajwid sekaligus memberi ruang bagi hati untuk menyerap maknanya. Orang yang membaca dengan tartil akan lebih mudah merasakan ayat yang dibacanya, dan lebih mudah mengingatnya.",
          "Adab yang terakhir adalah merenungkan maknanya, yaitu membaca terjemahan dan tafsirnya, agar bacaan tidak hanya lewat di lisan, tetapi juga masuk ke dalam hati. Jurnal refleksi pada web ini adalah salah satu cara untuk melatih kebiasaan ini, yaitu dengan menulis apa yang dipahami dan dirasakan setelah membaca satu ayat atau satu surah.",
        ],
      },
      {
        heading: "Pahala Membaca dan Menghafal",
        body: [
          "Membaca satu huruf Al-Quran bernilai sepuluh kebaikan, sebagaimana disebutkan dalam hadits riwayat Tirmidzi. Artinya, membaca satu ayat yang pendek saja sudah mendatangkan pahala yang berlipat, dan membaca satu halaman akan mendatangkan pahala yang jauh lebih besar lagi. Janji ini adalah motivasi bagi siapa pun yang ingin memulai kebiasaan membaca Al-Quran, karena pahalanya dihitung per huruf, bukan per halaman.",
          "Menghafal Al-Quran, yang dikenal dengan sebutan tahfidz, adalah amalan yang sangat mulia, dan ia dimulai dari surah-surah pendek di juz tiga puluh. Surah-surah seperti Al-Ikhlas, Al-Falaq, dan An-Nas adalah surah yang paling mudah dihafal, dan setelah menguasainya, seseorang bisa melanjutkan ke surah yang lebih panjang, sedikit demi sedikit, dengan cara mengulang-ulang bacaannya setiap hari.",
          "Yang terpenting dalam membaca dan menghafal Al-Quran adalah konsistensi, bukan kecepatan. Membaca satu halaman setiap hari selama setahun akan menghasilkan jauh lebih banyak daripada membaca sepuluh halaman dalam sehari lalu berhenti selama sebulan. Mulailah dari yang sedikit, lakukan setiap hari, dan biarkan kebiasaan itu tumbuh bersama waktu.",
          "Membaca Al-Quran juga bisa menjadi kebiasaan keluarga, misalnya dengan membaca bersama setelah shalat Maghrib, atau dengan mengajarkan surah-surah pendek kepada anak-anak. Anak yang tumbuh dengan suara Al-Quran di rumahnya akan menganggap Al-Quran sebagai bagian dari hidupnya, bukan sebagai pelajaran yang menakutkan, dan kebiasaan keluarga seperti ini adalah warisan yang jauh lebih berharga daripada harta.",
        ],
      },
    ],
    sources: [
      "Al-Quran, QS Al-'Alaq: 1-5 tentang wahyu pertama",
      "HR. Tirmidzi tentang pahala membaca Al-Quran",
      "Materi Membaca Al-Quran dan Tajwid Dasar pada web ini",
    ],
  },
  {
    slug: "tajwid-dasar",
    section: "quran",
    sectionName: "Al-Quran",
    title: "Membaca Al-Quran & Tajwid Dasar",
    short: "Huruf hijaiyah, harakat, dan hukum bacaan dasar untuk pemula.",
    estimatedMinutes: 30,
    keyPoints: [
      "Huruf hijaiyah ada 28: alif, ba, ta, tsa, jim, ha, kha, sampai ya.",
      "Harakat: fathah (a), kasrah (i), dammah (u), sukun (mati), dan tanwin.",
      "Hukum nun mati/tanwin: izhar (jelas), idgham (melebur), iqlab (berubah jadi mim), ikhfa (samar) — pelajari satu demi satu.",
      "Mad thabi'i: bacaan panjang 2 harakat, misal pada huruf berharakat fathah diikuti alif.",
      "Makhraj: tempat keluarnya huruf — salah makhraj bisa mengubah arti.",
      "Cara terbaik belajar: talaqqi, yaitu membaca di hadapan guru yang membetulkan langsung.",
      "Untuk pemula: mulai dari Iqra, kuasai huruf dan harakat, lalu lanjut ke juz 30.",
    ],
    example: "Apa yang terjadi bila huruf 'ha' (ح) dibaca seperti 'ha' (ه)?",
    exampleAnswer: "Arti kata bisa berubah karena makhraj keduanya berbeda — ح dari tenggorokan tengah, ه dari tenggorokan bawah. Itulah kenapa tajwid penting.",
    sections: [
      {
        heading: "Huruf Hijaiyah: 28 Huruf",
        body: [
          "Huruf hijaiyah adalah huruf-huruf Arab yang membentuk Al-Quran, dan jumlahnya ada dua puluh delapan, mulai dari alif, ba, ta, tsa, jim, ha, kha, sampai ya. Mengenal huruf-huruf ini adalah langkah pertama dalam belajar membaca Al-Quran, karena tanpa mengenal hurufnya, kita tidak bisa membaca satu kata pun dari kitab suci ini.",
          "Setiap huruf hijaiyah memiliki bentuk yang berbeda, dan beberapa huruf memiliki bentuk yang mirip tetapi dibedakan oleh titik-titiknya. Misalnya, huruf ba, ta, dan tsa memiliki bentuk dasar yang sama, tetapi ba memiliki satu titik di bawah, ta memiliki dua titik di atas, dan tsa memiliki tiga titik di atas. Memperhatikan titik-titik ini adalah kunci untuk tidak tertukar dalam membaca.",
          "Bagi pemula, cara terbaik menghafal huruf hijaiyah adalah dengan mengulang-ulang urutannya sambil melihat bentuknya, lalu berlatih menulisnya. Setelah hafal urutannya, langkah berikutnya adalah belajar mengenali huruf-huruf itu dalam berbagai bentuknya, karena huruf Arab berubah bentuk tergantung posisinya di awal, di tengah, atau di akhir kata.",
        ],
      },
      {
        heading: "Harakat: Tanda Baca Arab",
        body: [
          "Harakat adalah tanda baca yang menunjukkan bunyi huruf, dan yang paling dasar adalah fathah yang berbunyi a, kasrah yang berbunyi i, dammah yang berbunyi u, sukun yang berarti huruf mati atau tidak berbunyi, dan tanwin yang berarti bunyi tambahan n di akhir kata. Tanpa harakat, huruf Arab tidak memiliki bunyi yang jelas, dan karena itu harakat adalah bagian yang tidak bisa dipisahkan dari belajar membaca.",
          "Fathah ditulis sebagai garis miring kecil di atas huruf, kasrah sebagai garis miring kecil di bawah huruf, dan dammah sebagai tanda kecil yang menyerupai huruf waw di atas huruf. Sukun ditulis sebagai lingkaran kecil di atas huruf, yang menandakan bahwa huruf tersebut tidak dibaca dengan bunyi vokal, melainkan berhenti. Tanwin adalah harakat ganda, yang menambahkan bunyi n di akhir kata.",
          "Mushaf Al-Quran yang beredar di Indonesia umumnya sudah dilengkapi harakat, sehingga pemula bisa membaca dengan panduan harakat tersebut. Tetapi ada juga mushaf tanpa harakat yang digunakan oleh para penghafal, dan membaca mushaf seperti itu membutuhkan hafalan yang kuat, karena pembaca harus mengingat sendiri bunyi tiap kata tanpa bantuan tanda baca.",
        ],
      },
      {
        heading: "Hukum Nun Mati dan Tanwin",
        body: [
          "Hukum nun mati dan tanwin adalah aturan tentang bagaimana nun mati atau tanwin dibaca ketika bertemu dengan huruf setelahnya, dan ada empat hukum yang perlu dipelajari satu demi satu, yaitu izhar, idgham, iqlab, dan ikhfa. Izhar berarti jelas, yaitu nun mati atau tanwin dibaca dengan jelas tanpa dilebur, dan ini terjadi ketika huruf setelahnya adalah huruf-huruf tenggorokan.",
          "Idgham berarti melebur, yaitu nun mati atau tanwin dilebur ke dalam huruf setelahnya, sehingga bunyinya menyatu. Iqlab berarti berubah menjadi mim, yaitu nun mati atau tanwin berubah bunyinya menjadi mim ketika bertemu dengan huruf ba. Ikhfa berarti samar, yaitu nun mati atau tanwin dibaca dengan samar, tidak jelas dan tidak pula dilebur sepenuhnya.",
          "Keempat hukum ini tidak perlu dipelajari sekaligus dalam satu hari. Cara yang paling baik adalah mempelajari satu hukum, berlatih membacanya dalam ayat-ayat Al-Quran, lalu setelah lancar, lanjut ke hukum berikutnya. Dengan cara bertahap seperti ini, tajwid akan terasa seperti keterampilan yang tumbuh, bukan hafalan yang membebani.",
        ],
      },
      {
        heading: "Mad Thabii: Bacaan Panjang",
        body: [
          "Mad thabii adalah bacaan panjang dua harakat, yang terjadi ketika ada huruf mad setelah huruf yang berharakat. Misalnya, huruf yang berharakat fathah diikuti oleh alif dibaca panjang dua harakat, dan begitu pula huruf yang berharakat kasrah diikuti oleh ya, serta huruf yang berharakat dammah diikuti oleh waw. Panjang dua harakat ini adalah panjang dasar, dan ada jenis mad lain yang lebih panjang, tetapi mad thabii adalah yang paling sering ditemui dan paling penting dikuasai pemula.",
          "Kesalahan yang sering terjadi adalah membaca mad terlalu pendek atau terlalu panjang. Membaca mad thabii hanya satu harakat membuatnya terdengar seperti tidak ada mad sama sekali, sedangkan membacanya empat harakat membuatnya terdengar seperti mad yang lain. Karena itu, melatih ketukan dua harakat, misalnya dengan mengetuk jari dua kali, adalah latihan yang sederhana tetapi sangat membantu.",
          "Dalam Al-Quran, mad thabii muncul di hampir setiap ayat, sehingga menguasainya akan langsung memperbaiki bacaan kita secara keseluruhan. Setelah mad thabii dikuasai, barulah kita bisa melanjutkan ke jenis mad yang lain, seperti mad wajib dan mad jaiz, yang memiliki panjang dan aturan yang berbeda.",
        ],
      },
      {
        heading: "Makhraj: Tempat Keluarnya Huruf",
        body: [
          "Makhraj adalah tempat keluarnya huruf, yaitu posisi di mulut atau tenggorokan tempat huruf itu diucapkan. Setiap huruf hijaiyah memiliki makhrajnya sendiri, dan salah makhraj bisa mengubah arti kata. Contoh yang paling sering disebut adalah huruf ha, yaitu huruf ha dengan bunyi dari tenggorokan tengah, dan huruf ha yang lain dengan bunyi dari tenggorokan bawah, yang bila tertukar akan mengubah arti kata yang dibaca.",
          "Huruf-huruf tenggorokan, huruf-huruf lidah, dan huruf-huruf bibir masing-masing memiliki tempatnya, dan mempelajari makhraj berarti mempelajari di mana lidah, bibir, dan tenggorokan harus berada saat mengucapkan tiap huruf. Ini adalah ilmu yang paling baik dipelajari dengan mendengar dan meniru, karena penjelasan tertulis saja tidak cukup untuk menggambarkan bunyi yang benar.",
          "Kesalahan makhraj adalah kesalahan yang paling sering terjadi pada pemula, dan ia tidak perlu membuat kita malu atau putus asa. Setiap orang yang bisa membaca Al-Quran dengan benar hari ini pernah melewati masa ketika makhrajnya masih salah, dan mereka memperbaikinya dengan latihan dan bimbingan. Yang penting adalah terus berlatih dan tidak berhenti belajar.",
        ],
      },
      {
        heading: "Talaqqi: Belajar di Hadapan Guru",
        body: [
          "Cara terbaik belajar tajwid adalah talaqqi, yaitu membaca di hadapan guru yang membetulkan langsung. Guru yang mendengar bacaan kita bisa menangkap kesalahan yang tidak kita sadari sendiri, seperti makhraj yang kurang tepat, mad yang terlalu pendek, atau hukum nun mati yang terlewat. Tanpa guru, kesalahan-kesalahan ini bisa terus berulang tanpa kita sadari, dan lama-lama menjadi kebiasaan yang sulit diubah.",
          "Talaqqi tidak harus dilakukan dalam kelas formal yang besar. Membaca di hadapan orang tua, teman yang lebih lancar, atau ustadz di masjid setelah shalat adalah bentuk talaqqi yang sederhana tetapi sangat bermanfaat. Yang penting adalah ada orang yang mendengar dan membetulkan, bukan hanya membaca sendiri tanpa pernah diperiksa.",
          "Untuk pemula, langkah yang dianjurkan adalah mulai dari Iqra, yaitu buku belajar membaca Al-Quran yang disusun bertahap dari huruf sampai kalimat. Kuasai huruf dan harakat terlebih dahulu, lalu lanjut ke juz tiga puluh, dan mintalah seseorang yang lebih lancar untuk mendengarkan bacaan kita secara berkala. Dengan cara ini, tajwid akan tumbuh bersamaan dengan kelancaran membaca.",
        ],
      },
    ],
    sources: [
      "Materi Mengenal Al-Quran pada web ini",
      "Buku Iqra sebagai rujukan belajar membaca pemula",
    ],
  },
  {
    slug: "kisah-nabi",
    section: "sirah",
    sectionName: "Sirah & Teladan",
    title: "Kisah Nabi & Pelajaran",
    short: "25 nabi dan rasul: kisahnya, cobaannya, dan pelajaran untuk hati.",
    estimatedMinutes: 30,
    keyPoints: [
      "Ada 25 nabi dan rasul yang wajib diketahui namanya, dari Adam sampai Muhammad.",
      "Kisah para nabi bukan dongeng — tiap kisah membawa pelajaran tentang sabar, taat, dan kembali kepada Allah.",
      "Nabi Nuh berdakwah 950 tahun dengan sedikit pengikut; pelajarannya: kesabaran dalam dakwah.",
      "Nabi Ibrahim diuji dengan perintah menyembelih putranya; pelajarannya: ketaatan total kepada Allah.",
      "Nabi Yusuf dibuang saudara, dijual, dipenjara tanpa salah — lalu Allah angkat derajatnya; pelajarannya: ujian adalah jalan menuju kemuliaan.",
      "Nabi Musa menghadapi Fir'aun; pelajarannya: keberanian menyampaikan kebenaran.",
      "Kisah diringkas dari Al-Quran — bagian yang tidak diceritakan rinci tidak ditambah detail rekaan.",
    ],
    example: "Apa pelajaran terbesar dari kisah Nabi Yusuf?",
    exampleAnswer: "Ujian yang panjang bukan akhir — Yusuf dibuang, dijual, dipenjara, lalu menjadi bendahara Mesir. Sabar dan menjaga diri dari maksiat adalah jalannya.",
    sections: [
      {
        heading: "Dua Puluh Lima Nabi dan Rasul",
        body: [
          "Ada dua puluh lima nabi dan rasul yang wajib diketahui namanya, dari Nabi Adam sampai Nabi Muhammad. Jumlah rasul yang diutus Allah sebenarnya jauh lebih banyak, tetapi yang disebutkan namanya dalam Al-Quran ada dua puluh lima, dan mereka inilah yang menjadi kewajiban bagi setiap muslim untuk mengenalnya. Menghafal nama-nama mereka adalah langkah awal untuk mempelajari kisah mereka satu demi satu.",
          "Urutan para nabi ini mengikuti garis waktu sejarah, dari Adam sebagai manusia pertama, lalu Idris, Nuh, Hud, Shalih, Ibrahim, dan seterusnya, sampai Isa dan Muhammad sebagai penutup para nabi. Setiap nabi hidup di zamannya masing-masing, menghadapi umatnya masing-masing, dan membawa ajaran yang sama pada pokoknya, yaitu menyembah Allah semata.",
          "Halaman Kisah Nabi pada web ini menyajikan ringkasan kisah kedua puluh lima nabi tersebut, masing-masing dengan cobaan dan pelajarannya. Materi ini memberikan gambaran besarnya, dan untuk kisah yang lebih rinci, kita bisa membaca surah-surah yang menceritakan mereka di dalam Al-Quran.",
        ],
      },
      {
        heading: "Kisah Bukan Dongeng",
        body: [
          "Kisah para nabi bukan dongeng, melainkan kisah nyata yang diceritakan Al-Quran sebagai pelajaran bagi orang yang berakal. Tiap kisah membawa pelajaran tentang sabar, taat, dan kembali kepada Allah, dan tiap kisah diceritakan dengan cara yang mengajak pembacanya merenung, bukan sekadar menghibur. Orang yang membaca kisah para nabi dengan hati yang terbuka akan menemukan dirinya sendiri di dalam kisah itu, karena ujian yang mereka hadapi mirip dengan ujian yang kita hadapi hari ini.",
          "Kisah-kisah ini diringkas dari Al-Quran, dan bagian yang tidak diceritakan secara rinci tidak ditambah dengan detail rekaan. Sikap ini penting, karena menambahkan detail yang tidak ada sumbernya akan mengubah kisah yang benar menjadi cerita yang bercampur dengan khayalan. Bila Al-Quran tidak merinci suatu bagian, kita menerimanya sebagaimana adanya, tanpa perlu mengarang kelanjutannya.",
          "Cara terbaik membaca kisah para nabi adalah dengan bertanya pada diri sendiri setelah membacanya, yaitu pelajaran apa yang bisa kuambil untuk hidupku hari ini. Bila pertanyaan itu dijawab dengan jujur, kisah para nabi akan berhenti menjadi cerita masa lalu, dan berubah menjadi cermin bagi kehidupan kita sendiri.",
        ],
      },
      {
        heading: "Nabi Nuh: Kesabaran dalam Dakwah",
        body: [
          "Nabi Nuh berdakwah selama sembilan ratus lima puluh tahun, sebagaimana disebutkan dalam Al-Quran surah Al-Ankabut ayat 14, dan pengikutnya tetap sedikit. Sembilan setengah abad adalah waktu yang sangat panjang, jauh melampaui usia manusia biasa, tetapi Nuh tetap berdakwah dengan sabar, siang dan malam, tanpa berhenti meskipun umatnya menolak dan mengejeknya.",
          "Pelajaran dari kisah Nuh adalah kesabaran dalam dakwah dan dalam kebaikan pada umumnya. Hasil tidak selalu datang dengan cepat, dan jumlah pengikut bukan ukuran keberhasilan. Nuh tetap berdakwah meskipun yang mengikutinya sedikit, karena tugasnya adalah menyampaikan, sedangkan hasil adalah urusan Allah. Sikap ini adalah pelajaran bagi siapa pun yang berbuat baik tetapi merasa hasilnya tidak terlihat.",
          "Kisah Nuh juga mengingatkan bahwa kesabaran bukan berarti pasrah tanpa usaha. Nuh membangun bahtera sesuai perintah Allah, dan ia terus mengajak umatnya sampai akhir. Kesabaran yang benar adalah kesabaran yang disertai usaha yang terus-menerus, bukan kesabaran yang diam dan menunggu tanpa berbuat apa-apa.",
        ],
      },
      {
        heading: "Nabi Ibrahim: Ketaatan Total",
        body: [
          "Nabi Ibrahim diuji dengan perintah yang sangat berat, yaitu menyembelih putranya, sebagaimana diceritakan dalam Al-Quran surah Ash-Shaffat ayat 102. Perintah ini datang melalui mimpi, dan Ibrahim serta putranya sama-sama tunduk kepada perintah Allah, tanpa ragu dan tanpa menolak. Di saat terakhir, Allah mengganti putra Ibrahim dengan sembelihan yang besar, dan ujian itu pun selesai dengan kemenangan bagi keduanya.",
          "Pelajaran dari kisah Ibrahim adalah ketaatan total kepada Allah, bahkan ketika perintah itu berat dan tidak masuk akal menurut ukuran manusia. Ketaatan seperti ini lahir dari keyakinan bahwa Allah Maha Mengetahui apa yang terbaik, dan bahwa perintah-Nya tidak pernah sia-sia. Ibrahim tidak bertanya mengapa, melainkan tunduk, dan ketundukan itulah yang membuatnya menjadi teladan bagi seluruh umat sesudahnya.",
          "Ujian Ibrahim juga mengingatkan kita bahwa apa yang paling kita cintai bisa menjadi ujian. Putra Ibrahim adalah anak yang sangat dicintainya, dan justru anak itulah yang menjadi ujian ketaatannya. Pelajaran ini mengajak kita untuk memeriksa hati, apakah ada sesuatu yang kita cintai melebihi cinta kita kepada Allah, dan apakah kita siap melepaskannya bila Allah memintanya.",
        ],
      },
      {
        heading: "Nabi Yusuf: Ujian adalah Jalan Menuju Kemuliaan",
        body: [
          "Nabi Yusuf dibuang oleh saudara-saudaranya, dijual sebagai budak di Mesir, difitnah, dan dipenjara tanpa salah, lalu Allah mengangkat derajatnya hingga ia menjadi bendahara Mesir. Rangkaian ujian ini berlangsung bertahun-tahun, dan di setiap tahapnya, Yusuf tetap menjaga diri dari maksiat dan tetap bertawakal kepada Allah, tanpa membalas kejahatan dengan kejahatan.",
          "Pelajaran terbesar dari kisah Yusuf adalah bahwa ujian yang panjang bukan akhir dari segalanya. Yusuf tidak tahu kapan ujiannya akan berakhir, tetapi ia tetap sabar dan tetap berbuat baik, dan pada akhirnya Allah membalikkan keadaan dengan cara yang tidak pernah ia bayangkan. Orang yang sedang diuji bisa mengambil pelajaran ini, bahwa kesabaran hari ini bisa menjadi kemuliaan esok hari.",
          "Kisah Yusuf juga mengajarkan tentang menjaga diri dari maksiat di saat tidak ada yang melihat. Ketika digoda untuk berbuat dosa, Yusuf menolak dan memilih penjara daripada maksiat, dan pilihan itulah yang menjadi titik balik dalam hidupnya. Menjaga diri dari maksiat memang tidak selalu mudah, tetapi kisah Yusuf menunjukkan bahwa menjaga diri adalah jalan menuju kemuliaan, bukan jalan menuju kerugian.",
        ],
      },
      {
        heading: "Nabi Musa: Keberanian Menyampaikan Kebenaran",
        body: [
          "Nabi Musa menghadapi Firaun, penguasa yang mengaku sebagai tuhan dan menindas Bani Israil dengan kejam. Musa datang kepadanya bukan dengan pasukan dan senjata, melainkan dengan kebenaran dan mukjizat dari Allah, dan ia menyampaikan kebenaran itu dengan berani, meskipun Firaun mengancamnya dengan hukuman yang berat.",
          "Pelajaran dari kisah Musa adalah keberanian menyampaikan kebenaran, meskipun yang dihadapi adalah kekuasaan yang besar. Keberanian ini bukan keberanian yang nekat, melainkan keberanian yang lahir dari keyakinan bahwa Allah bersama orang yang benar. Musa tidak berani karena ia kuat, melainkan karena ia yakin bahwa Allah yang menyertainya lebih kuat dari Firaun.",
          "Kisah Musa juga mengajarkan bahwa menyampaikan kebenaran tidak selalu langsung diterima. Firaun menolak, para penyihirnya mula-mula menentang, dan Bani Israil sendiri sering mengeluh dan tidak sabar. Tetapi Musa tetap menyampaikan kebenaran dengan sabar, dan pada akhirnya kebenaran itu menang, meskipun jalannya panjang dan berliku.",
          "Selain keenam kisah di atas, ada pula kisah nabi-nabi lain yang pelajarannya tidak kalah berharga, misalnya Nabi Ayyub yang sabar dalam sakit yang panjang, dan Nabi Yunus yang berdoa dari dalam perut ikan setelah menyadari kesalahannya. Kisah-kisah ini bisa dibaca satu demi satu di halaman Kisah Nabi pada web ini, dan tiap kisah membawa pelajarannya sendiri, sehingga membaca semuanya akan memperkaya pemahaman kita tentang sabar, taubat, dan pertolongan Allah.",
        ],
      },
    ],
    sources: [
      "Al-Quran, QS Al-'Ankabut: 14 tentang dakwah Nabi Nuh",
      "Al-Quran, QS Ash-Shaffat: 102 tentang ujian Nabi Ibrahim",
      "Al-Quran, surah Yusuf dan surah-surah yang menceritakan para nabi",
      "Halaman Kisah Nabi pada web ini",
    ],
  },
  {
    slug: "teladan-nabi",
    section: "sirah",
    sectionName: "Sirah & Teladan",
    title: "Teladan Nabi Muhammad",
    short: "Kelahiran, kenabian, akhlak, hijrah, dan sunnah beliau dalam keseharian.",
    estimatedMinutes: 30,
    keyPoints: [
      "Nabi Muhammad lahir di Makkah, 12 Rabiul Awal Tahun Gajah (570 M), dari Bani Hasyim.",
      "Gelar Al-Amin (yang terpercaya) sudah beliau sandang sebelum kenabian karena kejujurannya.",
      "Wahyu pertama turun di Gua Hira: 'Iqra' bismi rabbik' (Bacalah dengan nama Tuhanmu) — QS Al-'Alaq: 1-5.",
      "Dakwah 13 tahun di Makkah lalu hijrah ke Madinah; di Madinah dibangun masyarakat Islam pertama.",
      "Akhlak beliau: penyayang, pemaaf, rendah hati, dan menepati janji — 'Sebaik-baik kalian adalah yang terbaik akhlaknya'.",
      "Sunnah beliau meliputi ibadah dan keseharian: cara makan, tidur, bertamu, dan bermuamalah.",
      "Beliau wafat 11 Hijriah (632 M) di Madinah; risalahnya diteruskan Al-Quran dan sunnah.",
    ],
    example: "Kenapa Nabi Muhammad digelari Al-Amin sebelum menjadi nabi?",
    exampleAnswer: "Karena kejujurannya sudah teruji — masyarakat Makkah menitipkan barang berharga kepadanya. Akhlak mendahului kenabian.",
    sections: [
      {
        heading: "Kelahiran di Makkah",
        body: [
          "Nabi Muhammad lahir di Makkah pada tanggal dua belas Rabiul Awal Tahun Gajah, yaitu tahun lima ratus tujuh puluh Masehi, dari Bani Hasyim, salah satu kabilah Quraisy yang terpandang. Tahun kelahirannya disebut Tahun Gajah karena pada tahun itu pasukan bergajah yang hendak menyerang Ka'bah gagal dan hancur, dan peristiwa itu menjadi penanda zaman yang diingat oleh masyarakat Arab.",
          "Beliau lahir sebagai anak yatim, karena ayahnya, Abdullah, wafat sebelum beliau lahir, dan ibunya, Aminah, wafat ketika beliau masih kecil. Beliau kemudian diasuh oleh kakeknya, Abdul Muthalib, lalu oleh pamannya, Abu Thalib, yang merawatnya dengan penuh kasih sayang meskipun hidup mereka sederhana. Masa kecil yang penuh kehilangan ini membentuk pribadi beliau yang peka terhadap anak yatim dan orang yang lemah.",
          "Kelahiran Nabi Muhammad tidak disertai kemewahan dunia, tetapi justru kesederhanaan itulah yang menjadi ciri hidup beliau sampai akhir hayatnya. Beliau lahir di tengah masyarakat yang menyembah berhala, dan beliau tumbuh menjadi pribadi yang tidak pernah ikut menyembah berhala, meskipun itu adalah kebiasaan masyarakat di sekitarnya.",
        ],
      },
      {
        heading: "Al-Amin: Yang Terpercaya",
        body: [
          "Sebelum menjadi nabi, Nabi Muhammad sudah digelari Al-Amin, yang berarti yang terpercaya, karena kejujurannya yang sudah teruji di tengah masyarakat Makkah. Masyarakat Makkah menitipkan barang-barang berharga kepadanya, karena mereka tahu bahwa barang itu akan dijaga dengan aman dan dikembalikan dengan utuh. Gelar ini bukan pemberian dari keluarganya, melainkan pengakuan dari masyarakat yang melihat sendiri akhlak beliau sehari-hari.",
          "Kejujuran beliau juga terlihat dalam perdagangannya. Beliau berdagang dengan jujur, tidak menipu timbangan, tidak menyembunyikan cacat barang, dan tidak mengingkari janji. Karena kejujurannya inilah Khadijah, seorang pedagang kaya di Makkah, mempercayakan dagangannya kepada beliau, dan kemudian menikah dengan beliau.",
          "Gelar Al-Amin ini mengajarkan pelajaran yang sangat penting, yaitu bahwa akhlak mendahului kenabian. Sebelum Allah mengangkat beliau menjadi nabi, manusia sudah mengakui kejujuran dan kepercayaannya. Orang yang ingin meneladani Nabi Muhammad sebaiknya memulai dari akhlaknya, yaitu jujur dan dapat dipercaya, karena itulah fondasi yang membuat dakwah beliau diterima oleh manusia.",
        ],
      },
      {
        heading: "Wahyu Pertama di Gua Hira",
        body: [
          "Wahyu pertama turun di Gua Hira, sebuah gua di Jabal Nur, tempat Nabi Muhammad biasa menyendiri dan merenung. Di sanalah Malaikat Jibril datang dan membawakan perintah yang pertama, yaitu iqra bismi rabbik, bacalah dengan nama Tuhanmu, sebagaimana disebutkan dalam Al-Quran surah Al-Alaq ayat satu sampai lima. Perintah pertama ini adalah perintah membaca, dan ia menjadi tanda bahwa Islam adalah agama ilmu sejak hari pertama.",
          "Nabi Muhammad menerima wahyu itu dengan gemetar, dan beliau pulang ke rumah menemui Khadijah, yang menenangkannya dan meyakinkannya bahwa Allah tidak akan menghinakan beliau. Dukungan Khadijah pada saat yang paling genting ini adalah salah satu kisah yang paling mengharukan dalam sirah, karena ia menunjukkan betapa pentingnya pasangan yang beriman dan menenangkan di saat-saat sulit.",
          "Setelah wahyu pertama, ada masa jeda sebelum wahyu berikutnya turun, dan pada masa itu Nabi Muhammad menunggu dengan cemas. Lalu wahyu kembali turun, dan dakwah pun dimulai, mula-mula secara sembunyi-sembunyi kepada keluarga dan orang-orang terdekat, lalu secara terang-terangan kepada seluruh masyarakat Makkah.",
        ],
      },
      {
        heading: "Dakwah di Makkah dan Hijrah ke Madinah",
        body: [
          "Dakwah di Makkah berlangsung selama tiga belas tahun, dan masa ini penuh dengan ujian yang berat. Nabi dan para pengikutnya dihina, diboikot, disiksa, dan sebagian dibunuh, tetapi mereka tetap bertahan dengan sabar. Tiga belas tahun ini adalah masa membangun fondasi iman, karena para sahabat ditempa dengan ujian yang berat sebelum mereka diberi kemenangan.",
          "Setelah tiga belas tahun, Allah memerintahkan hijrah ke Madinah, dan Nabi Muhammad pun berhijrah bersama para sahabatnya. Hijrah bukan pelarian, melainkan langkah strategis menuju tempat di mana Islam bisa tumbuh dan berkembang. Di Madinah, Nabi membangun masjid, mempersaudarakan kaum Muhajirin dan Anshar, dan membangun masyarakat Islam pertama yang diatur dengan aturan-aturan yang adil.",
          "Hijrah menjadi titik balik dalam sejarah Islam, dan tahun hijrah dijadikan sebagai awal penanggalan Hijriah. Peristiwa ini mengajarkan bahwa dalam berdakwah, kadang perlu berpindah tempat dan mengubah strategi, dan bahwa kesabaran di masa sulit akan berbuah kemenangan bila disertai dengan langkah yang tepat dan tawakal kepada Allah.",
        ],
      },
      {
        heading: "Akhlak Nabi Muhammad",
        body: [
          "Akhlak Nabi Muhammad adalah akhlak yang paling mulia, dan beliau sendiri bersabda bahwa sebaik-baik kalian adalah yang terbaik akhlaknya. Beliau penyayang, terutama kepada anak-anak dan orang yang lemah, pemaaf kepada mereka yang pernah menyakitinya, rendah hati meskipun beliau adalah pemimpin umat, dan selalu menepati janji, bahkan kepada orang yang bukan muslim sekalipun.",
          "Salah satu bukti akhlak beliau yang paling terkenal adalah ketika beliau kembali ke Makkah sebagai pemenang setelah bertahun-tahun diusir dan diperangi, beliau memaafkan penduduk Makkah yang dahulu memusuhinya, dan tidak membalas dendam sedikit pun. Sikap pemaaf ini adalah akhlak yang sulit ditiru, tetapi justru itulah yang membuat dakwah beliau diterima dan dicintai oleh manusia.",
          "Meneladani akhlak Nabi tidak harus dimulai dari hal yang besar. Memulainya bisa dari hal yang kecil, seperti tersenyum kepada saudara, menepati janji yang kecil, dan memaafkan orang yang bersalah kepada kita. Akhlak yang besar dibangun dari kebiasaan-kebiasaan kecil yang dilakukan setiap hari, dan setiap kebiasaan kecil itu adalah langkah meneladani Nabi Muhammad.",
        ],
      },
      {
        heading: "Sunnah dalam Keseharian",
        body: [
          "Sunnah Nabi Muhammad meliputi ibadah dan keseharian, yaitu cara makan, tidur, bertamu, dan bermuamalah. Dalam makan, beliau mengajarkan untuk membaca basmalah, makan dengan tangan kanan, dan tidak mencela makanan. Dalam tidur, beliau mengajarkan untuk berwudhu dan membaca doa sebelum tidur. Dalam bertamu, beliau mengajarkan untuk memberi salam dan menjaga adab. Dalam bermuamalah, beliau mengajarkan kejujuran dan amanah.",
          "Sunnah-sunnah keseharian ini sering dianggap sepele, tetapi justru di sinilah letak keteladanan yang paling nyata. Ibadah yang besar seperti shalat dan puasa memang penting, tetapi cara seseorang makan, tidur, dan berinteraksi dengan orang lain adalah cerminan akhlaknya sehari-hari. Orang yang meneladani sunnah dalam hal-hal kecil akan lebih mudah meneladani sunnah dalam hal-hal yang besar.",
          "Belajar sunnah keseharian bisa dimulai dari satu sunnah saja, misalnya membaca basmalah sebelum makan, lalu setelah menjadi kebiasaan, tambah satu sunnah lagi, dan begitu seterusnya. Cara bertahap seperti ini membuat sunnah menjadi bagian dari hidup, bukan sekadar hafalan yang tidak pernah diamalkan.",
        ],
      },
      {
        heading: "Wafat dan Risalah yang Diteruskan",
        body: [
          "Nabi Muhammad wafat pada tahun sebelas Hijriah, yaitu tahun enam ratus tiga puluh dua Masehi, di Madinah, dan beliau dimakamkan di rumah Aisyah, yang kemudian menjadi bagian dari Masjid Nabawi. Wafatnya beliau adalah hari yang paling berat bagi para sahabat, karena mereka kehilangan pemimpin, guru, dan teladan mereka dalam satu hari.",
          "Tetapi risalah beliau tidak wafat bersama beliau. Al-Quran tetap terjaga, sunnah beliau tetap diriwayatkan oleh para sahabat, dan umat Islam terus menyebarkan ajaran beliau ke seluruh dunia sampai hari ini. Wafatnya Nabi adalah akhir dari kenabian, tetapi bukan akhir dari Islam, karena Islam adalah agama yang ajarannya sudah sempurna dan terjaga.",
          "Pelajaran dari wafatnya Nabi adalah bahwa tidak ada manusia yang kekal, termasuk nabi sekalipun, dan yang kekal adalah ajaran yang dibawanya. Karena itu, mencintai Nabi Muhammad berarti mengikuti ajarannya, menjaga sunnahnya, dan menyebarkan akhlaknya, bukan sekadar mengenang beliau tanpa mengamalkan apa yang beliau ajarkan.",
        ],
      },
    ],
    sources: [
      "Al-Quran, QS Al-'Alaq: 1-5 tentang wahyu pertama",
      "Sirah Nabi Muhammad tentang kelahiran, dakwah, hijrah, dan wafat beliau",
    ],
  },
  {
    slug: "adab-sehari-hari",
    section: "akhlak",
    sectionName: "Akhlak & Hidup",
    title: "Adab Sehari-hari",
    short: "Adab makan, tidur, bertamu, berbicara, dan berbakti kepada orang tua.",
    estimatedMinutes: 30,
    keyPoints: [
      "Adab adalah akhlak dalam perbuatan sehari-hari — Islam mengatur hal kecil sekalipun.",
      "Adab makan: membaca basmalah, makan dengan tangan kanan, tidak mencela makanan.",
      "Adab tidur: berwudhu, membaca doa, tidur menghadap kanan.",
      "Adab bertamu: memberi salam, tidak mengintip, tidak berlama-lama tanpa keperluan.",
      "Birrul walidain (berbakti kepada orang tua) adalah amal yang sangat besar — ridha Allah terletak pada ridha orang tua.",
      "Adab kepada guru: mendengar dengan hormat, tidak memotong pembicaraan, mendoakannya.",
      "Senyum kepada saudaramu adalah sedekah (HR. Tirmidzi).",
    ],
    example: "Seorang teman bercerita panjang, kamu ingin memotong karena sudah tahu ujungnya. Apa adabnya?",
    exampleAnswer: "Dengarkan sampai selesai — memotong pembicaraan adalah adab yang buruk. Mendengar dengan sabar termasuk akhlak.",
    sections: [
      {
        heading: "Adab adalah Akhlak dalam Perbuatan",
        body: [
          "Adab adalah akhlak dalam perbuatan sehari-hari, dan Islam mengatur hal kecil sekalipun, dari cara makan sampai cara bertamu. Hal ini menunjukkan bahwa Islam bukan hanya agama ibadah di masjid, melainkan agama yang mengatur seluruh kehidupan, termasuk hal-hal yang tampak sepele. Orang yang memperhatikan adab dalam hal kecil akan lebih mudah memperhatikan akhlak dalam hal besar.",
          "Adab berbeda dengan hukum dalam arti yang sempit. Hukum berbicara tentang wajib dan haram, sedangkan adab berbicara tentang pantas dan tidak pantas, sopan dan tidak sopan. Seseorang bisa saja tidak berdosa secara hukum karena melanggar adab, tetapi ia kehilangan keindahan akhlak, dan kehilangan itu terasa dalam pergaulan sehari-hari, karena orang lain akan merasakan sikapnya yang kurang sopan.",
          "Mempelajari adab adalah mempelajari cara hidup yang indah. Seorang muslim yang beradab akan disenangi oleh orang di sekitarnya, karena sikapnya menenangkan dan tidak menyakiti. Adab adalah dakwah yang paling halus, karena orang yang melihat akhlak yang baik akan tertarik pada agama yang mengajarkan akhlak itu, tanpa perlu diberi ceramah panjang.",
        ],
      },
      {
        heading: "Adab Makan",
        body: [
          "Adab makan yang pertama adalah membaca basmalah sebelum makan, yaitu menyebut nama Allah sebagai tanda syukur atas rezeki yang diberikan. Membaca basmalah juga mengingatkan kita bahwa makanan yang kita makan adalah pemberian Allah, bukan semata-mata hasil usaha kita sendiri, dan kesadaran ini membuat kita lebih bersyukur dan tidak berlebihan dalam makan.",
          "Adab berikutnya adalah makan dengan tangan kanan, sebagaimana diajarkan Nabi Muhammad, dan tidak mencela makanan. Bila makanan itu disukai, makanlah, dan bila tidak disukai, tinggalkanlah tanpa mencela, karena mencela makanan adalah sikap yang menyakiti orang yang memasak dan menunjukkan kurangnya rasa syukur atas nikmat Allah.",
          "Adab makan juga mencakup makan secukupnya dan tidak berlebihan, serta makan bersama-sama dengan keluarga bila memungkinkan. Makan bersama adalah momen kebersamaan yang mempererat hubungan keluarga, dan Nabi mengajarkan keberkahan dalam makan bersama, karena makanan yang dimakan bersama terasa lebih berkah daripada makanan yang dimakan sendirian.",
        ],
      },
      {
        heading: "Adab Tidur",
        body: [
          "Adab tidur dimulai dengan berwudhu sebelum tidur, sebagaimana yang diajarkan Nabi Muhammad. Berwudhu sebelum tidur membersihkan diri dan menenangkan hati, sehingga tidur menjadi lebih nyenyak dan lebih berkah. Setelah berwudhu, disunnahkan membaca doa sebelum tidur, yaitu doa yang diajarkan Nabi, dan doa ini bisa dilihat pada halaman Doa di web ini.",
          "Posisi tidur yang dianjurkan adalah tidur menghadap ke kanan, yaitu berbaring dengan tubuh menghadap ke arah kanan. Posisi ini adalah posisi yang biasa dilakukan Nabi, dan selain mengikuti sunnah, tidur menghadap kanan juga dianggap baik bagi kesehatan, karena ia tidak menekan jantung dan membantu pencernaan.",
          "Tidur yang beradab bukan hanya soal posisi, melainkan juga soal waktu. Tidur terlalu larut tanpa keperluan membuat seseorang sulit bangun untuk shalat Subuh, dan karena itu, seorang muslim dianjurkan untuk tidak begadang tanpa keperluan yang jelas. Tidur yang cukup dan tepat waktu adalah bagian dari menjaga ibadah, karena tubuh yang segar akan lebih mudah beribadah dengan khusyuk.",
        ],
      },
      {
        heading: "Adab Bertamu dan Berbicara",
        body: [
          "Adab bertamu dimulai dengan memberi salam ketika masuk ke rumah orang lain, dan meminta izin sebelum masuk. Seorang tamu tidak boleh mengintip ke dalam rumah dari luar, dan tidak boleh berlama-lama tanpa keperluan, karena bertamu yang terlalu lama bisa merepotkan tuan rumah. Tamu yang baik adalah tamu yang tahu diri, datang pada waktu yang tepat, dan pulang pada waktu yang tepat.",
          "Adab berbicara tidak kalah pentingnya, dan yang paling utama adalah mendengarkan dengan sabar. Seorang teman yang bercerita panjang, misalnya, sebaiknya didengarkan sampai selesai, meskipun kita sudah tahu ujung ceritanya. Memotong pembicaraan adalah adab yang buruk, karena ia menunjukkan bahwa kita tidak menghargai orang yang sedang berbicara, dan mendengar dengan sabar adalah termasuk akhlak yang mulia.",
          "Selain mendengarkan, adab berbicara juga mencakup berbicara dengan suara yang tidak terlalu keras, tidak berkata kasar, dan tidak membicarakan keburukan orang lain di belakangnya. Lisan adalah anggota tubuh yang paling mudah berbuat dosa, dan karena itu, menjaga lisan adalah salah satu latihan akhlak yang paling penting dalam kehidupan sehari-hari.",
        ],
      },
      {
        heading: "Birrul Walidain: Berbakti kepada Orang Tua",
        body: [
          "Birrul walidain, yaitu berbakti kepada orang tua, adalah amal yang sangat besar dalam Islam, dan ridha Allah terletak pada ridha orang tua. Artinya, seseorang yang membuat orang tuanya ridha akan mendapatkan ridha Allah, dan seseorang yang membuat orang tuanya murka akan mendapatkan murka Allah. Kedudukan orang tua dalam Islam sangat tinggi, dan berbakti kepada mereka adalah kewajiban yang datang setelah kewajiban menyembah Allah.",
          "Berbakti kepada orang tua tidak hanya berarti menaati perintah mereka, tetapi juga bersikap lembut dalam berbicara, melayani kebutuhan mereka, dan mendoakan mereka, baik ketika mereka masih hidup maupun setelah wafat. Doa untuk kedua orang tua bisa dibaca kapan saja, terutama setelah shalat, dan doa ini bisa dilihat pada halaman Doa di web ini.",
          "Dalam kehidupan sehari-hari, berbakti kepada orang tua bisa dimulai dari hal yang sederhana, seperti membantu pekerjaan rumah, menanyakan kabar mereka, dan meluangkan waktu untuk mereka. Orang tua tidak selalu membutuhkan harta yang besar dari anaknya, tetapi mereka sangat membutuhkan perhatian dan kelembutan, dan perhatian seperti inilah yang menjadi bentuk bakti yang paling berkesan.",
        ],
      },
      {
        heading: "Adab kepada Guru dan Senyum sebagai Sedekah",
        body: [
          "Adab kepada guru adalah mendengarkan dengan hormat, tidak memotong pembicaraan, dan mendoakan guru tersebut. Guru adalah orang yang menyampaikan ilmu, dan ilmu adalah cahaya yang membimbing hidup, sehingga menghormati guru adalah bagian dari menghormati ilmu itu sendiri. Seseorang yang tidak menghormati gurunya akan sulit mendapatkan keberkahan dari ilmu yang dipelajarinya.",
          "Adab kepada guru juga mencakup tidak meninggikan suara di hadapan guru, tidak mendebat dengan cara yang kasar, dan bersikap rendah hati ketika bertanya. Bertanya adalah hal yang baik, tetapi cara bertanya harus dijaga, agar tidak terkesan meremehkan atau menguji guru, melainkan benar-benar ingin memahami.",
          "Yang terakhir, dan yang paling sederhana, adalah senyum kepada saudara, karena senyum kepada saudaramu adalah sedekah, sebagaimana disebutkan dalam hadits riwayat Tirmidzi. Senyum adalah sedekah yang tidak membutuhkan harta, tetapi dampaknya besar, karena ia menenangkan hati orang lain dan mempererat ukhuwah. Seorang muslim yang murah senyum adalah muslim yang murah kebaikan, dan kebaikan seperti inilah yang membuat Islam terasa indah bagi orang di sekitarnya.",
          "Adab juga berlaku kepada tetangga, yang haknya sangat ditekankan dalam Islam. Tetangga yang baik adalah tetangga yang tidak mengganggu, yang menolong saat dibutuhkan, dan yang berbagi makanan bila ada kelebihan. Dalam kehidupan sehari-hari, menjaga hubungan baik dengan tetangga adalah bentuk adab yang paling dekat dengan kita, karena tetangga adalah orang yang pertama kali merasakan sikap kita, sebelum orang lain yang jauh.",
        ],
      },
    ],
    sources: [
      "HR. Tirmidzi tentang senyum sebagai sedekah",
      "Al-Quran dan hadits tentang birrul walidain dan adab sehari-hari",
      "Halaman Doa pada web ini untuk doa sebelum tidur dan doa orang tua",
    ],
  },
  {
    slug: "halal-haram",
    section: "akhlak",
    sectionName: "Akhlak & Hidup",
    title: "Halal & Haram",
    short: "Yang dibolehkan dan yang dilarang: makanan, minuman, riba, dan cara memilahnya.",
    estimatedMinutes: 30,
    keyPoints: [
      "Halal adalah yang dibolehkan Allah; haram adalah yang dilarang — keduanya jelas dalam Al-Quran dan hadits.",
      "Makanan haram: babi, bangkai (kecuali ikan dan belalang), darah, dan hewan yang disembelih bukan atas nama Allah.",
      "Minuman haram: khamr (minuman memabukkan) dalam bentuk apa pun, sedikit atau banyak.",
      "Riba (tambahan dalam utang-piutang) adalah haram — hindari transaksi yang mengandung riba.",
      "Prinsipnya: segala sesuatu pada asalnya halal, kecuali ada dalil yang mengharamkan.",
      "Bila ragu: tanyakan pada yang berilmu, dan tinggalkan yang meragukan (syubhat).",
      "Halal-haram bukan sekadar makanan — mencakup harta, ucapan, dan perbuatan.",
    ],
    example: "Di restoran, kamu ragu dagingnya halal atau tidak. Apa langkahnya?",
    exampleAnswer: "Tanyakan ke penjualnya; bila tetap ragu dan tidak ada jawaban yang meyakinkan, tinggalkan — meninggalkan yang syubhat adalah kehati-hatian.",
    sections: [
      {
        heading: "Halal dan Haram: Dua Batas yang Jelas",
        body: [
          "Halal adalah yang dibolehkan Allah, dan haram adalah yang dilarang Allah, dan keduanya jelas dalam Al-Quran dan hadits. Kejelasan ini adalah rahmat, karena manusia tidak perlu menebak-nebak apa yang boleh dan apa yang tidak boleh, melainkan cukup merujuk pada petunjuk yang sudah diberikan. Batas halal dan haram adalah batas yang melindungi manusia, bukan batas yang menyulitkannya.",
          "Halal dan haram bukan sekadar soal makanan, melainkan mencakup harta, ucapan, dan perbuatan. Harta bisa halal atau haram tergantung cara memperolehnya, ucapan bisa halal atau haram tergantung isinya, dan perbuatan bisa halal atau haram tergantung bentuknya. Karena itu, memahami halal dan haram berarti memahami cara hidup secara keseluruhan, bukan hanya soal apa yang masuk ke dalam perut.",
          "Prinsip dasarnya adalah bahwa segala sesuatu pada asalnya halal, kecuali ada dalil yang mengharamkannya. Prinsip ini penting, karena ia mencegah seseorang mengharamkan sesuatu tanpa dasar, dan ia juga mencegah seseorang menghalalkan sesuatu yang sudah jelas haram. Bila tidak ada dalil yang mengharamkan, maka sesuatu itu tetap halal, dan bila ada dalil yang mengharamkan, maka sesuatu itu haram, meskipun terasa nikmat atau menguntungkan.",
        ],
      },
      {
        heading: "Makanan Haram",
        body: [
          "Makanan haram yang disebutkan dalam Al-Quran antara lain babi, bangkai kecuali ikan dan belalang, darah, dan hewan yang disembelih bukan atas nama Allah. Babi diharamkan dalam bentuk apa pun, baik dagingnya maupun bagian tubuhnya yang lain, dan keharaman ini berlaku tanpa kecuali, meskipun babi itu diolah menjadi makanan yang tampak lezat atau dicampur ke dalam makanan lain.",
          "Bangkai adalah hewan yang mati tanpa disembelih, dan ia diharamkan, kecuali ikan dan belalang, yang dikecualikan dari keharaman bangkai. Darah yang mengalir juga diharamkan, dan hewan yang disembelih bukan atas nama Allah diharamkan, karena penyembelihan dalam Islam harus menyebut nama Allah, sebagai tanda bahwa hewan itu disembelih dengan izin dan atas nama-Nya.",
          "Dalam kehidupan sehari-hari, kehati-hatian terhadap makanan haram berarti memperhatikan label makanan, menanyakan bahan makanan di restoran, dan memilih tempat makan yang jelas kehalalannya. Di Indonesia, label halal dari lembaga yang berwenang adalah panduan yang sangat membantu, dan memakainya adalah cara yang mudah untuk menjaga diri dari makanan haram.",
        ],
      },
      {
        heading: "Minuman Haram: Khamr",
        body: [
          "Minuman haram yang paling utama adalah khamr, yaitu minuman yang memabukkan, dalam bentuk apa pun, sedikit atau banyak. Khamr diharamkan bukan hanya bila diminum dalam jumlah banyak sampai mabuk, melainkan juga bila diminum sedikit, karena yang diharamkan adalah zatnya, bukan jumlahnya. Prinsip ini berlaku untuk semua minuman memabukkan, apa pun namanya dan dari bahan apa pun ia dibuat.",
          "Keharaman khamr bukan tanpa alasan. Minuman memabukkan menghilangkan akal, dan akal adalah anugerah Allah yang membedakan manusia dengan hewan. Orang yang mabuk tidak bisa berpikir jernih, tidak bisa shalat dengan benar, dan bisa berbuat hal-hal yang merugikan dirinya dan orang lain. Karena itu, Islam menutup pintu khamr sejak awal, dengan mengharamkannya dalam jumlah berapa pun.",
          "Di zaman sekarang, khamr tidak hanya berbentuk minuman keras tradisional, tetapi juga berbagai minuman dan zat yang memabukkan dengan nama dan kemasan yang modern. Prinsipnya tetap sama, yaitu apa pun yang memabukkan adalah haram, dan seorang muslim sebaiknya menjauhinya tanpa perlu menunggu sampai ia merasakan sendiri bahayanya.",
        ],
      },
      {
        heading: "Riba: Tambahan dalam Utang-Piutang",
        body: [
          "Riba adalah tambahan dalam utang-piutang, dan ia adalah haram. Bentuk riba yang paling umum adalah bunga pinjaman, yaitu ketika seseorang meminjam uang dan harus mengembalikannya dengan jumlah yang lebih besar dari yang dipinjam. Tambahan itu adalah riba, dan menghindarinya adalah kewajiban bagi setiap muslim, meskipun riba sudah menjadi hal yang biasa dalam sistem keuangan modern.",
          "Menghindari riba di zaman sekarang memang tidak mudah, karena banyak layanan keuangan yang mengandung unsur bunga, dari pinjaman bank sampai cicilan barang. Tetapi kesulitan bukan alasan untuk menyerah, karena kini sudah ada lembaga keuangan syariah yang menawarkan pembiayaan tanpa riba, dan ada pula cara-cara bermuamalah yang halal, seperti jual beli dengan harga yang jelas dan bagi hasil yang adil.",
          "Prinsip dalam menghadapi riba adalah menghindarinya sebisa mungkin, dan bila terpaksa berhadapan dengan sistem yang mengandung riba, carilah alternatif yang halal terlebih dahulu, dan bertanyalah kepada yang berilmu bila ragu. Kehati-hatian seperti ini adalah bagian dari menjaga harta agar tetap halal, dan harta yang halal akan membawa keberkahan bagi pemiliknya dan keluarganya.",
        ],
      },
      {
        heading: "Bila Ragu: Tanyakan dan Tinggalkan yang Syubhat",
        body: [
          "Dalam kehidupan sehari-hari, kita sering berhadapan dengan hal-hal yang statusnya tidak jelas, dan hal seperti ini disebut syubhat, yaitu perkara yang meragukan. Di restoran, misalnya, kita mungkin ragu apakah daging yang disajikan halal atau tidak. Langkah pertama adalah menanyakan kepada penjualnya, dan bila jawabannya meyakinkan, kita bisa memakannya dengan tenang.",
          "Bila setelah bertanya kita tetap ragu dan tidak ada jawaban yang meyakinkan, maka langkah yang dianjurkan adalah meninggalkannya. Meninggalkan yang syubhat adalah kehati-hatian, bukan kerugian, karena makanan yang kita tinggalkan bisa diganti dengan makanan lain yang jelas kehalalannya, sedangkan makanan yang meragukan bila dimakan akan membebani hati dan ibadah kita.",
          "Prinsip yang sama berlaku dalam hal lain, seperti transaksi keuangan yang meragukan atau pekerjaan yang mengandung unsur haram. Bila ragu, tanyakan pada yang berilmu, dan bila tetap ragu, tinggalkan. Sikap ini mungkin terasa berat pada awalnya, tetapi lama-lama ia menjadi kebiasaan, dan kebiasaan berhati-hati adalah salah satu ciri muslim yang menjaga agamanya dengan sungguh-sungguh.",
        ],
      },
      {
        heading: "Halal-Haram dalam Harta, Ucapan, dan Perbuatan",
        body: [
          "Halal dan haram bukan sekadar makanan, melainkan mencakup harta, ucapan, dan perbuatan. Harta yang diperoleh dengan cara menipu, mencuri, atau memakan riba adalah harta yang haram, meskipun bentuknya sama dengan harta yang halal. Ucapan yang berupa dusta, fitnah, atau ghibah adalah ucapan yang haram, meskipun diucapkan dengan kata-kata yang halus. Perbuatan yang berupa zalim, curang, atau menyakiti orang lain adalah perbuatan yang haram, meskipun dilakukan dengan senyuman.",
          "Kesadaran ini membuat seorang muslim lebih berhati-hati dalam seluruh hidupnya, bukan hanya di meja makan. Ia akan memeriksa cara ia memperoleh harta, cara ia berbicara, dan cara ia memperlakukan orang lain, karena semuanya akan dihisab di akhirat. Halal dan haram menjadi ukuran yang menyatukan seluruh kehidupan, dari yang paling kecil sampai yang paling besar.",
          "Pada akhirnya, menjaga halal dan haram adalah menjaga hubungan dengan Allah. Orang yang menjaga batas-batas Allah dalam hidupnya adalah orang yang menunjukkan cintanya kepada Allah dengan perbuatan, bukan hanya dengan ucapan. Dan orang yang menjaga batas-batas itu akan merasakan ketenangan, karena ia tahu bahwa hidupnya berada di jalan yang diridhai Allah.",
        ],
      },
    ],
    sources: [
      "Al-Quran dan hadits tentang makanan haram, khamr, dan riba",
      "Prinsip fikih tentang asal segala sesuatu adalah halal dan tentang syubhat",
    ],
  },
];
