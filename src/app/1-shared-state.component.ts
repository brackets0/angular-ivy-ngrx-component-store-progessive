import { Component } from '@angular/core';

@Component({
  selector: 'app-1-shared-state',
  template: `
  <div
    id="color-preview"
    [class]="currentColor"
  >{{currentColor}}</div>
  <button 
    id="aqua"
    [class.active]="currentColor === 'aqua'"
    (click)="currentColor = 'aqua'"
  >aqua</button>
  <button 
    id="orange"
    [class.active]="currentColor === 'orange'"
    (click)="currentColor = 'orange'"
  >orange</button>
  <button 
    id="purple"
    [class.active]="currentColor === 'purple'"
    (click)="currentColor = 'purple'"
  >purple</button>
  `,
})
export class App1SharedStateComponent {
  currentColor = 'aqua';
}
