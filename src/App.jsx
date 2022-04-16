import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Navbar, Loader } from "./components/ui";
import { AuthProvider } from "./context";
import { AppRouter } from "./router";

import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <AppRouter />
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};
