import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';


import { PlanetComponent } from './planet/planet.component';
import { PlanetsComponent } from './planets/planets.component';
import { HttpClientModule } from "@angular/common/http";
import { FilmComponent } from './film/film.component';

import { PlanetPageComponent } from './planet-page/planet-page.component';
import {SwapiService} from "./swapi.service";
import {AppRoutingModule} from "./app-routing.module";
import { PersonCardComponent } from './person-card/person-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetPageComponent,
    PlanetsComponent,
    PlanetComponent,
    FilmComponent,
    PersonCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
