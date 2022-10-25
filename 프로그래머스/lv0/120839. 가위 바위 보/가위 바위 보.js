function solution(rsp) {
    let answer;
    let rspArr = [];
    for (let i in rsp) {
        if (rsp[i] == 2) {
            rspArr.push(0)
        } if (rsp[i] == 0) {
           rspArr.push(5)
        } if (rsp[i] == 5) {
           rspArr.push(2)
        }
    }
    answer = rspArr.join('')
    return answer
}