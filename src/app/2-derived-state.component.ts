import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-2-derived-state',
  template: `
  <ng-container *ngIf="currentColor$ | async as currentColor">
    <div
      id="color-preview"
      [class]="currentColor"
    >{{currentColorName$ | async}}</div>
    <button 
      id="aqua"
      [class.active]="currentColor === 'aqua'"
      (click)="currentColor$.next('aqua')"
    >Aqua</button>
    <button 
      id="orange"
      [class.active]="currentColor === 'orange'"
      (click)="currentColor$.next('orange')"
    >Orange</button>
    <button 
      id="purple"
      [class.active]="currentColor === 'purple'"
      (click)="currentColor$.next('purple')"
    >Purple</button>
  </ng-container>
  `,
})
export class App2DerivedStateComponent {
  currentColor$ = new BehaviorSubject('aqua');
  currentColorName$ = this.currentColor$.pipe(
    map((color) => color.charAt(0).toUpperCase() + color.slice(1))
  );
}
