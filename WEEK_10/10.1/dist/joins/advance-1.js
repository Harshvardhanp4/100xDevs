import { getClient } from "../queries/utils.js";
//get all todos for a given user
// will return user at least once 
async function getUserTodosWithJoin(userId) {
    const client = await getClient();
    const joinQuery = `SELECT users.*, todos.title, todos.description, todos.done
    FROM users
    LEFT JOIN todos ON users.id = todos.user_id
    WHERE users.id = $1;
    `;
    const res = await client.query(joinQuery, [userId]);
    const results = res.rows;
    console.log("User and Todos: ", results);
}
getUserTodosWithJoin(1);
