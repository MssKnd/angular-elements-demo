import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  template: '<span class="shadow">Shadow Component</span>',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BComponent {}
