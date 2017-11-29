import {Component} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<p>{{ greeting }}</p>',
  styles: [`p {
    color: red;
  }`]

})
export class HelloComponent {
  public greeting: string;

  constructor() {
    this.greeting = 'hello angular';
  }
}

