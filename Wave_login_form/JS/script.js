const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('') //spliting everything into an array
    .map(
      (letter, idx) => `
  <span style='transition-delay:${idx * 50}ms'>${letter}</span>
 `
    ) //create a letter of an array with span around it
    .join('') //returning it as an string
})
