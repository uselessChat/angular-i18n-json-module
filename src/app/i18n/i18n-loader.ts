import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import I18nEN from 'src/assets/i18n/en.json';

export class I18nLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    switch (lang) {
      case 'en': return of(I18nEN);
    }
    return of({});
  }
}