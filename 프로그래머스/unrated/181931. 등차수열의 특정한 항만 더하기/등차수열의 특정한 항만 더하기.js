function solution(a, d, included) {
    let answer = 0;
    let sum = 0;
    for(let i=0; i<included.length; i++) {
        if(included[i] == true) {
            sum += a+(d*i);     
        }
    answer = sum;
    }
    return answer;
}