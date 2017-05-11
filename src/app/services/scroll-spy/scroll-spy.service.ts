import {EventEmitter, Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";

export enum ScrollAction {
  SET,
  DELETE
}

export interface ScrollChangeEvent {
  key: string;
  change: ScrollAction;
}

@Injectable()
export class ScrollSpyService {
  public changes$: EventEmitter<ScrollChangeEvent> = new EventEmitter();
  private observables: ReplaySubject<string> = new ReplaySubject<string>();

  public getObservable(key: string): any {
    return this.observables[key];
  }

  public setObservable(key: string, observable: ReplaySubject<string>) {
    this.observables[key] = observable;
    this.observables = Object.assign({}, this.observables);
    this.changes$.emit({ key: key, change: ScrollAction.SET });
  }

  public deleteObservable(key: string) {
    delete this.observables[key];
    this.observables = Object.assign({}, this.observables);
    this.changes$.emit({ key: key, change: ScrollAction.DELETE });
  }
}
