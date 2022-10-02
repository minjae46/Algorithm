function solution(array, height) {
    var answer = array.filter(el => el > height).length;
    return answer;
}