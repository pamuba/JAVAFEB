import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Video } from './video';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = '/api/videos';

  constructor(private _http:HttpClient) { }

  getVideos(){
    return this._http.get(this._getUrl)
  }
}
