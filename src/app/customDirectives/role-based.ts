import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRoleBased]',
  standalone: false
})
export class RoleBased {
  private currentRole: string = '';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appRoleBased(role: string) {
    this.currentRole = role;
    this.updateView();
  }

  private updateView() {
    this.viewContainer.clear(); // remove previous content

    if (this.currentRole === 'admin' || this.currentRole === 'employee') {
      // Insert template content (the element where directive applied)
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}

