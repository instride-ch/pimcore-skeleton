import polyfills from './polyfills';

// Import base
import UIkit from './base/uikit';
import '../scss/app.scss';

// Import components
import Example from './components/example';

const app = () => {
  // Make UIkit accessible via browser console
  global.UIkit = UIkit;

  // Register components
  UIkit.component('example', Example);
};

// Load polyfills first, then start the application
Promise.all(polyfills).then(app);
