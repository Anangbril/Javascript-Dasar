/* FUNCTION
 */

function helloWorld() {
    document.writeln("<P>HALO ANANG</P>");
};

helloWorld();
helloWorld();

/* function with parameter */
function say(firsName, lastName) {
    document.writeln(`<P>hello ${firsName} ${lastName}</P>`);
};
say("anang", "bril");


/* function with return value */
function name(name1, name2) {
    const names = `<p>nama1 : ${name1}, nama2 ${name2}</p>`;
    return names;
};

const result = name("anang", "wiwin");
document.writeln(`${result}`);

/* using return to stop function */
function isContains(array, searchValue) {
    for (const element of array) {
        console.log(`iterasi element ${element}`);
        if (element === searchValue) {
            return true;
        }
    }
    return false;
}
const array = [10, 21, 23, 5, 4, 3, 6, 25];
const searchValue = 4;
const results = isContains(array, searchValue);
document.writeln(`${results}`);

