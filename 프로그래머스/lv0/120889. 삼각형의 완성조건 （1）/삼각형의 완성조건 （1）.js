function solution(sides) {
    const newArr = sides.sort((a,b) => { return a -b });
    
    if (newArr[0] + newArr[1] > newArr[2]) {
        return 1;
    } else {
        return 2;
    }
}