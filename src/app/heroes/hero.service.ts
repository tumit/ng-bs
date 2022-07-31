import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  readonly API = 'http://localhost:8080/heroes';

  constructor(private httpClient: HttpClient) {}

  getHero(id: string): Observable<Hero> {
    // console.log('id', id);
    // const hero = HEROES.find(h => h.id === id)!;
    // console.log('hero', hero);
    // return of(hero);
    return this.httpClient.get<Hero>(this.API + '/' + id);
  }

  getHeroes(): Observable<Hero[]> {
    // return of(HEROES.slice(6, 20));
    return this.httpClient.get<Hero[]>(this.API);
  }

  save(hero: Hero): Observable<Hero> {
    // found id is update
    if (hero.id) {
      return this.httpClient.put<Hero>(this.API + '/' + hero.id, hero);
    }

    // not found is insert
    return this.httpClient.post<Hero>(this.API, hero);
  }
}
