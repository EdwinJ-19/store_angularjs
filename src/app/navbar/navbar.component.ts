import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
// import { CustomHoverBtnDirective } from '../custom-hover-btn.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faRightToBracket = faRightToBracket;
}
