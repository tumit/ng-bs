import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAndNavigationComponent } from './routing-and-navigation.component';

describe('RoutingAndNavigationComponent', () => {
  let component: RoutingAndNavigationComponent;
  let fixture: ComponentFixture<RoutingAndNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingAndNavigationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingAndNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
