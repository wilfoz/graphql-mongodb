import { Resolver, Query } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver {
    @Query(returns => LessonType)
    lesson() {
        return {
            id: 'aaaa111',
            name: 'Physics Class',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString(),
        };
    }
}