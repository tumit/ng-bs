import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Cat2Component } from './pages/cat2/cat2.component';
import { InputMaskModule } from '@ngneat/input-mask';
import { CachingInterceptor } from './interceptors/caching.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { GlobalErrorHandlerService } from './errors/global-error-handler.service';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, DashboardComponent, Cat2Component],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, InputMaskModule],
  providers: [
    { provide: Window, useValue: window },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
