import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { SliderComponent } from './slider.component';
import { Packages } from '../../shared/packages';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;
  let de: DebugElement;
  let compiled: any;
  let packages = Packages;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    component.images = packages[0].slides;
    component.index = 0;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
