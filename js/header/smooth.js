let getScroll = document.querySelectorAll('[data-scroll]');
getScroll.forEach(function (ev) {
  ev.addEventListener('click', function (item) {
    item.preventDefault();
    const getHref = this.getAttribute('href').slice(1);
    let getClass = document.getElementsByClassName(getHref);
    getClass[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});