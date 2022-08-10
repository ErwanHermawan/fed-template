/* ------------------------------------------------------------------------------
@name: Services
@description: Services
--------------------------------------------------------------------------------- */

const Services = (() => {
  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector = $('.js-services');
    const _itemLength = $('.js-services .services__card').length;
    const _itemRun = 4;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if window scren > small screen
    if ($(window).width() > 767.98) {
      // --- check if itemLength > itemRun
      if (_itemLength > _itemRun) {
        // --- init carousel
        _selector.addClass('owl-carousel').owlCarousel({
          touchDrag: true,
          mouseDrag: false,
          nav: true,
          loop: true,
          dots: false,
          navText: [
            "<i class='mi-chevron-left'></i>",
            "<i class='mi-chevron-right'></i>"
          ],
          smartSpeed: 500,
          autoWidth: true
        });
      } else {
        if (_selector.hasClass('owl-carousel')) {
          _selector.removeClass('owl-carousel');
        }
      }
    }
  };

  // init
  const init = () => {
    if ($('.js-services').length) {
      handleRunCarousel();
    }
  };

  return {
    init,
    destroyCarousel: handleRunCarousel
  };
})();

export default Services;
