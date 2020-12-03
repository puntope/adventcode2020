const readline = require('readline');
const fs = require('fs');
let linesToProcess = [];


module.exports.readCases = async function () {
    const input = fs.createReadStream(process.cwd() + '/input.txt')
    const rl = readline.createInterface({
        input: input,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        linesToProcess.push(line);
    }

    return linesToProcess
};

