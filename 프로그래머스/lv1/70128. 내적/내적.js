function solution(a, b) {
    let answer;
    let arr = [];
    for (let i=0; i<a.length; i++) {
        arr.push(a[i]*b[i])
    }
    answer = arr.reduce((a, b) => a + b)
    return answer;
}