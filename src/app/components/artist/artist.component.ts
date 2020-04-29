import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  artist: any = {};
  loading: boolean;
  topTracks: any[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private spotifyService: SpotifyService ) {
    this.activatedRoute.params.subscribe( params => {
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
      this.loading = true;
    });
  }

  getArtista( id: string ){
    this.loading = true;

    this.spotifyService.getArtist( id )
          .subscribe( artista => {
            console.log(artista);
            this.artist = artista;
            this.loading = false;
          });
  }

  getTopTracks( id: string ){
    //this.loading = true;

    this.spotifyService.getTopTracks( id )
          .subscribe( topTracks => {
            console.log("Aqui los tracks....");

            console.log(topTracks);
            //this.loading = false;
            this.topTracks = topTracks;
          });
  }
}
