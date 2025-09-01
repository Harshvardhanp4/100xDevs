import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ['info', 'query'] });
async function main() {
    const user = await prisma.user.create({
        data: {
            email: "sanjay@gmail.com",
            name: "Sanjay",
        },
    });
    console.log("Created user:", user);
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
