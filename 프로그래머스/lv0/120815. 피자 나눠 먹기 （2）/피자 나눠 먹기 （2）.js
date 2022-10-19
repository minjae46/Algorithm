function solution(n) {
    for (let i=1; i<=6; i++) {
        if ((n*i)%6 === 0) {
            return (n*i) / 6
        } 
    }
}


// n에 최소 몇을 곱해야 6으로 나누어 떨어지는가? 
