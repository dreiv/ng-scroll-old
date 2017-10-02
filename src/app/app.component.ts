import { Component, HostBinding, OnInit } from '@angular/core';
import { ScrollDirection, WindowService } from './window.service';

@Component({
  selector: 'app-root',
  template: `
      <button (click)="isOverflowing = !isOverflowing">Toggle Overflow</button>
      <h1 class="fixed">{{scrollLog}}</h1>
  `,
  styles: [`
   :host {
      padding-top: 20em;
      transition: height 3s;
      will-change: height;
      display: block;
      height: 0;
      background: #def;
   }
   :host(.isOverflowing) {
       height: 60em;
   }
   
   .fixed {
    position: fixed;
    bottom: 0;
    background: wheat;
   }
           `]
})
export class AppComponent implements OnInit {
  @HostBinding('class.isOverflowing') isOverflowing = true;

  scrollLog = 'scroll';

  constructor(private window$: WindowService) {}

  ngOnInit(): void {
      this.window$.onScroll$.subscribe((direction: ScrollDirection) => {
        this.scrollLog = `scrolling ${direction}`;
        console.log(this.scrollLog);
      });
  }
}
