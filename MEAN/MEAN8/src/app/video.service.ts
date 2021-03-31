import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Video } from './video'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = '/api/videos';
  private _postUrl = '/api/video';
  private _putUrl = '/api/videos/';
  private _deleteUrl = '/api/videos/';

  constructor(private _http:HttpClient) { }

  getVideos(){
    return this._http.get(this._getUrl);
  }

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'jwt-token'
    })
  }

  addVideo(video:Video):Observable<Video>{
    return this._http.post<Video>(this._postUrl, video, this.httpOptions)
                .pipe();
  }

  updateVideo(video:Video):Observable<Video>{
    return this._http.put<Video>(this._putUrl + video._id, video, this.httpOptions)
    .pipe();
  }

  deleteVideo(video:Video):Observable<Video>{
    return this._http.delete<Video>(this._deleteUrl + video._id)
    .pipe();
  }
}