import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  template: `<h1 class="text-success">
                    Welcome to Manager Component
             </h1>
             <h2 [class]="successClass">
                    Welcome to Manager Component
             </h2>
             <h2 class="text-special" [class]="successClass">
                    Welcome to Manager Component
             </h2>
             <h2 [class.text-danger]="hasError">
                    Welcome to Manager Component
             </h2>
             <h2 [ngClass]="messageClasses">
                    Welcome to Manager Component
             </h2>
             <h2 [style.color]="'orange'">
                    Welcome to Manager Component
             </h2>
             <h2 [style.color]="hasError ? 'red':'orange'">
                    Welcome to Manager Component
             </h2>
             <h2 [style.color]="highlightColor">
                    Welcome to Manager Component
             </h2>
             <h2 [ngStyle]="titleStyle">
                    Welcome to Manager Component
             </h2>`,
  styles: [`

    .text-success{
      color:green
    }
    .text-danger{
      color:red
    }
    .text-special{
      font-style:italic
    }

  `]
})
export class ManagerComponent implements OnInit {

  constructor() { }

  public successClass = "text-success"
  public hasError = true
  public isSpecial = true
  public highlightColor = "orange"

  public messageClasses = {
    "text-success":this.hasError,
    "text-danger":!this.hasError,
    "text-special":this.isSpecial
  }

  public titleStyle = {
    color:"blue",
    fontStyle:"italic"
  }

  ngOnInit(): void {
  }

}
