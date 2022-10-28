function solution(s) {
    const sArr = s.split('')
    let upperArr = [];
    let lowerArr = [];
    
    for (let i of sArr) {
        if (i.toUpperCase() === i) {
            upperArr.push(i)
        } else {
            lowerArr.push(i)
        }
    }
    console.log("대문자배열", upperArr)
    console.log("소문자배열", lowerArr)
    
    const resultLowerArr = lowerArr.sort().reverse()
    console.log(resultLowerArr)
    
    const answer = sArr.sort().reverse().join('')
    return answer;
}