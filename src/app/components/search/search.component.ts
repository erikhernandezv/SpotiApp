import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotifyService: SpotifyService) { }

  search( textsearch: string ) {

    this.loading = true;

    console.log( textsearch );
    this.spotifyService.getArtists( textsearch )
        .subscribe( data => {
          this.artists = data;
          this.loading = false;
        });
  }

}
