import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SwapiService} from "../swapi.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Result, ZoneSymbolValue} from "../../shared/interfaces";

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
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(
        (params: Params) => {
          this.http.get<ZoneSymbolValue>(this.rootURL + 'planets/?page=' + this.page)
            .subscribe((ZoneSymbolValue) => {
                this.planets = ZoneSymbolValue.results;
                if (ZoneSymbolValue.previous == null) {
                  this.previous = 'disabled'
                } else {
                  this.previous = 'enabled'
                }
                ;
                if (ZoneSymbolValue.next == null) {
                  this.next = 'disabled'
                } else {
                  this.next = 'enabled'
                }

              },
              error => console.error(error));
        }
      )
  }

  nextPage() {
    this.router.navigate([''], {
      queryParams: {
        page: this.page++
      }
    })
  }

  previousPage() {
    this.router.navigate([''], {
      queryParams: {
        page: this.page--
      }
    })
  }

  rootURL = "https://swapi.py4e.com/api/";

}
