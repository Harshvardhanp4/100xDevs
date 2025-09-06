import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function updateUser(username, { firstName, lastName }) {
    const res = await prisma.user.update({
        where: {
            email: username
        },
        data: {
            firstName,
            lastName
        }
    });
    console.log(res);
}
updateUser('harsh@gmail.com', {
    firstName: 'Harshvardhan',
    lastName: 'Patil'
});
