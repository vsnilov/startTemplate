export default function loadScriptPromise(src, cb = () => {}) {
  return new Promise(function(resolve, reject) {
    const s = document.createElement('script');
    let r = false;
    s.type = 'text/javascript';
    s.src = src;
    s.async = true;
    s.onerror = function(err) {
      reject(err, s);
    };
    // eslint-disable-next-line no-multi-assign
    s.onload = s.onreadystatechange = function() {
      if (!r && (!this.readyState || this.readyState === 'complete')) {
        r = true;
        cb();
        resolve();
      }
    };
    const t = document.getElementsByTagName('script')[0];
    t.parentElement.insertBefore(s, t);
  });
}
