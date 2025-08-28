
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


// function runAfter1S(fn: ()=> void){
//     setTimeout(fn, 1000); // either fn: ()=> void or fn: Function
// }

//  runAfter1S(()=>{
//     console.log('hi there');
//  })


//---------------------------Implementing Interfaces------------------------------//


// interface Person {
//     name: String, 
//     age: number, 
//     greet(phrase: string) : void;

// }

// class Employee implements Person {
//     name: String;
//     age: number;

//     constructor(n:string, a:number){
//         this.name = n;
//         this.age = a;

//     }
//     greet(phrase: String) {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// const e = new Employee("harsh", 21);
// console.log(e.greet('hi there'));


