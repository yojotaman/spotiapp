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
      'Authorization': 'Bearer BQAbrmGN_YKQN8u8jkD_az8xZlAJa5F8CFxcfeqxXkdyTiqw3GVjOCgSxWsOQSHvO4WrJoCyL4_xCOJF-yM'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers})
    .subscribe( data => {
      console.log(data);
    });
  }
}
