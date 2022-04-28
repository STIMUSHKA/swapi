import {NgModule} from "@angular/core";
import {PlanetsComponent} from "./planets/planets.component";
import {PlanetPageComponent} from "./planet-page/planet-page.component";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: 'planet/:id', component: PlanetPageComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(appRoutes) ],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
