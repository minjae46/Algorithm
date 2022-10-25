function solution(my_string, n) {
    let answer;
    const arr = my_string.split('');
    answer = arr.map(a => a.repeat(n)).join('')
    return answer
}