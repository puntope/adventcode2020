//https://adventofcode.com/2020/day/9
const reader = require('../reader');

reader.readCases().then(lines => {

    let bad = getBadNumber(lines)
    let match
    let min = 0;
    let max = 0;
    for (let j = 0; j < lines.length; j++ ) {
        let curr = Number(lines[j])
        let next = Number(lines[j])

        if (curr >= bad) {
            continue;
        }

        for (let k = j+1; k < lines.length; k++) {
            next += Number(lines[k])
            if (next > bad) {
                break;
            }

            if (next === bad) {

                match = lines.slice(j,k+1)
                console.log(j, k, match, lines[j], lines[k])
            }
        }
    }
    match.sort((a,b) => a-b)
    console.log(Number(match[0]) + Number(match[match.length-1]))
})


function getBadNumber(lines) {
    let last_25 = lines.slice(0,25);
    let last_25_sorted = [...last_25].sort((a,b) => a - b)
    let rest = lines.slice(25);

    for (let el of rest) {
        let min = Number(last_25_sorted[0]) + Number(last_25_sorted[1])
        let max =  Number(last_25_sorted[last_25_sorted.length-1]) +  Number(last_25_sorted[last_25_sorted.length-2])

        if (el < min || el > max) {
            return Number(el)
        } else {
            last_25 = last_25.slice(1);
            last_25.push(el)
            last_25_sorted = [...last_25].sort((a,b) => a - b)
        }

    }
}

