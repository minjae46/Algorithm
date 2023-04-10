function solution(my_string, n) {
    let answer;
    const array = my_string.split('');
    answer = array.map(a => a.repeat(n)).join('');
    return answer;
}