// db.js
require('dotenv').config()

import { Pool } from "pg";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRESS_USER,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DB
})

export default AppDataSource;