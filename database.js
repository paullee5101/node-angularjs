import client from "mysql";

const db = client.createConnection ({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database:'letscompare'
});

db.connect();

export default db;
