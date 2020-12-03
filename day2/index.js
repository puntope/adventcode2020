//https://adventofcode.com/2020/day/2
const reader = require('../reader');

reader.readCases().then(lines => {
    let validPasswords = 0;
    for (let line = 0; line < lines.length; line++) {

        let [policy, password] = lines[line].split(': ')
        const [minMax, letter] = policy.split(' ')
        const [min, max] = minMax.split('-')
        const lettersObj = {}


        for (let i = 0; i < password.length; i++) {
            const currentLetter = password[i];

            if (lettersObj[currentLetter]) {
                lettersObj[currentLetter]++
            } else {
                lettersObj[currentLetter] = 1;
            }
        }

        if (lettersObj[letter] >= min && lettersObj[letter] <= max) {
            validPasswords++;
        }

    }

    console.log(validPasswords)
})



