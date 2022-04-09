import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCookieService } from './services/app.cookie.service';
import { AppQueryParameterService } from './services/app.url-query.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CookieService,
    AppCookieService,
    AppQueryParameterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
