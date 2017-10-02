import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

export type ScrollDirection = 'up' | 'down';

export const ScrollDirection = {
	Up: 'up' as ScrollDirection,
	Down: 'down' as ScrollDirection
}

@Injectable()
export class WindowService {
	onScroll$: Observable<ScrollDirection>;
	private previousPosition = document.scrollingElement.scrollTop;

	constructor() {
		this.onScroll$ = Observable.fromEvent<HTMLElement>(window, 'scroll.scrollTarget.scrollingElement')
			.map((scrollingEl: HTMLElement): number => {
				if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
					return Math.max(Math.min(scrollingEl.scrollTop, scrollingEl.scrollHeight), 0);
				}	else {
					return scrollingEl.scrollTop;
				}
			})
			.filter((currentPosition: number): boolean => currentPosition !== this.previousPosition)
			.map((currentPosition: number): ScrollDirection => {
				const direction = currentPosition > this.previousPosition ? ScrollDirection.Down : ScrollDirection.Up;
				this.previousPosition = currentPosition;

				return direction;
			})
			.distinctUntilChanged();
	}

}
