const footer_menu = document.querySelector('.footer__menu'),
      footer_menu_info = footer_menu.querySelector('.footer__menu__info-col'),
      footer_menu_equipment = footer_menu.querySelector('.footer__menu__equipment-col'),
      footer_menu_offer = footer_menu.querySelector('.footer__menu__offer-col'),
      footer_menu_contants = footer_menu.querySelector('.footer__menu__contants-col');

footer_menu_info.addEventListener('click', (e) => {
    
    const target=e.target,
          footer_menu_info_ul =footer_menu_info.querySelector('ul');
    
    if ((target.parentNode == footer_menu_info || target == footer_menu_info) && target != footer_menu_info_ul) {
        footer_menu_info.classList.toggle('footer-active');
    }

});

footer_menu_equipment.addEventListener('click', (e) => {
    
    const target=e.target,
          footer_menu_equipment_ul =footer_menu_equipment.querySelector('ul');

    if ((target.parentNode == footer_menu_equipment || target == footer_menu_equipment) && target != footer_menu_equipment_ul) {
        footer_menu_equipment.classList.toggle('footer-active');
    }

});

footer_menu_offer.addEventListener('click', (e) => {

    const target=e.target,
          footer_menu_offer_ul = footer_menu_offer.querySelector('ul');

    if ((target.parentNode ==  footer_menu_offer || target ==  footer_menu_offer) && target !=  footer_menu_offer_ul) {
        footer_menu_offer.classList.toggle('footer-active');
    }

});

footer_menu_contants.addEventListener('click', (e) => {
    const target=e.target;

    if (target.parentNode ==  footer_menu_contants || target ==  footer_menu_contants) {
       footer_menu_contants.classList.toggle('footer-active');
    }

});

