// Import base
import UIkit from "./base/uikit.js";
import "../styles/app.scss";

// Import components
import Example from "./components/example.js";

// Import Fonts
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

// Start app and register components
document.addEventListener("DOMContentLoaded", () => {
  UIkit.component("example", Example);
});
