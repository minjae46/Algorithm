function solution(code) {
    // 어려울 것 없이, 왼쪽 풀이 설명을 그대로 코드로 옮기면 된다. 
    let answer = '';
    let mode = 0;
    for(let i=0; i<code.length; i++) {
        if(mode === 0) {
            if(code[i] !== "1" && i%2 === 0) {
                 answer += code[i];
            } else if(code[i] === "1") {
                mode = 1;
            }
        }
        else if(mode === 1) {
            if(code[i] !== "1" && i%2 === 1) {
                answer += code[i];
            } else if(code[i] === "1") {
                mode = 0;
            }
        }
    }
    
    if(answer === "") return "EMPTY";
    else return answer;
}