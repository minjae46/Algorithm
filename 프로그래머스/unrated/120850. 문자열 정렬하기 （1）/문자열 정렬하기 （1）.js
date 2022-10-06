function solution(my_string) {
    let answer = [];
    for (let i of my_string) {
        let num = Number(i)
        if (!isNaN(num)) {
            answer.push(num)
        }
    }
    return answer.sort((a,b) => a-b)
}