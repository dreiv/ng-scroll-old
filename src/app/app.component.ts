import { Component, HostBinding, OnInit } from '@angular/core';
import { ScrollDirection, WindowService } from './window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class.isOverflowing') isOverflowing = true;

  scrollLog = 'scroll';

  constructor(private windowService: WindowService) {}

  ngOnInit(): void {
      this.windowService.onScroll$.subscribe((direction: ScrollDirection) => {
        this.scrollLog = `scrolling ${direction}`;
        console.log(this.scrollLog);
      });
  }
}
