import { Directive, OnInit, Renderer2 } from '@angular/core';
import { ScrollSpyService } from '../../services/scroll-spy/scroll-spy.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export const WINDOW = 'window';

@Directive({
    selector: '[appWindowScrollSpy]'
})
export class WindowScrollSpyDirective implements OnInit {
    private scrollStream$: ReplaySubject<any> = new ReplaySubject(1);

    constructor(private scrollSpy: ScrollSpyService,
                private renderer: Renderer2) {
    }

    ngOnInit(): void {
        if (!!this.scrollSpy.getObservable(WINDOW)) {
            console.warn(`ScrollSpy: duplicate id "${WINDOW}". Instance will be skipped!`);
        } else {
            this.scrollSpy.setObservable(WINDOW, this.scrollStream$);

            this.renderer.listen('window', 'scroll', ($event) => {
                console.log('scroll occurred');

                this.scrollStream$.next($event);
            });
        }
    }
}
