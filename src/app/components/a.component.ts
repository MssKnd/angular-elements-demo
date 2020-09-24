import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  template: `
    <input type="button" value="button" (click)="onClick()" />
  `,
})
export class AComponent {
  constructor(
    public viewContainerRef: ViewContainerRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {}
  async onClick() {
    const { LazyComponent } = await import('./lazy.component');
    const component = this.componentFactoryResolver.resolveComponentFactory(
      LazyComponent
    );
    this.viewContainerRef.createComponent(component);
  }
}
