
// const input = [1,2,3,4,5];

// const newArray =[];

// for(let i =0; i<input.length;i++){
//     newArray.push(input[i]*2);
// }
// console.log(newArray);

// new approach

// const input = [1,2,3,4,5];

// function transform(i){
//     return i * 2;

// }

//  const ans = input.map(transform)
//  console.log(ans);


 //filtering returns even values

 const arr = [1,2,3,4,5]

//  const newArr = [];
//  for(let i =0; i<arr.length;i++){
//     if(arr[i]%2==0){
//         newArr.push(arr[i]);
//     }
//  }
// console.log(newArr);

//filter function


// const ans  = arr.filter(function filterLogic(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans);


// checking names


const namearray= ["harsh", "om", "anuj","rohit"];
const ans = namearray.filter(function(n){
    if(n.startsWith("h")){
        return true;
    }
    else{
        return false;
    }
})

console.log(ans);