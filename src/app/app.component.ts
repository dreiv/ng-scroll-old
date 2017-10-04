import {AfterViewInit, Component, ElementRef, HostBinding, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ScrollDirection, ScrollEvent, WindowService} from './window.service';
import { Subscription } from "rxjs/Subscription";
import {Observable} from "rxjs/Rx";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostBinding('class.isOverflowing') isOverflowing = true;
	isHeaderShown = true;
	scrollLog = 'scroll';

	@HostBinding('style.padding-top.px') headerPadding: number;

	headerOffCanvasShift = 0;

	@ViewChild('header') private header: ElementRef;
	private headerHeight: number;

	private wsSub: Subscription;
  private heightSub: Subscription;
	constructor(private windowService: WindowService) {}

	ngOnInit(): void {
		this.wsSub = this.windowService.onScroll$.subscribe((e: ScrollEvent) => {
      this.headerOffCanvasShift = this.headerHeight > e.scrollTop || e.direction === ScrollDirection.Up ? 0 : -this.headerHeight;
      this.scrollLog = `scrolling ${e.direction}`;
		});
	}

  ngAfterViewInit(): void {
		this.heightSub = Observable.of(this.header.nativeElement.clientHeight)
			.subscribe(height => {
				this.headerPadding = height + 8;
				this.headerHeight = height
      });
  }

  ngOnDestroy(): void {
    this.wsSub.unsubscribe();
    this.heightSub.unsubscribe();
  }
}
