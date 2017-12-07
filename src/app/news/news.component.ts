import {Component, OnInit} from '@angular/core';
import {News} from '../news';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FeedService} from '../feed.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News;

  constructor(private route: ActivatedRoute,
              private feedService: FeedService,
              private location: Location) {
  }

  ngOnInit() {
    this.getNews();
  }

  getNews(): void {
    const newsId = +this.route.snapshot.paramMap.get('id');
    this.feedService.getNews(newsId).subscribe(news => this.news = news);

  }

  next(): void {
    this.feedService.getNews(this.news.NextId).subscribe(news => this.news = news);
  }
}
