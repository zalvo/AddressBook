import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Routing from "./components/Routing";

import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <HashRouter>
          <Routing />
        </HashRouter>
      </BrowserRouter>
    </>
  );
}
