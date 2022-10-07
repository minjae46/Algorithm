function solution(array) {
    let answer = [];
    let max = Math.max(...array)
    let maxIdx = array.indexOf(max)
    answer = [max, maxIdx]
    return answer;
}