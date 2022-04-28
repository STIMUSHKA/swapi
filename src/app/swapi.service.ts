import {Result, Film, Films} from "../shared/interfaces"
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class SwapiService {
  public films: Film[] = []
  public filmsCatalog: Map<any, any> = new Map()
  public planets: Result[] = []
  public rootURL = "https://swapi.py4e.com/api/";

  constructor(private http: HttpClient) {

    this.http.get<Films>(this.rootURL + 'films/').subscribe(Films => {
      this.films = Films.results;
      for (let film of this.films) {
        this.filmsCatalog.set(film.url, film.title)
      }
    }, error => console.error(error));

  }

  ngOnInit(): void {

  }

}
