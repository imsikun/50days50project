const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

//to make the focus for writing in the textarea
textarea.focus()

textarea.addEventListener('keyup', e => {
  createTags(e.target.value)
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''
    }, 10)
    randomSelect()
  }
})

function createTags (input) {
  const tags = input
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())
  tagsEl.innerHTML = ''
  tags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect () {
  const times = 30
  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)
    setTimeout(() => {
      unhightlightTag(randomTag)
    }, 100)
  }, 100)
}

function pickRandomTag () {
  document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag (tag) {
  tags.classList.add('highlight')
}
function unhightlightTag (tag) {
  tags.classList.remove('highlight')
}
