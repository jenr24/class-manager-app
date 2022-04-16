// db.js
require('dotenv').config()
import { DataSource } from "typeorm";
import { Event } from "./entities/event";
import { User } from "./entities/user";

import * as database_key from './database.json'

const {
    host, 
    port, 
    username, 
    password, 
    database, 
    entities, 
    migrationsTableName, 
    migrations
} = database_key

const AppDataSource = new DataSource({
    type: "postgres",
    host,
    port,
    username,
    password,
    database,
    entities,
    migrationsTableName,
    migrations,
})

export default AppDataSource;