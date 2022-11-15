import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export class ColorsStore extends ComponentStore<string[]> {
  colors$ = this.select((state) =>
    state.map((color) => ({
      value: color,
      name: color.charAt(0).toUpperCase() + color.slice(1),
    }))
  );

  changeColor([newColor, index]: [string, number]) {
    this.setState((colors) =>
      colors.map((color, i) => (i === index ? newColor : color))
    );
  }
}

@Injectable({ providedIn: 'root' })
export class FavoriteColorsStore extends ColorsStore {
  constructor() {
    super(['aqua', 'aqua', 'aqua']);
  }
}
@Injectable({ providedIn: 'root' })
export class DislikedColorsStore extends ColorsStore {
  constructor() {
    super(['orange', 'orange', 'orange']);
  }
}
@Injectable({ providedIn: 'root' })
export class NeutralColorsStore extends ColorsStore {
  constructor() {
    super(['purple', 'purple', 'purple']);
  }
}
