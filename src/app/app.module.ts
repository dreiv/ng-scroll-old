import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WindowScrollSpyService } from './services/window-scroll-spy/window-scroll-spy.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [WindowScrollSpyService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
