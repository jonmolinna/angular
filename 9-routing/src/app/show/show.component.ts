import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usersService } from '../users.service';
import { userInterface } from '../user.iterface';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
})
export class ShowComponent implements OnInit {
  user: userInterface | null = null;

  constructor(
    private route: ActivatedRoute,
    private usersService: usersService
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.queryParams['id'];

    let data = this.usersService.findOneUserById(id);

    if (data) {
      this.user = data;
    }
  }
}
