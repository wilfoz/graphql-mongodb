import { ObjectID } from "mongodb";
import { ObjectIdColumn, PrimaryColumn, Column, Entity } from "typeorm";

@Entity()
export class Student {

    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
    
}