import { Column, Entity } from "typeorm"

@Entity()
export class User {
    @Column({ type: 'number', nullable: false})
    public id!: number;

    @Column({ type: 'varchar', nullable: false})
    public first_name!: string;

    @Column({type: 'varchar', nullable: false})
    public last_name!: string;

    @Column({type: 'varchar', nullable: false})
    public ssn!: string;
}
