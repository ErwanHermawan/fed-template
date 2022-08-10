/* ------------------------------------------------------------------------------
@name: Widget Article
@description: Widget Article
--------------------------------------------------------------------------------- */

const WidgetArticle = (() => {
  // handleRunCarousel
  const handleRunCarousel = () => {
    const _width = 575.86;
    const _selector = $('.js-slide-article');
    const _itemLength = $('.js-slide-article .card').length;
    const _itemRun = 3;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }
    // --- check if window > _witdh
    if ($(window).width() > _width) {
      // --- check if itemLength > itemRun
      if (_itemLength > _itemRun) {
        // --- init carousel
        _selector.addClass('owl-carousel').owlCarousel({
          items: 3,
          dots: true,
          nav: true,
          navText: [
            "<i class='mi-chevron-left'></i>",
            "<i class='mi-chevron-right'></i>"
          ],
          mouseDrag: false,
          touchDrag: true,
          dotsSpeed: 350,
          navSpeed: 350,
          dragEndSpeed: 350,
          smartSpeed: 750,
          responsive: {
            576: {
              items: 2
            },
            992: {
              items: 3
            }
          }
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
    if ($('.js-slide-article').length) {
      handleRunCarousel();
    }
  };

  return {
    init,
    destroyCarousel: handleRunCarousel
  };
})();

export default WidgetArticle;
