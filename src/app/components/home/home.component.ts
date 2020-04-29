import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  //paises: any[] = [];
  newSings: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor( private spotifyService: SpotifyService /*private http: HttpClient*/ ) {
    /*this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe( (countries: any) => {
      this.paises = countries;
      console.log( countries );

    });*/
    this.loading = true;
    this.error = false;

    this.spotifyService.getNewRelease()
      .subscribe( (data: any) => {
        this.newSings = data;
        this.loading = false;
      }, ( errorService => {
        this.error = true;
        this.messageError = errorService.error.error.message;
      }));
  }


}
