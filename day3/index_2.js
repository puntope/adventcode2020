//https://adventofcode.com/2020/day/3
const reader = require('../reader');
const getTrees = require('./getTrees');

reader.readCases().then(lines => {
    const forests = [[1,1],[3,1],[5,1],[7,1],[1,2]]
    let multiplier = 1;
    for(let i = 0; i < forests.length; i++) {
        const currentTrees = getTrees.counter(lines, forests[i][0], forests[i][1])
        multiplier *= currentTrees;
    }
    console.log(multiplier)
})



