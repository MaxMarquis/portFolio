import { Component, Input, OnInit } from '@angular/core';
import { Realisation } from '../realisation';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-petite-realisation',
  templateUrl: './petite-realisation.component.html',
  styleUrls: ['./petite-realisation.component.sass']
})
export class PetiteRealisationComponent implements OnInit {
  faGithubSquare = faGithubSquare;

  @Input() realisation: Realisation =
    {
      nomProjet: '',
      desc: '',
      framework: '',
      link: '',
      fictif: true
    }


  constructor() { }

  ngOnInit(): void {
  }

}
