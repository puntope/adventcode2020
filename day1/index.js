
//https://adventofcode.com/2020/day/1

const reader = require('../reader');

reader.readCases().then(lines => {
    const input = lines.filter(el => el <= 2020).sort();
    let found = false;
    for (let i = 0; i < input.length; i++) {
        let elA = Number(input[i]);
        for (let j = i + 1; j < input.length; j++) {
            let elB = Number(input[j]);
            if (elA + elB === 2020) {
                console.log(elA * elB)
                found = elA * elB;
                break;
            }
        }

        if (found) {
            break;
        }
    }
})





