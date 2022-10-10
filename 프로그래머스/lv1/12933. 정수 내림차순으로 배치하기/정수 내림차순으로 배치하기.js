function solution(n) {
    let nArr = n.toString().split('');
    let answer = Number(nArr.sort((a,b) => b-a).join(''))
    return answer;
}