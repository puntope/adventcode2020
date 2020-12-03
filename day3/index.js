//https://adventofcode.com/2020/day/3
const reader = require('../reader');
const getTrees = require('./getTrees');

reader.readCases().then(lines => {
    const STEPS_DOWN = 1;
    const STEPS_RIGHT = 3;
    console.log(getTrees.counter(lines, STEPS_RIGHT, STEPS_DOWN))
})



