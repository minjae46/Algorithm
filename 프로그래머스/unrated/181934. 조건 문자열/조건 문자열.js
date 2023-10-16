function solution(ineq, eq, n, m) {
    let answer = 0;
    if(ineq == ">") {
        if(eq == "=" && n>=m || eq == "!" && n>m) {
            answer = 1;
        } else answer = 0;
    } 
    else if(ineq == "<") {
        if(eq == "=" && n<=m || eq == "!" && n<m) {
            answer = 1;
        } else answer = 0;
    }
    return answer;
}