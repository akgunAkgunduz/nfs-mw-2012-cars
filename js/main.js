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

  test.addEventListener('click', () => {
    const result = cars.filter(car => car.game == 'stock')
    carsTable.clear()
    carsTable.rows.add(result)
    carsTable.draw()
  })
})