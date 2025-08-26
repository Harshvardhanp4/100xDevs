// --------------------Type-----------------------------------//

//1. Union : print the id of user which can be no. or a string
//types let you define both no. or string.


// type GreetArg = number | string;
// function greet(id: (number | string)){

// }
// greet(1);
// greet("1")



//2. Intersection:-

type Employee = {
    firstName: string,
    startDate : Date,

}

type Manager = {
    name: String, 
    department: string, 

}

type TeamLead = Employee & Manager; 

const teamLead: TeamLead = {
    firstName: 'harsh',
    name: 'harsh',
    startDate: new Date(),
    department: "S/W Developer"
}