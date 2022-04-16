import { MigrationInterface, QueryRunner } from "typeorm"

export class AddEvents1649914734445 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "Events" (
                id          NUMERIC PRIMARY KEY NOT NULL,
                name        VARCHAR(50) NOT NULL,
                location    VARCHAR(100) NOT NULL,
                date        DATE
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "Events"
        `)
    }

}
