function solution(before, after) {

    if(before.length !== after.length) {
        return 0 
    }
    
    let obj = {};
    
    for(let i=0; i<before.length; i++) {
        let letter = before[i]
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1
    }
    //console.log(obj)  
    for(let i=0; i<after.length; i++) {
        let letter = after[i]
        if(!obj[letter]) {
            return 0
        } 
        else {
            obj[letter] -= 1
        }
    }
    //console.log(obj) 
    return 1;    
    
    //before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}