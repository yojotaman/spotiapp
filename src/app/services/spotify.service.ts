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
      'Authorization': 'Bearer BQD9DXseRcOqnFH6kPLgBQoSUHN_zGgRdiFaOV9ONkjIQS2Mid0k0_HI8YJ_Wa8w6rE6BMsNw9YzNJsyFiQ'
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



