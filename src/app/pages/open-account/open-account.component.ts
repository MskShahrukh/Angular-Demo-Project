import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.sass']
})
export class OpenAccountComponent implements OnInit {
  constructor(private _Activatedroute: ActivatedRoute) {}

  routeID: string = '';

  ngOnInit() {
    this.routeID = this._Activatedroute.snapshot.paramMap.get('id');
  }
}
