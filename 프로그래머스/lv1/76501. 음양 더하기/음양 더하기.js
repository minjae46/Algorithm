function solution(absolutes, signs) {
    let result = 0;
    for (let i in signs) {
        if (signs[i] === true) {
            result += absolutes[i];
        } else {
            result -= absolutes[i]
        }
    }
    return result
}