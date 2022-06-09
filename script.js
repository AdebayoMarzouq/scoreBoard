const allButtons = document.querySelectorAll('.btn')
const reset = document.querySelector('.reset')

for (let btn of allButtons) {
  btn.addEventListener('click', (e) => {
    const addVal = parseInt(e.target.value)
    const scoreNode = btn.parentNode.previousElementSibling
    const prevVal = parseInt(scoreNode.innerText)
    scoreNode.innerText = addVal + prevVal
    checkHigher();
  })
}

reset.addEventListener('click', () => {
  const scores = document.querySelectorAll('.count')
  scores.forEach(score => {
    score.classList.remove('active')
    score.innerText = '0'
  })
})

const checkHigher = () => {
  const getCounts = document.querySelectorAll('.count')
  if (getCounts[0].innerText > getCounts[1].innerText) {
    getCounts[0].classList.add('active')
    getCounts[1].classList.remove('active')
  } else if (getCounts[1].innerText > getCounts[0].innerText) {
    getCounts[1].classList.add('active')
    getCounts[0].classList.remove('active')
  } else {
    getCounts[0].classList.remove('active')
    getCounts[1].classList.remove('active')
  }
}

//reset scores
//store to localStorage