import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.sass']
})
export class OpenAccountComponent implements OnInit {
  rates: any[];
  loading = true;
  error: any;
  routeID: string = '';

  constructor(
    private _Activatedroute: ActivatedRoute,
    private apollo: Apollo
  ) {}

  ngOnInit() {
    this.routeID = this._Activatedroute.snapshot.paramMap.get('id');
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `
      })
      .valueChanges.subscribe((result: any) => {
        this.rates = result.data && result.data.rates;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}
