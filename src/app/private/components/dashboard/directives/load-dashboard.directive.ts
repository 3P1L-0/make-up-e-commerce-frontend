import { Directive, Input, OnInit, TemplateRef, ViewContainerRef, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Directive({selector: "[appLoadDashboard]"})
export class AppLoadDashboardDirective implements OnInit {
  /* DEPENDENCIES */
  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly activatedRoute = inject(ActivatedRoute);

  /* MEMBERS */
  public ngOnInit(): void {
    console.log(this.activatedRoute);
  }
}
