import UIkit from 'uikit/src/js/api/index';
import Core from 'uikit/src/js/core/core';
import boot from 'uikit/src/js/api/boot';
import { each } from 'uikit/src/js/util';

// Import Icons file
import Icons from 'uikit/dist/js/uikit-icons';
// import Icons from 'uikit/dist/js/uikit-icons-custom';

// Import UIkit components
import * as coreComponents from './imports/core';
import * as components from './imports/components';

// Register core components
each(coreComponents, (component, name) => UIkit.component(name, component));

// Core functionality
UIkit.use(Core);
boot(UIkit);

// Set version
UIkit.version = VERSION;

// Register components
each(components, (component, name) => UIkit.component(name, component));

// Register icons
UIkit.use(Icons);

export default UIkit;
