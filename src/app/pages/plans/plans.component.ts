import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Packages } from '../../shared/packages';
declare var $;

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.sass']
})
export class PlansComponent implements OnInit {
  constructor(private router: Router) {}

  customerPackages: HTMLElement;
  scrollPositionOfPackages: number;
  showOpenAccountBtn: boolean = false;

  packages: Array<any> = Packages;

  ngOnInit() {
    $(window).on('load', function() {
      $('.carousel').carousel('pause');
    });

    console.log(this.packages);
  }

  openAccount(val) {
    this.router.navigateByUrl('/open-account/' + val);
  }
}
