import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFilmsRoutingModule } from './top-films-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TopFilmsService } from '../../services/top-films.service';
import { SharedModule } from '../../components/film/shared.module';
import { TopFilmsComponent } from './top-films.component';
import { NavBarModule } from '../../components/nav-bar/nav-bar.module';

@NgModule({
  declarations: [TopFilmsComponent],
  imports: [
    CommonModule,
    TopFilmsRoutingModule,
    HttpClientModule,
    SharedModule,
    NavBarModule,
  ],
  providers: [TopFilmsService],
})
export class TopFilmsModule {}
