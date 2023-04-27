const humburgerBtn = document.querySelector('.humburger-menu');
const humburgerMenu = document.querySelector('.menu');
const menuList = document.querySelectorAll('.menu-list__item')

menuList.forEach(item => {
item.addEventListener('click', () => {
  item.classList.add('close')

 if(item.classList.contains('close')){
   humburgerMenu.classList.toggle('menu-active')
   humburgerBtn.classList.toggle('humburger-menu-active')
 }
  })
})

const menu = ()=>{
  humburgerMenu.classList.toggle('menu-active')
  humburgerBtn.classList.toggle('humburger-menu-active')
}


humburgerBtn.addEventListener('click', () => {
  menu()
})


