const button = document.querySelector('.switch')
const lamp = document.querySelector('.lamp')

button.addEventListener('click', function() {
    button.classList.add('play')
    lamp.classList.toggle('on')
})