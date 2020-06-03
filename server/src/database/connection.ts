import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqLite')
    },
    useNullAsDefault: true,
});

export default connection;

//MIGRATIONS = histórico do banco de dados independete da diferença dos comandos sql
// create table points
// create table users