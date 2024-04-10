import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./pages/Main/Main.tsx";
import { RequireAuth } from "./helpers/RequireAuth.tsx";
import { AuthLayout } from "./layout/Auth/AuthLayout.tsx";
import { Layout } from "./layout/Layout/Layout.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { Register } from "./pages/Register/Register.tsx";
import { Error as ErrorPage } from "./pages/Error/Error.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactNotifications />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
