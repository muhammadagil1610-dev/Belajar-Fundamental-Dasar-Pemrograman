//Membuat sistem kasir sederhana berbasis terminal.

const namaKasir = "Agil";
const namaBarang = "Buku Tulis";
const hargaBarang = 20000;
const jumlahPembelian = 5;

//hitung subtotal
const subtotal = hargaBarang * jumlahPembelian;
    console.log(`Subtotal: Rp. ${subtotal}`);

//hitung diskon
const diskon = subtotal * 0.2;
    console.log(`Diskon: Rp. ${diskon}`);

const setelahDiskon = subtotal - diskon;
    console.log(`Setelah Diskon: Rp. ${setelahDiskon}`);

const pajak = setelahDiskon * 0.15;
    console.log(`Pajak: Rp. ${pajak}`);

const totalBayar = setelahDiskon + pajak;
    console.log(`Total Bayar: Rp. ${totalBayar}`);

const uangCash = 100000;
const kembalian = uangCash - totalBayar;
    if (uangCash >= totalBayar) {
        console.log(`Kembalian: Rp. ${kembalian}`);
    } else if (uangCash !== totalBayar) {
        console.log("Uang yang dibayarkan kurang.");
    } else {
        console.log("Uang yang dibayarkan pas.");
    }

    

    //console.log(typeof uangCash);

