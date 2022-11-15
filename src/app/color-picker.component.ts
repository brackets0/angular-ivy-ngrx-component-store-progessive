import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-color-picker',
  template: `
  <ng-container *ngIf="color">
    <div
      id="color-preview"
      [class]="color"
    >{{colorName}}</div>
    <button 
      id="aqua"
      [class.active]="color === 'aqua'"
      (click)="colorChange.next('aqua')"
    >Aqua</button>
    <button 
      id="orange"
      [class.active]="color === 'orange'"
      (click)="colorChange.next('orange')"
    >Orange</button>
    <button 
      id="purple"
      [class.active]="color === 'purple'"
      (click)="colorChange.next('purple')"
    >Purple</button>
  </ng-container>
  `,
})
export class ColorPickerComponent {
  @Input() color = 'aqua';
  @Input() colorName = 'Aqua';
  @Output() colorChange = new EventEmitter<string>();
}