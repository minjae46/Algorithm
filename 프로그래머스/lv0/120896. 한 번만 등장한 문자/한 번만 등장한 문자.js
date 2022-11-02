function solution(s) {
    let obj = {};
    for (let i=0; i<s.length; i++) {
        let letter = s[i];
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1
    }
    //객체로 빈도 수 세기 패턴 이용
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