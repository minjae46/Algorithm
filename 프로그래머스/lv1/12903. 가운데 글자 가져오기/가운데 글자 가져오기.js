function solution(s) {
    let centerIdx = Math.floor(s.length/2);
    let centerStr = '';

    if (s.length%2 === 1) {
        centerStr = s[centerIdx]
    } else {
        centerStr = s[centerIdx-1] + s[centerIdx]
    }
    return centerStr
}