// OPERASI OR (||) 
/**
 * operasi or akan mengambil nilai yang paling kiri jika keduanya berniali benar
 * sebaliknya nilai paling kanan akan diambil jika keduanya bernilai falsy
 * nilai yang di ambil dan dikeluarkan adalah nilai truthy
 */
console.info("hello" || ""); //hello
console.info("" || {}); //{}
console.info("0" || "NOL"); //0
console.info(0 || "NOL"); //NOL
console.info(null || "NULL"); //NULL
console.info(undefined || "UNDEFINED"); //UNDEFINED
console.info(0 || false); //false



const person = {
    firstName: "",
    lastName: "Brilyansyah"
}

const data = person.firstName || person.lastName;
console.info(data); //Brilyansyah
