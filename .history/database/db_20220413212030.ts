// db.js
require('dotenv').config()
import { DataSource } from "typeorm";
import { Event } from "./entities/event";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRESS_USER,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DB,
    entities: [Event]
})

export default AppDataSource;