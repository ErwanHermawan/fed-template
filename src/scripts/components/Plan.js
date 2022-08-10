/* ------------------------------------------------------------------------------
@name: Plan
@description: Plan
--------------------------------------------------------------------------------- */

// --- utilities
import { Validation } from 'utilities';

// Form Validation
const ElementSelector = [
  {
    id: 'method',
    validation: {
      required: true
    }
  },
  {
    id: 'note',
    validation: {
      required: true
    }
  }
];
const ElementEvents = ['input', 'blur'];

const Plan = (() => {
  // -- handle run validation
  const handleRunValidation = () => {
    Validation.config(ElementEvents, ElementSelector);
  };

  // -- handle click validation
  const handleClickValidation = () => {
    $('.js-form-plan button[type="submit"]').on('click', (e) => {
      $.each(ElementSelector, (i, v) => {
        $('#' + v.id).blur();
      });

      if ($('.error').length > 0) {
        e.preventDefault();
      }
    });
  };
  // -- handleShowInput
  const handleShowInput = () => {
    $('.dtp-btn-ok').on('click', (e) => {
      const _this = $(e.currentTarget);
      if ($('.fe__row').hasClass('fe__row--hide')) {
        $('.fe__row').removeClass('fe__row--hide').show();
      }
    });
  };

  // init
  const init = () => {
    if ($('.js-form-plan').length) {
      handleRunValidation();
      handleClickValidation();
      handleShowInput();
    }
  };

  return {
    init
  };
})();

export default Plan;
