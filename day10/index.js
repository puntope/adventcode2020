//https://adventofcode.com/2020/day/10
const reader = require('../reader');

reader.readCases().then(lines => {
    let charges = [0,0,1]
    let v = 0;
    lines.sort((a,b) => a-b)
    for (let i = 0; i < lines.length; i++) {
        let diff = Number(lines[i]) - v;
        if (diff <= 3) {
            charges[diff-1]++
            v = Number(lines[i])
        }
    }

    console.log(charges[0] * charges[2])
 })




