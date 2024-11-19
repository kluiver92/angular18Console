import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { StudentService } from '../../../apiServices/student.service';
import { Student } from '../../../model/student.model';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { CalendarIcon } from 'primeng/icons/calendar';


@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        CalendarModule,
    ],
    templateUrl: './aboutPage.component.html',
    styleUrl: './aboutPage.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPageComponent implements OnInit  {
    students: Student[] = [];

    constructor(private studentService: StudentService, private cdr: ChangeDetectorRef) {}
  
    ngOnInit(): void {
      this.getAllStudents();
    }
  
    getAllStudents(): void {
      this.studentService.getAll().subscribe({
        next: (data: Student[]) => {
          this.students = data;
          console.log(this.students);
        //  this.cdr.markForCheck();
        },
        error: (error) => console.error('Error al obtener los estudiantes:', error),
      });
    }

 }
