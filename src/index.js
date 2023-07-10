import React from "react";
import ReactDOM from "react-dom";

// import React Helmet for head tags
import Helmet from "react-helmet";

import App from "./App.js";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
      <Helmet>
        <script src="https://kit.fontawesome.com/503ee6516c.js" crossorigin="anonymous"></script>
      </Helmet>
      <App />
    </React.StrictMode>,
    rootElement
  );