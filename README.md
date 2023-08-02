# Angular I18n translation
Load i18n translation json files by language (locale)

## Setup with I18nModule

1. Import app module `I18nModule`
2. Optional: Add providers for `I18nModule` when necessary
  - I18nStaticAssetsJsonPath: **Static assets path url'**, default `/assets/i18n`
  - I18nSupportedLanguages: **Supported languages list**, default: `['en']`

  Sample
  ```ts
  @NgModule({
    imports: [ I18nModule ],
    providers: [
      { provide: I18nStaticAssetsJsonPath, useValue: '/assets/i18n' },
      { provide: I18nSupportedLanguages, useValue: ['en'] },
    ],
  })
  export class AppModule { }
  ```
3. Default language is `en`

## Setup manually

1. Add compile options on file `tsconfig.json`
```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "esModuleInterop": true
  }
}
```
2. Add i18n json translation file to `src/assets/i18n/<lan>.json`
3. Add a custom `TranslateLoader`
  ```javascript
  import I18nEN from 'src/assets/i18n/en.json';
  class I18nLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
      switch (lang) {
        case 'en': return of(I18nEN);
      }
      return of({});
    }
  }
  ```
4. Configure `TranslateModule` with the custom `TranslateLoader`
  ```javascript
  {
    imports: [
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: I18nLoader,
        },
      }),
    ],
  }
  ```
5. Add a custom `MissingTranslationHandler`
  ```javascript
  // Return original key to avoid exception
  class I18nMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams): string {
      return params.key;
    }
  }
  ```
6. Configure the custom `MissingTranslationHandler`
  ```javascript
  {
    imports: [
      BrowserModule,
      AppRoutingModule,
      TranslateModule.forRoot({
        missingTranslationHandler: {
          provide: MissingTranslationHandler,
          useClass: I18nMissingTranslationHandler,
        }
      }),
    ],
  }
  ```
