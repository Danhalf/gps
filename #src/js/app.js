@@include('files/regular.js', {});
@@include('files/script.js', {});
@@include('files/functions.js', {});
@@include('files/forms.js', {});
@@include('files/scroll.js', {});
@@include('libs/swiper.min.js', {});
@@include('files/dynamic_adapt.js', {});
const overlay = document.querySelector('.overlay'),
  main = document.querySelector('body');

const navSlide = () => {
  const burger = document.querySelector('.header__burger'),
    navMenu = document.querySelector('.header__navigation'),
    navlinks = document.querySelectorAll('.header__navigation a');

  burger.addEventListener('click', () => {
    if (document.querySelector('.categories__items.active')) return false;
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    main.classList.toggle('active');
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });

    burger.classList.toggle('active');
  });
};

const categoriesSlide = () => {
  const categoriesBtn = document.querySelector('.categories__title'),
    categoriesItems = document.querySelector('.categories__items');
  overlay.addEventListener('click', (e) => {
    overlay.classList.toggle('active');
    main.classList.toggle('active');
    categoriesItems.classList.toggle('active');
  });

  categoriesBtn.addEventListener('click', (evt) => {
    if (
      document.querySelector('.header__burger.active') ||
      window.innerWidth >= 768
    )
      return false;
    overlay.classList.toggle('active');
    main.classList.toggle('active');
    categoriesItems.classList.toggle('active');
  });
};

const monitor = setInterval(function () {
  const elem = document.activeElement;
  if (elem && elem.tagName == 'IFRAME') {
    clearInterval(monitor);
    location.reload();
  }
}, 100);

if (window.innerWidth <= 768) {
  document.querySelector('#news-iframe').src =
    'https://p.dw.com/p/1GdIG/#searchResult';
}

if (window.location.href.includes('products')) {
  categoriesSlide();
}

navSlide();
