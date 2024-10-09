import UIkit from "uikit/src/js/api/index.js";
import boot from "uikit/src/js/api/boot.js";
import { each } from "uikit/src/js/util/index.js";

// Import Icons file
import Icons from "uikit/dist/js/uikit-icons.js";
// import Icons from "uikit/dist/js/uikit-icons-custom";

// Import UIkit components
import * as coreComponents from "./imports/core.js";
import * as components from "./imports/components.js";

// Register core components
each(coreComponents, (component, name) => UIkit.component(name, component));

// Core functionality
boot(UIkit);

// Set version
UIkit.version = VERSION;

// Register components
each(components, (component, name) => UIkit.component(name, component));

// Register icons
UIkit.use(Icons);

export default UIkit;
