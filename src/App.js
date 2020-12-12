import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Routing from "./components/Routing";

import "bootstrap/dist/css/bootstrap.min.css";

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
