import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/film/shared.module';
import { TopFilmsModule } from './_pages/top-films/top-films.module';
import { SavedFilmsModule } from './_pages/saved-films/saved-films.module';
import { NavBarModule } from './components/nav-bar/nav-bar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TopFilmsModule,
    SavedFilmsModule,
    NavBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
