// this function sorts a passed array in ascending order
const sortTab = (tab) => tab.sort((a, b) => a - b);

const tab = [6, 3, 7, 10, -4, 9, 6, 1, 2, 7, 9, 8];

let max = tab.length, min = 1, mediane = (min + max) / 2;
let searchValue;

// read user input searched value
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the search value : ', (value) => {
    searchValue = value;
    return readline.close();
});

while (searchValue !== tab[mediane] && min <= max) {
    if (searchValue < tab[mediane]) {
        max = mediane - 1;
    } else {
        min = mediane + 1;
    }
    mediane = (min + max) / 2;
}

console.log(sortTab(tab));