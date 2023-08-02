import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { I18nModule } from './i18n/i18n.module';
import { I18nStaticAssetsJsonPath, I18nSupportedLanguages } from './i18n/i18n.tokens';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    I18nModule,
  ],
  providers: [
    { provide: I18nStaticAssetsJsonPath, useValue: '/assets/i18n' },
    { provide: I18nSupportedLanguages, useValue: ['en'] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
