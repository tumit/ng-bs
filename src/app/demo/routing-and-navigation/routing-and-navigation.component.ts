import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-and-navigation',
  templateUrl: './routing-and-navigation.component.html',
  styleUrls: ['./routing-and-navigation.component.scss'],
})
export class RoutingAndNavigationComponent {
  constructor(private router: Router) {}

  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }

  gotoHeroes() {
    this.router.navigate(['/heroes']);
  }

  gotoHeroForm(id = '') {
    this.router.navigate(['/heroes/hero-form', id]);
  }
}
