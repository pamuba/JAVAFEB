import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }

  private _url:string = "/assets/data/employees.json"
  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    
  }
}
