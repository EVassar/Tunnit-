var balanced_bonus = function (data) {
    let letters = {};
    for (let i = 0; i < data.length; i += 1) {
        if (letters.hasOwnProperty(data[i])) {
            letters[data[i]] += 1;
        }
        else {
            letters[data[i]] = 1
        }
    }
    let lettercount = Object.values(letters)
    for (let count of lettercount) {
        if (lettercount[0] != count) {
            return false;
        }
    }
    return true;
}
