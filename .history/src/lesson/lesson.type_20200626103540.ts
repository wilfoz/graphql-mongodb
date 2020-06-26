import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LessonType {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
}