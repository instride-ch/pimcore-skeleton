import polyfills from './polyfills';

// Import base
import UIkit from './base/uikit';
import '../scss/app.scss';

// Import components
import Example from './components/example';

// Import Fonts
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';

const app = () => {
  // Make UIkit accessible via browser console
  global.UIkit = UIkit;

  // Register components
  UIkit.component('example', Example);
};

// Load polyfills first, then start the application
Promise.all(polyfills).then(app);
