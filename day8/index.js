//https://adventofcode.com/2020/day/8
const reader = require('../reader');

reader.readCases().then(lines => {
    let acc = 0;
    const done = {}
    for (let line = 0; line < lines.length; line++) {
        const currentLine = lines[line]
        const [type, instruction] = currentLine.split(' ')
        const increment = instruction.substring(0,1)
        const qty = Number(instruction.substring(1))

        if (done[line]) {
            console.log(acc)
            break;
        }

        done[line] = true

        if (type === 'acc') {
            if (increment === '+') {
                acc += qty
            } else {
                acc -= qty
            }
        }

        if (type === 'jmp') {
            if (increment === '+') {
                line += qty - 1
            } else {
                line -= qty + 1
            }
        }
    }
})




