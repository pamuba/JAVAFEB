import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  selectedVideo: Video

  public hidenewVideo:boolean = true;
  videos: any = []
  constructor(private _videoService:VideoService) { }

  ngOnInit(): void {
    this._videoService.getVideos()
        .subscribe(resVideoData => {
          for(const d of(resVideoData as any)){
            this.videos.push(d);
          }
        })
  }

  onSelectVideo(video:Video){
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(this.selectedVideo)
  }

  onSubmitAddVideo(video:Video){
    this._videoService.addVideo(video)
        .subscribe(resNewVideo=>{
          this.videos.push(resNewVideo);
          this.hidenewVideo = true;
          this.selectedVideo = resNewVideo;
        })
  }

  onUpdateVideoEvent(video:Video){
    this._videoService.updateVideo(video)
        .subscribe(resUpdatedVideo => video = resUpdatedVideo);
        this.selectedVideo = null;
  }

  onDeleteVideoEvent(video:Video){
    let videoArray = this.videos;

    this._videoService.deleteVideo(video)
        .subscribe(resDeletedVideo => {
          for(let i=0;i<videoArray.length; i++){
            if(videoArray[i]._id === video._id){
              videoArray.splice(i,1);
            }
          }
        });
        this.selectedVideo = null;
  }


  newVideo(){
    this.hidenewVideo = false;
  }

}
