cars.forEach(car => {
  let newTr = document.createElement('tr')
  let keys = Object.keys(car)
  keys.forEach((property, i) => {
    if ((i !== 1) && (i !== 2) && (i !== 4)) {
      let newTd = document.createElement('td')
      newTd.textContent = car[property]
      newTr.appendChild(newTd)
    }
  })
  carTable.querySelector('tbody').appendChild(newTr)
})