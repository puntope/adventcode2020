//https://adventofcode.com/2020/day/6
const reader = require('../../reader');

reader.readCases().then(lines => {

    let count = 0;
    let group = '';
    for (let line of lines) {
        group += line;
        if (!line.length) {
            count += new Set(group.split('')).size;
            group = '';
        }
    }

    console.log(count)
})




