import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-package',
  templateUrl: './custom-package.component.html',
  styleUrls: ['./custom-package.component.sass']
})
export class CustomPackageComponent implements OnInit {
  @Input() package: any;
  @Input() i: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  openAccount(val) {
    this.router.navigateByUrl('/open-account/' + val);
  }
}
