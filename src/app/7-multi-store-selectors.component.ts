import { Component } from '@angular/core';
import { map, combineLatest, debounceTime } from 'rxjs';
import {
  blackout$,
  DislikedColorsStore,
  FavoriteColorsStore,
  NeutralColorsStore,
} from './7-multi-store-selectors.store';

@Component({
  selector: 'app-7-multi-store-selectors',
  template: `
  <h2>Favorite Colors</h2>
  <ng-container *ngFor="let color of favoriteStore.colors$ | async; index as i">
    <app-color-picker
      [color]="color.value"
      [colorName]="color.name"
      (colorChange)="favoriteStore.changeColor([$event, i])"
    ></app-color-picker>
  </ng-container>

  <h2>Disliked Colors</h2>
  <app-color-picker
    *ngFor="let color of dislikedStore.colors$ | async; index as i"
    [color]="color.value"
    [colorName]="color.name"
    (colorChange)="dislikedStore.changeColor([$event, i])"
  ></app-color-picker>

  <h2>Indifferent Colors</h2>
  <app-color-picker
    *ngFor="let color of neutralStore.colors$ | async; index as i"
    [color]="color.value"
    [colorName]="color.name"
    (colorChange)="neutralStore.changeColor([$event, i])"
  ></app-color-picker>

  <br style="clear:both">
  <br>

  <button
    class="black"
    (click)="blackout$.next()"
    [disabled]="allAreBlack$ | async"
  >Blackout</button>
  `,
})
export class App7MultiStoreSelectorsComponent {
  blackout$ = blackout$;

  allAreBlack$ = combineLatest([
    this.favoriteStore.allAreBlack$,
    this.dislikedStore.allAreBlack$,
    this.neutralStore.allAreBlack$,
  ]).pipe(
    debounceTime(0),
    map(
      ([favoriteAllAreBlack, dislikedAllAreBlack, neutralAllAreBlack]) =>
        favoriteAllAreBlack && dislikedAllAreBlack && neutralAllAreBlack
    )
  );

  constructor(
    public favoriteStore: FavoriteColorsStore,
    public dislikedStore: DislikedColorsStore,
    public neutralStore: NeutralColorsStore
  ) {}
}
