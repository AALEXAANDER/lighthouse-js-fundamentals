function lastIndexOf (arr, num){
    let numIndexFound = false;
    let output = 0;

for(let i = arr.length - 1; i >= 0; i--){
    if (arr[i] === num){
        numIndexFound = true;
        output = i;
        break;
    } 
}
if(numIndexFound){
    return output;
} else {
    return -1;
}
}


