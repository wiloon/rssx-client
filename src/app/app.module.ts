import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {HeroComponent} from './hero.component';
import {HeroChildComponent} from './herochild.component';
import {HttpClientModule} from '@angular/common/http';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from "./hero.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import {FeedService} from "./feed.service";
import { FeedComponent } from './feed/feed.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeroComponent,
    HeroChildComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FeedListComponent,
    FeedComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ HeroService, MessageService ,FeedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
