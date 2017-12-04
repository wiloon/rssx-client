import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Feed} from "./feed";
import {FEEDS} from "./mock-feed";
import {of} from "rxjs/observable/of";

@Injectable()
export class FeedService {

  constructor() {
  }

  getFeeds(): Observable<Feed[]> {
    return of(FEEDS)
  }
}
