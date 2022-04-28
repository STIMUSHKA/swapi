import {Result, Film, Films} from "../shared/interfaces"
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {rootURL} from "../shared/rootURL";

@Injectable()
export class SwapiService {
  public films: Film[] = []
  public filmsCatalog: Map<any, any> = new Map()
  public planets: Result[] = []

  constructor(private http: HttpClient) {

    this.http.get<Films>(rootURL + 'films/').subscribe(Films => {
      this.films = Films.results;
      for (let film of this.films) {
        this.filmsCatalog.set(film.url, film.title)
      }
    }, error => console.error(error));

  }

  ngOnInit(): void {

  }

}
