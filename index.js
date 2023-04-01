const tab = [6, 3, 7, 10, -4, 9, 6, 1, 2, 7, 9, 8];

let max = tab.length, min = 1, mediane = (min + max) / 2;
let searchValue;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Entrez une valeur : ', (nom) => {
    if (typeof nom !== "number") {
        return console.log("Invalid value")
    }
    readline.close();
});
