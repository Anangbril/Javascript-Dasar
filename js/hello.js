// switch expression
const nilai = "A";
switch (nilai) {
    case "A":
        document.writeln("nilai anda sangat baik");
        break;
    case "B":
    case "C":
        document.writeln("nilai anda Cukup");
        break;
    default:
        document.writeln("nilai anda tidak baik");
}
document.write("<br>")
if (nilai == "A") {
    document.writeln("nilai anda sangat baik");
} else if (nilai == "B" || nilai == "B") {
    document.writeln("nilai anda Cukup");
} else {
    document.writeln("nilai anda tidak baik");
}

//typeOf
let data = null;

const dataType = typeof data;
document.writeln(` <br> tipe data dari variable data : ${dataType}`);

//in operator
let nama = ["anang", "takdir"];
let pakaian = {
    baju: "insurgent",
    celana: "levis"
};
console.info(nama);
console.table(pakaian);
const hasil = "1" in nama; // hasilnya adalah true 1 adalah index dalam array
const result = "baju" in pakaian; // hasilnya adalah true, baju adalah property object
document.writeln(`<br> ${hasil}`);
document.writeln(`<br> ${result}`);

//code in operator that result null
const mangga = {
    rasa: "manis",
    warna: null,
    bentuk: "bulat"
}
const buah = "rasa" in mangga;
const buah2 = "warna" in mangga;
if (buah2) {
    alert(`rasanya ${mangga.warna}`);
} else {
    alert("rasanya pahit");
}

/**catatan
 * in operator hanya memikirkan isi property atau indexnya, tanpa memikirkan valuenya 
 * jika property atau index berisi undefined atau null, maka hasilnya akan tetap true
 */