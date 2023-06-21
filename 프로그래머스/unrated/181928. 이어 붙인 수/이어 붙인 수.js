function solution(num_list) {
    let answer = 0;
    let odd = '';
    let even = '';
    for (let i of num_list) {
        if (i%2 === 1) {
            odd += String(i);
        
        } else {
            even += String(i);
        }
    }
    answer = Number(odd) + Number(even);
    return answer;
}