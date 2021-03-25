import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h2>Event Binding</h2>
    <button (click)="onClick($event)">CLICK</button>
    {{message}}
    <hr>
    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">Log</button>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  logMessage(val){
    console.log(val)
  }
  constructor() { }
  public message = ""

  onClick(event){
    console.log(event.type)
    this.message = "New Message"
  }
  ngOnInit(): void {
  }

}
