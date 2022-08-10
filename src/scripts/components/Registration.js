/* ------------------------------------------------------------------------------
@name: Registration
@description: Registration
--------------------------------------------------------------------------------- */

// --- utilities
import { Validation } from 'utilities';

// Form Validation
const ElementSelector = [
  {
    id: 'name',
    validation: {
      required: true
    }
  },
  {
    id: 'placeBirth',
    validation: {
      required: true
    }
  },
  {
    id: 'parentName',
    validation: {
      required: true
    }
  },
  {
    id: 'relationship',
    validation: {
      required: true
    }
  },
  {
    id: 'address',
    validation: {
      required: true
    }
  },
  {
    id: 'provence',
    validation: {
      required: true
    }
  },
  {
    id: 'districs',
    validation: {
      required: true
    }
  },
  {
    id: 'phone',
    validation: {
      required: true,
      phone: true
    }
  },
  {
    id: 'email',
    validation: {
      required: true,
      email: true
    }
  }
];
const ElementEvents = ['input', 'blur'];

const Registration = (() => {
  // -- handle run validation
  const handleRunValidation = () => {
    Validation.config(ElementEvents, ElementSelector);
  };

  // -- handle click validation
  const handleClickValidation = () => {
    $('.js-form-registration button[type="submit"]').on('click', (e) => {
      $.each(ElementSelector, (i, v) => {
        $('#' + v.id).blur();
      });

      if ($('.error').length > 0) {
        e.preventDefault();
      }
    });
  };

  // init
  const init = () => {
    if ($('.js-form-registration').length) {
      handleRunValidation();
      handleClickValidation();
    }
  };

  return {
    init
  };
})();

export default Registration;
