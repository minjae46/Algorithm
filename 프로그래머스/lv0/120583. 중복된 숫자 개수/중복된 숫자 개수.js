function solution(array, n) {
    const answer = array.filter(el => el === n).length;
    return answer;
}