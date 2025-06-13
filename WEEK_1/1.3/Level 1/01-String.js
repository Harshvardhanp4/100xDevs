//Get string length
function getLength(str){
    console.log("Original String", str );
    console.log("Length ", str.length);
}
getLength("Hello World")

//index of 

function findIndexOf(str, target){
    console.log("Original String: ", str);
    console.log("Index: ",str.indexOf(target));
}
findIndexOf("Hello World", "World");

//last index of 

function lastIndexOf(str, target){
    console.log("Original String; ",str);
    console.log("Index: ",str.lastIndexOf(target));
}
lastIndexOf("Hello World World","World")

//slice

function getSlice(str,start,end){
    console.log("Original String: ",str);
    console.log("After Slice: ", str.slice(start,end));
}
getSlice("Hello World", 0 , 6);

let ans = "Harshvardhan Patil".slice(0,12)
console.log("after slice: ", ans)

//substring

function getSubstring(str, start, end){
    console.log("Original String: ", str);
    console.log("After Substring: ",str.substring(start,end));
}
getSubstring("Hello World", 0 , 5);

let name1= "Harshvardhan".substring(0,5)
console.log("after substring: ",name1)

//split 

function splitString(str, seperator){
    console.log("Original String: ",str);
    console.log("After Split: ", str.split(seperator));

}
splitString("Hello World"," ");

const value = "hi my name is harsh !"
const words = value.split(" ");
console.log(words);

//trim 

const value1= "       harsh patil    "
console.log(value1.trim());

//to uppercase
console.log(value1.toUpperCase().trim())

//to lowercase
let value2= "HARSH PATIL"
console.log(value2.toLowerCase())