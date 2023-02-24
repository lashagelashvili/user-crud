import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-home',
  templateUrl: './return-home.component.html',
  styleUrls: ['./return-home.component.scss'],
})
export class ReturnHomeComponent {
  constructor(private readonly router: Router) {}

  onHomeButton() {
    this.router.navigateByUrl('users');
  }
}
