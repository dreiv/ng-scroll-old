import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

export type ScrollDirection = 'up' | 'down';

export const ScrollDirection = {
	Up: 'up' as ScrollDirection,
	Down: 'down' as ScrollDirection
};

export class ScrollEvent {
	constructor(public direction: ScrollDirection, public scrollTop: number) {}
}

@Injectable()
export class WindowService {
	onScroll$: Observable<ScrollEvent>;
	private previousScrollTop: number;
	private isIOS = /iPad|iPhone/.test(navigator.userAgent);

	constructor() {
		const sEl = document.scrollingElement;
		
		this.onScroll$ = Observable.fromEvent<UIEvent>(window, 'scroll')
			.map((): number => this.isIOS ? Math.max(Math.min(sEl.scrollTop, sEl.scrollHeight - window.innerHeight), 0) : sEl.scrollTop)
			.filter((currentScrollTop: number): boolean => currentScrollTop !== this.previousScrollTop)
			.map((currentScrollTop: number): ScrollEvent => {
				const direction = currentScrollTop > this.previousScrollTop ? ScrollDirection.Down : ScrollDirection.Up;
				this.previousScrollTop = currentScrollTop;

				return new ScrollEvent(direction, currentScrollTop);
			})
			.distinctUntilChanged();
	}

}
