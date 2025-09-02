import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({log:['info', 'query']});

async function main(){

    let res = await prisma.post.findMany({
        take: 2, //LIMIT 2
        skip: 2 //OFFSET 2
    })
    console.log(res);
}


main();
//  SKIP : IS OFFSET AND TAKE: LIMIT