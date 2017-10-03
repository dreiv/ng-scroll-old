import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

export type ScrollDirection = 'up' | 'down';

export const ScrollDirection = {
	Up: 'up' as ScrollDirection,
	Down: 'down' as ScrollDirection
};

export class Scroll {
	constructor(public direction: ScrollDirection, public height: number, public sHeight: number) {}
}

@Injectable()
export class WindowService {
	onScroll$: Observable<Scroll>;
	private previousPosition = document.scrollingElement.scrollTop;
	private isIOS = /iPad|iPhone/.test(navigator.userAgent);

	constructor() {
		this.onScroll$ = Observable.fromEvent<UIEvent>(window, 'scroll')
			.map((): number => {
				console.log('3.position', document.scrollingElement.scrollTop);
			  const el = document.scrollingElement;
			  let position = el.scrollTop;
			  if (this.isIOS) {
          position = Math.min(position, el.scrollHeight - el.clientHeight);
          position = Math.max(position, 0);
				}
			  return position;
				// return this.isIOS ? Math.max(Math.min(el.scrollTop, el.scrollHeight), 0) : el.scrollTop;
			})
			.filter((currentPosition: number): boolean => currentPosition !== this.previousPosition)
			.map((currentPosition: number): Scroll => {
				const direction = currentPosition > this.previousPosition ? ScrollDirection.Down : ScrollDirection.Up;
				this.previousPosition = currentPosition;

				return new Scroll(direction, currentPosition, document.scrollingElement.scrollHeight);
			})
			.distinctUntilChanged();
	}

}
