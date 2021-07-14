export default class {
  constructor(id) {
    this.id = id;
    this.$body = document.querySelector(`body`);
    this.$wrap = document.querySelector(`[data-element-wrap=${id}]`);
    this.$open = document.querySelector(`[data-element-open=${id}]`);
    this.$close = document.querySelector(`[data-element-close=${id}]`);

    if (this.$wrap && this.$open && this.$close) {
      document.addEventListener('click', e => {
        const elementOpen = e.target.dataset.elementOpen
          ? e.target
          : e.target.closest('[data-element-open]');
        const elementClose = e.target.dataset.elementClose
          ? e.target
          : e.target.closest('[data-element-close]');
        const elementWrap = e.target.dataset.elementWrap
          ? e.target
          : e.target.closest('[data-element-wrap]');

        if (elementOpen || elementClose) {
          this.status() ? this.close() : this.open();
          return;
        }

        if (elementWrap) {
          return;
        }

        this.close();
      });
    }
  }

  open() {
    this.$body.classList.add('is-active');
    this.$wrap.classList.add('is-active');
    this.$open.classList.add('is-active');
  }

  close() {
    this.$body.classList.remove('is-active');
    this.$wrap.classList.remove('is-active');
    this.$open.classList.remove('is-active');
  }

  status() {
    return this.$wrap.classList.contains('is-active');
  }
}
