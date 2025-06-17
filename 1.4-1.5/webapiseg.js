console.log("hi theere!")

setTimeout(function(){
    console.log("from inside asunc fn")//will contain the external functions //web apis//
},10000);

let a = 0;
for(let i = 0; i<10;i++){
    a = a+1;
}
console.log(a);