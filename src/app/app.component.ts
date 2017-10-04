import {AfterViewInit, Component, ElementRef, HostBinding, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ScrollDirection, ScrollEvent, WindowService} from './window.service';
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

	@ViewChild('header') private header: ElementRef;

	private sub: Subscription;
	constructor(private windowService: WindowService) {}

	ngOnInit(): void {
		this.sub = this.windowService.onScroll$.subscribe((e: ScrollEvent) => {
      this.isHeaderShown = this.header.nativeElement.clientHeight > e.scrollTop || e.direction === ScrollDirection.Up;
      this.scrollLog = `scrolling ${e.direction}`;
		});
	}

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
