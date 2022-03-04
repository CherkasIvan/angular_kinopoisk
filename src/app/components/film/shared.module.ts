import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmComponent } from './film.component';

@NgModule({
  declarations: [FilmComponent],
  imports: [CommonModule,],
  exports: [FilmComponent],
})
export class SharedModule {}
