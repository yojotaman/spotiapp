import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Servicio corriendo a lo bien');
   }
   getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC_8GAvQOYRY7209J7Vj_rzTRilFGRVHOEiVmB2mPiiZaMrdZoV7xQfLaFD9kJm6Jtj-lpUAtLYsfu2Jw4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers});

  }
}
