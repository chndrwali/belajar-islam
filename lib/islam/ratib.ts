// Data halaman /ratib — Ratib al-Haddad.
//
// SUMBER TEKS ARAB: penjaganu.com (Penjaga Tradisi, blog NU),
// "Rotib al Haddad Lengkap Arab Latin dan Artinya serta Sejarah dan
// Fadhilahnya" — https://www.penjaganu.com/2020/03/bacaan-ratib-al-haddad-sejarah-khasiat.html
// Pembanding: quran.nuwajak.or.id (PCNU Wajak) — versi lebih pendek (16 bagian).
// Rujukan kitab yang dikutip sumber: Dzakhirah al-Ma'ad bi Syarhi Ratib
// al-Haddad (hal. 45) dan al-Imdad bi Syarhi Ratib al-Haddad (hal. 55).
//
// PEMBERSIHAN TEKS ARAB (lafaz tidak diubah): hanya artefak cetak yang
// dihapus — tatweel, tanda waqaf Uthmani, dan karakter nyasar; penanda
// jumlah di akhir bacaan (mis. ×٣) dipindah ke badge jumlah di halaman.
// Surah Al-Fatihah memakai teks yang sama dengan lib/islam/sholat.ts
// (BACAAN_FATIHAH) agar konsisten di seluruh situs.
//
// LATIN DAN ARTI adalah transliterasi/terjemahan situs ini dengan ejaan
// standar — BUKAN kutipan dari sumber (Latin sumber memakai ejaan Jawa dan
// mengandung typo). Jumlah bacaan mengikuti sumber; bagian tanpa penanda
// jumlah di sumber dibaca satu kali menurut kebiasaan.

import { BACAAN_FATIHAH } from "./sholat";

export interface RatibSection {
  no: number;
  title: string;
  arabic: string;
  latin: string;
  meaning: string;
  count: string; // mis. "3×"
  countNote?: string;
  note?: string;
}

// Tawassul pembuka bagian 1 (Fatihah-nya memakai BACAAN_FATIHAH).
const TAWASSUL_PREAMBLE_ARABIC = "إِلَى حَضْرَةِ سَيِّدِنَا وَشَفِيْعِنَا وَنَبِيِّنَا وَمَوْلَانَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، الفاتحة ...";

// Latin dan arti tawassul pembuka bagian 1 (Fatihah-nya dari BACAAN_FATIHAH).
const TAWASSUL_PREAMBLE_LATIN = "Ila hadrati sayyidina wa syafi'ina wa nabiyyina wa maulana Muhammadin shallallahu 'alaihi wa sallam, al-Fatihah...";
const TAWASSUL_PREAMBLE_MEANING = "Al-Fatihah untuk junjungan kami, pemberi syafaat kami, Nabi kami, dan pemimpin kami, Nabi Muhammad SAW.";

export const RATIB_SECTIONS: RatibSection[] = [
  {
    no: 1,
    title: "Tawassul pembuka dan Surah Al-Fatihah",
    arabic: `${TAWASSUL_PREAMBLE_ARABIC}\n\n${BACAAN_FATIHAH.arabic}`,
    latin: `${TAWASSUL_PREAMBLE_LATIN} ${BACAAN_FATIHAH.latin}`,
    meaning: `${TAWASSUL_PREAMBLE_MEANING} ${BACAAN_FATIHAH.meaning}`,
    count: "1×",
  },
  {
    no: 2,
    title: "Ayat Kursi",
    arabic: "اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَ اَلْحَيُّ الْقَيُّوْمُ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَ وَلَا ئَُوْدُهٗ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيْمُ.",
    latin: "Allahu la ilaha illa huwal hayyul qayyum. La ta'khudzuhu sinatun wa la naum. Lahu ma fis samawati wa ma fil ardh. Man dzalladzi yasyfa'u 'indahu illa bi idznih. Ya'lamu ma baina aidihim wa ma khalfahum. Wa la yuhithuna bi syai'in min 'ilmihi illa bima sya'. Wasi'a kursiyyuhus samawati wal ardh. Wa la ya'uduhu hifzhuhuma wa huwal 'aliyyul 'azhim.",
    meaning: "Allah, tidak ada tuhan selain Dia, Yang Maha Hidup, Yang terus-menerus mengurus (makhluk-Nya). Dia tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang di hadapan mereka dan apa yang di belakang mereka, dan mereka tidak mengetahui sesuatu pun dari ilmu-Nya kecuali apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya, dan Dia Maha Tinggi lagi Maha Besar. (QS Al-Baqarah: 255)",
    count: "1×",
  },
  {
    no: 3,
    title: "Dua ayat terakhir Surah Al-Baqarah",
    arabic: "اٰمَنَ الرَّسُوْلُ بِمَآ اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهٖ وَالْمُؤْمِنُوْنَ كُلٌّ اٰمَنَ بِاللّٰهِ وَمَلٰىِٕكَتِهٖ وَكُتُبِهٖ وَرُسُلِهٖ لَا نُفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهٖ وَقَالُوْا سَمِعْنَا وَاَطَعْنَا غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ، لَا يُكَلِّفُ اللّٰهُ نَفْسًا اِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَآ اِنْ نَّسِيْنَآ اَوْ اَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ اِصْرًا كَمَا حَمَلْتَهٗ عَلَى الَّذِيْنَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهٖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ.",
    latin: "Amanar rasulu bima unzila ilaihi min rabbihi wal mu'minun. Kullun amana billahi wa mala'ikatihi wa kutubihi wa rusulih. La nufarriqu baina ahadin min rusulih. Wa qalu sami'na wa atha'na, ghufranaka rabbana wa ilaikal mashir. La yukallifullahu nafsan illa wus'aha. Laha ma kasabat wa 'alaiha maktasabat. Rabbana la tu'akhidzna in nasina au akhtha'na. Rabbana wa la tahmil 'alaina ishran kama hamaltahu 'alalladzina min qablina. Rabbana wa la tuhammilna ma la thaqata lana bih. Wa'fu 'anna, waghfir lana, warhamna. Anta maulana, fanshurna 'alal qaumil kafirin.",
    meaning: "Rasul dan orang-orang beriman percaya kepada apa yang diturunkan kepadanya dari Tuhannya. Semuanya beriman kepada Allah, para malaikat-Nya, kitab-kitab-Nya, dan para rasul-Nya. (Mereka berkata,) 'Kami tidak membeda-bedakan seorang rasul pun dari rasul-rasul-Nya.' Mereka berkata, 'Kami mendengar dan kami menaati. Ampunan-Mu yang kami harapkan, wahai Tuhan kami, dan hanya kepada-Mu tempat kembali.' Allah tidak membebani seseorang kecuali sesuai kemampuannya. Ia mendapat (pahala) dari apa yang diusahakannya dan mendapat (siksa) dari apa yang dilakukannya. 'Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau salah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang sebelum kami. Ya Tuhan kami, janganlah Engkau bebankan kepada kami apa yang tidak sanggup kami pikul. Maafkanlah kami, ampunilah kami, dan rahmatilah kami. Engkaulah pelindung kami, maka tolonglah kami menghadapi orang-orang kafir.' (QS Al-Baqarah: 285–286)",
    count: "1×",
  },
  {
    no: 4,
    title: "Tahlil",
    arabic: "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ. لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيْتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    latin: "La ilaha illallahu wahdahu la syarika lah. Lahul mulku wa lahul hamdu yuhyi wa yumitu wa huwa 'ala kulli syai'in qadir.",
    meaning: "Tidak ada tuhan selain Allah semata, tidak ada sekutu bagi-Nya. Bagi-Nya segala kekuasaan dan bagi-Nya segala pujian. Dialah yang menghidupkan dan mematikan, dan Dia Maha Kuasa atas segala sesuatu.",
    count: "3×",
  },
  {
    no: 5,
    title: "Tasbih, tahmid, tahlil, takbir",
    arabic: "سُبْحَانَ اللهِ وَالْحَمْدُ لِلّٰهِ وَلَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ",
    latin: "Subhanallahi wal hamdu lillahi wa la ilaha illallahu wallahu akbar.",
    meaning: "Maha Suci Allah, segala puji bagi Allah, tidak ada tuhan selain Allah, dan Allah Maha Besar.",
    count: "3×",
  },
  {
    no: 6,
    title: "Doa mohon ampun dan taubat",
    arabic: "رَبَّنَا اغْفِرْ لَنَا وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيْمُ",
    latin: "Rabbanaghfir lana wa tub 'alaina innaka antat tawwabur rahim.",
    meaning: "Ya Tuhan kami, ampunilah kami dan terimalah taubat kami. Sungguh, Engkau Maha Penerima Taubat lagi Maha Penyayang.",
    count: "3×",
  },
  {
    no: 7,
    title: "Tasbih",
    arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ سُبْحَانَ اللهِ الْعَظِيْمِ",
    latin: "Subhanallahi wa bihamdihi subhanallahil 'azhim.",
    meaning: "Maha Suci Allah dan segala puji bagi-Nya, Maha Suci Allah Yang Maha Agung.",
    count: "3×",
  },
  {
    no: 8,
    title: "Shalawat",
    arabic: "اَللّٰهُمَّ صَلِّ عَلَى سَيْدِنَا مُحَمَّدٍ، اَللّٰهُمَّ صَلِّ عَلَيْهِ وَسَلِّمْ",
    latin: "Allahumma shalli 'ala sayyidina Muhammad. Allahumma shalli 'alaihi wa sallim.",
    meaning: "Ya Allah, limpahkanlah shalawat kepada junjungan kami Muhammad. Ya Allah, limpahkanlah shalawat dan salam kepadanya.",
    count: "3×",
  },
  {
    no: 9,
    title: "Ta'awudz dengan kalimat Allah yang sempurna",
    arabic: "أَعُوْذُ بِكَلِمَاتِ اللهِ التَّآمَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    latin: "A'udzu bi kalimatillahit tammati min syarri ma khalaq.",
    meaning: "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk-Nya.",
    count: "3×",
  },
  {
    no: 10,
    title: "Basmalah perlindungan",
    arabic: "بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلَا فِي الْسَّمَآءِ وَهُوَ الْسَّمِيْعُ الْعَلِيْمُ",
    latin: "Bismillahilladzi la yadhurru ma'asmihi syai'un fil ardhi wa la fis sama'i wa huwas sami'ul 'alim.",
    meaning: "Dengan nama Allah, yang dengan nama-Nya tidak ada sesuatu pun di bumi maupun di langit yang dapat membahayakan, dan Dia Maha Mendengar lagi Maha Mengetahui.",
    count: "3×",
  },
  {
    no: 11,
    title: "Ridha kepada Allah, Islam, dan Nabi Muhammad",
    arabic: "رَضِينَا بِاللهِ رَبًّا وَبِالْإِسْلَامِ دِيْنًا وَبِمُحَمَّدٍ نَبِيًّا وَرَسُوْلًا",
    latin: "Radhina billahi rabban wa bil islami dinan wa bi Muhammadin nabiyyan wa rasula.",
    meaning: "Kami ridha Allah sebagai Tuhan, Islam sebagai agama, dan Muhammad sebagai nabi dan rasul.",
    count: "3×",
  },
  {
    no: 12,
    title: "Basmalah dan pujian",
    arabic: "بِسْمِ اللهِ وَالْحَمْدُ لِلّٰهِ وَالْخَيْرُ وَالشَّرُّ بِمَشِيْئَةِ اللهِ",
    latin: "Bismillahi wal hamdu lillahi wal khairu wasy syarru bi masyi'atillah.",
    meaning: "Dengan nama Allah, segala puji bagi Allah. Kebaikan dan keburukan terjadi atas kehendak Allah.",
    count: "3×",
  },
  {
    no: 13,
    title: "Iman dan taubat",
    arabic: "اٰمَنَّا بِاللهِ وَالْيَوْمِ الْاٰخِرِ تُبْنَا إِلَى اللهِ بَاطِنًا وَظَاهِرًا",
    latin: "Amanna billahi wal yaumil akhir, tubna ilallahi bathinan wa zhahiran.",
    meaning: "Kami beriman kepada Allah dan hari akhir. Kami bertaubat kepada Allah, lahir dan batin.",
    count: "3×",
  },
  {
    no: 14,
    title: "Mohon maaf dan penghapusan dosa",
    arabic: "يَا رَبَّنَا وَاعْفُ عَنَّا وَامْحُ الَّذِيْ كَانَ مِنَّا",
    latin: "Ya rabbana wa'fu 'anna wamhul ladzi kana minna.",
    meaning: "Ya Tuhan kami, maafkanlah kami dan hapuskanlah dosa-dosa kami.",
    count: "3×",
  },
  {
    no: 15,
    title: "Mohon wafat dalam Islam",
    arabic: "يَا ذَا الْجَلَالِ وَالإِكْرَامِ أَمِتْنَا عَلَى دِيْنِ الْإِسْلَامِ",
    latin: "Ya dzal jalali wal ikram, amitna 'ala dinil islam.",
    meaning: "Wahai Zat Yang Maha Agung dan Maha Mulia, wafatkanlah kami dalam keadaan beragama Islam.",
    count: "7×",
  },
  {
    no: 16,
    title: "Mohon dijauhkan dari kezaliman",
    arabic: "يَا قَوِيُّ يَا مَتِيْنُ، اِكْفِ شَرَّ الظَّالِمِيْنَ",
    latin: "Ya qawiyyu ya matin, ikfi syarradh zhalimin.",
    meaning: "Wahai Zat Yang Maha Kuat lagi Maha Kokoh, lindungilah kami dari kejahatan orang-orang zalim.",
    count: "3×",
  },
  {
    no: 17,
    title: "Doa untuk kaum muslimin",
    arabic: "أَصْلَحَ اللهُ أُمُوْرَ الْمُسْلِمِيْنَ صَرَفَ اللهُ شَرَّ الْمُؤْذِيْنَ",
    latin: "Ashlahallahu umur al-muslimin, sharafallahu syarral mu'dzin.",
    meaning: "Semoga Allah memperbaiki urusan kaum muslimin dan menghindarkan mereka dari kejahatan orang-orang yang suka menyakiti.",
    count: "3×",
  },
  {
    no: 18,
    title: "Asmaul Husna (delapan nama)",
    arabic: "يَا عَلِيُّ يَا كَبِيْرُ يَا عَلِيْمُ يَا قَدِيْرُ يَا سَمِيعُ يَا بَصِيْرُ يَا لَطِيْفُ يَا خَبِيْرُ",
    latin: "Ya 'aliyyu ya kabir, ya 'alim ya qadir, ya sami' ya bashir, ya lathif ya khabir.",
    meaning: "Wahai Zat Yang Maha Tinggi, Maha Besar, Maha Mengetahui, Maha Kuasa, Maha Mendengar, Maha Melihat, Maha Lembut, lagi Maha Teliti.",
    count: "3×",
  },
  {
    no: 19,
    title: "Mohon dilapangkan dari kesedihan",
    arabic: "يَا فَارِجَ الْهَمِّ يَا كَاشِفَ الْغَّمِّ يَا مَنْ لِعَبْدِهِ يَغْفِرُ وَيَرْحَمُ",
    latin: "Ya farijal hammi ya kasyifal ghammi ya man li 'abdihi yaghfiru wa yarham.",
    meaning: "Wahai Zat yang menghilangkan kesedihan, yang melapangkan kegundahan, wahai Zat yang mengampuni dan menyayangi hamba-Nya.",
    count: "3×",
  },
  {
    no: 20,
    title: "Istighfar",
    arabic: "أَسْتَغْفِرُ اللهَ رَبَّ الْبَرَايَا أَسْتَغْفِرُ اللهَ مِنَ الْخَطَايَا",
    latin: "Astaghfirullaha rabbal baraya, astaghfirullaha minal khathaya.",
    meaning: "Aku memohon ampun kepada Allah, Tuhan seluruh makhluk. Aku memohon ampun kepada Allah dari segala kesalahan.",
    count: "4×",
  },
  {
    no: 21,
    title: "Tahlil 50 kali",
    arabic: "لَا إِلٰهَ إِلَّا اللهُ",
    latin: "La ilaha illallah.",
    meaning: "Tidak ada tuhan selain Allah.",
    count: "50×",
  },
  {
    no: 22,
    title: "Muhammad Rasulullah dan ta'dhim",
    arabic: "مُحَمَّدٌ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَاٰلِهِ وَسَلَّمَ\n\nوَشَرَّفَ وَكَرَّمَ وَمَجَّدَ وَعَظَّمَ رَضِيَ اللهُ تَعَالَى عَنْ أهْلِ بَيْتِهِ الْمُطَهَّرِيْنَ وَأَصْحَابِهِ الْمُهْتَدِيْنَ وَالتَّابِعِيْنَ لَهُمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّيْنِ",
    latin: "Muhammadur rasulullah, shallallahu 'alaihi wa alihi wa sallam. Wa syarrafa wa karrama wa majjada wa 'azhzhama. Radhiyallahu ta'ala 'an ahli baitihil muthahharin wa ashhabihil muhtadin wat tabi'ina lahum bi ihsanin ila yaumiddin.",
    meaning: "Muhammad adalah utusan Allah, semoga Allah melimpahkan rahmat dan salam kepadanya dan keluarganya. Semoga Allah memuliakan, mengagungkan, dan meninggikannya. Semoga Allah meridhai keluarganya yang disucikan, para sahabatnya yang mendapat petunjuk, dan para pengikut mereka dengan baik sampai hari kiamat.",
    count: "1×",
  },
  {
    no: 23,
    title: "Surah Al-Ikhlas",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. قُلْ هُوَ اللّٰهُ اَحَدٌ، اَللّٰهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُوْلَدْ، وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ",
    latin: "Bismillahirrahmanirrahim. Qul huwallahu ahad. Allahush shamad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.",
    meaning: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah (Muhammad), 'Dialah Allah, Yang Maha Esa. Allah tempat meminta segala sesuatu. Dia tidak beranak dan tidak pula diperanakkan. Dan tidak ada sesuatu pun yang setara dengan Dia.' (QS Al-Ikhlas: 1–4)",
    count: "3×",
  },
  {
    no: 24,
    title: "Surah Al-Falaq",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِ، مِنْ شَرِّ مَا خَلَقَ، وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَ، وَمِنْ شَرِّ النَّفّٰثٰتِ فِى الْعُقَدِ، وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ",
    latin: "Bismillahirrahmanirrahim. Qul a'udzu bi rabbil falaq. Min syarri ma khalaq. Wa min syarri ghasiqin idza waqab. Wa min syarrin naffatsati fil 'uqad. Wa min syarri hasidin idza hasad.",
    meaning: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah, 'Aku berlindung kepada Tuhan yang menguasai waktu subuh, dari kejahatan makhluk-Nya, dari kejahatan malam apabila telah gelap gulita, dari kejahatan perempuan-perempuan tukang sihir yang mengembuskan napasnya pada buhul-buhul, dan dari kejahatan orang yang dengki apabila ia mendengki.' (QS Al-Falaq: 1–5)",
    count: "1×",
    countNote: "Sumber tidak memberi penanda jumlah untuk Surah Al-Falaq; dibaca satu kali menurut kebiasaan.",
  },
  {
    no: 25,
    title: "Surah An-Naas",
    arabic: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. قُلْ اَعُوْذُ بِرَبِّ النَّاسِ، مَلِكِ النَّاسِ، اِلٰهِ النَّاسِ، مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ، الَّذِيْ يُوَسْوِسُ فِيْ صُدُوْرِ النَّاسِ، مِنَ الْجِنَّةِ وَالنَّاسِ",
    latin: "Bismillahirrahmanirrahim. Qul a'udzu bi rabbin nas. Malikin nas. Ilahin nas. Min syarril waswasil khannas. Alladzi yuwaswisu fi shudurin nas. Minal jinnati wan nas.",
    meaning: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah, 'Aku berlindung kepada Tuhan manusia, Raja manusia, sesembahan manusia, dari kejahatan bisikan setan yang bersembunyi, yang membisikkan kejahatan ke dalam dada manusia, dari golongan jin dan manusia.' (QS An-Naas: 1–6)",
    count: "3×",
    countNote: "Penanda 3× hanya ada di teks Latin sumber, bukan di teks Arabnya.",
  },
  {
    no: 26,
    title: "Fatihah tawassul kepada Rasulullah SAW",
    arabic: "اَلْفَاتِحَةُ إِلَى سَيِّدِنَا وَشَفِعِيْنَا رَسُوْلِ اللهِ ﷺ وَاٰلِهِ وَأَصْحَابِهِ وَأَزْوَاجِهِ وَذُرِّيَاتِهِ أَنَّ اللهَ يُعْلِيْ دَرَجَاتِهِمْ فِي الْجَنَّةِ وَيَنْفَعُنَا بِأَسْرَارِهِمْ وَأَنْوَارِهِمْ وَعُلُوْمِهِمْ وَبَرَكَاتِهِمْ فِي الدِّيْنِ وَالدُّنْيَا وَالْاٰخِرَةِ، وَأَنَّ اللهَ يَجْعَلُنَا مِنْ حِزْبِهِمْ وَيَرْزُقُنَا مَحَبَّتَهُمْ وَيَتَوَفَّنَا عَلَى مِلَّتِهِمْ وَيَحْشُرُنَا فِيْ زُمْرَتِهِمْ فِيْ خَيْرٍ وَلُطْفٍ وَعَافِيَةٍ، اَلْفَاتِحَةُ ...",
    latin: "Al-Fatihah ila sayyidina wa syafi'ina rasulillahi shallallahu 'alaihi wa sallam wa alihi wa ashhabihi wa azwajihi wa dzurriyyatihi, annallaha yu'li darajatihim fil jannati wa yanfa'una bi asrarihim wa anwarihim wa 'ulumihim wa barakatihim fid dini wad dunya wal akhirah, wa annallaha yaj'aluna min hizbihim wa yarzuquna mahabbatahum wa yatawaffana 'ala millatihim wa yahsyuruna fi zumratihim fi khairin wa luthfin wa 'afiyah. Al-Fatihah...",
    meaning: "Al-Fatihah untuk junjungan kami dan pemberi syafaat kami, Rasulullah Muhammad SAW, beserta keluarga, para sahabat, para istri, dan keturunannya. Semoga Allah meninggikan derajat mereka di surga dan memberi manfaat kepada kami melalui rahasia, cahaya, ilmu, dan berkah mereka, dalam agama, dunia, dan akhirat. Semoga Allah menjadikan kami termasuk golongan mereka, menganugerahkan kecintaan kepada mereka, mewafatkan kami di atas agama mereka, dan mengumpulkan kami bersama mereka dalam kebaikan, kelembutan, dan keselamatan. Al-Fatihah...",
    count: "1×",
    note: "Setelah tawassul ini, baca Surah Al-Fatihah (lihat bagian 1).",
  },
  {
    no: 27,
    title: "Fatihah tawassul kepada Al-Muhajir dan Shahib ar-Ratib",
    arabic: "اَلْفَاتِحَةُ إِلَى سَيِّدِنَا الْمُهَاجِرِ إِلَى اللهِ أَحْمَدَ بْنِ عِيْسَى وَسَيِّدِنَا الْفَقِيْهِ الْمُقَدَّمِ مُحَمَّدٍ بْنِ عَلِيٍّ بَاعَلَوِيٍّ وَعَمِّهِ السَّيِّدِ عَلَوِيٍّ بَاعَلَوِيٍّ وَصَاحِبِ الرَّاتِبِ الْحَبِيْبِ عَبْدِ اللهِ بِنْ عَلَوِيٍّ بْنِ مُحَمَّدٍ الْحَدَّادِ وَمَشَايِخِهِمْ وَتَلَامِيْذِهِمْ وَأُصُولِهِمْ وَفُرُوْعِهِمْ وَجَمِيْعِ سَادَاتِنَا اٰلِ بَاعَلَوِيٍّ أَنَّ اللهَ يَغْفِرُ لَهُمْ وَيَرْحَمُهُمْ وَ يُعْلِيْ دَرَجَاتِهِمْ فِي الْجَنَّةِ وَيَنْفَعُنَا بِأَسْرَارِهِمْ وَأَنْوَارِهِمْ وَعُلُوْمِهِمْ وَبَرَكَاتِهِمْ فِي الدِّيْنِ وَالدُّنْياَ وَالْاٰخِرَةِ، بِسِرِّ الْفَاتِحَةِ ...",
    latin: "Al-Fatihah ila sayyidinal muhajir ilallahi Ahmad bin 'Isa wa sayyidinal faqihil muqaddam Muhammad bin 'Ali Ba'alawi wa 'ammihis sayyid 'Alawi Ba'alawi wa shahibir ratib al-Habib 'Abdullah bin 'Alawi bin Muhammad al-Haddad wa masyayikhihim wa talamidzihim wa ushulihim wa furu'ihim wa jami'i sadatina ali Ba'alawi, annallaha yaghfiru lahum wa yarhamuhum wa yu'li darajatihim fil jannati wa yanfa'una bi asrarihim wa anwarihim wa 'ulumihim wa barakatihim fid dini wad dunya wal akhirah, bi sirril Fatihah...",
    meaning: "Al-Fatihah untuk junjungan kami, Al-Muhajir Ahmad bin Isa; junjungan kami, Al-Faqih Al-Muqaddam Muhammad bin Ali Ba'alawi; pamannya, Sayyid Alawi Ba'alawi; dan pemilik ratib ini, Al-Habib Abdullah bin Alawi bin Muhammad Al-Haddad; beserta guru-guru mereka, murid-murid mereka, leluhur dan keturunan mereka, serta seluruh keluarga Ba'alawi. Semoga Allah mengampuni mereka, merahmati mereka, meninggikan derajat mereka di surga, dan memberi manfaat kepada kami melalui rahasia, cahaya, ilmu, dan berkah mereka, dalam agama, dunia, dan akhirat, dengan rahasia Al-Fatihah...",
    count: "1×",
    note: "Setelah tawassul ini, baca Surah Al-Fatihah (lihat bagian 1).",
  },
  {
    no: 28,
    title: "Fatihah tawassul kepada arwah para wali dan kaum muslimin",
    arabic: "اَلْفَاتِحَةُ إِلَى أَرْوَاحِ الْأَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالْأَئِمَّةِ الرَّاشِدِيْنَ ثُمَّ إِلَى أَرْوَاحِ وَالِدِيْنَا وَمشَايِخِنَا وَذَوِي الْحُقُوْقِ عَلَيْنَا وَعَلَيْهِمْ أَجْمَعِيْنَ. ثُمَّ إِلَى أَرْوَاحِ أَمْوَاتِ هٰذِهِ الْبَلْدَةِ مِنَ الْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ وَالْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ أَنَّ اللهَ يَغْفِرُ لَهُمْ وَيَرْحَمُهُمْ وَ يُسْكِنُهُمْ فِي الْجَنَّةِ وَيَنْفَعُنَا بِأَسْرَارِهِمْ وَأَنْوَارِهِمْ وَعُلُوْمِهِمْ وَبَرَكَاتِهِمْ فِي الدِّيْنِ وَالدُّنْيَا وَالْاٰخِرَةِ، بِسِرِّ الْفَاتِحَةِ ...",
    latin: "Al-Fatihah ila arwahil auliya' wasy syuhada' wash shalihin wal a'immatir rasyidin, tsumma ila arwahi walidina wa masyayikhina wa dzawil huquqi 'alaina wa 'alaihim ajma'in. Tsumma ila arwahi amwati hadzihil baldati minal mu'minina wal mu'minati wal muslimina wal muslimat, annallaha yaghfiru lahum wa yarhamuhum wa yuskinuhum fil jannati wa yanfa'una bi asrarihim wa anwarihim wa 'ulumihim wa barakatihim fid dini wad dunya wal akhirah, bi sirril Fatihah...",
    meaning: "Al-Fatihah untuk arwah para wali, para syuhada, orang-orang saleh, dan para imam yang memberi petunjuk. Kemudian untuk arwah kedua orang tua kami, guru-guru kami, dan orang-orang yang mempunyai hak atas kami serta atas mereka semua. Kemudian untuk arwah kaum muslimin yang telah meninggal di negeri ini, dari kalangan mukminin dan mukminat, muslimin dan muslimat. Semoga Allah mengampuni mereka, merahmati mereka, menempatkan mereka di surga, dan memberi manfaat kepada kami melalui rahasia, cahaya, ilmu, dan berkah mereka, dalam agama, dunia, dan akhirat, dengan rahasia Al-Fatihah...",
    count: "1×",
    note: "Setelah tawassul ini, baca Surah Al-Fatihah (lihat bagian 1).",
  },
  {
    no: 29,
    title: "Fatihah bil-qabul",
    arabic: "اَلْفَاتِحَةُ بِالْقَبُوْلِ وَتَمَامِ كُلِّ سُؤْلٍ وَمَأْمُوْلٍ وَصَلَاحِ الشَّأْنِ ظَاهِرًا وَبَاطِنًا فِي الدُّنْيَا وَالْاٰخِرَةِ دَافِعَةً لِكُلِّ شَرٍّ جَالِبَةً لِكُلِّ خَيْرٍ لَنَا وَلِوَالِدِيْنَا وَمَشَايِخِنَا فِي الدِّيْنِ مَعَ اللُّطْفِ وَالْعَافِيَةِ وَعَلَى نِيَّةِ أَنَّ اللهَ يُنَوِّرُ قُلُوْبَنَا وَقوَالِبَنَا مَعَ التُّقَى وَالْعَفَافِ وَالْغِنَى وَالْمَوْتِ عَلَى دِيْنِ الْإِسْلَامِ وَالْإِيْمَانِ بِلَا مِحْنَةٍ وَلَا امْتِحَانٍ بِحَقِّ سَيِّدِ وَلَدِ عَدْنَانَ وَعَلَى كُلِّ نِيَّةٍ صَالِحَةٍ وَإِلَى حَضْرَةِ النَّبِيِّ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَاٰلِهِ وَسَلَّمَ، بِسِرِّ الْفَاتِحَةِ ...",
    latin: "Al-Fatihah bil qabul wa tamami kulli su'lin wa ma'mulin wa shalahisy sya'ni zhahiran wa bathinan fid dunya wal akhirah, dafi'atan li kulli syarrin jalibatan li kulli khairin lana wa li walidina wa masyayikhina fid dini ma'al luthfi wal 'afiyah, wa 'ala niyyati annallaha yunawwiru qulubana wa qawalibana ma'at tuqa wal 'afaf wal ghina wal mauti 'ala dinil islam wal imani bila mihnatin wa lamtihanin bi haqqi sayyidi waladi 'Adnan, wa 'ala kulli niyyatin shalihah, wa ila hadratin nabiyyi Muhammadin shallallahu 'alaihi wa alihi wa sallam, bi sirril Fatihah...",
    meaning: "Al-Fatihah dengan harapan diterimanya amal, sempurnanya semua permohonan dan cita-cita, baiknya keadaan lahir dan batin di dunia dan akhirat, menolak segala keburukan dan menarik segala kebaikan untuk kami, kedua orang tua kami, dan guru-guru kami dalam agama, dengan kelembutan dan keselamatan. Dengan niat semoga Allah menerangi hati dan diri kami dengan ketakwaan, kesucian, kecukupan, dan mewafatkan kami dalam Islam dan iman tanpa ujian yang berat, dengan hak pemimpin keturunan Adnan, dan dengan setiap niat yang baik, kepada Nabi Muhammad SAW, dengan rahasia Al-Fatihah...",
    count: "1×",
    note: "Setelah tawassul ini, baca Surah Al-Fatihah (lihat bagian 1).",
  },
  {
    no: 30,
    title: "Doa penutup 1: mohon ridha dan surga",
    arabic: "اَللّٰهُمَّ إِنَّا نَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ، وَنَعُوْذُ بِكَ مِنْ سَخَطِكَ وَالنَّارِ",
    latin: "Allahumma inna nas'aluka ridhaka wal jannah, wa na'udzu bika min sakhathika wan nar.",
    meaning: "Ya Allah, sesungguhnya kami memohon ridha-Mu dan surga-Mu, dan kami berlindung kepada-Mu dari murka-Mu dan neraka-Mu.",
    count: "3×",
  },
  {
    no: 31,
    title: "Doa penutup 2: mohon aib tidak dibuka",
    arabic: "يَاعَالِمَ السِّرِّ مِنَّا لَاتَهْتِكِ السِّتْرَ عَنَّا وَعَافِنَا وَاعْفُ عَنَّا وَكُنْ لَنَا حَيْثُ كُنَّا",
    latin: "Ya 'alimas sirri minna, la tahtikis sitra 'anna, wa 'afina wa'fu 'anna wa kun lana haitsu kunna.",
    meaning: "Wahai Zat Yang Maha Mengetahui rahasia kami, janganlah Engkau singkap tabir (aib) kami. Berilah kami kesehatan, maafkanlah kami, dan jadilah penolong kami di mana pun kami berada.",
    count: "3×",
  },
  {
    no: 32,
    title: "Doa penutup 3: mohon husnul khatimah",
    arabic: "يَا اَللهُ بِهَا يَا اَللهُ بِهَا يَا اَللهُ بِحُسْنِ الْخَاتِمَةِ",
    latin: "Ya Allahu biha, ya Allahu biha, ya Allahu bi husnil khatimah.",
    meaning: "Ya Allah, dengan (amal) ini, ya Allah, dengan (amal) ini, ya Allah, tutupilah usia kami dengan husnul khatimah.",
    count: "3×",
  },
  {
    no: 33,
    title: "Doa penutup 4: Ya Lathif",
    arabic: "يَالَطِيْفًا لَمْ يَزَلْ اُلْطُفْ بِنَا فِيْمَا نَزَلْ. إِنَّكَ لَطِيْفٌ لَمْ تَزَلْ اُلْطُفْ بِنَا وَالْمُسْلِمِيْنَ",
    latin: "Ya lathifan lam yazal, ulthuf bina fima nazal. Innaka lathifun lam tazal, ulthuf bina wal muslimin.",
    meaning: "Wahai Zat Yang Maha Lembut yang tak pernah berhenti lembut, bersikaplah lembut kepada kami dalam segala yang menimpa kami. Sesungguhnya Engkau Maha Lembut dan tak pernah berhenti lembut. Bersikaplah lembut kepada kami dan kaum muslimin.",
    count: "3×",
  },
  {
    no: 34,
    title: "Doa penutup ratib",
    arabic: "بِسْم اللهِ الرَّحْمنِ الرَّحِيْمِ. الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ، حَمْدًا يُوَافِيْ نِعَمَهُ وَيُكَافِئُ مَزِيْدَهُ، يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِيْ لِجَلَالِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ\n\nسُبْحَانَكَ لَا نُحْصِيْ ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ، فَلَكَ الْحَمْدُ حَتَّى تَرْضَى، وَلَكَ الْحَمْدُ إِذَا رَضِيْتَ، وَلَكَ الْحَمْدُ بَعْدَ الرِّضَى\n\nاَللّٰهُمَّ صَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْأَوَّلِيْنَ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي اْلآخِرِيْنَ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي كُلِّ وَقْتٍ وَحِيْنٍ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ فِي الْمَلَإِ اْلأَعْلَى إِلَى يَوْمِ الدِّيْنِ، وَصَلِّ وَسَلِّمْ عَلَى سَيِّدِنَا مُحَمَّدٍ حَتَّى تَرِثَ اْلأَرْضَ وَمَنْ عَلَيْهَا وَأَنْتَ خَيْرُ الْوَارِثِيْنَ\n\nاَللّٰهُمَّ إِنَّا نَسْتَحْفِظُكَ وَنَسْتَوْدِعُكَ أَدْيَانَنَا وَأَنْفُسَنَا وَأَمْوَالَنَا وَأَهْلَنَا وَكُلَّ شَيْءٍ أَعْطَيْتَنَا\n\nاَللّٰهُمَّ اجْعَلْنَا وَإِيَّاهُمْ فِي كَنَفِكَ وَأَمَانِكَ وَعِيَاذِكَ مِنْ كُلِّ شَيْطَانٍ مَرِيْدٍ وَجَبَّارٍ عَنِيْدٍ وَذِيْ عَيْنٍ وَذِيْ بَغْيٍ وَذِيْ حَسَدٍ وَمِنْ شَرِّ كُلِّ ذِيْ شَرٍّ، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ\n\nاَللّٰهُمَّ حُطْنَا بِالتَّقْوَى وَالْاِسْتِقَامَةِ وَأَعِذْنَا مِنْ مُوْجِبَاتِ النَّدَامَةِ فِي الْحَالِ وَالْمَاٰلِ، إِنَّكَ سَمِيْعُ الدُّعَاءِ\n\nوَصَلِّ اللّٰهُمَّ بِجَلَالِكَ وَجَمَالِكَ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ أَجْمَعِيْنَ، وَارْزُقْنَا كَمَالَ الْمُتَابَعَةِ لَهُ ظَاهِرًا وَبَاطِنًا يَا أَرْحَمَ الرَّاحِمِيْنَ\n\nبِفَضْلِ سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ. وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِيْنَ.",
    latin: "Bismillahirrahmanirrahim. Alhamdu lillahi rabbil 'alamin, hamdan yuwa fi ni'amahu wa yukafi'u mazidah. Ya rabbana lakal hamdu kama yanbaghi li jalali wajhika wa 'azhimi sulthanik.\n\nSubhanaka la nuhshi tsana'an 'alaika anta kama atsnaita 'ala nafsik. Falakal hamdu hatta tardha, wa lakal hamdu idza radhita, wa lakal hamdu ba'dar ridha.\n\nAllahumma shalli wa sallim 'ala sayyidina Muhammadin fil awwalin, wa shalli wa sallim 'ala sayyidina Muhammadin fil akhirin, wa shalli wa sallim 'ala sayyidina Muhammadin fi kulli waqtin wa hin, wa shalli wa sallim 'ala sayyidina Muhammadin fil mala'il a'la ila yaumiddin, wa shalli wa sallim 'ala sayyidina Muhammadin hatta taritsal ardha wa man 'alaiha wa anta khairul waritsin.\n\nAllahumma inna nastahfizhuka wa nastaudi'uka adyanana wa anfusana wa amwalana wa ahlana wa kulla syai'in a'thaitana.\n\nAllahummaj'alna wa iyyahum fi kanafika wa amanika wa 'iyadzik, min kulli syaithanim marid, wa jabbarin 'anid, wa dzi 'ainin wa dzi baghyin wa dzi hasadin wa min syarri kulli dzi syarr. Innaka 'ala kulli syai'in qadir.\n\nAllahumma huthna bit taqwa wal istiqamah, wa a'idzna min mujibatinnadamah fil hali wal mal. Innaka sami'ud du'a'.\n\nWa shalli Allahumma bi jalalika wa jamalika 'ala sayyidina Muhammadin wa 'ala alihi wa shahbihi ajma'in, warzuqna kamalal mutaba'ati lahu zhahiran wa bathinan, ya arhamar rahimin.\n\nBi fadhli subhana rabbika rabbil 'izzati 'amma yashifun. Wa salamun 'alal mursalin, wal hamdu lillahi rabbil 'alamin.",
    meaning: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam, pujian yang sepadan dengan nikmat-nikmat-Nya dan mencukupi tambahan-Nya. Ya Tuhan kami, segala puji bagi-Mu sebagaimana layak bagi keagungan wajah-Mu dan kebesaran kekuasaan-Mu.\n\nMaha Suci Engkau, kami tidak mampu menghitung pujian bagi-Mu sebagaimana Engkau memuji diri-Mu sendiri. Segala puji bagi-Mu sampai Engkau ridha, segala puji bagi-Mu ketika Engkau telah ridha, dan segala puji bagi-Mu setelah ridha.\n\nYa Allah, limpahkanlah rahmat dan salam kepada junjungan kami Muhammad di kalangan orang-orang terdahulu, di kalangan orang-orang kemudian, di setiap waktu dan keadaan, di kalangan malaikat yang tertinggi sampai hari kiamat, dan sampai Engkau mewariskan bumi dan siapa pun yang ada di atasnya, sedangkan Engkau sebaik-baik yang mewarisi.\n\nYa Allah, sesungguhnya kami memohon penjagaan-Mu dan menitipkan kepada-Mu agama kami, diri kami, harta kami, keluarga kami, dan segala sesuatu yang Engkau berikan kepada kami.\n\nYa Allah, jadikanlah kami dan mereka berada dalam perlindungan, keamanan, dan penjagaan-Mu dari setiap setan yang durhaka, penguasa yang zalim, penyakit 'ain, kedengkian, dan kejahatan setiap pelaku kejahatan. Sungguh, Engkau Maha Kuasa atas segala sesuatu.\n\nYa Allah, liputilah kami dengan ketakwaan dan keistiqamahan, dan lindungilah kami dari hal-hal yang mendatangkan penyesalan, di dunia maupun di akhirat. Sungguh, Engkau Maha Mendengar doa.\n\nYa Allah, dengan keagungan dan keindahan-Mu, limpahkanlah rahmat kepada junjungan kami Muhammad beserta keluarga dan seluruh sahabatnya, dan anugerahkanlah kepada kami kesempurnaan dalam mengikuti beliau, lahir dan batin, wahai Zat Yang Maha Pengasih di antara para pengasih.\n\nDengan keutamaan (firman-Mu): Maha Suci Tuhanmu, Tuhan Yang Maha Perkasa, dari apa yang mereka sifatkan. Salam sejahtera atas para rasul, dan segala puji bagi Allah, Tuhan semesta alam.",
    count: "1×",
  },
];

export const RATIB_INTRO = {
  author: "al-Habib Abdullah bin Alwi bin Muhammad al-Haddad (1055–1132 H)",
  history:
    "Disusun pada malam 27 Ramadhan 1071 H, atas permintaan seorang murid bernama Amir dari Bani Sa'ad di Syibam, Hadramaut, agar ada wirid dan dzikir di kampungnya. Setiap ayat, doa, dan asma Allah di dalam ratib ini diambil dari Al-Quran dan hadis Rasulullah SAW.",
  when:
    "Dibaca berjamaah setelah shalat Isya (paling utama); membaca setelah Isya dan Subuh adalah yang paling sempurna, tetapi membaca satu kali dalam sehari semalam dianggap cukup. Di bulan Ramadhan, ratib didahulukan sebelum shalat Isya.",
  note:
    "Sumber menyarankan bertawassul terlebih dahulu dengan bacaan tahlil lengkap sebelum membaca ratib.",
};

export const RATIB_VIRTUES: string[] = [
  "Diberi umur panjang.",
  "Husnul khatimah.",
  "Doa penjaga diri dari segala bencana di darat, laut, dan udara.",
  "Dikabulkan segala hajat.",
  "Dimudahkan segala urusan.",
  "Menjaga rumah dan 40 rumah di sekitarnya dari kebakaran, pencurian, dan sihir/teluh.",
];

export const RATIB_VIRTUES_NOTE =
  "Keutamaan di atas sebagaimana disebutkan sumber (penjaganu.com), menurut para ulama — tanpa rujukan kitab spesifik per poin.";

export const RATIB_COUNT_NOTE =
  "Jumlah bacaan mengikuti sumber. Bagian tanpa penanda jumlah di sumber dibaca satu kali menurut kebiasaan.";

