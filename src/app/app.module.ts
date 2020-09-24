import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AComponent } from './components/a.component';

@NgModule({
  declarations: [
    AComponent
  ],
  imports: [
    BrowserModule
  ],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const AComponentElement = createCustomElement(
      AComponent,
      { injector: this.injector }
    );
    customElements.define('a-component', AComponentElement);
  }
}
