import { Component, OnInit } from '@angular/core';
import { TopFilmsService } from '../../services/top-films.service';
import { Movie } from '../../interface/movie.interface';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.scss'],
})
export class TopFilmsComponent implements OnInit {
  moviesList: Movie[] = [];

  constructor(
    private topFilmsService: TopFilmsService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.loadFilms();
  }

  loadFilms(): void {
    this.topFilmsService.get_films().subscribe((data: any) => {
      const allFilms = this.topFilmsService.pars_responce(data);
      const savedFilms = this.storageService.get_saved_films();
      this.moviesList = allFilms.filter(
        (film: Movie) => !savedFilms.includes(film.id)
      );
    });
  }

  saveFilm(id: number) {
    if (this.storageService.save_film(id)) {
      this.moviesList = this.moviesList.filter((film) => film.id !== id);
    }
  }
}
