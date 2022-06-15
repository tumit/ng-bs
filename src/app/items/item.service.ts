import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item';
import { ITEMS } from './mock-items';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  readonly API = 'http://localhost:8080/items';

  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.API);
  }

  getItem(id: number): Observable<Item> {
    return this.httpClient.get<Item>(this.API + '/' + id);
  }
}
