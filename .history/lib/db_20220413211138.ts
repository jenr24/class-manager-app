// db.js
require('dotenv').config()

import { Pool } from "pg";
import { DataSource } from "typeorm";

let conn: Pool = new Pool({
        user: process.env.POSTGRESS_USER,
        password: process.env.POSTGRESS_PASSWORD,
        host: process.env.PGSQL_HOST,
        port: parseInt(process.env.PGSQL_PORT as string),
        database: process.env.PGSQL_DATABASE,
    });

    const AppDataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: process.env.POSTGRESS_USER,
        password: process.env.POSTGRESS_PASSWORD,
        database: process.env.POSTGRESS_DB
    })

export default conn;