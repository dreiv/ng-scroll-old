import {EventEmitter, Injectable} from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

/**
 * An enum specifying the possible Change produced by the TrackedChangeEvent.
 */
export enum TrackedChange {
  SET,
  DELETE
}

/**
 * An interface specifying the format of a TrackedChangeEvent:
 */
export interface TrackedChangeEvent {
  /* An index of for the Observable that triggered the change. */
  key: string;
  /* The performed Scrolling change */
  change: TrackedChange;
}

@Injectable()
export class ScrollSpyService {
  public changes$: EventEmitter<TrackedChangeEvent> = new EventEmitter();
  private observables: ReplaySubject<string> = new ReplaySubject<string>();

  public getObservable(key: string): any {
    return this.observables[key];
  }

  public setObservable(key: string, observable: ReplaySubject<string>) {
    this.observables[key] = observable;
    this.observables = Object.assign({}, this.observables);
    this.changes$.emit({ key: key, change: TrackedChange.SET });
  }

  public deleteObservable(key: string) {
    delete this.observables[key];
    this.observables = Object.assign({}, this.observables);
    this.changes$.emit({ key: key, change: TrackedChange.DELETE });
  }
}
