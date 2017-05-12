import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { WindowScrollSpyService } from './services/window-scroll-spy/window-scroll-spy.service';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private windowScrollStream$: ReplaySubject<any> = new ReplaySubject(1);
  private removeWindowListener: Function;

  constructor(private scrollSpy: WindowScrollSpyService,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.scrollSpy.setWindowScrollStream(this.windowScrollStream$);

    this.removeWindowListener = this.renderer.listen('window', 'scroll', ($event) => {
      this.windowScrollStream$.next($event);
    });
  }

  ngOnDestroy(): void {
    this.removeWindowListener();
  }
}
