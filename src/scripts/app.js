// --- utilities
import { Scrolllable, BrowserCheck } from 'utilities';

// --- components
import {
  Header,
  WindowScroll,
  Example,
  WindowResize,
  MainBanner,
  Services,
  Method,
  Features,
  Testimony,
  Card,
  WidgetArticle,
  BlogBanner,
  Footer,
  FormElement,
  ServiceTabs,
  Registration,
  Plan
} from 'components';

// --- App
const App = (() => {
  // --- run transition
  const runTransition = () => {
    $('body').removeClass('hold-transition');
  };

  // --- show site content
  const showSiteContent = () => {
    $('.js-main-site').removeClass('main-site--hide');
    // --- disable scroll
    Scrolllable.enable();
  };

  // --- ready
  const ready = () => {
    (($) => {
      // --- disable scroll
      Scrolllable.disable();

      // --- Global
      runTransition();
      showSiteContent();
      BrowserCheck.init();

      // --- Project
      Header.init();
      WindowScroll.init();
      Example.init();
      WindowResize.init();
      MainBanner.init();
      Services.init();
      Method.init();
      Features.init();
      Testimony.init();
      Card.init();
      BlogBanner.init();
      WidgetArticle.init();
      Footer.init();
      FormElement.init();
      ServiceTabs.init();
      Registration.init();
      Plan.init();
    })(jQuery);
  };

  // --- load
  const load = () => {
    (($) => {
      $(window).on('load', () => {});
    })(jQuery);
  };

  // --- init
  const init = () => {
    load();
    ready();
  };

  // --- return
  return {
    init
  };
})();

// ---  run main js
App.init();
