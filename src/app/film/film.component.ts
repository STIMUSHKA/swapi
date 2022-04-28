import { Component, Input } from '@angular/core';
import {SwapiService} from "../swapi.service";
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent{
  @Input() film: string = ''

  constructor(private service: SwapiService) {
    console.log(this.film, 'film cons')
    this.film
  }

  ngOnInit(): void {
  }

}
