import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function insertUser(username, password, firstName, lastName, email) {
    const response = await prisma.user.create({
        data: {
            username,
            password,
            firstName,
            lastName,
            email
        }
    });
    console.log(response);
}
insertUser('harshvardhan', 'pass123', 'harsh', 'p', 'harsh123@gmail.com');
//# sourceMappingURL=index.js.map