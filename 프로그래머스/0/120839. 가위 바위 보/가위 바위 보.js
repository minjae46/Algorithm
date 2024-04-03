function solution(rsp) {
    let answer;
    let rspArr = [];
    for (let i of rsp) {
        if(i == 2) {
            rspArr.push(0)
        } else if(i == 0) {
           rspArr.push(5)
        } else if(i == 5) {
           rspArr.push(2)
        }
    }
    answer = rspArr.join('')
    return answer
}