import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HelloComponent} from "./hello.component";
import {HeroComponent} from "./hero.component";
import {HeroChildComponent} from "./herochild.component";


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeroComponent,
    HeroChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
