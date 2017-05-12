import { async, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { WindowScrollSpyService } from './services/window-scroll-spy/window-scroll-spy.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [WindowScrollSpyService]
    });
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
