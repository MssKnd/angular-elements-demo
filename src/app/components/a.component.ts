import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  template: `
    <div>Component_A</div>
    <div>Count: {{ count }}</div>
    <input type="button" value="increment" (click)="onClick()"/>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AComponent {
  get count() {
    return this.storeService.count;
  }
  constructor(
    private storeService: StoreService,
    private cdr: ChangeDetectorRef,
  ) {}
  onClick() {
    this.storeService.incliment();
    this.cdr.detectChanges();
  }
}
