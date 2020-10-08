let nilai = prompt("Inputkan Nilai Anda:", 000);
let ket = "";


if (nilai > 90) {
    ket = "Anda masuk kelas A"
} else if (nilai >= 80) {
    ket = "Anda masuk kelas B"
} else if (nilai >= 70) {
    ket = "Anda masuk kelas C"
} else if (nilai >= 60) {
    ket = "Anda masuk kelas D"
} else {
    ket = "Anda masuk kelas E"
};

document.write(`Akhirnya ini pengumuman yang ditunggu ${ket} <br> Semangat Yaa`);