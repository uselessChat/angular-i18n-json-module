import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import I18nEN from 'src/assets/i18n/en.json';

export type I18nRecord = Record<string, string | any>;

export class I18nLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<I18nRecord> {
    switch (lang) {
      case 'en': return of(I18nEN);
    }
    return of({});
  }
}
