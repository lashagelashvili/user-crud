import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  public users$ = this.userService.getUsers();

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  onUserClick(id: number) {
    this.router.navigateByUrl(`user/${id}/posts`);
  }
}
