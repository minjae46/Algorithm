function solution(s1, s2) {
    let arr = s1.filter(el => s2.includes(el));
    return arr.length;
}