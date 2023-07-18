function solution(num_list) {
    let answer = 0;
    answer = num_list.findIndex((num) => num < 0);
    return answer;
    // 정확하게 findIndex 메서드의 기능임. 
}