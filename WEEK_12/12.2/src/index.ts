// -----------------Simple Intro To TS ------------------------------------//

// interface User {
//     name: string,
//     age: number
// }

// function sumOfAge(user1: User, user2: User){
//     return user1.age+user2.age;
// }

// const age = sumOfAge({name: 'harsh', age: 20, },{name: 'Sanjay', age: 50});
// console.log(age);












// -----------------Pick in TS ------------------------------------//

// interface User {
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// };

// type Props =  Pick<User, 'name' | 'age'|'email'>

// function updateUser(Props: Props){
//     //db call
// }



// -----------------Partial in TS ------------------------------------//

interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
};

type Props =  Pick<User, 'name' | 'age'|'email'>
type UpdatePropsOptional = Partial<Props>

function updateUser(Props: UpdatePropsOptional){
    //db call
}
