import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FeedService} from '../feed.service';
import {News} from '../news';
import {Location} from '@angular/common';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  newsList: News[];
  news: News = {
    id: 0,
    title: 't0',
    url: 'u0',
    description: 'd0'
  };

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
    // this.newsList = this.feedService.getNewsListA(feedId);
    console.log(this.newsList);
  }

  goBack(): void {
    this.location.back();
  }
}
