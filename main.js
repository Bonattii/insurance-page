window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnSroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(insurances)
  activateMenuAtCurrentSection(partners)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoudaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoudaries) {
    menuElement.classList.add('active')
  }
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
