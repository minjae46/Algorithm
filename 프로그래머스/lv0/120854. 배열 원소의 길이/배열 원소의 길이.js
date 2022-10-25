function solution(strlist) {
    let answer = [];
    for (let i in strlist) {
         answer.push(strlist[i].length)
    }
    return answer;
}