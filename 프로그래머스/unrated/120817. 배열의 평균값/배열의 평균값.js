function solution(numbers) {
    let result = numbers.reduce((acc, cur) => {return acc+cur})
    return result/numbers.length
}