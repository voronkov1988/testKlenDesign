'use strict'

const tabs = document.querySelectorAll('.tabs span')

tabs.forEach(item => {
   item.addEventListener('click', (e) => {
      tabs.forEach(a => {
         a.classList.remove('active')
      })
      e.target.classList.add('active')
   })
})
