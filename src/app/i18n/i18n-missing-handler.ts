import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';

export class I18nMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams): string {
    return params.key;
  }
}