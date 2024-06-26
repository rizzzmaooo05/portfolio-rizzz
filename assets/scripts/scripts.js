const menuToogle = document.getElementsByClassName('menu-toogle')[0]

let isMenuDisabled = true

function handleClick() {
  console.log(menuToogle)
  if(isMenuDisabled) {
    menuToogle.setAttribute('style', 'display: flex;')
    isMenuDisabled = !isMenuDisabled
  }
  else {
    menuToogle.setAttribute('style', 'display: none;')
    isMenuDisabled = !isMenuDisabled
  }
}

// const container = document.querySelector('.main-container')
// console.log(container)
// console.log(container.getBoundingClientRect())

const header = document.querySelector('header')
const container = document.querySelector('.home-section-container')

window.addEventListener('scroll', () => {
  const position = window.scrollY
  const containerHeight = container.clientHeight

  if(position >= (containerHeight - 200)) {
    header.setAttribute('style', 'position: fixed; ')
  }
  else {
    header.setAttribute('style', 'position: absolute;')
  }
})
