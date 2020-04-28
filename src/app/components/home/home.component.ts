import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  //paises: any[] = [];
  newSings: any[] = [];

  constructor( private spotifyService: SpotifyService /*private http: HttpClient*/ ) {
    /*this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (countries: any) => {
      this.paises = countries;
      console.log( countries );

    });*/

    this.spotifyService.getNewRelease()
      .subscribe( (data: any) => {
        //console.log( data.albums.items );
        this.newSings = data.albums.items;
      });
  }


}
