import {ScrollChange, ScrollChangeEvent, ScrollSpyService} from './scroll-spy.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';

describe('ScrollSpyService', () => {
  let service: ScrollSpyService;
  let testObs: ReplaySubject<string>;

  const testKey = 'testKey';

  beforeEach(() => {
    service = new ScrollSpyService();
    testObs = new ReplaySubject(1);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get/set observables', () => {
    service.setObservable(testKey, testObs);
    const testSubject = service.getObservable(testKey);

    expect(testSubject).toBe(testObs);
  });

  it('should delete observables', () => {
    service.setObservable(testKey, testObs);

    let testSubject = service.getObservable(testKey);
    expect(testSubject).toBeDefined();

    service.deleteObservable(testKey);
    testSubject = service.getObservable(testKey);
    expect(testSubject).toBeUndefined();
  });

  it('should emit event on observable being set', () => {
    service.changes$.subscribe((testSubject: ScrollChangeEvent) => {
      expect(testSubject.key).toBe(testKey);
      expect(testSubject.change).toBe(ScrollChange.SET);
    });
    service.setObservable(testKey, testObs);
  });


  it('should emit event on observable being deleted', () => {
    service.setObservable(testKey, testObs);

    service.changes$.subscribe((testSubject: ScrollChangeEvent) => {
      expect(testSubject.key).toBe(testKey);
      expect(testSubject.change).toBe(ScrollChange.DELETE);
    });
    service.deleteObservable(testKey);
  });
});
