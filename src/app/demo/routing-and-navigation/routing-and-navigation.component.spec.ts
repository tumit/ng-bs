import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RoutingAndNavigationComponent } from './routing-and-navigation.component';

describe('RoutingAndNavigationComponent', () => {
  let component: RoutingAndNavigationComponent;
  let fixture: ComponentFixture<RoutingAndNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RoutingAndNavigationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      RoutingAndNavigationComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
