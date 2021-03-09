'use stritch';

document.addEventListener('DOMContentLoaded', () => {   

/*Pop-up_telephone***/

const header__pop_up_telephone = document.querySelector('.header__pop-up-telephone'),
      telephone = document.querySelector('.contacts__telephone'),
      header_close_btn = document.querySelector('#close_btn'),
      pop_up__wrapper = document.querySelector('.pop-up__wrapper');

      telephone.addEventListener('click', function() {
        header__pop_up_telephone.classList.toggle('header__pop-up__hide');
        header__pop_up_telephone.classList.toggle('header__pop-up__active');
        pop_up__wrapper.classList.toggle('active');
        pop_up__wrapper.classList.toggle('hide');
      });

      header_close_btn.addEventListener('click', function() {
        header__pop_up_telephone.classList.toggle('header__pop-up__hide');
        header__pop_up_telephone.classList.toggle('header__pop-up__active');
        pop_up__wrapper.classList.toggle('active');
        pop_up__wrapper.classList.toggle('hide');
      });

      document.addEventListener('click', function(e) {
        let t=e.target;
        console.log(t);
      });

});