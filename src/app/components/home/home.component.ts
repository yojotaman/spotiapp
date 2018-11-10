import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  nuevas_canciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    spotify.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.nuevas_canciones = data;
        this.loading = false;
      }, ( errorServicio ) => {
        console.log(errorServicio);
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;

      });

  }

}
