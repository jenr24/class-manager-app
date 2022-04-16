import { BeforeInsert, Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm"
import { v4 } from 'uuid';

export const USER_ROLES = {
    OWNER: 'OWNER',
    ADMIN: 'ADMIN',
    PRESENTER: 'PRESENTER',
    CLIENT: 'CLIENT',
    ATTENDEE: 'ATTENDEE',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    public id!: number;

    @Column({ type: 'varchar', nullable: false})
    public first_name!: string;

    @Column({type: 'varchar', nullable: false})
    public last_name!: string;

    @Index({ unique: true })
    @Column({type: 'varchar', nullable: false})
    public ssn!: string;

    @Column({type: 'enum', enum: Object.values(USER_ROLES), default: USER_ROLES.CLIENT, nullable: false})
    public role!: string;

    @BeforeInsert()
    addId() {
        this.id = v4();
    }
}
