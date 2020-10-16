import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  template: '<span class="shadow">Shadow Component</span>',
  styles: ['span { padding: 40px 20px; line-height: 100px; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class BComponent {}
