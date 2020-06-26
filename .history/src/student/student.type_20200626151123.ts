import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType('Lesson')
export class StudentType {

    @Field(type => ID)
    id: string;

    @Field()
    name: string;
}