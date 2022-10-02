function solution(array, n) {
    var answer = array.filter(el => el === n).length
    return answer;
}