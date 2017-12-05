import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Feed} from './feed';
import {FEEDS} from './mock-feed';
import {of} from 'rxjs/observable/of';
import {NEWS_LIST} from './mock-news-list';
import {News} from './news';

@Injectable()
export class FeedService {

  constructor() {
  }

  getFeeds(): Observable<Feed[]> {
    return of(FEEDS);
  }

  getNewsList(id: number): Observable<News[]> {
    // return of(FEEDS.find(feed => feed.id === id));
    return of(NEWS_LIST);
  }

  getNewsListA(id: number): News[] {
    return NEWS_LIST;
  }

  getNews(id: number): Observable<News> {
    return of(NEWS_LIST.find(news => news.id === id));
  }
}
