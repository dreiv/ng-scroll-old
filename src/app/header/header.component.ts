import { Component, ElementRef, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ScrollDirection, ScrollEvent, WindowService } from "../window.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @HostBinding('class.off-canvas') isOffCanvas: boolean;

  private sub: Subscription;

  constructor(private el: ElementRef, private windowService: WindowService) {
  }

  ngOnInit() {
    this.sub = this.windowService.onScroll$.subscribe((e: ScrollEvent) => {
      this.isOffCanvas = this.el.nativeElement.clientHeight < e.scrollTop && e.direction === ScrollDirection.Down;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
