// db.js
require('dotenv').config()
import { DataSource } from "typeorm";
import { Event } from "./entities/event";
import { User } from "./entities/user";

import * as database from './database.json'

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: process.env.POSTGRESS_USER,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DB,
    entities: ["entity/*.ts"],
    migrationsTableName: "custom_migration_table",
    migrations: ["migration/*.ts"],
})

export default AppDataSource;