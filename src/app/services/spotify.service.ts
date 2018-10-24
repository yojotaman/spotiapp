import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    // console.log('Servicio corriendo a lo bien');
   }
   getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBqBwQZSWXK-njGwStozC_U7kkcoEyXCDmRydrPTnTnIdPLKGKIIlzNk_N0i4kRnRLoIHi_ft6sAdkzt6M'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers});

  }

  getArtists(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBqBwQZSWXK-njGwStozC_U7kkcoEyXCDmRydrPTnTnIdPLKGKIIlzNk_N0i4kRnRLoIHi_ft6sAdkzt6M'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers});

  }
}



