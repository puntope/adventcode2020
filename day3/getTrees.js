
module.exports.counter =  function (forest, right, down) {
    let trees = 0;
    let currentColumnPosition = right;
    for (let step = down; step < forest.length; step += down) {
        // check tree
        if (forest[step][currentColumnPosition] === '#') {
            trees++;
        }

        // iterate columns until reach the end
        for (let moves = 0; moves < right; moves++) {
            currentColumnPosition ++;
            if (currentColumnPosition === forest[step].length) {
                currentColumnPosition = 0;
            }
        }



    }

    return trees
};

