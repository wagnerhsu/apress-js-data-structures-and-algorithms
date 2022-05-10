const array1 = [1,2,3,4];
array1.push(5); // array1 = [1,2,3,4,5]
array1.push(7); // array1 = [1,2,3,4,5,7]
array1.push(2); // array1 = [1,2,3,4,5,7,2]
console.log(array1);
for(const index in array1) {
    console.log(index);
}
for(const element of array1) {
    console.log(element);
}
array1.forEach((number,index,arr)=>{
    console.log(index,number);
})

array1.reduce((previousValue, currentValue, currentIndex, array)=>{
    console.log(previousValue,currentValue,currentIndex);
    return previousValue + currentValue;
}, 0);