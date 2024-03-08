import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor(private userService: UserService, private router: Router) {}

  handleLogout() {
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
