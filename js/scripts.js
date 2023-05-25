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

const body = document.querySelector('body');
const toggle = document.querySelector('#toggle');

toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
});