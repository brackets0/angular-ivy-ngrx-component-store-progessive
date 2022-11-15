import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { App1SharedStateComponent } from './1-shared-state.component';
import { App2DerivedStateComponent } from './2-derived-state.component';
import { ColorPickerComponent } from './color-picker.component';
import { App3StateChangesComponent } from './3-state-changes.component';
import { App4StateAdaptersComponent } from './4-state-adapters.component';
import { App5ObservableSourcesComponent } from './5-observable-sources.component';
import { App6DomSourcesComponent } from './6-dom-sources.component';
import { App7MultiStoreSelectorsComponent } from './7-multi-store-selectors.component';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [
    AppComponent,
    App1SharedStateComponent,
    App2DerivedStateComponent,
    ColorPickerComponent,
    App3StateChangesComponent,
    App4StateAdaptersComponent,
    App5ObservableSourcesComponent,
    App6DomSourcesComponent,
    App7MultiStoreSelectorsComponent,
  ],
  bootstrap: [AppComponent],
  // providers: [defaultStoreProvider],
})
export class AppModule {}
