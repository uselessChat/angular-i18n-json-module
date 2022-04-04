import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { I18nLoader } from './i18n/i18n-loader';
import { I18nMissingTranslationHandler } from './i18n/i18n-missing-handler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: I18nLoader,
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: I18nMissingTranslationHandler,
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
