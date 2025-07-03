import mysql from 'mysql2/promise';

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'movies',
    user: 'root',
    password: '',
});