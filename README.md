# ARENNOVA — website siap pakai

Website publik untuk katalog gula aren cair, semut, dan batok.

## Publikasi
GitHub Pages: `main` atau gunakan branch ini untuk tinjauan.

## Integrasi lead
Formulir belum terhubung ke penyimpanan. Sebelum produksi:

1. Buat Google Apps Script Web App milik akun `arennova3@gmail.com`.
2. Script menerima POST JSON, menyimpan ke Google Sheets, lalu mengirim email ke alamat yang sama.
3. Setel URL endpoint sebagai `LEAD_ENDPOINT` pada `chatbot.js`.
4. Jangan menyimpan API key atau secret di repositori publik.

## Produk
- Aren cair: Rp13.500/¼ L, Rp26.000/½ L, Rp50.000/1 L.
- Aren semut: Rp9.000/¼ kg, Rp21.000/½ kg, Rp40.000/1 kg.
- Aren batok: Rp7.500/¼ kg, Rp16.000/½ kg, Rp32.000/1 kg.

Harga final, stok, dan pengiriman dikonfirmasi sebelum pemesanan.
