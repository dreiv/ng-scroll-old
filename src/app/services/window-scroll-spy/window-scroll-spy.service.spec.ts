import { WindowScrollSpyService } from './window-scroll-spy.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';

describe('WindowScrollSpyService', () => {
    let service: WindowScrollSpyService;
    let testObs: ReplaySubject<string>;

    const testKey = 'testKey';

    beforeEach(() => {
        service = new WindowScrollSpyService();
        testObs = new ReplaySubject(1);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should get/set observables', () => {
        service.setWindowScrollStream(testObs);
        const testSubject = service.getWindowScrollStream();

        expect(testSubject).toBe(testObs);
    });
});
