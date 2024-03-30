const mobileNav = () => {
  const headerBtn = document.querySelector('.header__barra');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  let mobileNavEstaAberto = false;

  headerBtn.addEventListener('click', () => {
    mobileNavEstaAberto = !mobileNavEstaAberto;
    if(mobileNavEstaAberto) {
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    } else {
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';      
    }
  });

  mobileLinks.forEach(mobileLink => {
    mobileLink.addEventListener('click', () => {
      mobileNavEstaAberto = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    })
  });
}

export default mobileNav;