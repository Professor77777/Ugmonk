import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Header from "./Components/Header/Header.jsx";
import Body from "./Components/Body/Body.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense>
      <Navbar />
      <Header />
      <Body />
    </Suspense>
  </React.StrictMode>
);
