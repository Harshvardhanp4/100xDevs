import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(email: string, password: string, firstName:string, lastName: string){
    const res =  await prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        },
        select:{
            id: true,
            email: true
        }
    })
    console.log(res);

}
insertUser('harsh@gmail.com', 'harsh@1234', 'harsh', 'patil');