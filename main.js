window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnSroll()
  showBackToTopButtonOnScroll()
}

function showNavOnSroll() {
  let navElement = document.getElementById('navigation')
  if (scrollY > 0) {
    navElement.classList.add('scroll')
  } else {
    navElement.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  let backToTopElement = document.getElementById('backToTopButton')
  if (scrollY > 400) {
    backToTopElement.classList.add('show')
  } else {
    backToTopElement.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
