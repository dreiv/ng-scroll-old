import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class WindowScrollSpyService {
    private windowScrollStream$: ReplaySubject<any>;

    public getWindowScrollStream(): any {
        return this.windowScrollStream$;
    }

    public setWindowScrollStream(observable: ReplaySubject<any>) {
        this.windowScrollStream$ = observable;
    }
}
