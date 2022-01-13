//OPTIONAL CHAINING

// let object = {};
// alert(`isi object : ${object.person.nama}`);

let person = {
    address: {
        country: "Indonesia Raya"
    }
};
// let country;
// if (person.address !== undefined && person.address !== null) { //pengecekan menggunakan if
//     country = person.address.country;
// }
alert(person?.address?.country); //using Optional chaining
// document.writeln(`${country}`);

/**catatan
 * jika person tidak nullish maka akan di akses addressnya, tanda tanya untuk mengecek atau memastikan apakah person nullish atau tidak
 * jika address tidak nullish lagi maka akan di akses countrynya
 */