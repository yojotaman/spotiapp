import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];

  constructor( private spotify: SpotifyService ) { }

  buscarArtista(termino: string) {
    this.spotify.getArtists(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
      }
         );
  }

}
