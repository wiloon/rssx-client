import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Feed} from './feed';
import {of} from 'rxjs/observable/of';
import {NEWS_LIST} from './mock-news-list';
import {News} from './news';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';

@Injectable()
export class FeedService {

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getFeeds(): Observable<Feed[]> {
    return this.http.get<Feed[]>('api/feeds');
  }

  getNewsList(id: number): Observable<News[]> {
    // return of(FEEDS.find(feed => feed.id === id));
    return this.http.get<News[]>('api/news?id=' + id);
  }

  getNewsListA(id: number): News[] {
    return NEWS_LIST;
  }

  getNews(id: number): Observable<News> {
    return of(NEWS_LIST.find(news => news.Id === id));
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
