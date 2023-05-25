let contrastToggle = false
let darkBtn = document.querySelector('.darkBtn')

function toggleContrast() {
  darkBtn.classList.toggle('dark-theme')
  // darkBtn.classList = 'fas fa-toggle-on'

  darkBtn.removeAttribute('disabled')
  contrastToggle = !contrastToggle
  if (contrastToggle) {
    document.body.classList += ' dark-theme'
  } else {
    document.body.classList.remove('dark-theme')
  }
}
