import { Client } from "pg";

const client = new Client({
   connectionString: "postgresql://postgres:mysecretpassword@localhost:5433/postgres"
})

async function insertUserAndAddress(username: string, email: string, password:string,city: string, country: string, street: string, pincode:string){
    try{
        await client.connect();

        //starting a transaction
        await client.query('BEGIN');

        const insertUserText = `INSERT INTO users(username, email, password)
        VALUES($1,$2,$3)
        RETURNING id;
        `;
        const userRes = await client.query(insertUserText, [username, email, password]);
        const userId = userRes.rows[0].id;


        const insertAddressText = `
        INSERT INTO addresses(user_id, city,country,street,pincode)
        VALUES($1,$2,$3,$4,$5);`;
        await client.query(insertAddressText, [userId, city,country,street,pincode]);

        await client.query('COMMIT');
        console.log('User and Address added successfully!');

}catch(err){
await client.query('ROLLBACK');
console.error('Error during transaction ROLLBACK',err);
throw err;
}
finally{
    await client.end();
}
}

insertUserAndAddress(
    'johndoe',
    'john@gmail.com',
    'pass123',
    'NY',
    'USA',
    '123 BD ST.',
    '1001'
);