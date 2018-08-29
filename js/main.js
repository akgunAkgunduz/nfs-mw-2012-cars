$(document).ready( function () {
  $('#carsTable').DataTable({
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
})