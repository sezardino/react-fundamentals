import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Loader } from "./components/ui";
import { AuthProvider } from "./context";
import { AppRouter } from "./router";

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
};
