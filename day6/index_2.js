//https://adventofcode.com/2020/day/6
const reader = require('../reader');

reader.readCases().then(lines => {

    let count = 0;
    let answers = {}
    let pplInGroup = 0;
    for (let line of lines) {

        if (line.length) {
            pplInGroup++;
            for (let letter of line) {
                if (answers[letter]) {
                    answers[letter]++;
                } else {
                    answers[letter] = 1
                }
            }
        } else {
            Object.entries(answers).forEach(([key,  value]) => {
                if(value === pplInGroup) {
                    count++;
                }
            })
            pplInGroup = 0;
            answers = {}
        }

    }

    console.log(count)
})




