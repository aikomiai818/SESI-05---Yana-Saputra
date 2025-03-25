// Tentukan tinggi segitiga
const tinggi = 4;

// Loop untuk baris
for (let i = 1; i <= tinggi; i++) {
  let baris = '';

  // Loop untuk kolom di setiap baris
  for (let j = 1; j <= i; j++) {
    baris += '*';
  }

  // Cetak baris ke konsol
  console.log(baris);
}
