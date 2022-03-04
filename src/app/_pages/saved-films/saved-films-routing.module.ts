import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedFilmsComponent } from './saved-films.component';

const routes: Routes = [
  {
    path: '',
    component: SavedFilmsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedFilmsRoutingModule {}
