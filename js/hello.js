document.writeln("hello script");

document.writeln("<h1>ini heading h1</h1>");

document.writeln(true);
document.writeln("<br>");
document.writeln(false);

//membuat variable
let fullName;
let lastName;
let isActive;
let age;

// mengisi langsung value pada variable
fullName = "LM. ANANG BRILYANSYAH ";
age = 25;
isActive = true;

var alamat = "jln swadaya" + " " + "Condongcatur";

// mengakses variable berkali kali
document.writeln("<br>");
document.writeln(fullName);

fullName = "brilyansyah";
document.writeln("<br>");
document.writeln(fullName);

// add const
const application = "belajar aplikasi dasar javascript";
// application = "error"; //error
document.writeln(application);

//operator matematika
document.writeln("<br><br><br>");
document.writeln(3 ** 2); //eksponensial atau pangkat

//console
// console.info("ini console info");
// console.warn("ini console warn");
// console.error("ini console error");
// console.debug("ini debug");

//String template
const template = `Name = ${fullName}`;
const no = 76;

document.writeln("<br>" + template);
console.info(fullName);
console.info(`${no > 76}`);

//multiline template
const template2 = `nama saya anang,
saya bekerja di mitra integrasi informatika,
saya bekerja sebagai aplication developer progaraming,
umur saya 25 tahun`;

document.writeln("<pre>");
document.writeln(template2);
document.writeln("</pre>");

// conversi bilangan 
const val1 = "1";
const val2 = 1;

const sum = val1 + val2;
const sum2 = parseInt(val1) + val2;
document.writeln("<pre>");
document.writeln(sum);
document.writeln(sum2);
document.writeln(parseInt(15.7));
document.writeln("</pre>");

const a = 3;
const b = 5;
const total2 = a + b;
const total = a.toString() + b.toString();
document.writeln("<pre>");
document.writeln(`${total}`);
document.writeln(`${total2}`);
document.writeln("</pre>");

// array
let name1 = [];
name1.push("anang");
name1.push("rico", "agung", 0, "anas", "mba anin");
let name = ["anang", "rico", "agung"];
//array multidimensi
name1.push(["yos", "bintang", "yoga"]);
document.writeln("<pre>");
document.writeln(`${name1}`);
document.writeln(`${name}`);
document.writeln(`${name1.length}`);

console.table(name1);
console.info(name1[4]);
document.writeln("</pre>");




