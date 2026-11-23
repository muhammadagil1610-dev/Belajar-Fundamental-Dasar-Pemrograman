
//program kasir sederhana (Latihan soal 2 template literal)
const nameCashier = "Rizky";
const hargaBarang = 10000;
const jumlahBarang = 5;
const isPaid = true;

const subTotal = hargaBarang * jumlahBarang;

//hitung diskon
const diskon = subTotal * 0.1;
    console.log(`Diskon: Rp ${diskon}`);

const setelahDiskon = subTotal  - diskon;
    console.log(`Setelah Diskon: Rp ${setelahDiskon}`);

const pajak = setelahDiskon * 0.11;
    console.log(`Pajak: Rp ${pajak}`);

const totalBayar = setelahDiskon + pajak;
    console.log(`Total Bayar: Rp ${totalBayar}`);

const cashReceived = 60000;
const kembalian = cashReceived - totalBayar;

console.log(`Nama Kasir: ${nameCashier}`);
console.log(`Subtotal: Rp ${subTotal}`);
console.log(`Pajak: Rp ${pajak}`);
console.log(`Total Bayar: Rp ${totalBayar}`);
if (isPaid) {
   console.log(`Kembalian: Rp ${kembalian}`);

} else {
   console.log("Pembayaran belum dilakukan.");
}





