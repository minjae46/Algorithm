function solution(my_string) {
    let answer = [];
    for(let i=0; i<my_string.length; i++) {
        if(my_string.charCodeAt(i) >= 65 && my_string.charCodeAt(i) <= 90) {
            answer.push(my_string[i].toLowerCase());
        } else if(my_string.charCodeAt(i) >= 97 && my_string.charCodeAt(i) <= 122) {
            answer.push(my_string[i].toUpperCase());
        }
    }
    answer = answer.join('');
    return answer
}