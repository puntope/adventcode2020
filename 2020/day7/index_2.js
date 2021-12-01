//https://adventofcode.com/2020/day/7
const reader = require('../../reader');

reader.readCases().then(lines => {

    const bags = {}
    for (let line of lines) {
        let [parent, children] = line.split(' contain ')
        const childrenBags = children.replace('.','').split(', ')
        parent = formatBag(parent)
        if (!bags[parent]) {
            bags[parent] = {}
        }

        for (let bag of childrenBags) {
            let counter = Number(bag.slice(0,1));
            let bagType = formatBag(bag.slice(2))

            if (bagType === 'other') {
                continue
            }
            bags[parent][bagType] = counter
        }
    }
    const cachedBags = {}

    let total = findBags('shiny gold')

    console.log(total);



    function findBags(bag) {
        let count = 0;
        if (cachedBags[bag]) {
            return cachedBags[bag];
        }
        Object.entries(bags[bag]).forEach(([bagType, counter]) => {
            count += counter + (counter*findBags(bagType))
        });

        if (!cachedBags[bag]) {
            cachedBags[bag] = count
        }
        return count;
    }

    function formatBag(bag) {
        return bag.replace(/bag[s]?/,'').trim()
    }


})




