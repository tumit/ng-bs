import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  id = new FormControl();
  name = new FormControl();
  combatPower = new FormControl();

  heroForm = new FormGroup({
    id: this.id,
    name: this.name,
    combatPower: this.combatPower,
  });

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    // sync
    // const id = Number(
    //   this.route.snapshot.paramMap.get('id')!
    // );
    // if (id) {
    //   this.heroService
    //     .getHero(id)
    //     .subscribe(h => this.heroForm.patchValue(h));
    // }

    // async
    this.route.params
      .pipe(
        switchMap(params =>
          this.heroService.getHero(Number(params['id']))
        ),
        filter(hero => !!hero)
      )
      .subscribe(hero => this.heroForm.patchValue(hero));
  }

  goBack() {
    this.location.back();
  }
}
