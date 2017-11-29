import {Component, Input} from '@angular/core';
import {HeroComponent} from './hero.component';

@Component({
  selector: 'app-hero-child',
  template: `<h3>{{ hero.heroes }}</h3>`
})
export class HeroChildComponent {
  @Input() hero: HeroComponent;
}
