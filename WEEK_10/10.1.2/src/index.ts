
import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();
const client = new Client({
   connectionString: process.env.DATABASE_URL
})


//-----------------CREATE USER TABLE ------------------------//

// async function createUsersTable(){
    
//     await client.connect()
//     const res = await client.query(`
//         CREATE TABLE users(
//         ID SERIAL PRIMARY KEY,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//         `);
//         console.log(res);
// }

// createUsersTable();




//------------------ INSERT INTO USERS TABLE ------------------------------------//


// async function insertIntoUserTable(email: string, password: string){
//     await client.connect();
//     const insertQuery =  `INSERT INTO users(email,password) VALUES($1 , $2)`;
//     const values  = [email, password];
//     const res = await client.query(insertQuery,values);
//     console.log('Insertion success!' , res);
//     await client.end();
// }

// insertIntoUserTable('u1@gmail.com', 'pass2');


//---------------------GET USERS-------------------------//
//optimal way 
// async function getUserFromEmail(email: string){
//     try{
//     await client.connect();
//     const query = 'SELECT * FROM users WHERE email = $1';
//     const result = await client.query(query, [email]);    
        
//      if(result.rows.length>0){
//         console.log('User found: ', result.rows[0]);
//         return result.rows[0];
//     }
//     else{
//         console.log('User not found')
//         return null;
//     }
//     }catch(err){
//         console.error('Error',err);
//         throw err;
//     }
//     finally{
//         await client.end();
//     }
   
    
// }

// getUserFromEmail('u1@gmail.com')


//------------------RELATIONSHIPS & TRANSACTIONS-----------------------//

// CREATING A ADDRESS TABLE WITH FOREIGN KEY 

// async function createAddressTable(){
//     await client.connect();
//     const query = `CREATE TABLE address(
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER NOT NULL,
//     city VARCHAR(255) NOT NULL,
//     FOREIGN KEY (user_id) REFERENCES users(id)
//     )`;
//     await client.query(query);
//     console.log("Address table created!");
//     await client.end();
// }
// createAddressTable();


// Insert into Address.

//  async function insertAddress(user_id:number, city: string){
//      await client.connect();

//      const query = `INSERT INTO address(user_id, city) VALUES($1, $2)`;
//      const value = [user_id, city];
//      const res = await client.query(query,value);
//      console.log("Insertion success!",res);
//      await client.end();

//  }
//  insertAddress(2,'pune')








//----------------------------JOINS-----------------------------//


