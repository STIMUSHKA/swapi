import { Component } from '@angular/core';
import {SwapiService} from "../swapi.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Person} from "../../shared/interfaces";
import {rootURL} from "../../shared/rootURL";

@Component({
  selector: 'app-planet-page',
  templateUrl: './planet-page.component.html',
  styleUrls: ['./planet-page.component.scss']
})
export class PlanetPageComponent{
  public planetInfo: Planet = {
    climate: "",
    diameter: "",
    films: [],
    gravity: "",
    name: "",
    orbital_period: "",
    population: "",
    residents: [],
    rotation_period: "",
    surface_water: "",
    terrain: "",
    url: ""
  }
  public id : string;
  public filmsCatalog: Map<any, any> = this.service.filmsCatalog
  public persons: Person[] = []
  public personsMale: Person[] = []
  public personsFemale: Person[] = []
  public gender: string = 'all'

  constructor(private http: HttpClient, private service: SwapiService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']

    this.http.get<Planet>(rootURL + 'planets/' + this.id + '/').subscribe(
      Planet => {
        this.planetInfo = Planet;

        for (let person of Planet.residents) {
          this.http.get<Person>(''+ person).subscribe(
            Person => {
              this.persons.push(Person);
              if (Person.gender == 'male') {
                this.personsMale.push(Person)
              } else if (Person.gender == 'female') {
                this.personsFemale.push(Person)
              }
            },
            error => console.error(error));
        }
      },
      error => console.error(error));
  }
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  url: string;
}
