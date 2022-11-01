function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    } else {
        console.log("두번째", s)
        console.log(Number(s.toString()))
        if (isNaN(s)) {
            return false;        
        } else if (s.split('').includes('e')) {
            return false;
        } else {
            return true;
        }
    }
}