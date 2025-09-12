import { Prisma, PrismaClient } from "@prisma/client";
import { email } from "zod";
const prisma = new PrismaClient();

// async function main(){
//     await prisma.user.update({
//         where:{
//             id: 1
//         },
//         data:{
//             posts:{
//                 deleteMany:{
//                     published: false
//                 }
//             }
//         }
//     })
// } 

async function main(){

    await prisma.user.delete({
        where:{
            id:1
        },
    })
}  // for deleting a user 
main()
.then (async()=>{
    console.log("done");
    await prisma.$disconnect()
    
})
.catch(async(e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})