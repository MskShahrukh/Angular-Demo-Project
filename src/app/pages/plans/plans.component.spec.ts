import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PlansComponent, OpenAccountComponent } from '../../pages/index';

import {
  CustomPackageComponent,
  SliderComponent
} from '../../components/index';

describe('PlansComponent', () => {
  let component: PlansComponent;
  let fixture: ComponentFixture<PlansComponent>;

  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [
        PlansComponent,
        OpenAccountComponent,
        CustomPackageComponent,
        SliderComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a page title', () => {
    expect(compiled.querySelector('.title').textContent).toContain(
      'Find a plan that works for you'
    );
  });

  it('should render packages', () => {
    expect(compiled.querySelector('.packagebox').textContent).toBeTruthy();
  });
});
