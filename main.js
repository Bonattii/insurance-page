window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnSroll()
}

function showNavOnSroll() {
  let navElement = document.getElementById('navigation')
  if (scrollY > 0) {
    navElement.classList.add('scroll')
  } else {
    navElement.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
