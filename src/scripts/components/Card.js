/* ------------------------------------------------------------------------------
@name: Card
@description: Card
--------------------------------------------------------------------------------- */

// --- Card
const Card = (() => {
  // --- handleSet
  const handleSet = () => {
    handleCheckHeight();
  };

  // --- handleCheckHeight
  const handleCheckHeight = () => {
    let _height = 0;
    handleResetHeight();
    $('.js-set-card .card').each((i, e) => {
      if (_height < $(e).find('.card__txt').height()) {
        _height = $(e).find('.card__txt').height();
      }
    });
    $('.card__txt').height(_height);
  };

  const handleResetHeight = () => {
    let _attr = $('.card__txt').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.card__txt').removeAttr('style');
    }
  };

  // --- init
  const init = () => {
    if ($('.js-set-card').length) {
      handleSet();
    }
  };

  // --- return
  return {
    init,
    checkHeight: handleSet
  };
})();

export default Card;
