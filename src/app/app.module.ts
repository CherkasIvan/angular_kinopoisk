import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/film/shared.module';
import { TopFilmsComponent } from './components/top-films-component/top-films.component';
import { TopFilmsModule } from './components/top-films-component/top-films.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, TopFilmsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
