function solution(hp) {
    const answer = parseInt(hp/5) + parseInt((hp%5)/3) + parseInt (((hp%5)%3)/1);
    return answer;
}