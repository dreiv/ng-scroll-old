import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

export type ScrollDirection = 'up' | 'down';

export const ScrollDirection = {
	Up: 'up' as ScrollDirection,
	Down: 'down' as ScrollDirection
};

export class Scroll {
	constructor(public direction: ScrollDirection, public height: number, public sHeight: number, public cHeight: number) {}
}

@Injectable()
export class WindowService {
	onScroll$: Observable<Scroll>;
	private previousPosition = document.scrollingElement.scrollTop;
	private isIOS = /iPad|iPhone/.test(navigator.userAgent);
	private height: number;

	constructor() {
		this.onScroll$ = Observable.fromEvent<UIEvent>(window, 'scroll')
			.map((): number => {
				console.log('7.position', document.scrollingElement.scrollTop);
        this.height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			  const el = document.scrollingElement;
			  let position = el.scrollTop;
			  if (this.isIOS) {
          position = Math.min(position, el.scrollHeight - this.height);
          position = Math.max(position, 0);
				}
			  return position;
				// return this.isIOS ? Math.max(Math.min(el.scrollTop, el.scrollHeight), 0) : el.scrollTop;
			})
			.filter((currentPosition: number): boolean => currentPosition !== this.previousPosition)
			.map((currentPosition: number): Scroll => {
				const direction = currentPosition > this.previousPosition ? ScrollDirection.Down : ScrollDirection.Up;
				this.previousPosition = currentPosition;

				return new Scroll(direction, currentPosition, document.scrollingElement.scrollHeight, this.height);
			})
			.distinctUntilChanged();
	}

}
