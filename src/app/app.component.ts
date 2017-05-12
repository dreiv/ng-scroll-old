import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { WindowScrollSpyService } from './services/window-scroll-spy/window-scroll-spy.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export const WINDOW = 'window';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    private scrollStream$: ReplaySubject<any> = new ReplaySubject(1);
    private removeWindowListener: Function;

    constructor(private scrollSpy: WindowScrollSpyService,
                private renderer: Renderer2) {
    }

    ngOnInit(): void {
        this.scrollSpy.setObservable(WINDOW, this.scrollStream$);

        this.removeWindowListener = this.renderer.listen('window', 'scroll', ($event) => {
            console.log('scroll occurred');

            this.scrollStream$.next($event);
        });
    }

    ngOnDestroy(): void {
        this.removeWindowListener();
    }
}
