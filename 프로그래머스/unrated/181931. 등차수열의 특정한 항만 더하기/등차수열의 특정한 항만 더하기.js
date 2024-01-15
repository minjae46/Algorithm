function solution(a, d, included) {
    let answer = 0;
    let sum = 0;
    function getValue(i) {
        if(i === 0) return a;
        else return a+(d*i);
    }
    for(let i=0; i<included.length; i++) {
        if(included[i] == true) {
            sum += getValue(i);       
        }
    answer = sum;
    }
    return answer;
}