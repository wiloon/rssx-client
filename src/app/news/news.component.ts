import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FeedService} from '../feed.service';
import {News} from '../news';


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
    const feedId = +this.route.snapshot.paramMap.get('feedId');
    const newsId = this.route.snapshot.paramMap.get('id');
    this.feedService.getNews(feedId, newsId).subscribe(news => this.news = news);

  }

  nextArticle(): void {
    this.feedService.getNews(this.news.FeedId, this.news.NextId).subscribe(news => this.news = news);
  }

  previousArticle(): void {
    this.feedService.getPreviousNews(this.news.FeedId, this.news.Id).subscribe(news => this.news = news);
  }


  goBack(): void {
    this.location.back();
  }
}
