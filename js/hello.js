// pop up allert
alert("this is allert");

//pop up prompt
const nama = prompt("siapa nama anda ?");
alert(`Hello ${nama}`);

//pop up confirm
const masuk = confirm("apakah anda ingin masuk ?");
if (masuk) {
    const name = prompt("siapa nama anda ?");
    alert(`selamat datang ${name}`);
} else {
    alert("terima kasih sudah berkunjung");
}
