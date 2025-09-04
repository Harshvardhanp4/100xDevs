import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ['info', 'query'] });
async function main() {
    const users = await prisma.user.findMany({});
    console.log(users);
    const user = await prisma.user.findUnique({
        where: {
            id: 1 //where can be used to find matching 
        },
        include: {
            posts: true // include is used as a constraint
        }
    });
    console.log(user);
}
;
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
