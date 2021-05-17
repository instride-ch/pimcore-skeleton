import { Promise } from 'uikit/src/js/util';
import polyfills from './polyfills';

// Import base
import UIkit from './base/uikit';

const app = () => {
  // Make UIkit accessible via browser console
  global.UIkit = UIkit;
};

// Load polyfills first, then start the application
Promise.all(polyfills).then(app);
