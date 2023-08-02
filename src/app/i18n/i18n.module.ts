import { NgModule } from "@angular/core";
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { I18nAssetsJsonPath } from "./i18n.tokens";
import { I18nLoader } from "./i18n-loader";
import { I18nMissingTranslationHandler } from "./i18n-missing-handler";

@NgModule({
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useClass: I18nLoader,
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: I18nMissingTranslationHandler,
      },
    }),
  ],
  exports: [
    TranslateModule,
  ],
  providers: [
    { provide: I18nAssetsJsonPath, useValue: 'src/assets/i18n' }
  ],
})
export class I18nModule {}
