# Next.js Project Documentation

## 📌 Prerequisites

Pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (disarankan versi LTS)
- [Git](https://git-scm.com/)

## 🚀 Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/username/repository.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd repository
   ```
3. Instal dependensi:
   ```bash
   npm install
   ```
   atau jika menggunakan Yarn:
   ```bash
   yarn install
   ```

## ▶️ Menjalankan Proyek Secara Lokal

Jalankan perintah berikut untuk memulai server development:

```bash
npm run dev
```

atau

```bash
yarn dev
```

Akses aplikasi di `http://localhost:3000`

## 📦 Build dan Jalankan Produksi

Untuk membuat build produksi dan menjalankannya secara lokal:

```bash
npm run build
npm run start
```

atau

```bash
yarn build
yarn start
```

## 🚢 Deploy ke Vercel

### 1. Deploy dengan Vercel CLI

Pastikan Anda sudah login ke Vercel:

```bash
vercel login
```

Jalankan perintah deploy:

```bash
vercel
```

Ikuti instruksi yang diberikan untuk menyelesaikan deployment.

### 2. Deploy dengan GitHub

- Push kode Anda ke GitHub.
- Buka [Vercel Dashboard](https://vercel.com/)
- Hubungkan repository GitHub Anda ke Vercel.
- Klik "Deploy".

Setelah deployment selesai, Vercel akan memberikan URL live untuk proyek Anda.

---

## 📖 Referensi

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
