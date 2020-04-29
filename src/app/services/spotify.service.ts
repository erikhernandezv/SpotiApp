import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: string = '';

  constructor( private http: HttpClient ) {

    this.token = 'Bearer BQAypmsqZ7mKC2zH3IM67T6OUZBzxntCH52H689bUKxeP3qEina-ILIEa8g0r7Yvu5B2ggPUnLwVIDrFN77WTWEZqwDPnyASUwJnr9VQVKFln-g2w7SbMNwKAcmLxQbgmXoZGwdoTdS2qeJWoRVTH4onRQnWlQ4';
  }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1${ query }`;

    const headers = new HttpHeaders({
      'Authorization': this.token
    });

    return this.http.get(url, { headers })
  }

  getNewRelease(){
    return this.getQuery('/browse/new-releases?limit=20')
          .pipe( map( data => data['albums'].items ));
  }

  getArtists( textSearch: string ){
    return this.getQuery(`/search?q=${ textSearch }&type=artist&limit=15`)
          .pipe( map( data => data['artists'].items ));
  }

  getArtist( id: string ){
    return this.getQuery(`/artists/${ id }`);
  }

  getTopTracks( id: string ){
    return this.getQuery(`/artists/${ id }/top-tracks?country=us`)
            .pipe( map( data => data['tracks'] ));
  }
}
