import { Component } from '@angular/core';
import { ColorsStore } from './3-state-changes.store';

@Component({
  selector: 'app-3-state-changes',
  template: `
  <ng-container *ngFor="let color of store.colors$ | async; index as i">
    <app-color-picker
      [color]="color.value"
      [colorName]="color.name"
      (colorChange)="store.changeColor([$event, i])"
    ></app-color-picker>
  </ng-container>
  `,
})
export class App3StateChangesComponent {
  constructor(public store: ColorsStore) {}
}
