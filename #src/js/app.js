@@include('files/regular.js', {});
@@include('files/script.js', {});
@@include('files/functions.js', {});
@@include('files/forms.js', {});
@@include('files/scroll.js', {});
@@include('libs/swiper.min.js', {});
@@include('files/dynamic_adapt.js', {});

const navSlide = () => {
  const burger = document.querySelector('.header__burger');
  const navMenu = document.querySelector('.header__navigation');
  const navlinks = document.querySelectorAll('.header__navigation a');
  const page = document.querySelector('.page');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    page.classList.toggle('hide_page');
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
navSlide();
