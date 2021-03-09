'use stritch';

document.addEventListener('DOMContentLoaded', () => {   

/*Pop-up_telephone***/

const header__pop_up_telephone = document.querySelector('.header__pop-up-telephone'),
      telephone = document.querySelector('.contacts__telephone'),
      header_close_btn = document.querySelector('#close_btn'),
      pop_up__wrapper = document.querySelector('.pop-up__wrapper');

function toggle_Tel_popUp() {
    header__pop_up_telephone.classList.toggle('header__pop-up__hide');
    header__pop_up_telephone.classList.toggle('header__pop-up__active');
    pop_up__wrapper.classList.toggle('active');
    pop_up__wrapper.classList.toggle('hide');
}

      telephone.addEventListener('click', function() {
        toggle_Tel_popUp()
      });

      header_close_btn.addEventListener('click', function() {
        toggle_Tel_popUp()
      });


      document.addEventListener('click', function(e) {
        let t=e.target;
        console.log(t);
        if (t == pop_up__wrapper) {
            toggle_Tel_popUp();
        }
      });      
 
});