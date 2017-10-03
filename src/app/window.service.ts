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
	private isIOS = /iPad|iPhone/.test(navigator.userAgent);

	constructor() {
		this.onScroll$ = Observable.fromEvent<UIEvent>(window, 'scroll')
			.map((): number => {
			  const el = document.scrollingElement;
				return this.isIOS ? Math.max(Math.min(el.scrollTop, el.scrollHeight), 0) : el.scrollTop;
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
