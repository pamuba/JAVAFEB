import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  selectedVideo: Video

  videos: Video[] = [
    {"_id":"1", "title":"title 1", "url":"url 1", "description":"desc 1"},
    {"_id":"2", "title":"title 1", "url":"url 1", "description":"desc 1"},
    {"_id":"3", "title":"title 1", "url":"url 1", "description":"desc 1"},
    {"_id":"4", "title":"title 1", "url":"url 1", "description":"desc 1"},
    {"_id":"5", "title":"title 1", "url":"url 1", "description":"desc 1"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSelectVideo(video:Video){
    this.selectedVideo = video;
    console.log(this.selectedVideo)
  }

}
