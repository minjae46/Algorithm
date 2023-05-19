function solution(num_list) {
    let answer = 0;
    const resultM = num_list.reduce((acc, cur) => { return acc*cur });
    const resultS = num_list.reduce((acc, cur) => { return acc+cur });
    if(resultM < resultS**2) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}