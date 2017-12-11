import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeedListComponent} from './feed-list/feed-list.component';
import {FeedComponent} from './feed/feed.component';
import {NewsComponent} from './news/news.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/feeds', pathMatch: 'full'},
  {path: 'feeds', component: FeedListComponent},
  {path: 'feed/:id', component: FeedComponent},
  {path: 'news/:feedId/:id', component: NewsComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true, // <-- debugging purposes only
    })],

})
export class AppRoutingModule {
}
