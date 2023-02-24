import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserPost } from 'src/app/services/model';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent {
  public successMessage: string;
  public userPost: UserPost;

  constructor(private router: Router) {
    this.successMessage =
      this.router.getCurrentNavigation()?.extras.state?.['successMessage'];
    this.userPost = this.router.getCurrentNavigation()?.extras.state?.['post'];
  }
}
