const btns = document.querySelectorAll('.feature__link');
const btns2 = document.querySelectorAll('.feature__link');
const btnClass = document.querySelector('.feature__link_active')
const ulElement = document.querySelectorAll('.feature-sub')




// btns.forEach((item,index)=>{
//   item.addEventListener('click', ()=>{
//     console.log(123);
//  btns.forEach(itemBtn => {
//    itemBtn.classList.remove('feature__link_active')
//   });
//   item.classList.add("feature__link_active");
//     ulElement.forEach(listItem => {
//       listItem.classList.add('hidden')
//     })
//     ulElement[index].classList.remove('hidden')
//   })

// })


btns2.forEach((item, index) => {
  item.addEventListener('click', () => {
    console.log(1233);
    if (item.className === 'feature__link feature__link_active') {
      item.classList.remove('feature__link_active')
      ulElement[index].classList.add('hidden')
    }
    else if (item.className === 'feature__link') {
      item.classList.add('feature__link_active')
      ulElement[index].classList.remove('hidden')
      console.log(btns);
    }
  })
})
