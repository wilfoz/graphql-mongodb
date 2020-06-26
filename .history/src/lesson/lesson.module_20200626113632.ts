import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule
    ],
    providers: [
        LessonResolver,
        LessonService
    ]
})
export class LessonModule {}
