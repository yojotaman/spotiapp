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
      'Authorization': 'Bearer BQCNPJXTw6KAd5R-EhBOPUjQlN1FxuTpOnj0SMFgaGGktEIvPEj6zZq2r5a26M5HMmjr-6b3n7K7q9RnZik'
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

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
                    // .pipe( map( data => data['artists'].items ));

  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                    .pipe( map( data => data['tracks']));

  }
}



