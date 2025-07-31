import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  get_saved_films(): any[] {
    try {
      const films = localStorage.getItem('savedFilms');
      return films ? JSON.parse(films) : [];
    } catch (error) {
      console.error('Ошибка чтения из localStorage:', error);
      return [];
    }
  }

  save_film(id: number | string) {
    const savedFilms = this.get_saved_films();

    if (!savedFilms.includes(id)) {
      const updatedFilms = [...savedFilms, id];
      localStorage.setItem('savedFilms', JSON.stringify(updatedFilms));
      return true;
    }
    return false;
  }

  delete_film(id: number | string) {
    let savedFilms = this.get_saved_films();
    const initialLength = savedFilms.length;

    savedFilms = savedFilms.filter((filmId) => filmId !== id);

    if (savedFilms.length !== initialLength) {
      localStorage.setItem('savedFilms', JSON.stringify(savedFilms));
      return true;
    }
    return false;
  }
}
