import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Packages } from '../../shared/packages';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.sass', './media.css']
})
export class PlansComponent {
  packages: Array<any> = Packages;

  constructor(private router: Router) {}

  openAccount(val) {
    this.router.navigateByUrl('/open-account/' + val);
  }
}
