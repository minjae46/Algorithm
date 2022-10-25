function solution(numbers, direction) {
    let firstNum = numbers[0]
    let lastNum = numbers[(numbers.length)-1]
    
    if (direction === "right") {
        numbers.pop(lastNum)
        numbers.unshift(lastNum)
        return numbers
    }
    if (direction === "left") {
        numbers.push(firstNum)
        numbers.shift()
        return numbers
    }
}