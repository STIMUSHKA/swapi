import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SwapiService} from "../swapi.service";
import {ActivatedRoute, Params, Router} from "@angular/router";


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent {
  public filmsCatalog: Map<any, any> = this.service.filmsCatalog
  public planets: Result[] = []
  public page: number = 1
  public previous: string = 'disabled'
  public next: string = 'enabled'

  constructor(private service: SwapiService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    console.log('planets constructor')
  }

  ngOnInit(): void {
    console.log('planets oninit')

    this.route.queryParams
      .subscribe(
      (params:Params) => {
        this.http.get<ZoneSymbolValue>(this.rootURL + 'planets/?page=' + this.page)
        .subscribe((ZoneSymbolValue) => {
          this.planets = ZoneSymbolValue.results;
          if (ZoneSymbolValue.previous == null) {
            this.previous = 'disabled' } else {this.previous = 'enabled'};
          if (ZoneSymbolValue.next == null) {
            this.next = 'disabled'} else { this.next = 'enabled'}

        },
        error => console.error(error));
    }

    )


  }

  nextPage() {
    this.router.navigate([''], {queryParams: {
      page: this.page++
      }})
  }

  previousPage() {
    this.router.navigate([''], {queryParams: {
        page: this.page--
      }})
  }

  rootURL = "https://swapi.py4e.com/api/";

}

export interface RootObject {
  __zone_symbol__state: boolean;
  __zone_symbol__value: ZoneSymbolValue;
}

export interface ZoneSymbolValue {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

export interface Result {
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
    created: Date;
    edited: Date;
    url: string;
  }

export interface Films {
  count: number;
  next: string;
  previous?: any;
  results: Film[];
}

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

