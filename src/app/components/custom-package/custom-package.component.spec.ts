import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import {
  SliderComponent,
  CustomPackageComponent
} from '../../components/index';
import { Packages } from '../../shared/packages';

describe('CustomPackageComponent', () => {
  let component: CustomPackageComponent;
  let fixture: ComponentFixture<CustomPackageComponent>;
  let de: DebugElement;
  let packages: Packages;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CustomPackageComponent, SliderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPackageComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(de).toBeTruthy();
  });
});
