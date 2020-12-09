//https://adventofcode.com/2020/day/9
const reader = require('../reader');

reader.readCases().then(lines => {

    let last_25 = lines.slice(0,25);
    let last_25_sorted = [...last_25].sort((a,b) => a - b)
    let rest = lines.slice(25);

    for (let el of rest) {
        let min = Number(last_25_sorted[0]) + Number(last_25_sorted[1])
        let max =  Number(last_25_sorted[last_25_sorted.length-1]) +  Number(last_25_sorted[last_25_sorted.length-2])

        if (el < min || el > max) {
            console.log(el)
            return
        } else {
            last_25 = last_25.slice(1);
            last_25.push(el)
            last_25_sorted = [...last_25].sort((a,b) => a - b)
        }

    }
 })




