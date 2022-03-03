import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFilmsRoutingModule } from './top-films-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TopFilmsService } from '../../services/top-films.service';
import { SharedModule } from '../shared/film/shared.module';
import { TopFilmsComponent } from './top-films.component';

@NgModule({
  declarations: [TopFilmsComponent],
  imports: [
    CommonModule,
    TopFilmsRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [TopFilmsService],
})
export class TopFilmsModule {}
