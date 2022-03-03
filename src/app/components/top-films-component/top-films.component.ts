import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TopFilmsService } from '../../services/top-films.service';
import { Movie } from '../../interface/movie.interface';

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.scss'],
})
export class TopFilmsComponent implements OnInit {
  moviesList!: Movie[];

  constructor(
    private topFilmsService: TopFilmsService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.topFilmsService.get_films().subscribe((data: any) => {
      const { items } = data;
      this.moviesList = items.map((val: any) => {
        return {
          id: val.kinopoiskId,
          title: val.nameOriginal,
          ruTitle: val.nameRu,
          poster: val.posterUrl,
        };
      });
      console.log(items);
    });
  }
}
