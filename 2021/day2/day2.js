
// https://adventofcode.com/2021/day/2

const reader = require('../../reader');
console.time('Time with parsing')
reader.readCases().then(lines => {
    console.time('Time to solve')
    let horizontal = 0;
    let depth = 0;

    lines.forEach(line => {
        const qty = parseInt(line.substring(line.indexOf(' ') + 1));

        switch (line[0]) {
            case 'd':
                depth += qty;
                break;
            case 'u':
                depth -= qty;
                break;
            default:
                horizontal += qty
                break;
        }

    })

    console.log('Result:', depth*horizontal);
    console.timeEnd('Time to solve')
    console.timeEnd('Time with parsing')
})








