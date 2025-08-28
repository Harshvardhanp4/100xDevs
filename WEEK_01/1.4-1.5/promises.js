const fs = require('fs');
function HarshReadFile(){
    console.log("control1")
    return new Promise(function(resolve){
        console.log("control2")
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
            console.log("control3")
        })
    })
}

function onDone(data){
    console.log(data)
}

HarshReadFile().then(onDone);