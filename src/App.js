import { IntlProvider } from "react-intl";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import GlobalErrorHandler from "@components/ErrorHandling/GlobalErrorHandler";
import getRouter, { getRoutesFromModule } from "@components/Routing/Router";
import * as TestModule from "@components/test_module_1/src/index";

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

  const routes = getRoutesFromModule([TestModule]);

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
        <RouterProvider router={getRouter(routes)} />
      </IntlProvider>
    </GlobalErrorHandler>
  );
}

export default App;
