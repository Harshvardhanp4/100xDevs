function explainParseInt(value){
    console.log("Original Value: ",value);
    let result = parseInt(value);
    console.log("After parseInt: ", result);

}
//example usage for ParseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value){
    console.log("Original Value: ", value);
    let result = parseFloat(value);
    console.log("After parseFloat:",result);

}

//example usage for Parse Float
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");


//parse int gives convert from string to integer 
//so instead of let a ="21"