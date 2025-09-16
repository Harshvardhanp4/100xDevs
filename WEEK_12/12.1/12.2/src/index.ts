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

// interface User {
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// };

// type Props =  Pick<User, 'name' | 'age'|'email'>
// type UpdatePropsOptional = Partial<Props>

// function updateUser(Props: UpdatePropsOptional){
//     //db call
// }


// -----------------ReadOnly in TS ------------------------------------//

// type User = {
//     readonly name: string, 
//     readonly age: number;
// }

// const user: User = {
//     name: "John",
//     age: 21
// }

// user.age = 12; // here we get error as its a readonly


//USE CASE OF READONLY


// interface Config{
//     readonly endpoint: string, 
//     readonly apikey: string
// }

// const config: Config = {
//     endpoint:'https://api.example.com',
//     apikey: 'asafnjas12',
// };
// config.endpoint = 'fjkadfjajfka'; //cannot assign because readonly





// -----------------Record in TS ------------------------------------//

//lets you give a cleaner type to obj


// interface User {
//     id: string, 
//     name: string
// }

// type Users = Record<string, User>;

// const users: Users = {
//     'abc123': {id: 'abc123', name: 'John Doe'},
// }




//-----------------Exclude in TS----------------------------------//

type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>;

const handleEvent = (event: ExcludeEvent) =>{
    console.log(`Handling Event: ${event}`);

};

handleEvent('click'); // here you can see exclude does the work of not including 'scroll' the scroll parameter