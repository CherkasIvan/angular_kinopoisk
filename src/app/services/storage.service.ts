import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  save_film(id: any) {
    let savedFilms = this.get_saved_films();

    localStorage.setItem('savedFilms', JSON.stringify(savedFilms.concat(id)));
  }

  get_saved_films() {
    return JSON.parse(localStorage.getItem('savedFilms')!) || [];
  }
}
