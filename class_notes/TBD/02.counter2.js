const total = document.getElementById('total')
const add = document.getElementById('add')
const sub = document.getElementById('sub')

add.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML + 1
})

sub.addEventListener('click', function () {
  total.innerHTML = +total.innerHTML - 1
})
