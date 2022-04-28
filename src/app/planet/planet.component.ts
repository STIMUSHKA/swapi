import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SwapiService} from "../swapi.service";


@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss',]
})
export class PlanetComponent {
  @Input() planetInfo: {
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
  } = {
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: '',
    residents: [],
    films: [],
    url: ''
  }
  @Input() link: string = ''
  public filmsCatalog: Map<any, any> = this.service.filmsCatalog

  rootURL = "https://swapi.py4e.com/api/";

  constructor(private http: HttpClient, private service: SwapiService) {
    this.planetInfo.url.split('').reverse()
    this.getPlanetId()
  }

  getPlanetId(): string {
    return this.link.split('/').reverse()[1]
  }

}




