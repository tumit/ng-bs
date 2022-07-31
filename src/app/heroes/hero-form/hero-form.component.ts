import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Observable, of, switchMap } from 'rxjs';
import { CanComponentDeactive } from 'src/app/guards/can-component-deactive';
import { Item } from 'src/app/items/item';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit, CanComponentDeactive {
  isSubmitted = false;

  heroForm = this.fb.group<Hero>({
    id: null,
    name: '',
    combatPower: 0,
  });

  color?: string | null;

  items: Item[] = [];

  constructor(
    private fb: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private location: Location,
    private window: Window
  ) {}

  ngOnInit() {
    // id from required param
    const id = this.route.snapshot.paramMap.get('id')!;

    if (id) {
      this.heroService.getHero(id).subscribe(h => this.heroForm.patchValue(h));
    }

    // color from optional params
    let color = this.route.snapshot.paramMap.get('color');
    if (color) {
      this.color = color;
    }

    // color form query params
    color = this.route.snapshot.queryParamMap.get('color');
    if (color) {
      this.color = color;
    }

    // async
    // this.route.params
    //   .pipe(
    //     switchMap(params =>
    //       this.heroService.getHero(Number(params['id']))
    //     ),
    //     filter(hero => !!hero)
    //   )
    //   .subscribe(hero => this.heroForm.patchValue(hero));

    this.route.data.subscribe((data: any) => (this.items = data.items));
  }

  goBack() {
    this.location.back();
  }

  onSave(hero: Hero) {
    this.isSubmitted = true;
    this.heroService.save(hero).subscribe(_ => this.router.navigate(['/heroes']));
  }

  canDeactive(): Observable<boolean> {
    if (this.heroForm.dirty && !this.isSubmitted) {
      return of(this.window.confirm('Are you sure ?'));
    }
    return of(true);
  }
}
