import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopFilmsService {
  response: any;

  constructor(private http: HttpClient) {}

  get_films(): Observable<any> {
    const baseURL: string =
      'https://kinopoiskapiunofficial.tech/api/v2.2/films';
    let headers = new HttpHeaders();
    headers = headers.set('X-API-KEY', '71c90a00-5005-462a-bd0b-0de03088609d');
    headers = headers.append('Content-Type', 'application/json');

    return (this.response = this.http.get(baseURL, { headers }));
  }

  pars_responce(data: any) {
    const { items } = data;
    return items.map((val: any) => {
      return {
        id: val.kinopoiskId,
        title: val.nameOriginal,
        ruTitle: val.nameRu,
        poster: val.posterUrl,
      };
    });
    console.log(items);
  }
}
