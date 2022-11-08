function solution(emergency) {
    const strArr = emergency.map(el => el.toString())
    const sortArr = emergency.sort((a,b) => b-a);
    
    let orderArr = [];
    orderArr = sortArr.map((el,i) => i+1);
    
    let obj = {};
    for (let i=0; i<sortArr.length; i++) {
        obj[sortArr[i]] = orderArr[i]
    }
    

    let answer = [];
    for (let i of strArr) {
        answer.push(obj[i])
    }
    
    return answer;
}