import UIkit from './base/uikit';
import { loadFonts, loadImages } from './utils';
import pageLoader from './modules/page-loader';
import glitchImage from './modules/glitch-image';

// Global variables
global.UIkit = UIkit;

// Utils
loadFonts();
loadImages();

// Modules
pageLoader();
glitchImage();
