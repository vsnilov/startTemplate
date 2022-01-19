import { Fancybox } from '@fancyapps/ui';

const successPopup = `
    <div class="c-modal">
        <div class="f-form__success">
            <div class="h4 text-center mb-30 color-black">Сообщение отправлено</div>
            <div class="text">Мы скоро с Вами свяжемся</div>
        </div>
    </div>
`;

const successSend = () => {
  Fancybox.close();
  Fancybox.show([
    {
      src: successPopup,
      type: 'html',
    },
  ]);
};

export default successSend;
