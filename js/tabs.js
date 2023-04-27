const tabsHendlerbtn = document.querySelectorAll('[data-tabs-handler]')
const tabsConsoleElems = document.querySelectorAll('[data-tabs-field]')
const title = document.querySelectorAll('.design__title')
console.dir(title);

for( let btn of tabsHendlerbtn){
  btn.addEventListener('click', ()=>{
    tabsHendlerbtn.forEach(item =>item.classList.remove('design-list__item_active'))
    btn.classList.add('design-list__item_active')
    tabsConsoleElems.forEach(content =>{
      if(content.dataset.tabsField === btn.dataset.tabsHandler){
       content.classList.remove('hidden')
      }else{
        content.classList.add('hidden')
      }
    })
    title.forEach(title =>{
      if (title.classList.contains('hidden')){
      title.classList.remove('hidden')
      console.log(121212);
      console.log(title.classList);
     }
   else{
        title.classList.add('hidden')
    
     }
    })
  })
  
}