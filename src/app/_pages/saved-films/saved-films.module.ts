import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedFilmsComponent } from './saved-films.component';
import { SharedModule } from '../../components/film/shared.module';
import { SavedFilmsRoutingModule } from './saved-films-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TopFilmsService } from '../../services/top-films.service';
import { StorageService } from '../../services/storage.service';

@NgModule({
  declarations: [SavedFilmsComponent],
  imports: [
    CommonModule,
    SharedModule,
    SavedFilmsRoutingModule,
    HttpClientModule,
  ],
  exports: [SavedFilmsComponent],
  providers: [TopFilmsService,StorageService],
})
export class SavedFilmsModule {}
