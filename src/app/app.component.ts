import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 (click)="demo1 = !demo1">1. Shared State—Angular</h1>
    <app-1-shared-state *ngIf="demo1"></app-1-shared-state>

    <h1 (click)="demo2 = !demo2">2. Derived State</h1>
    <app-2-derived-state *ngIf="demo2"></app-2-derived-state>

    <h1 (click)="demo3 = !demo3">3. State Changes</h1>
    <app-3-state-changes *ngIf="demo3"></app-3-state-changes>

    <h1 (click)="demo4 = !demo4">4. State Adapters</h1>
    <app-4-state-adapters *ngIf="demo4"></app-4-state-adapters>

    <h1 (click)="demo5 = !demo5">5. Observable Sources</h1>
    <app-5-observable-sources *ngIf="demo5"></app-5-observable-sources>

    <h1 (click)="demo6 = !demo6">6. DOM Sources</h1>
    <app-6-dom-sources *ngIf="demo6"></app-6-dom-sources>

    <h1 (click)="demo7 = !demo7">7. Multi-Store Selectors</h1>
    <app-7-multi-store-selectors *ngIf="demo7"></app-7-multi-store-selectors>
  `,
})
export class AppComponent {
  // StackBlitz refresh causes stores to be created before destroyed
  demo1 = false;
  demo2 = false;
  demo3 = false;
  demo4 = false;
  demo5 = false;
  demo6 = false;
  demo7 = false;
}
