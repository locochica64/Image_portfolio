//신작 도서
// const getItemsData = () => {
//   fetch('src/js/json/Common.json')
//     .then(res => {
//       return res.json();
//     })
//     .then(data => {
//       setItemsData(data);
//     })
//     .then(() => {
     
//     })
//     .catch(err => {
//       console.error(err)
//     })
// };
function getItemsData() {
  fetch('src/js/json/Common.json')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setItemsData(data);
    })
    .then(() => {
      // setTimeout(() => {
      //   msnryList();
      // }, 100)
      
    })
    .catch(err => {
      console.error(err)
    })
}