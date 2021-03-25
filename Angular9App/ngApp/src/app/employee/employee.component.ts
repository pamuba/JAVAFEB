import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  template: `<h2>
    Welcome {{name}}
  </h2>
  <input [id]="myId" type="text" value="Angular9">
  <input [disabled]="isDisabled" id={{myId}} type="text" value="Angular9">`,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public myId = "testId"
  public name = "Will Smith"
  public isDisabled = false
  constructor() { }

  ngOnInit(): void {
  }

}
