import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const container = document.getElementById("root");
const root = createRoot(container);

//components

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
