// enum Direction {
//     Up = "up", 
//     Down = "down",
//     Left = "left",
//     Right = "right"
// }

// function doSomething(keyPressed: Direction){
//     if (keyPressed == Direction.Up){

//     }
// }
// doSomething(Direction.Up);
// console.log(Direction.Up);





//-----------------------------------Express Example -------------------------------------------------//

// const express = require("express");
// const app = express();

// enum ResponseStatus {
//     Success = 200, 
//     NotFound = 400, 
//     Error = 500,

// }

// app.get("/", (req,res) =>{
//     if(!req.query.userId) {
//         res.status(ResponseStatus.Error).json({})

//     }
//     res.status(ResponseStatus.Success).json({});
// })




//------------------------------Generics----------------------------//

// function identity<T>(arg: T): T{
//     return arg;

// }

// let output1 = identity("myString");
// let output2 = identity(100);


// Returning first element

// function FirstElement<T>(arg:T[]){
//     return arg[0];
// }

// const el = FirstElement(["harsh", "patil" ]);
// console.log(el?.toUpperCase());






//-----------Exporting and Importing Modules -----------------------------//

// import express = require("express")
// const app = express;

import a  from "./b";
console.log(a);

