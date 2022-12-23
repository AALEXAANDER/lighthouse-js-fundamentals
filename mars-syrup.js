const howManyHundreds = function(bottles) {
    return (bottles - (bottles % 100)) / 100; 
}

console.log(howManyHundreds(2356));