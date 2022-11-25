function solution(s1, s2) {
    let answer;
    let arr = s1.filter(el => s2.includes(el));
    answer = arr.length;
    return answer;
}