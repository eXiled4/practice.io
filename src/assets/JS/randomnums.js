genRandomNumbers = function (){
    let rNum = [];
    for (let i=0; i<60; i++){
        let rnd = Math.floor((Math.random() * 9999) + 1);
        rNum.push(rnd)
    }
    return rNum
}