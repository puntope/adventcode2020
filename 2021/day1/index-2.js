
// https://adventofcode.com/2021/day/1#part2

const reader = require('../../reader');
const slidingWindow = [[],[],[]];
let lastSum;
let increases = 0;

const updateSlides = (i, value) => {
    let pos = i % 3;

    for (let j = 0; j < slidingWindow.length; j++) {
        if (j === pos || i <= j) continue;
        slidingWindow[j].push(value);
    }
}


const getCurrentSum = (pos) => {
    return slidingWindow[pos].reduce((accum, curr) => accum+curr, 0);
}

const checkIncrease = (pos) => {

    let newSum = getCurrentSum(pos);
    if (lastSum != null && newSum > lastSum) {
        increases++;
    }

    lastSum = newSum;
}

reader.readCases().then(lines => {


    for (let i = 0; i <= lines.length; i++) {
        let pos = i % 3;
        let value = parseInt(lines[i]);

        updateSlides(i, value);

        if (slidingWindow[pos].length < 3) {
            slidingWindow[pos].push(value);
        }

        if (slidingWindow[pos].length === 3) {
            checkIncrease(pos);
            slidingWindow[pos] = [];
        }

    }

    console.log(increases + 1);
})





