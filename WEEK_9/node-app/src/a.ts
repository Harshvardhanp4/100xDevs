
// this is how we can return a number 
// even if :number is not givem ts gives number
//by type inference 

// function sum( a: number,  b: number): number{
//     return a + b;
// }

// const value = sum(1,2);
// console.log(value);


//---------------------------------------------------------------//


// true false here we returned a boolean 
// function isLegal(age: number):boolean{
//     if(age>18){
//         return true;
//     }
//     else {
//         return false
//     }
// }
// console.log(isLegal(19));


//---------------------------------------------------------------------------------//

// create a function that takes another function as input 
// adn runs it after 1 second


function runAfter1S(fn: ()=> void){
    setTimeout(fn, 1000); // either fn: ()=> void or fn: Function
}

 runAfter1S(()=>{
    console.log('hi there');
 })
