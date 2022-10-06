function solution(my_string) {
    var answer = [];
    for (let i of my_string) {
        let num = Number(i)
        if (Number.isInteger(num)) {
            answer.push(num)
        }
    }
    return answer.sort((a,b) => a-b)
}