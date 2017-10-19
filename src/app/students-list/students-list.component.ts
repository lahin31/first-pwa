import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit {
  public students = [];
  constructor(
    public _studentService: StudentService
  ) { }
  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this._studentService.getAllStudents()
      .subscribe (
        students => this.students = students
      )
  }
}
