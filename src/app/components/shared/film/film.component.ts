import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../interface/movie.interface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  @Input() film!: Movie;

  constructor() {}

  ngOnInit(): void {}
}
