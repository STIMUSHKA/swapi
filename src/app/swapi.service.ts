import {Film, Films, Result, ZoneSymbolValue} from "./planets/planets.component";
import {HttpClient} from "@angular/common/http";
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class SwapiService{
  public films: Film[] =[]
  public filmsCatalog: Map<any, any> = new Map()
  public planets: Result[] = []


  constructor(private http: HttpClient) {
    console.log('service constructor')

    this.http.get<Films>(this.rootURL + 'films/').subscribe(Films => {
      this.films = Films.results;
      for (let film of this.films) {
        this.filmsCatalog.set(film.url , film.title)
        console.log(film)
      }
    }, error => console.error(error));

    console.log('service constructor2')
  }

  ngOnInit(): void {
    console.log('service onitit')
  }

  getFilmCatalog() {
    return this.filmsCatalog
  }

  rootURL = "https://swapi.py4e.com/api/";
}
