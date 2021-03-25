import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = []
  constructor(public _empService: EmployeeService) { }

  ngOnInit(): void {
    this._empService.getEmployees()
      .subscribe(data=>this.employees = data)
  }

}
