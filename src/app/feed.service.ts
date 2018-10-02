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


  getNews(feedId: number, id: string): Observable<News> {
    return this.http.get<News>('api/news', {params: new HttpParams().set('id', id).set('feedId', String(feedId))});
  }

  getPreviousNews(feedId: number, currentid: string): Observable<News> {
    return this.http.get<News>('api/news-previous', {params: new HttpParams().set('currentId', currentid).set('feedId', String(feedId))});
  }

  log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  markRead(feedId: number): Observable<News[]> {
    let newsList: Observable<News[]>;
    newsList = this.http.get<News[]>('api/mark-read', {params: new HttpParams().set('feedId', String(feedId))});
    return newsList;
  }
}
