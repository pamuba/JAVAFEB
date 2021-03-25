import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  constructor() { }

  public color = "sasasafsdfsf"
  displayName = true
  public colors = ["red","blue","orange","yellow"]
  ngOnInit(): void {
  }

}
