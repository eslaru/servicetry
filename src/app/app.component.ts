import { Component } from '@angular/core';
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users;
  randomUser;

  constructor(private userService: UserService) {
     this.users = userService.getUsers();
     this.randomUser= userService.getRandom();
  }
}