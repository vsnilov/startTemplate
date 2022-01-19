import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.i18n';

const selector = '[data-mask="phone"]';

function cleveInit($input) {
  const cleave = new Cleave($input, {
    phone: true,
    prefix: '+',
    noImmediatePrefix: true,
    phoneRegionCode: 'RU',
  });

  $input.addEventListener(
    'blur',
    function() {
      if (cleave.getRawValue() === '+') {
        cleave.setRawValue('');
      }
    },
    true,
  );
}

// доп для VUE
document.addEventListener('click', e => {
  const $input = e.target.closest(selector);
  if ($input) {
    cleveInit($input);
    // хак для работы prefix
    $input.blur();
    $input.focus();
  }
});
