function solution(my_string, overwrite_string, s) {
    let answer = '';
    const my_stringArr = my_string.split('');
    const overwrite_stringArr = overwrite_string.split('');
    my_stringArr.splice(s, overwrite_string.length, ...overwrite_stringArr)
    answer = my_stringArr.join('');
    return answer;
}