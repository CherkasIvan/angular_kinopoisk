import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TopFilmsService } from '../../services/top-films.service';
import { Movie } from '../../interface/movie.interface';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-saved-films',
  templateUrl: './saved-films.component.html',
  styleUrls: ['./saved-films.component.scss'],
})
export class SavedFilmsComponent implements OnInit {
  savedFilmsList: Movie[] = [];
  allFilmsList: Movie[] = []; // Для хранения всех загруженных фильмов
  constructor(
    private topFilmsService: TopFilmsService,
    private storageService: StorageService
  ) {}
  ngOnInit(): void {
    this.topFilmsService.get_films().subscribe((data: any) => {
      this.allFilmsList = this.topFilmsService.pars_responce(data);
      this.updateSavedFilmsList();
    });
  }

  updateSavedFilmsList(): void {
    const savedFilmIds = this.storageService.get_saved_films();
    this.savedFilmsList = this.allFilmsList.filter((movie) =>
      savedFilmIds.includes(movie.id)
    );
  }
  deleteFilm(id: number) {
    this.storageService.delete_film(id);
    this.updateSavedFilmsList();
  }
}
