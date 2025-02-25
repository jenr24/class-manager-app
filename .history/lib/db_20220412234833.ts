// db.js
import { Pool } from "pg";

let conn: Pool = new Pool({
        user: process.env.PGSQL_USER,
        password: process.env.PGSQL_PASSWORD,
        host: process.env.PGSQL_HOST,
        port: parseInt(process.env.PGSQL_PORT as string),
        database: process.env.PGSQL_DATABASE,
    });

export default conn;