import { Component, OnInit } from '@angular/core';
import { TopFilmsService } from '../../services/top-films.service';
import { Movie } from '../../interface/movie.interface';
import { StorageService } from 'src/app/services/storage.service';
import { pipe, filter, map } from 'rxjs';

@Component({
  selector: 'app-saved-films',
  templateUrl: './saved-films.component.html',
  styleUrls: ['./saved-films.component.scss'],
})
export class SavedFilmsComponent implements OnInit {
  savedFilmsList!: Movie[];

  constructor(
    private topFilmsService: TopFilmsService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.topFilmsService.get_films().subscribe((data: Movie) => {
      let savedFilms = this.storageService.get_saved_films();
      this.savedFilmsList = this.topFilmsService
        .pars_responce(data)
        .filter((item: Movie) => {
          return savedFilms.includes(item.id);
        });
    });
  }
}
