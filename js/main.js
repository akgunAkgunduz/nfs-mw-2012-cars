$(document).ready( function () {
  let carsTable = $('#carsTable').DataTable({
    data: cars,
    columns: [
      { data: 'id' },
      { data: 'class' },
      { data: 'gameLong' },
      { data: 'acceleration' },
      { data: 'topSpeed' },
      { data: 'control' },
      { data: 'weight' },
      { data: 'offRoad' },
      { data: 'toughness' },
    ]
  })

  let query = {
    game: [],
    class: []
  }

  test.addEventListener('click', () => {
    const result = cars.filter(car => car.game == 'stock')
    carsTable.clear()
    carsTable.rows.add(result)
    carsTable.draw()
  })

  $('.form-check-input').on('click', function(e) {
    if (e.target.checked) {
      query[e.target.dataset.key].push(e.target.value)
    } else {
      const index = query[e.target.dataset.key].indexOf(e.target.value)
      query[e.target.dataset.key].splice(index, 1)
    }
    console.log(JSON.stringify(query, null, '\t'))
    
  })
})