import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ScrollDirection, WindowService } from './window.service';
import { Subscription } from "rxjs/Subscription";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	@HostBinding('class.isOverflowing') isOverflowing = true;
	isHeaderShown = true;
	scrollLog = 'scroll';

	private sub: Subscription;
	constructor(private windowService: WindowService) {}

	ngOnInit(): void {
		this.sub = this.windowService.onScroll$.subscribe((direction: ScrollDirection) => {
      this.isHeaderShown = direction === ScrollDirection.Up;
      this.scrollLog = `scrolling ${direction}`;
		});
	}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
