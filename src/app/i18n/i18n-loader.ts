import { Inject, Injectable, Optional } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import I18nEN from 'src/assets/i18n/en.json';
import { I18nAssetsJsonPath } from './i18n.tokens';
import { I18nRecord } from './i18n.model';

@Injectable()
export class I18nLoader implements TranslateLoader {
  constructor(@Inject(I18nAssetsJsonPath) private pathToken: string) {
    console.log({pathToken}); // ! DEBUG
  }

  getTranslation(lang: string): Observable<I18nRecord> {
    switch (lang) {
      case 'en': return of(I18nEN);
    }
    return of({});
  }
}
