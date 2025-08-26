
function isLegal(user: user){
    if(user.age<18){
        return false
    }
    else return true;
}

const user = {
    firstName: "harsh",
    lastName: "Patil",
    email: "harsh@gmail.com",
    age: 21,
}

interface user {
    firstName: string,
    lastName: string, 
    email : string,
    age: number,
}

console.log(isLegal(user))