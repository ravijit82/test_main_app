import { IntlProvider } from "react-intl";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "@components/Routing/Router";
import GlobalErrorHandler from "@components/ErrorHandling/GlobalErrorHandler";

function loadLocaleData(locale = "en-US") {
  switch (locale) {
    case "fr":
      return import("@locales/fr.json");
    default:
      return null;
  }
}

function App() {
  const defaultLocale = "en";
  const selectedLocale = "en";

  const [messages, setMessages] = useState({});

  useEffect(() => {
    async function loadLocales(localeToLoad) {
      const localeMessages = await loadLocaleData(localeToLoad);
      if (localeMessages) {
        setMessages(localeMessages);
      }
    }

    loadLocales(selectedLocale);
  }, []);

  return (
    <GlobalErrorHandler>
      <IntlProvider
        locale={selectedLocale}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        <RouterProvider router={router} />
      </IntlProvider>
    </GlobalErrorHandler>
  );
}

export default App;
