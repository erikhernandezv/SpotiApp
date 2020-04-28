import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewRelease(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD9b2ezJHhD8XDpJE2CrNUI8jyvyNDh6FfmX333uVasxXSU_ph0qUgfe7UukGpqlljm8CVmWNIb4vEKgPQ'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }
}
