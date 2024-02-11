import { useI18n } from 'vue-i18n';

export const useMagicTranslationKeys = <T extends Record<string, string>>(
  translationFile: T
) => {
  type TranslationObject = Partial<T>;

  const { t } = useI18n();

  const getTranslateObject = (path: string[], obj: TranslationObject) => {
    if (path.length === 0) {
      return obj;
    }
    path.forEach((key) => {
      if (!obj[key]) {
        return;
      }
      obj = obj[key] as unknown as TranslationObject;
    });
    return obj;
  };

  const resolveAndTranslate = (path: string[], obj: Partial<T>) => {
    const value = getTranslateObject(path, obj);
    const kvPairs = Object.entries(value);
    console.log({ kvPairs });
    if (kvPairs.length === 0) {
      console.error(`Invalid translation path: ${path.join('.')}`);
    }
    const translationObj = {} as Record<string, string>;
    kvPairs.forEach(([key, val]) => {
      if (typeof val === 'string') {
        console.log({ key, val });
        translationObj[key] = t(`${path.join('.')}.${key}`);
      }
    });
    return translationObj as TranslationObject;
  };

  const to = (translationsKey: string): string | Partial<T> => {
    try {
      const keyArray = translationsKey.split('.');
      const translationResult = resolveAndTranslate(keyArray, translationFile);
      return translationResult;
    } catch (error) {
      console.error(error);
      return translationsKey;
    }
  };

  const ta = (translationsKey: string): string[] => {
    try {
      const keyArray = translationsKey.split('.');
      const translationResult = resolveAndTranslate(keyArray, translationFile);
      console.log({ translationResult });
      if (typeof translationResult === 'string') {
        return [translationResult];
      } else {
        return Object.values(translationResult);
      }
    } catch (error) {
      console.error(error);
      return [translationsKey];
    }
  };

  return { ta, to, t };
};
