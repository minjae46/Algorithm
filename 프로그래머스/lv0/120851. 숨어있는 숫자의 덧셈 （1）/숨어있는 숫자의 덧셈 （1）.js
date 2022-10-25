function solution(my_string) {
    const strArr = my_string.split('');
    let answer = strArr.filter(str => parseInt(str));
    answer = answer.reduce((a,b)=> parseInt(a)+parseInt(b));
    return answer
}