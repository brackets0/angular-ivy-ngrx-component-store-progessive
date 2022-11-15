import { Injectable } from '@angular/core';
import { map, timer } from 'rxjs';
import { ReactiveStore } from './reactive-store';

export class ColorsStore extends ReactiveStore<string[]> {
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

const loadingState = ['loading', 'loading', 'loading'];

const aqua$ = timer(3000).pipe(map(() => ['aqua', 'aqua', 'aqua']));
@Injectable({ providedIn: 'root' })
export class FavoriteColorsStore extends ColorsStore {
  constructor() {
    super(loadingState);
    this.react<ColorsStore>(this, { setState: aqua$ });
  }
}

const orange$ = timer(3000).pipe(map(() => ['orange', 'orange', 'orange']));
@Injectable({ providedIn: 'root' })
export class DislikedColorsStore extends ColorsStore {
  constructor() {
    super(loadingState);
    this.react<ColorsStore>(this, { setState: orange$ });
  }
}

const purple$ = timer(3000).pipe(map(() => ['purple', 'purple', 'purple']));
@Injectable({ providedIn: 'root' })
export class NeutralColorsStore extends ColorsStore {
  constructor() {
    super(loadingState);
    this.react<ColorsStore>(this, { setState: purple$ });
  }
}
