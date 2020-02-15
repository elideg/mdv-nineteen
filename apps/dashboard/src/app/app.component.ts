import { Component } from '@angular/core';
import { AuthService } from '@mdv-nineteen/core-data';

@Component({
  selector: 'mdv-nineteen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'dashboard';

  links = [
    { path: '/phones', icon: 'stay_primary_portrait', title: 'Phones' }
  ]

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}
}
