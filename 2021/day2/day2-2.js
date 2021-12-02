
// https://adventofcode.com/2021/day/2#part2

const reader = require('../../reader');
console.time('Time with parsing')
reader.readCases().then(lines => {
    console.time('Time to solve')
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    lines.forEach(line => {
        const qty = parseInt(line.substring(line.indexOf(' ') + 1));

        switch (line[0]) {
            case 'd':
                aim += qty;
                break;
            case 'u':
                aim -= qty;
                break;
            default:
                horizontal += qty
                depth += aim * qty
                break;
        }

    })

    console.log('Result:', depth*horizontal);
    console.timeEnd('Time to solve')
    console.timeEnd('Time with parsing')
})








