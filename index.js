// code your solution here

function superbowlWin(record){
    //This function is a for loop, iterating through an array of record
    //check for the result of W, if true returns the year.
    for (let superbOwl  of record) {
        if (superbOwl.result == "W") {
            let winYear = superbOwl.year;
            return winYear; 
        };
    };
};