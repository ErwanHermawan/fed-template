/* ------------------------------------------------------------------------------
@name: Blog Banner
@description: Blog Banner
--------------------------------------------------------------------------------- */

const BlogBanner = (() => {

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector =  $('.js-blog-banner');
    const _itemLength = $('.js-blog-banner .blog-banner__item').length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        rewind: true,
        autoplay: true,
        dots: true,
        nav: false,
        loop: false,
        touchDrag: true,
        mouseDrag: false,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 7500,
      });
    } else {
      if(_selector.hasClass('owl-carousel')) {
        _selector.removeClass('owl-carousel');
      }
      _selector.addClass('blog-banner--single');
    }
  }

  // init
  const init = () => {
    if ($('.js-blog-banner').length) {
      handleRunCarousel();
    }
  }

  return {
    init
  }

})();

export default BlogBanner;
