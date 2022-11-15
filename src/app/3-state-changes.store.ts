import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

@Injectable({ providedIn: 'root' })
export class ColorsStore extends ComponentStore<string[]> {
  colors$ = this.select((state) =>
    state.map((color) => ({
      value: color,
      name: color.charAt(0).toUpperCase() + color.slice(1),
    }))
  );

  constructor() {
    super(['aqua', 'aqua', 'aqua']);
  }

  changeColor([newColor, index]: [string, number]) {
    this.setState((colors) =>
      colors.map((color, i) => (i === index ? newColor : color))
    );
  }
}
