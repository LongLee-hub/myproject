function findMaxNumber(x) {
    const s = String(x);
    if (s.length !== 4 || isNaN(x)) {
        return -1;
    }

    let maxNum = -Infinity;

    for (let i = 0; i < s.length; i++) {
        const temp = s.slice(0, i) + s.slice(i + 1);
        const num = parseInt(temp);
        if (num > maxNum) {
            maxNum = num;
        }
    }

    return maxNum;
}