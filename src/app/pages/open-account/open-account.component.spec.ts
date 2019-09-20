import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import {
  ApolloTestingModule,
  ApolloTestingController
} from 'apollo-angular/testing';

import * as $ from 'jquery';

import { OpenAccountComponent } from './open-account.component';
import { By, by } from 'protractor';

describe('OpenAccountComponent', () => {
  let component: OpenAccountComponent;
  let fixture: ComponentFixture<OpenAccountComponent>;
  let _Activatedroute: ActivatedRoute;
  let apollo: Apollo;

  let controller: ApolloTestingController;
  let compiled: any;

  const fakeActivatedRoute = {
    snapshot: {
      paramMap: {
        get(id: any) {
          return 'N26';
        }
      }
    }
  } as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OpenAccountComponent],
      imports: [ApolloTestingModule],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }]
    }).compileComponents();

    controller = TestBed.get(ApolloTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenAccountComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  afterEach(() => {
    // controller.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render selected package name', () => {
    expect(compiled.querySelector('.route-id').textContent).toContain('N26');
    // expect($('data-test-packageName'));
  });

  // ------------future tests for graphQL...

  // it('should show loading or Error for GraphQL', () => {
  //   expect(compiled.querySelector('.loading-gql').textContent).toBeTruthy() ||
  //     expect(compiled.querySelector('.error-gql').textContent).toBeTruthy();
  // });
});
