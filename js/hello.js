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
console.info("ini console info");
console.warn("ini console warn");
console.error("ini console error");
console.debug("ini debug");

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



