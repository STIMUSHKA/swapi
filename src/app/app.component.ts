import { Component } from '@angular/core';
import {SwapiService} from './swapi.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SwapiService]
})
export class AppComponent {

  constructor(private service: SwapiService) {
  }



}
