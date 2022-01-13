// TERNARY OPERATOR
const nilai = 60;
const hasil = nilai >= 70 ? "nilai anda lulus" : "nilai anda tidak lulus"; //ternarry operator
document.writeln(hasil);


//NULLISH COALESCING OPERATOR
let data;
let parameter = data;
if (data === undefined || data == null) { //tidak menggunakan nullish operator
    alert("data default");
}
alert(data);

let parameter;
let data = parameter ?? "nilai default"; //nullish coalescing
alert(data);




/**
 * NULLIST value adalah null dan undefined
 * Nullist coalescing operator (??) adalah operator mirip dengan ternary operator, namun yang membedakan adalah
 *      pada kondisi, jika bernilai null atau undefined, baru value defaultnya diambil.
 */