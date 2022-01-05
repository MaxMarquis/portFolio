import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faBars } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faDownload = faDownload;
  faBars = faBars;
  constructor() { }

}
