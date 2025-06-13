function pushExample(arr, element){
    console.log("Original Array: ",arr);
    arr.push(element);
    console.log("after push: ",arr);
    arr.pop();
    console.log("after pop: ", arr);
    arr.shift();
    console.log("after shift: ", arr)
    arr.unshift(1);
    console.log("after unshift", arr)
}
pushExample([1,2,3],4);

// concat

const intialArray = [1,2,3];
const secondArray = [4,5,6];
console.log("Concat:--", intialArray.concat(secondArray));