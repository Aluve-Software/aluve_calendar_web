import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
  <Auth0Provider 
    domain='dev-cxfqstj1x83d8ith.us.auth0.com'
    clientId='g9ugkxzcHH3wv0GPKcI7bpP8opBK7EWh'
    authorizationParams={{redirect_uri: window.location.origin}}
   >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
);