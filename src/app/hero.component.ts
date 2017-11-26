import {Component} from "@angular/core";

@Component({
  selector: 'hero',
  template: `<h2>heroes</h2>
  <hero-child *ngFor="let hero of heroes" [hero]="hero">

  </hero-child>
  `
})
export class HeroComponent {
  heroes = [{name: 'John'}, {name: 'Lily'}];
}


