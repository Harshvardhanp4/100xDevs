const { Client } = require('pg');
const connectionString = 'postgresql://harrdy:mysecretpassword@localhost:5432/harrdy';

const client = new Client({
    connectionString: connectionString
});

client.connect(err => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected to DB');
    }
});

client.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Query error', err.stack);
    } else {
        console.log('Query result:', res.rows[0]);
    }
    client.end(); 
});
