import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      app Works!
      <button (click)="toggleOverflow()">Toggle Overflow</button>
  `,
  styles: ['div {height: 600em; background: #def;}']
})
export class AppComponent {
  HostBind('class.isOverflowing')isOverflowing: boolean;
}
