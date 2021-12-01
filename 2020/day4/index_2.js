//https://adventofcode.com/2020/day/4
const reader = require('../../reader');

reader.readCases().then(lines => {


    const FIELDS_MANDATORY = ['byr','iyr','eyr','hgt','hcl','ecl','pid']

    let valid = 0;
    let currentPassport = {};

    let i = 0;
    for(let line of lines) {
        i++;

        if (line.length) {
            const lineValues = line.split(' ');
            for (let values of lineValues) {
                const [key, value] = values.split(':')
                currentPassport[key] = value
            }
        }

        if (!line.length || i === lines.length) {
            let isValid = true;
            for (let field of FIELDS_MANDATORY) {
                if (!checkValid(field, currentPassport)) {
                    isValid = false
                    break;
                }
            }

            if (isValid) {
                valid++
            }

            currentPassport = {}
        }


    }

    console.log(valid)
})


function checkValid(field, passport) {
    if (typeof passport[field] === 'undefined') return false
    switch (field) {
        case 'byr': {
            return Number(passport[field]) >= 1920 && Number(passport[field]) <= 2002
        }
        case 'iyr': {
            return Number(passport[field]) >= 2010 && Number(passport[field]) <= 2020
        }
        case 'eyr': {
            return Number(passport[field]) >= 2020 && Number(passport[field]) <= 2030
        }
        case 'hgt': {
            const format = passport[field].substring(passport[field].length -2)
            const [number] = passport[field].split(format)
            let min,max;
            if (format === 'cm') {
                min = 150;
                max = 193;
                return Number(number) >= 150 && Number(number) <= 193
            } else if (format === 'in') {
                min = 59;
                max = 76;
                return Number(number) >= 59 && Number(number) <= 76
            } else {
                return false
            }

        }
        case 'hcl': {
            let regexp = /^#[0-9a-f]{6}$/i
            return regexp.test(passport[field])
        }
        case 'ecl': {
            let allowed = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl' ,'oth']
            return passport[field].length === 3 && allowed.includes(passport[field])
        }
        case 'pid': {
            let regexp = /^[0-9]{9}$/i
            return regexp.test(passport[field])
        }
    }
}


