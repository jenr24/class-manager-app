import "reflect-metadata"
import { createConnection } from "typeorm"

module.exports = {data_source: await createConnection({
    type: "postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'class_manager_dev',
    entities: [
        __dirname + "/entity/*.ts"
    ],
    synchronize: true,
    logging: false,
}).then(source => source)}