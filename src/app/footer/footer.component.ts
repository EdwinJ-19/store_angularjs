import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { CustomHoverBtnDirective } from '../custom-hover-btn.directive';
import { CustomHoverDirective } from '../custom-hover.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule,CustomHoverDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
}
