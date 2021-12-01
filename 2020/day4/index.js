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
               if (typeof currentPassport[field] === 'undefined') {
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



