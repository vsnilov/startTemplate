import IMask from 'imask';

function plus7(elem, mask) {
  elem.addEventListener(
    'focus',
    function() {
      mask.updateValue();
      if (!mask.masked.rawInputValue) {
        mask.typedValue = '+7 (';
      }
    },
    true,
  );
  elem.addEventListener(
    'blur',
    function() {
      if (!mask.masked.rawInputValue) {
        mask.value = '';
      }
    },
    true,
  );
}

export default () => {
  document.querySelectorAll('input[type="tel"]').forEach(element => {
    const mask = IMask(element, {
      mask: '+7 (000) 000-00-00',
    });
    plus7(element, mask);
  });
};
