function solution(s) {
    let obj = {};
    for (let i=0; i<s.length; i++) {
        let letter = s[i];
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1
    }

    const keyArr = Object.keys(obj)
    const resultArr = [];
    for (let i of keyArr) {
        if (obj[i] === 1) {
            resultArr.push(i)
        }
    }

    const answer = resultArr.sort().join('')
    return answer
}