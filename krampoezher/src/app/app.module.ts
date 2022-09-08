import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KrampouzListComponent } from './krampouz-list/krampouz-list.component';
import { KrampouzDetailsComponent } from './krampouz-details/krampouz-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KrampouzListComponent,
    KrampouzDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
