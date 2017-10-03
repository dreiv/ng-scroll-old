import { Component, HostBinding, OnInit } from '@angular/core';
import {Scroll, ScrollDirection, WindowService} from './window.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	@HostBinding('class.isOverflowing') isOverflowing = true;
	isHeaderShown = true;
	scrollLog = 'scroll';

	constructor(private windowService: WindowService) {}

	ngOnInit(): void {
		this.windowService.onScroll$.subscribe((s: Scroll) => {
			this.scrollLog = `scrolling ${s.direction} ${s.height} ${s.sHeight}`;
			this.isHeaderShown = s.direction === ScrollDirection.Up;
		});
	}
}
