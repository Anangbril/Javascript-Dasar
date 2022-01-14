//PERULANGAN FOR
let x = 5;
for (let index = 0; index <= x; index++) {
    document.writeln(`Perulangan FOR Ke ${index} <br>`);
}

//perulangan while
while (x <= 10) {
    document.writeln(`ini perulangan WHILE ke ${x} <br>`);
    x++;
}

//perulangan DO WHILE
let y = 100;
do {
    document.writeln(`perulangan ke DO WHILE ke ${y} <br>`)
    y++;
} while (y <= 110);

//Break dalam perulangan
let counter = 10;
while (true) {
    document.writeln(`perulangan dengan BREAK ke - ${counter} <br>`);
    counter++;
    if (counter > 30) {
        break;
    }
}

// continue dalam perulangan
let genap = 10;
for (let index = 0; index <= genap; index++) {
    if (index % 2 === 1) {
        continue;
    }
    document.writeln(`perulangan dengan CONTINUE ke - ${index} <br>`);
}