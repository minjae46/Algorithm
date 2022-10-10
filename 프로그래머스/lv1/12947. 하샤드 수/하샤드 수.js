function solution(x) {
    const xArr = x.toString().split('');
    const sum = xArr.reduce((a,b) => Number(a) + Number(b))

    if (x%sum === 0) {
        return true
    } else {
        return false
    }
}