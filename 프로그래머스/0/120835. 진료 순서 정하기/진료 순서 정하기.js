function solution(emergency) {
    // 배열 안에 숫자가 큰 순서부터 1순위임. 
  
    let sortArr = [...emergency].sort((a,b) => b-a);
    let orderArr = [...emergency].map((el,i) => i+1);
    //응급도 순위를 구하기 위해, 배열 오름차순으로 정리 후 순위 할당. 
    
    /* 
    [...emergency](얕은복사)를 사용하는 이유: emergency.sort()를 직접 해버리면, 
    원 배열인 emergency가 변형된다. 이를 막기 위한 얕은 복사를 하는 것. 
    */
    
    let obj = {};
    for(let i=0; i<sortArr.length; i++) {
        obj[sortArr[i]] = orderArr[i]
    }
    //배열 요소와 순위 짝이 담긴 객체 생성. 
    //객체 키-밸류는 자동으로 오름차순으로 정리됨.  
    console.log(obj)

    let answer = [];
    for(let i of emergency) {
        answer.push(obj[i])
    }
    
    return answer;
}