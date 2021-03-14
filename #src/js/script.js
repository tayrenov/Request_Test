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

@@include('center-slider.js')