const sumAll = function(numOne, numTwo) {
    let smallNum, bigNum, allSum = 0;
    if (Number.isInteger(numOne) && Number.isInteger(numTwo) && numOne > 0 && numTwo > 0){
        if (numOne < numTwo) {
            smallNum = numOne;
            bigNum = numTwo;
        }
        else {
            smallNum = numTwo;
            bigNum = numOne;
        }
        for (let i = smallNum; i <= bigNum; i++){
            allSum += i;
        }
        return allSum;
    }
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
