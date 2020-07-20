window.onload = new function () {

  setTimeout(() => {
   
    changeBackground();
    getItemsData();
    setTimeout(() => {
    
      msnryList();
    
      const start_btn = document.querySelector('.to-all');
      start_btn.click();
      _gridBtnEvt();
    }, 100)

  }, 100)
};
window.addEventListener('scroll', () => {
  parallaxScroll();
  headerFixed();
});

function msnryList() {
  const grid = document.querySelector('.grid');
  const msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    horizontalOrder: false,
    gutter: 10,
  });
  gnbBtnEvt();
 function gnbBtnEvt() {
    const gnb_btns = document.querySelectorAll('.gnb-btn');
    const grid_item = document.querySelectorAll('.grid-item');

    for (let i = 0; i < gnb_btns.length; i++) {
      gnb_btns[i].addEventListener('click', (e) => {
        for (let y = 0; y < gnb_btns.length; y++) {
          gnb_btns[y].classList.remove('on');
        }
        e.preventDefault();
        gnb_btns[i].classList.add('on');
        for (let z = 0; z < grid_item.length; z++) {
          if (grid_item[z].dataset.tag !== 'none') {
            if (grid_item[z].dataset.tag !== gnb_btns[i].dataset.tag) {
              grid_item[z].classList.add('gigante');
              if (gnb_btns[i].dataset.tag === 'all') {
                grid_item[z].classList.remove('gigante');
              }
            }
            else {
              grid_item[z].classList.remove('gigante');
            }
            setTimeout(() => {
              msnry.layout();
            }, 10)
          }
        }
      });
    }

  }


}


function changeBackground() {

  const background_container = document.querySelector('.background-container');
  const random_int = Math.floor(Math.random() * 10) % 3 + 1;
  background_container.innerHTML = `<img src="./src/media/Background_images/background_image_00${random_int}.jpg" alt="배경화면">`;

}
// 페럴렉스
function parallaxScroll() {

  const scrolled = document.documentElement.scrollTop;


  const background_container = document.querySelector('.background-container');
  const background_image_wrap = background_container.querySelector('img');
  background_image_wrap.style.top = `${0 - (scrolled * 0.2)}px`
}
function headerFixed() {
  const scrolled = document.documentElement.scrollTop;
  const header = document.querySelector('.header-container');
  if (scrolled > 150) {
    header.style.position = 'fixed'
    header.classList.remove('apsolute');
    header.classList.add('fixed');
  }
  else {
    header.style.position = 'absolute'
    header.classList.remove('fixed');
    header.classList.add('apsolute');
  }



}