// tipe data object
const manusia = {};

//mengubah property diobject
manusia["nama"] = "Rico Kurniawan utomo";
manusia["gender"] = "Laki-laki";
manusia["alamat"] = "jln nangka gang jambu kel semangka";
manusia["umur"] = 30;

console.table(manusia);
delete manusia["umur"];
console.table(manusia);

// membuat object dengan properties
const hewan = {
    nama: "burung", //nama tidak pakai petik dua karena hanya satu kata
    "jenis makanan": "pemakan tumbuh-tumbuhan",//jenis makanan memakai petik dua karena lebih dari satu kata
    "usia hidup": "10 tahun",
    "jarak tempuh terbang satuan KM": 300
};
console.table(hewan);
document.writeln(hewan); //tidak muncul datanya

//mengakses property object
console.info(`Nama : ${hewan.nama}`);
console.info(`usia hidup : ${hewan["usia hidup"]}`);

