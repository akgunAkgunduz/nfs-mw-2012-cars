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
    game: ['stock', 'speed', 'terminal', 'hero', 'movie', 'multi'],
    class: ['Exotic', 'Sports', 'Race', 'Muscle', 'Grand Tourer', 'Everyday', 'SUV']
  }

  $('.form-check-input').on('click', function(e) {
    if (e.target.checked) {
      query[e.target.dataset.key].push(e.target.value)
    } else {
      const index = query[e.target.dataset.key].indexOf(e.target.value)
      query[e.target.dataset.key].splice(index, 1)
    }
    // console.log(JSON.stringify(query, null, '\t'))
    
    if (query['game'].length > 0 && query['class'].length > 0) {
      filter.disabled = false
    } else {
      filter.disabled = true
    }    
  })

  $('#filter').on('click', function() {
    filterByCriteria(query, cars, carsTable)
  })

  $('.check-all').on('click', function() {
    const checkboxes = $(this).closest('.card').find('input[type="checkbox"]')
    checkboxes.each(i => {
      if(checkboxes[i].checked == false) {
        checkboxes[i].click()
      }
    })
  })

  $('.clear-all').on('click', function() {
    const checkboxes = $(this).closest('.card').find('input[type="checkbox"]')
    checkboxes.each(i => {
      if(checkboxes[i].checked == true) {
        checkboxes[i].click()
      }
    })
  })  
})

function filterByCriteria(criteria, items, table) {
  const criteriaKeys = Object.keys(criteria)  
  let conditionsMatched = 0  
  let result = []
  
  items.forEach(item => {
    conditionsMatched = 0

    criteriaKeys.forEach(criteriaKey => {
      if (criteria[criteriaKey].indexOf(item[criteriaKey]) > -1) {
        conditionsMatched++

        if (conditionsMatched === criteriaKeys.length) {
          result.push(item)
          conditionsMatched = 0
        }
      } else {
        conditionsMatched = 0
      }
    })
  })

  table.clear()
  table.rows.add(result)
  table.draw()  
}