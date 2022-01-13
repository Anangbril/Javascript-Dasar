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