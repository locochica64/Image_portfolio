

const setItemsData = (data) => {
  const gird_list = document.querySelector('.grid');
  let item = '';
  for (let i = 0; i < data.length; i++) {
    item = item + `
     <li key="${data[i].id}" class="grid-item" data-tag="${data[i].tag}" data-title = "${data[i].title}" data-desc = "${data[i].description}" data-imageSrc = "${data[i].image_src}">
        <a href = "javascript:void(0);" class = "grid-item-img">
          <img src="./src/media/Item_images/${data[i].image_src}.jpg" alt="${data[i].title}">
        </a>
      </li>
    `
  }
  gird_list.innerHTML = `
    <li class="grid-item grid-criterion" data-tag="none"></li>
    ${item}
  `

}