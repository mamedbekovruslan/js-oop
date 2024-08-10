import { App } from "./components/App";
import "./index.css";

document.addEventListener("DOMContentLoaded", function () {
  document.body.appendChild(new App().$rootElement);
});
