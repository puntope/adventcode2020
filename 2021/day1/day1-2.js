
// https://adventofcode.com/2021/day/1#part2

const reader = require('../../reader');


reader.readCases().then(lines => {

    let increases = 0;

    for ( let i = 3; i < lines.length; i++ ) {

        let current = parseInt( lines[ i - 2 ] ) + parseInt( lines[ i - 1 ] );

        if ( current + parseInt( lines[ i ] )  > current + parseInt( lines[ i - 3 ] ) ) {
            increases++;
        }
    }

    console.log(increases);
})





