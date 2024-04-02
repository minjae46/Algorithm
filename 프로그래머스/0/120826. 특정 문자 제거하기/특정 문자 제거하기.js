function solution(my_string, letter) {
    let answer = [];
    for (let i of my_string) {
        if(i !== letter) {
            answer.push(i)
        }
    }
    answer = answer.join('');
    return answer;
}