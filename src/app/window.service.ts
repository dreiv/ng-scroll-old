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
		this.onScroll$ = Observable.fromEvent<UIEvent>(window, 'scroll')
			.debounceTime(100)
			.map(() => Math.max(Math.min(document.scrollingElement.scrollTop, document.scrollingElement.scrollHeight), 0))
			.filter(currentPosition => currentPosition !== this.previousPosition)
			.map((currentPosition): ScrollDirection => {
				const direction = currentPosition > this.previousPosition ? ScrollDirection.Down : ScrollDirection.Up;
				this.previousPosition = currentPosition;

				return direction;
			})
			.distinctUntilChanged();
	}

}
