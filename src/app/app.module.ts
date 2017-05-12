import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WindowScrollSpyDirective } from './directives/window-scroll-spy/window-scroll-spy.directive';
import { ScrollSpyService } from './services/scroll-spy/scroll-spy.service';

@NgModule({
    declarations: [
        AppComponent,
        WindowScrollSpyDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ScrollSpyService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
