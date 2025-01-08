import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import 'reflect-metadata';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      BrowserAnimationsModule, // Для анимаций
      ToastrModule.forRoot({
        timeOut: 3000, // Время отображения уведомления
        positionClass: 'toast-top-right', // Позиция уведомлений
        extendedTimeOut: 3000,
      }),
    ),
  ],
}).catch((err) => console.error(err));
