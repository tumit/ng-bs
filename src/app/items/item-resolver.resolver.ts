import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Item } from './item';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root',
})
export class ItemResolverResolver implements Resolve<Item[]> {
  constructor(private itemService: ItemService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item[]> {
    return this.itemService.getItems();
  }
}
