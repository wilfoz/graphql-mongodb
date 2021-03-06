import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentService]
})
export class StudentModule {}
