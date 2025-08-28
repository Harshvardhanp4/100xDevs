import { getClient } from "./utils.js";
async function deleteTodo(todoId) {
    const client = await getClient();
    const deletedTodoText = `DELETE FROM todos WHERE id = $1`;
    await client.query(deletedTodoText, [todoId]);
    console.log(`Todo with id ${todoId} deleted!]`);
}
const todoDeletedId = 1;
deleteTodo(todoDeletedId);
