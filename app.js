

$(document).ready(function() {
createSpyButton();
$('.newButton').on('click', '.newSpy', createSpy);
$('.container').on('click', '.delete', deleteSpy);
$('.container').on('click', '.change', changeStatus);
});

var numberOfSpys = 0;
console.log($('.container'));

function createSpyButton() {
    $('.newButton').append('<button class= "newSpy">New Spy</button>');
}


function createSpy(){
  numberOfSpys++;
  $('.container').append("<div class ='spy' style='background-color: yellow'>" + numberOfSpys + "<button class ='change'>Change</button><button class ='delete'>Delete</button></div>");
   $('.container').children().last().data('id', 'yellow');
}

function deleteSpy(){
 $(this).parent().remove();
}

function changeStatus(){
  if(($(this).parent().data('id'))=='yellow'){
    $(this).parent().css('background-color', 'red');
    $(this).parent().data('id', 'red');
  }else{
  $(this).parent().css('background-color', 'yellow');
  $(this).parent().data('id', 'yellow');
  }



// if($(this).parent().css('background-color', 'yellow')){
//   $(this).parent().css('background-color', 'red');
// }else{
//   $(this).parent().css('background-color', 'yellow');
// }
}
