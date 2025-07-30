import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./components/usepopcorn/StarRating/StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <StarRating maxRating={5} />
    <StarRating size={24} color="blue" defaultRating={1} />
  </React.StrictMode>
);
