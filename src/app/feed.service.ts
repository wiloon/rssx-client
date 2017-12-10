import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Feed} from './feed';


import {News} from './news';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MessageService} from './message.service';

@Injectable()
export class FeedService {

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getFeeds(): Observable<Feed[]> {
    return this.http.get<Feed[]>('api/feeds');
  }

  getNewsList(id: number): Observable<News[]> {
    let newsList: Observable<News[]>;

    newsList = this.http.get<News[]>('api/news-list', {params: new HttpParams().set('id', String(id))});
    return newsList;
  }


  getNews(id: number): Observable<News> {
    return this.http.get<News>('api/news?id=' + id);
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
