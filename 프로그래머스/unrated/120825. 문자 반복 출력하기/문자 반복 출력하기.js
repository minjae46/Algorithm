function solution(my_string, n) {
    let arr = my_string.split('');
    return arr.map(a => a.repeat(n)).join('')
}