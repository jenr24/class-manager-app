import { DataSource, DataSourceOptions } from "typeorm"

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: process.env.PSQL_USERNAME,
    password: process.env.PSQL_PASSWORD,
    database: process.env.PSQL_DATABASE,
})