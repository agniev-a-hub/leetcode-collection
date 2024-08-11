/**
 * @param {string} argString
 * @return {number}
 */

var romanToInt = function(argString) {
    const dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let total = 0;
    const strLen = argString.length;
    for (let i = 0; i < strLen; i++) {
        if (i < strLen - 1 && dict[argString[i]] < dict[argString[i + 1]]) {
            total -= dict[argString[i]];
        } else {
            total += dict[argString[i]];
        };
    };
    return total;
};
