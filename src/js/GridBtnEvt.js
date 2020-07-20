function _gridBtnEvt() {
  const btns = document.querySelectorAll('.grid-item');

  for(let i=0; i<btns.length; i++){
    btns[i].addEventListener('click',(e)=>{
      e.preventDefault();
      setItemsInfo(btns[i]);
    });
  }
};
function setItemsInfo(data) {
  const view_wrap = document.querySelector('.detail-view-wrap');
  view_wrap.classList.add('on');
  view_wrap.innerHTML = `
    <div class= "detail-view">
      <div class = "detail-image-wrap" style = "background-image: url(./src/media/Item_images/${data.dataset.imagesrc}.jpg"> 
        <div class="detail-image-black"></div>
        <div class="detail-image" style = "background-image: url(./src/media/Item_images/${data.dataset.imagesrc}.jpg">
      </div>
      <div class = "detail-text-wrap"> 
        <h1 class="detail-text-title">${data.dataset.title}</h1>
        <p class= "detail-text-desc">${data.dataset.desc}</p>
      </div>

    </div>
  `
  removeItemsInfo();

}
function removeItemsInfo() {
  const view_wrap = document.querySelector('.detail-view-wrap');
  view_wrap.addEventListener('click', (e) => {
    if (e.target.classList.contains('on')) {
      view_wrap.classList.remove('on')
    }

  });
}
