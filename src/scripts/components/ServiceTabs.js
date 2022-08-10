/* ------------------------------------------------------------------------------
@name: ServiceTabs
@description: ServiceTabs
--------------------------------------------------------------------------------- */

const ServiceTabs = (() => {
  // handleClickHorizontalTabs
  const handleClickHorizontalTabs = () => {
    const _item = '.services-tabs__item';
    const _pane = '.services-tabs__pane';
    const _txt = $('.services-tabs__item--active').text();

    $(_item).on('click', (e) => {
      const _this = $(e.currentTarget);
      const _target = _this.attr('data-target');

      if (!_this.hasClass('services-tabs__item--active')) {
        _this.siblings().removeClass('services-tabs__item--active');
        _this
          .parents('.js-tabs-horizontal')
          .find(_pane)
          .removeClass('services-tabs__pane--active');
        _this.parents('.js-tabs-horizontal').removeClass('inv-tpl--active');

        _this.addClass('services-tabs__item--active');
        $('[data-pane="' + _target + '"]').addClass(
          'services-tabs__pane--active'
        );
      }
    });
  };

  // handleClickVerticalTabs
  const handleClickVerticalTabs = () => {
    const _item = '.services-tabs__ver__item';
    const _pane = '.services-tabs__ver__pane';
    const _txt = $('.services-tabs__pane--active')
      .find('.services-tabs__ver__item--active')
      .text();
    $('.services-tabs__ver__item--active')
      .parents('.js-tabs-vertical')
      .find('.services-tabs__ver__desc')
      .text(_txt);

    $(_item).on('click', (e) => {
      const _this = $(e.currentTarget);
      const _target = _this.attr('data-target');
      const _text = _this.text();

      if (!_this.hasClass('services-tabs__ver__item--active')) {
        _this.siblings().removeClass('services-tabs__ver__item--active');
        _this
          .parents('.js-tabs-vertical')
          .find(_pane)
          .removeClass('services-tabs__ver__pane--active');
        _this.parents('.js-tabs-vertical').removeClass('inv-tpl--active');

        _this.addClass('services-tabs__ver__item--active');
        $('[data-pane="' + _target + '"]').addClass(
          'services-tabs__ver__pane--active'
        );
        _this
          .parents('.js-tabs-vertical')
          .find('.services-tabs__ver__desc')
          .text(_text);
      }
    });
  };

  // handleClickSelect
  const handleClickSelect = () => {
    $('.js-tabs-vertical-select').on('click', (e) => {
      const _this = $(e.currentTarget);
      if (
        _this
          .parents('.js-tabs-vertical')
          .hasClass('services-tabs__ver--active')
      ) {
        _this
          .parents('.js-tabs-vertical')
          .removeClass('services-tabs__ver--active');
      } else {
        _this
          .parents('.js-tabs-vertical')
          .addClass('services-tabs__ver--active');
      }
    });

    $('body').on('click', (e) => {
      if ($('.js-tabs-vertical').hasClass('services-tabs__ver--active')) {
        $('.js-tabs-vertical').removeClass('services-tabs__ver--active');
      }
    });

    $('body').on('click', '.js-tabs-vertical-select', (e) => {
      e.stopPropagation();
    });
  };

  const handleKeyupSelect = () => {
    $('body').on('keyup', (e) => {
      if (
        e.which == 27 &&
        $('.js-tabs-vertical').hasClass('services-tabs__ver--active')
      ) {
        $('.js-tabs-vertical').removeClass('services-tabs__ver--active');
      }
      if (
        e.which == 27 &&
        $('.js-tabs-horizontal').hasClass('services-tabs--active')
      ) {
        $('.js-tabs-horizontal').removeClass('services-tabs--active');
      }
    });
  };

  // init
  const init = () => {
    handleClickHorizontalTabs();
    handleClickVerticalTabs();
    handleClickSelect();
    handleKeyupSelect();
  };

  return {
    init
  };
})();

export default ServiceTabs;
