import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FeedService} from '../feed.service';
import {News} from '../news';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  newsList: News[];

  constructor(private route: ActivatedRoute,
              private feedService: FeedService,
              private location: Location) {
  }

  ngOnInit() {
    this.getNewsList();
  }

  getNewsList(): void {
    const feedId = +this.route.snapshot.paramMap.get('id');
    this.feedService.getNewsList(feedId).subscribe(newsList => this.newsList = newsList);
  }

  goBack(): void {
    this.location.back();
  }

  markRead(): void {
    const feedId = +this.route.snapshot.paramMap.get('id');
    this.feedService.markRead(feedId).subscribe(newsList => this.newsList = newsList);
  }
}
