import { getClient } from "./utils.js"; 

async function createEntries(){
    const client = await getClient();
    const insertUserText = `
    INSERT INTO users (email, password) VALUES($1, $2) RETURNING id;
    `
    const userValues = ['harsh@gmail.com','password'];

    let response = await client.query(insertUserText, userValues);

    const insertTodoText = 'INSERT INTO todos (title,description,user_id,done) VALUES($1,$2,$3,$4) RETURNING id';
    const todoValues = ['Buy food', 'from dmart',response.rows[0].id, false];
    await client .query(insertTodoText, todoValues);

    console.log("Entries created")
}

createEntries();