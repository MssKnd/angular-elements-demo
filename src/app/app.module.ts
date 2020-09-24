import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AComponent } from './components/a.component';
import { BComponent } from './components/b.component';

@NgModule({
  declarations: [
    AComponent,
    BComponent
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
    const BComponentElement = createCustomElement(
      BComponent,
      { injector: this.injector }
    );
    customElements.define('a-component', AComponentElement);
    customElements.define('b-component', BComponentElement);
  }
}
