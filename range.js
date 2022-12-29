const range = function(start, end, step){
    const countingArray = []
    if(start > end || end === undefined || start === undefined || step === undefined || step === 0 || step < 0){
        return countingArray;
    } else {
   for(let i = start; i <= end; i += step){
    countingArray.push(i);
   }
}
    return countingArray;
}
    

console.log(range(2,40,4));