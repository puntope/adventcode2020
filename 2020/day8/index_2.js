//https://adventofcode.com/2020/day/8
const reader = require('../../reader');

reader.readCases().then(lines => {
    let loop = []
    let jmpNop = []
    for (let line = 0; line < lines.length; line++) {
        const currentLine = lines[line]
        const [type, instruction] = currentLine.split(' ')
        const increment = instruction.substring(0,1)
        const qty = Number(instruction.substring(1))

        loop.push({type, increment, qty})
        if (type === 'jmp' || type === 'nop') {
            jmpNop.push(line)
        }
    }

    for (let jn of jmpNop) {
        let nextLoop = JSON.parse(JSON.stringify(loop));

        if (nextLoop[jn].type === 'nop') {
            nextLoop[jn].type = 'jmp'
        } else if (nextLoop[jn].type === 'jmp') {
            nextLoop[jn].type = 'nop'
        }
        let newLoop = testLoop(nextLoop)
        if (newLoop) {
            console.log(newLoop)
            break;
        }
    }


})


function testLoop(loop) {
    let acc = 0;
    const done = {}
    for (let line = 0; line < loop.length; line++) {
        const {type, increment,qty } = loop[line]

        if (done[line]) {
            return false
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

        if (line >= loop.length - 1) {
            return acc
        }

    }

    return true
}


