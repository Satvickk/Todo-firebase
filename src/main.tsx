import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store/store.ts";
import Dashboard from "./components/Dashboard/Dashboard.tsx";
import Authentication from "./components/UserAuthentication/Authentication.tsx";
import PrivateRoute from "./lib/PrivateRoute.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />
//   }
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} exact/>
          <Route path="*" element={<NotFound />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Dashboard />} path="/dashboard" />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
