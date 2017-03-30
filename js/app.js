$(document).ready(action)

function action() {
  $('.more-content').hide()
  $('.read-more').click(handler)
  function handler () {
    var buttontext = $(this).text()
    if (buttontext === "Read More") {
      $(this).text('Read Less')
      $(this).siblings('.more-content').show()

    }
     else {
       $(this).text('Read More')
       $(this).siblings('.more-content').hide()
     }

  }
}

$(document).ready(function() {

var list = ['Loris Karius', 'Dejan Lovren', 'James Milner', 'Nathaniel Clyne', 'Joel Matip', 'Jordan Henderson', 'Emre Can', 'Georginio Wijnaldum', 'Philippe Coutinho', 'Adam Lallana', 'Roberto Firmino']

list.forEach(function (item) {
          var option =
  $('<option>').attr('value',item).text(item)
          $('select').append(option);
})
  $('select').change(function() {
    console.log($('select').val())
  var player = $('select').val()
  if (player == 'Loris Karius') {
    $('img').attr('src',"images/Karius.png")
  }
    else if (player == 'Dejan Lovren') {
      $('img').attr('src',"images/Lovren.png")
    }
    else if (player == 'James Milner') {
      $('img').attr('src',"images/Milner.png")
    }
    else if (player == 'Nathaniel Clyne') {
      $('img').attr('src',"images/Clyne.png")
    }
    else if (player == 'Joel Matip') {
      $('img').attr('src',"images/Matip.png")
    }
    else if (player == 'Jordan Henderson') {
      $('img').attr('src',"images/Henderson.png")
    }
    else if (player == 'Emre Can') {
      $('img').attr('src',"images/Can.png")
    }
    else if (player == 'Georginio Wijnaldum') {
      $('img').attr('src',"images/Wijnaldum.png")
    }
    else if (player == 'Philippe Coutinho') {
      $('img').attr('src',"images/Coutinho.png")
    }
    else if (player == 'Adam Lallana') {
      $('img').attr('src',"images/Lallana.png")
    }
    else if (player == 'Roberto Firmino') {
      $('img').attr('src',"images/Firmino.png")
    }
  })
})
