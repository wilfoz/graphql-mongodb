import { Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { Query } from "@nestjs/common";

@Resolver(of => LessonType)
export class LessonResolver {
    @Query(returns => LessonType)
    lesson() {
        return {
            id: 'aaaa111',
            name: 'Physics Class',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString(),
        }
    }
}