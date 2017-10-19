import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class StudentService {

  constructor(
    private _http: Http
  ) { }

  getAllStudents() {
    return this._http.get('assets/data.json')
      .map(res => res.json())
      .catch(this.handleError)
  }

  getStudent(id) {
    return this.getAllStudents()
               .toPromise()
               .then(
                 students => students.find(student => student.id === id)
               )
  }

  private handleError(error: Response) {
    console.error('Error occured ' + error);
    return Observable.throw(error || 'Some error in the server')
  }
}
