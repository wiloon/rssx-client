import {Component, OnInit} from '@angular/core';
import {Feed} from '../feed';
import {FeedService} from '../feed.service';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {
  feeds: Feed[];

  feed: Feed = {
    Id: 0,
    Title: 'abc'
  };

  constructor(private feedService: FeedService) {
  }

  ngOnInit() {
    this.getFeeds()
  }

  getFeeds(): void {
    this.feedService.getFeeds().subscribe(feeds => this.feeds = feeds);
  }
}
