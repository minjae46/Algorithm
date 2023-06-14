function solution(num_list) {
    let answer = num_list;
    let lastNum = num_list[num_list.length-1];
    let lastSecNum = num_list[num_list.length-2];
    if (lastNum > lastSecNum) {
        answer.push(lastNum - lastSecNum);
    } else {
        answer.push(lastNum*2);
    }
    return answer;
}