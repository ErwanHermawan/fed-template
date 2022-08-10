/* ------------------------------------------------------------------------------
@name: Method
@description: Method
--------------------------------------------------------------------------------- */

// --- Method
const Method = (() => {
  // --- handleSet
  const handleSet = () => {
    handleCheckHeight();
  }

  // --- handleCheckHeight
  const handleCheckHeight = () => {
    let _height = 0;
    handleResetHeight();
    $('.js-set-method .method__item').each((i, e) => {
      if (_height < $(e).find('.method__txt').height()) {
        _height = $(e).find('.method__txt').height();
      }
    });
    $('.method__txt').height(_height);
  }

  const handleResetHeight = () => {
    let _attr = $('.method__txt').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.method__txt').removeAttr('style');
    }
  }

  // --- init
  const init = () => {
    if ($('.js-set-method').length) {
      handleSet();
    }
  }

  // --- return
  return {
    init,
    checkHeight: handleSet
  }

})();

export default Method;
