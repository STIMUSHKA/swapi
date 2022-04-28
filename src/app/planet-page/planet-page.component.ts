import { Component, OnInit } from '@angular/core';
import {SwapiService} from "../swapi.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


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
    console.log(this.filmsCatalog, 'planet-page constructor')

    this.id = this.route.snapshot.params['id']
    this.http.get<Planet>(this.rootURL + 'planets/' + this.id + '/').subscribe(
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


  rootURL = "https://swapi.py4e.com/api/";

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
export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
}
