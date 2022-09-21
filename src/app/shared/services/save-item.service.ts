import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveItemService {

  save(list: {}[], listItem: {}, storageKey: string): void {
    list.push(listItem)
    localStorage.setItem(storageKey, JSON.stringify(list));
  }
}
