import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent {
  public successMessage: string;

  constructor(private router: Router) {
    this.successMessage =
      this.router.getCurrentNavigation()?.extras.state?.['successMessage'];
  }
}
