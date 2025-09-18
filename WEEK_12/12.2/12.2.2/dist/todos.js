import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// async function createTodo(user_id: number, title: string, description: string, done:boolean){
//     const response = await prisma.todo.create({
//         data:{
//             user_id,
//             title,
//             description, 
//             done
//         }
//     })
//     console.log(response);
// }
// createTodo(1,'go to sleep', 'from 11',true)
async function getTodos(user_id) {
    const response = await prisma.todo.findMany({
        where: {
            user_id
        },
        select: {
            id: true,
            title: true,
            description: true,
            user: true
        }
    });
    console.log(response);
}
getTodos(1);
//# sourceMappingURL=todos.js.map