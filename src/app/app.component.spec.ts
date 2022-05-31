import { Location } from '@angular/common';
import {
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-bs'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-bs');
  });

  it('redirects to /dashboard when navigate to ""', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/dashboard');
  }));

  it('redirects to /page-not-found when navigate to "NOT_FOUND"', fakeAsync(() => {
    router.navigate(['/NOT_FOUND']);
    tick(100);
    expect(location.path()).toBe('/page-not-found');
  }));
});
