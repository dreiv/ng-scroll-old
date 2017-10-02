import { Component, HostBinding } from '@angular/core';
import { WindowService } from './window.service';

@Component({
  selector: 'app-root',
  template: `
      <button (click)="isOverflowing = !isOverflowing">Toggle Overflow</button>
      <h1 class="fixed">{{scrollDirection}}</h1>
  `,
  styles: [`
   :host(.isOverflowing) {
       display: block;
       height: 600em;
       background: #def;
   }
   
   .fixed {
    position: fixed;
    bottom: 0;
    background: wheat;
   }
           `]
})
export class AppComponent {
  @HostBinding('class.isOverflowing') private isOverflowing = true;

  scrollDirection = 'scroll';

  constructor(private window$: WindowService) {

  }
}
