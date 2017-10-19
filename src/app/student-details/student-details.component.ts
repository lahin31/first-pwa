import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})

export class StudentDetailsComponent implements OnInit {

  student = { id: '', name: '', imgUrl: '', details: '', favouriteLanguage: ''}
  constructor(
    private _studentService: StudentService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this._studentService.getStudent(+params.get('id')))
      .subscribe(
        student => this.student = student
      )
  }

}
