'use stritch';

document.addEventListener('DOMContentLoaded', () => {   

/*Pop-up_email***/
const header__pop_up_email =  document.querySelector('.header__pop-up-email'),
      email = document.querySelector('.contacts__email'); 

      function toggle_email_popUp() {
        if (document.documentElement.clientWidth > 1600) {
                header__pop_up_email.classList.toggle('header__pop-up__hide');
                header__pop_up_email.classList.toggle('header__pop-up__active');
        }
    }

      email.onmouseover = function() {
        toggle_email_popUp();
      };

      email.onmouseout = function() {
        header__pop_up_email.onmouseout = function() {
            toggle_email_popUp();
        };
      };

/*Pop-up_telephone***/

const header__pop_up_telephone = document.querySelector('.header__pop-up-telephone'),
      telephone = document.querySelector('.contacts__telephone'),
      header_close_btn = document.querySelector('#close_btn'),
      pop_up__wrapper = document.querySelector('.pop-up__wrapper');

function toggle_Tel_popUp() {
    if (document.documentElement.clientWidth > 1280) {
        header__pop_up_telephone.classList.toggle('header__pop-up__hide');
        header__pop_up_telephone.classList.toggle('header__pop-up__active');
        pop_up__wrapper.classList.toggle('active');
        pop_up__wrapper.classList.toggle('hide');
    }
}

window.onresize = function() {
    if (document.documentElement.clientWidth < 1280) {
        header__pop_up_telephone.classList.add('header__pop-up__hide');
        header__pop_up_telephone.classList.remove('header__pop-up__active');
        pop_up__wrapper.classList.remove('active');
        pop_up__wrapper.classList.add('hide');
    }   
};
      telephone.addEventListener('click', function() {
        toggle_Tel_popUp();
      });

      header_close_btn.addEventListener('click', function() {
        toggle_Tel_popUp();
      });


      document.addEventListener('click', function(e) {
        let t=e.target;
  
        if (t == pop_up__wrapper) {
            toggle_Tel_popUp();
        }
      });      
});

new Swiper('.center-slider', { 
    //Стрелки
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      //Булеты, навигация, текущее положение
      pagination: {
        el:'.swiper-pagination',
        clickable: true
      }
    });
  

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

