import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ver_artista( item: any) {
    console.log(item);
    let artista_id;

    if ( item.type === 'artist') {
      artista_id = item.id;
    } else {
      artista_id = item.artists[0].id;
    }
    console.log(artista_id);
    this.router.navigate(['/artist', artista_id]);
  }
}
