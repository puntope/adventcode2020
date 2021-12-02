
// https://adventofcode.com/2021/day/1

const reader = require('../../reader');

reader.readCases().then(lines => {

    let increases = 0;

    for (let i = 1; i < lines.length; i++) {

        if (parseInt(lines[i]) > parseInt(lines[i-1])) {
            increases++;
        }
    }

    console.log(increases);
})





