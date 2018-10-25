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
   getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBBAThlGKa_EE__H8hu8xNgKP19aLcHqAYvMf_0mSu2w-JrDx-mFOdtK0SzpMLGLHvgfrsLU_KMsaZh_0k'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers})
                    .pipe( map(data => data['albums'].items ));

  }

  getArtists(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBBAThlGKa_EE__H8hu8xNgKP19aLcHqAYvMf_0mSu2w-JrDx-mFOdtK0SzpMLGLHvgfrsLU_KMsaZh_0k'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers})
                    .pipe( map( data => data['artists'].items ));

  }
}



