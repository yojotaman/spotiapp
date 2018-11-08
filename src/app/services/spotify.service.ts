import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    // console.log('Servicio corriendo a lo bien');
   }

   getQuery( query: string) {
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCprLNYSAaDV7IQ-MEVHph7nI0aUsY_ssyqjKZGK-tlDwuksNkxRgSHYBtkiQsKmOi-GJ2Gc9uPDwFFmLM'
      });

      return this.http.get(url, {headers});
   }

   getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
                    .pipe( map(data => data['albums'].items ));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                    .pipe( map( data => data['artists'].items ));

  }
}



