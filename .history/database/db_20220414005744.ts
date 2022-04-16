import { createConnection } from "typeorm"

// db.js
require('dotenv').config()
const { DataSource } = require('typeorm')

module.exports = {
    app_data_source: await createConnection({
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
}