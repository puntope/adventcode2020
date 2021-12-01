//https://adventofcode.com/2020/day/2
const reader = require('../../reader');

reader.readCases().then(lines => {
    let validPasswords = 0;
    for (let line = 0; line < lines.length; line++) {

        let [policy, password] = lines[line].split(': ')
        const [pos, letter] = policy.split(' ')
        const [posA, posB] = pos.split('-')

        if ((password[posA-1] === letter &&  password[posB-1] !== letter) || (password[posA-1] !== letter &&  password[posB-1] === letter)) {
            validPasswords++;
        }

    }

    console.log(validPasswords)
})



