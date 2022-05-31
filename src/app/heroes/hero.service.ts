import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHero(id: number): Observable<Hero> {
    console.log('id', id);
    const hero = HEROES.find(h => h.id === id)!;
    console.log('hero', hero);
    return of(hero);
  }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
