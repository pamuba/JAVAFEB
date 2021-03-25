import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input('parentData') public name ;
  @Output() public childEvent = new EventEmitter()

  public date = new Date()
  constructor() { }

  public dept = "Sales Department"
  public person = {
    "firstName":"Will"
  }
  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit('Data String from the child Component')
  }

}
