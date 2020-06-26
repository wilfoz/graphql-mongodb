import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('Student')
export class StudentType {

    @Field()
    id: string;

    @Field()
    name: string;
}