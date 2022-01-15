/* FOR IN 
for in biasanya digunakan untuk iterable dan mengakses sebuah objek atau index pada array */

let person = {
    firstName: "anang",
    lastName: "brilyansyah",
    age: 25,
    gender: "pria"
};
for (const property in person) {
    document.writeln(`<p> ${property} : ${person[property]}</p>`); //otomatis mengakses sebuah property pada sebuah object
    console.table(person)
};

/* FOR OF 
digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperty array string dll 
for of tidak bisa digunakan untuk iterasi sebuah object, karena object bukanlah iterable */
let names = ["anang", "wiwin", "iman"];
for (const name of names) {
    document.writeln(`<p> ${name}</p>`); //menampilakn isi dari sebuah array name
};

let fullName = "LM. ANANG BRILYANSYAH";
for (const full of fullName) {
    document.writeln(`<p> ${full}</p>`); //menampilakn isi setia karakter  pada string
};



