import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./_pages/top-films/top-films.module').then(
        (m) => m.TopFilmsModule
      ),
  },
  {
    path: 'saved-films',
    loadChildren: () =>
      import('./_pages/saved-films/saved-films.module').then(
        (m) => m.SavedFilmsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
