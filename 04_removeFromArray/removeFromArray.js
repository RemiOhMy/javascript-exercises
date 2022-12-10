const removeFromArray = function(items, ...elementsToRemove) {
    const updatedArray = Array.from(items);
    const rmvElements = Array.from(elementsToRemove);
    for (let i = 0; i < rmvElements.length; i++) {
        for (let a = 0; a < updatedArray.length; a++) {
            if (updatedArray[a] === rmvElements[i]) {
                updatedArray.splice(a, 1);
            }
        }
    }
    return updatedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
