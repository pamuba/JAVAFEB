import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input() video
  public editTitle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.editTitle = false;
  }

  onTitleClick(){
    this.editTitle=true;
  }

}
