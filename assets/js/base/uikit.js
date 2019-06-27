import boot from 'uikit/src/js/api/boot';
import Countdown from 'uikit/src/js/components/countdown';
import Filter from 'uikit/src/js/components/filter';
import Lightbox from 'uikit/src/js/components/lightbox';
import LightboxPanel from 'uikit/src/js/components/lightbox-panel';
import Notification from 'uikit/src/js/components/notification';
import Parallax from 'uikit/src/js/components/parallax';
import Slider from 'uikit/src/js/components/slider';
import SliderParallax from 'uikit/src/js/components/slider-parallax';
import Slideshow from 'uikit/src/js/components/slideshow';
import Sortable from 'uikit/src/js/components/sortable';
import Tooltip from 'uikit/src/js/components/tooltip';
import Upload from 'uikit/src/js/components/upload';
import Icons from 'uikit/dist/js/uikit-icons';
// import Icons from 'uikit/dist/js/uikit-icons-custom';
import UIkit from './uikit-core';

// Components
UIkit.component('countdown', Countdown);
UIkit.component('filter', Filter);
UIkit.component('lightbox', Lightbox);
UIkit.component('lightboxPanel', LightboxPanel);
UIkit.component('notification', Notification);
UIkit.component('parallax', Parallax);
UIkit.component('slider', Slider);
UIkit.component('sliderParallax', SliderParallax);
UIkit.component('slideshow', Slideshow);
UIkit.component('slideshowParallax', SliderParallax);
UIkit.component('sortable', Sortable);
UIkit.component('tooltip', Tooltip);
UIkit.component('upload', Upload);

boot(UIkit);

// Icons
UIkit.use(Icons);

export default UIkit;
