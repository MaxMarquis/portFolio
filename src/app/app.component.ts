import { Component } from '@angular/core';
import { REALISATIONS } from './mock-realisations';
import { Realisation } from './realisation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  realisations: Realisation[] = REALISATIONS;
}
