import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { CreateStudentInput } from './create-student.input';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>,
      ) {}

      async getStudent(id: string): Promise<Student> {
        return await this.studentRepository.findOne({ id });
      }
    
      async getStudents(): Promise<Student[]> {
        return await this.studentRepository.find();
      }

      async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
        const { name } = createStudentInput;
        const student = this.studentRepository.create({
          id: uuid(),
          name
        });
        return await this.studentRepository.save(student);
      }
}
