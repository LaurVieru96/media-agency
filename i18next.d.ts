// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import type ro from "./public/locales/ro/translation.json";
import type en from "./public/locales/en/translation.json";

declare module "i18next" {
	// Extend CustomTypeOptions
	interface CustomTypeOptions {
		// custom namespace type, if you changed it
		defaultNS: "ro";
		// custom resources type
		resources: {
			ro: typeof ro;
			en: typeof en;
		};
	}
}