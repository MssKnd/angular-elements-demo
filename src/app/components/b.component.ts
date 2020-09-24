import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  template: `
    <div>Component_B</div>
    <div>Count: {{ count }}</div>
    <input type="button" value="decrement" (click)="onClick()"/>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BComponent {
  get count() {
    return this.storeService.count;
  }
  constructor(
    private storeService: StoreService,
    private cdr: ChangeDetectorRef,
  ) {}
  onClick() {
    this.storeService.decliment();
    this.cdr.detectChanges();
  }
}
