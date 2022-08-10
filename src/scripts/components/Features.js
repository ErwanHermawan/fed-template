/* ------------------------------------------------------------------------------
@name: Features
@description: Features
--------------------------------------------------------------------------------- */

const Features = (() => {
  let _itemHeight = '';
  let _listHeight = 0;
  let _maxLength = 5;

  // - handleCheckHeightItem
  const handleCheckHeightItem = () => {
    _itemHeight = $('.features__item').outerHeight();
    _listHeight = (_itemHeight + 24) * _maxLength - 10;
    // if ($(window).width() < 767.98) {
    //   _listHeight = (_itemHeight + 16) * _maxLength - 16 + 10;
    // }
  };

  // - handleSetFeatures
  const handleSetFeatures = () => {
    handleCheckHeightItem();
    if (!$('.features__list').hasClass('.features__list--set')) {
      if ($('.features__item').length > _maxLength) {
        if (!$('.features__btn').length) {
          $('.js-list-features').append(
            '<div class="features__btn"><button class="arrow-btn js-see-all" type="button">Lihat semua<i class="mi-arrow-right"></i></button></div>'
          );
        }
        $('.features__list').css('height', _listHeight);
      } else {
        $('.js-list-features').find('.features__btn').remove();
      }
    }
  };

  // - handleClickSeeAll
  const handleClickSeeAll = () => {
    $('body').on('click', '.js-see-all', (e) => {
      handleCheckHeightItem();
      const _this = $(e.currentTarget);
      const _btnEl = 'Lihat Semua <i class="mi-arrow-right"></i>';
      const _btnElReverse = '<i class="mi-arrow-left"></i> Sembunyikan';
      const _parents = _this
        .parents('.js-list-features')
        .find('.features__list');

      let _heightItem = 0;
      let _totalHeight = 0;
      let _totalMargin = 0;
      if ($('.features__list').hasClass('features__list--set')) {
        _parents.removeClass('features__list--set').css('height', _listHeight);
        _this.removeClass('arrow-btn--reverse').html(_btnEl);
      } else {
        $('.features__item').each((i, e) => {
          const _item = $(e);
          _heightItem += _item.outerHeight();
          _totalMargin = $('.features__item').length * 24;

          _totalHeight = _heightItem + _totalMargin;
        });
        _parents.addClass('features__list--set').css('height', _totalHeight);
        _this.addClass('arrow-btn--reverse').html(_btnElReverse);
      }
    });
  };

  // --- handleSet
  const handleSet = () => {
    handleCheckHeight();
  };

  // --- handleCheckHeight
  const handleCheckHeight = () => {
    let _height = 0;
    handleResetHeight();
    $('.js-list-features .features__item').each((i, e) => {
      if (_height < $(e).height()) {
        _height = $(e).height();
      }
    });
    $('.features__item').height(_height);
  };

  const handleResetHeight = () => {
    let _attr = $('.features__item').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.features__item').removeAttr('style');
    }
  };

  // - init
  const init = () => {
    handleSetFeatures();
    handleClickSeeAll();
    handleSet();
  };

  return {
    init,
    checkHeight: handleSet,
    checkHeightFeatures: handleCheckHeightItem,
    setHeightFeatures: handleSetFeatures
  };
})();

export default Features;
