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
  private feedsUel = 'api/feeds';

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getFeeds(): Observable<Feed[]> {

    // return of(FEEDS);
    return this.http.get<Feed[]>(this.feedsUel);
  }

  getNewsList(id: number): Observable<News[]> {
    // return of(FEEDS.find(feed => feed.id === id));
    return of(NEWS_LIST);

    // return this._http.get('http://localhost:3000/log', {
    //   params: {
    //     host: event.target.getAttribute("host"),
    //     service: event.target.getAttribute("service")
    //   }
    // }).map((res: Response) => res.json())
    //   .subscribe(data => {
    //     this.clickMessage = data;
    //
    //   });

  }

  getNewsListA(id: number): News[] {
    return NEWS_LIST;
  }

  getNews(id: number): Observable<News> {
    return of(NEWS_LIST.find(news => news.id === id));
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
