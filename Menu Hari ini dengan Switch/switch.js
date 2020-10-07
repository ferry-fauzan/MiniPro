let a = prompt("Masukkan Nama Hari ini: ")

switch (a) {
    case "senin":
        document.write("Menu Nasi Goreng");
        break;
    case "Selasa":
        document.write("Menu Sop");
        break;
    case "Rabu":
        document.write("Menu Salad");
        break;
    case "Kamis":
        document.write("Menu Gudangan");
        break;
    default:
        document.write("Hari ini Libur")
}