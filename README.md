# Belajar Islam — Belajar Agama dari 0

Web belajar Islam dari nol: materi ringkas, kuis per bagian, tryout, perpustakaan doa &
dzikir, 99 Asmaul Husna, 25 kisah nabi, jurnal refleksi Al-Qur'an, dan checklist amalan
harian — gratis dan bisa dipakai tanpa login.

Konsepnya sama seperti [Belajar CPNS](https://github.com/chndrwali/belajar-cpns), dengan
konten dari referensi template Notion "Ruang Muslimah". Bedanya: **tanpa sistem login**,
semua progres hanya tersimpan di `localStorage` browser.

## Fitur

- **15 materi** dalam 5 bagian: Akidah, Ibadah, Al-Quran, Sirah & Teladan, Akhlak
- **5 kuis** (10 soal per bagian) + **tryout 30 soal** dengan timer 45 menit
- **Doa & dzikir**: 13 doa (Arab, Latin, arti, kapan dipakai, sumber) + dzikir setelah shalat
- **99 Asmaul Husna** + **25 kisah nabi** (cerita, cobaan, pelajaran)
- **Jurnal refleksi Al-Qur'an** dan **checklist amalan harian** (per tanggal)
- Progres tersimpan otomatis di browser — tanpa akun, tanpa server

## Teknologi

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript. Tanpa database, tanpa
auth, tanpa API route. Satu-satunya dependensi tambahan: `lucide-react` (ikon) dan font
Arab Amiri via `next/font/google`.

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Deploy

Import repo ini di [Vercel](https://vercel.com/new) (framework preset Next.js). Tidak ada
environment variable yang diperlukan.

## Catatan konten

Materi di sini ringkasan belajar untuk pemula. Untuk pendalaman hukum dan akidah, rujuk
Al-Quran, kitab, dan ustadz tepercaya. Bila suatu halaman menulis "tidak ditetapkan",
artinya tidak ada angka khusus dalam sumber yang dirujuk — bukan berarti dilarang.
Target tryout 70% adalah target belajar mandiri, bukan passing grade resmi.
