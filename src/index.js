import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Home from "./components/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
]);

root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
