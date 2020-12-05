//https://adventofcode.com/2020/day/5
const reader = require('../reader');

reader.readCases().then(lines => {

    let highest = 0;
    for (let line of lines) {
        const row = line.substring(0, 7);
        const col = line.substring(7);

        const rowSeat = getSeat(row)
        const colSeat = getSeat(col)
        const id = rowSeat * 8 + colSeat;
        if (id > highest) {
            highest = id
        }
    }

    console.log(highest)
})


function getSeat(value) {
    let position = Math.pow(2, value.length) - 1
    let min = 0;
    let max = position;
    for (let letter of value) {

        position = Math.ceil(position / 2)

        if (letter === 'F' || letter === 'L') {
            max = Math.floor((max - min) / 2) + min
        } else {
            min = min + position
        }

    }

    return min
}



