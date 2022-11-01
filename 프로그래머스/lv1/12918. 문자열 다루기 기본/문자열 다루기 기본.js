function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    } else {
        if (isNaN(s)) {
            return false;        
        } else if (s.split('').includes('e')) {
            return false;
        // 지수 형태가 오는 경우 대비 
        } else {
            return true;
        }
    }
    // 완전히 거르려면 정규식 쓰는 방법밖에 없는 듯. 
}