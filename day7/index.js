//https://adventofcode.com/2020/day/7
const reader = require('../reader');

reader.readCases().then(lines => {

    const bags = {}
    let goldBags = 0;
    const goldShinnyFriendly = []
    for (let line of lines) {
        let [parent, children] = line.split(' contain ')
        const childrenBags = children.replace('.','').split(', ')
        parent = formatBag(parent)
        if (!bags[parent]) {
            bags[parent] = []
        }

        for (let bag of childrenBags) {
            let bagType = formatBag(bag.slice(2))
            if (bagType === 'shiny gold') {
                goldShinnyFriendly.push(parent)
                goldBags++;
            }

            if (bagType === 'other') {
                continue
            }
            bags[parent].push(bagType)

        }
    }


    for (let i = 0; i < goldShinnyFriendly.length; i++) {
        let current = goldShinnyFriendly[i];

        Object.entries(bags).forEach(([bag, children]) => {
            if (goldShinnyFriendly.includes(bag)) return
            if (children.includes(current)) {
                goldShinnyFriendly.push(bag)
            }
        })
    }

    const total = new Set(goldShinnyFriendly).size

    console.log(total);



    function formatBag(bag) {
        return bag.replace(/bag[s]?/,'').trim()
    }


})




