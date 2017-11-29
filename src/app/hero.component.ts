import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-hero-root',
  template: `
    <button id="input" (click)="refresh()">Refresh</button>
    <h1>{{ title }}</h1>
    <h2>My favorite hero is: {{ myHero }}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        <a href="#">{{ hero }}</a>
      </li>
    </ul>
  `
})
export class HeroComponent {

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];


  title: string;
  myHero: string;

  constructor(private http: HttpClient) {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }


  refresh() {
    this.http.get('/refresh').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.heroes = <string[]>data;
    });


  }
}


