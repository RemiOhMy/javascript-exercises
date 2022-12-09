const repeatString = function (repeatWord, repeatNum) {
    let repeatStr = "";
    if (repeatNum < 0) {
        repeatStr = "ERROR";
    }
    else {
        for (i = 0; i < repeatNum; i++) {
            repeatStr += repeatWord;
        }
    }
    return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
