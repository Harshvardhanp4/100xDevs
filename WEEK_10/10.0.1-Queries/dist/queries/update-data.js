import { getClient } from "./utils.js";
async function updateTodo(todoId) {
    const client = await getClient();
    const updateTodoText = `UPDATE todos SET done = $1 WHERE id = $2`;
    await client.query(updateTodoText, [true, todoId]);
    console.log(`Todo with ID ${todoId} has been updated done!`);
}
const todoIDupdate = 1;
updateTodo(todoIDupdate);
