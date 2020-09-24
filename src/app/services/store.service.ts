import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _count = 0;
  get count() {
    return this._count;
  }
  constructor() {}
  incliment() {
    this._count++;
  }
  decliment() {
    this._count--;
  }
}
