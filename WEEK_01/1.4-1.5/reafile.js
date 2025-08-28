const fs = require ("fs");//filesystem node js library
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("hi! there")
let a = 0;
for(let i = 0; i<100000000;i++){
    a++;
}
console.log("hi there 2");

// control reaches hi there then unless hi there 2 doesnt execute it will be busy//
 