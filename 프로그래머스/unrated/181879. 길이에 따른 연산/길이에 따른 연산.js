function solution(num_list) {
    let answer = 0;
    if(num_list.length >= 11) {
       answer = num_list.reduce((acc, cur) => {return acc+cur});
    } else {
       answer = num_list.reduce((acc, cur) => {return acc*cur});
    }
    return answer;
}