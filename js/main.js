
for (car in cars) {
  let newTr = document.createElement('tr')
  let newTd = document.createElement('td')
  
  newTd.textContent = cars[car].make + ' ' + cars[car].model
  
  newTr.appendChild(newTd)
  carTable.querySelector('tbody').appendChild(newTr)
}