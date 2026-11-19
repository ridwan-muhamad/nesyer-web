# PT. Nesyer Lintas Teknologi (Company Profile Website)

Website company profile statis **PT. Nesyer Lintas Teknologi** (Independent System Integrator & Solusi Gateway Perbankan), direkonstruksi penuh menggunakan React, TypeScript, Tailwind CSS, dan Vite agar siap di-hosting langsung pada **GitHub Pages**.

## Struktur Halaman
- **Home (`#/`)**: Profil ringkas, indikator utama, katalog 8 solusi inti, rekam jejak proyek, dan daftar klien institusi.
- **About (`#/about`)**: Profil System Integrator independen, filosofi proses bisnis, Visi, Misi, Motto (*"Customer satisfaction is our goal"*), dan tahapan metodologi implementasi.
- **Service (`#/service`)**: Penjelajah interaktif 8 aplikasi inti (**Middleware RTGS Next G**, **Middleware SKN Gen**, **Middleware System (JSON & ISO 8583)**, **Smart Depo**, **Go AML**, **Portal Informasi & Monitoring System**, **Aplikasi e-Procurement**, dan **API BI-FAST**) lengkap dengan diagram alur arsitektur.
- **Portofolio (`#/portofolio`)**: Daftar proyek implementasi dengan filter kategori, studi kasus 8 modul Middleware Bank Kalteng (CMS, Samolnas, Taspen, SP2D, Pajak, e-Samsat, Bappenda), serta implementasi Smart Depo di PT. Contindo Raya Padang.
- **Client (`#/client`)**: Direktori 7 klien institusi dengan logo resmi (Bank of China Limited Hong Kong, Bank Kalteng, Bank Sulselbar Konvensional & Syariah, Bank Bengkulu, Bank Ina Perdana, dan PT. Contindo Raya Padang).
- **Contact (`#/contact`)**: Alamat Kantor Pusat (Grand Slipi Tower Lt. 42 Unit G-H, Palmerah, Jakarta Barat), telepon `(021) 29222999`, email `support@nesyerlintasteknologi.com`, dan formulir konsultasi tervalidasi yang kompatibel penuh dengan static hosting.

## Kesiapan Hosting GitHub Pages
1. **Relative Asset Paths (`base: './'`)** di `vite.config.ts` sehingga semua berkas JS, CSS, dan gambar termuat normal baik di `https://<username>.github.io/<nama-repo>/` maupun custom domain (`nesyerlintasteknologi.com`).
2. **Hash Routing (`#/about`, `#/service`, dll.)** mencegah error `404 Not Found` saat pengunjung me-refresh halaman langsung di GitHub Pages.
3. **GitHub Actions Workflow** sudah tersedia di `.github/workflows/deploy.yml`.

## Cara Deploy ke GitHub Pages
1. Buat repository baru di GitHub dan push seluruh source code ini ke branch `main`.
2. Buka menu **Settings → Pages** pada repository GitHub Anda.
3. Pada bagian **Build and deployment → Source**, pilih **GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` akan otomatis menjalankan `npm ci` dan `npm run build`, lalu mempublikasikan folder `dist/` ke GitHub Pages.
5. *(Opsional)* Jika ingin menghubungkan domain khusus seperti `nesyerlintasteknologi.com`, tambahkan file `public/CNAME` berisi nama domain atau atur melalui **Settings → Pages → Custom domain**.

## Pengembangan Lokal
```bash
npm install
npm run dev
npm run build
```
