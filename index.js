// this function sorts a passed array in ascending order
const sortTab = (tab) => tab.sort((a, b) => a - b);

const tab = [6, 3, 7, 10, -4, 9, 6, 1, 2, 7, 9, 8];

let max = tab.length - 1, min = 0, mediane = Math.round((min + max) / 2);
let searchValue;

// read user input searched value
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the search value : ', (value) => {
    searchValue = parseInt(value);
    sortTab(tab);

    while (searchValue !== tab[mediane] && min <= max) {
        if (searchValue < tab[mediane]) {
            max = mediane - 1;
        } else {
            min = mediane + 1;
        }
        mediane = Math.round((min + max) / 2);
    }

    if (searchValue === tab[mediane]) {
        console.log("Value founded at position ", mediane);
    } else {
        console.log("Value does not exist in the array");
    }

    readline.close();
});

