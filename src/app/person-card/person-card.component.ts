import {Component, Input, OnInit} from '@angular/core';
import {SwapiService} from "../swapi.service";
import {HttpClient} from "@angular/common/http";
import {Planet} from "../planet-page/planet-page.component";

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() personInfo: {
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
  } = {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: '',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    url: ''
  }
  public filmsCatalog: Map<any, any> = this.service.filmsCatalog
  public species: string = ''
  public homeworld: string = ''
  constructor(private http: HttpClient, private service: SwapiService) { }

  ngOnInit(): void {
    this.http.get<Species>(''+ this.personInfo.species[0])
      .subscribe(
        Species => { this.species = Species.name},
        error => console.error(error));
    this.http.get<Planet>(''+ this.personInfo.homeworld)
      .subscribe(
        Planet => { this.homeworld = Planet.name},
        error => console.error(error));
  }


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
export interface Species {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: Date;
  designation: string;
  edited: Date;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  films: string[];
  skin_colors: string;
  url: string;
}
