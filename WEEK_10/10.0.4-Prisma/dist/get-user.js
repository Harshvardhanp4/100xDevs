import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function findUser(username) {
    const res = await prisma.user.findUnique({
        where: {
            email: username
        }
    });
    console.log(res);
}
findUser('harsh@gmail.com');
