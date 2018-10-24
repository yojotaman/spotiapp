import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  nuevas_canciones: any[] = [];
  constructor( private spotify: SpotifyService ) {
    spotify.getNewReleases()
      .subscribe((data: any) => {
        // console.log(data.albums.items);
        this.nuevas_canciones = data.albums.items;
        console.log(this.nuevas_canciones);
      });

  }

}
