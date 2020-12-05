//https://adventofcode.com/2020/day/5
const reader = require('../reader');

reader.readCases().then(lines => {

    let idList = [];
    for (let line of lines) {
        const row = line.substring(0, 7);
        const col = line.substring(7);

        const rowSeat = getSeat(row)
        const colSeat = getSeat(col)
        const id = rowSeat * 8 + colSeat;
        idList.push(id)
    }

    idList.sort((a,b) => a -b )

    for(let seat = 1; seat < idList.length - 1; seat++) {
        let currentSeat = idList[seat]
        let nextSeat = idList[seat + 1]
        if (currentSeat + 1 !== nextSeat) {
            console.log(currentSeat+1)
        }
    }

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



