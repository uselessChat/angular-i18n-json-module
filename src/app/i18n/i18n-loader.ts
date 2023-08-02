import { Inject, Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, catchError, defer, of } from 'rxjs';
import { I18nRecord } from './i18n.model';
import { I18nStaticAssetsJsonPath, I18nSupportedLanguages } from './i18n.tokens';

@Injectable()
export class I18nLoader implements TranslateLoader {
  private supportedLanguages: string[] = [];

  constructor(
    @Inject(I18nStaticAssetsJsonPath) private jsonPath: string,
    @Inject(I18nSupportedLanguages) languages: string[],
  ) {
    if (!Array.isArray(languages)) return;
    this.supportedLanguages = languages;
  }

  getTranslation(lang: string): Observable<I18nRecord> {
    if (!this.supportedLanguages.includes(lang)) return of({});

    const url = `${this.jsonPath}/${lang}.json`;
    const source = defer(() => fetch(url).then(response => response.json())).pipe(
      catchError(() => {
        console.debug("Error trying to load json file:", url);
        return of({});
      })
    );
    return source;
  }
}
