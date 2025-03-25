const readline = require('readline');
const { tambah, kurang, kali, modulus } = require('./rumus');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Kalkulator Sederhana (+, -, %, *)");

rl.question("Masukkan angka pertama: ", (num1) => {
    rl.question("Masukkan angka kedua: ", (num2) => {
        rl.question("Pilih operasi (+, -, %, *): ", (operation) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let result;

            switch (operation) {
                case '+':
                    result = tambah(a, b);
                    break;
                case '-':
                    result = kurang(a, b);
                    break;
                case '*':
                    result = kali(a, b);
                    break;
                case '%':
                    result = modulus(a, b);
                    break;
                default:
                    result = "Operasi tidak valid!";
            }

            console.log(`Hasil: ${result}`);
            rl.close();
        });
    });
});
