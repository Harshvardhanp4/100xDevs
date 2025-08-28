const express = require ('express')
const port  = 3000 
const app =  express(); 

app.get ('/', (req,res)=>{
    let a=0;
    console.log("request has been reached! ");
    for(let i =0 ; i<100; i++)
{
    a=a+1;
}

    res.send('Hello World!')

})