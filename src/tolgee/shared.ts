import { DevTools, Tolgee, FormatSimple } from "@tolgee/web";

export const ALL_LANGUAGES = ["en", "zh", "fr", "ja", "es"];
export const DEFAULT_LANGUAGE = "en";

export const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
export const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;

export function TolgeeBase() {
  return Tolgee()
    .use(FormatSimple())
    .use(DevTools())
    .updateDefaults({
      apiKey,
      apiUrl,
      staticData: {
        en: () => import("../../messages/en.json"),
        zh: () => import("../../messages/zh.json"),
        fr: () => import("../../messages/fr.json"),
        ja: () => import("../../messages/ja.json"),
        es: () => import("../../messages/es.json"),
      },
    });
}
