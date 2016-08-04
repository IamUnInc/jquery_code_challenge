

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
  // $('.container').children().last().data('id', numberOfSpys);
}

function deleteSpy(){
 $('.container').remove($(this));
}

function changeStatus(){
if($('container').children.css('background-color', 'yellow')){
  $('container').children.css('background-color', 'red');
}else{
  $('container').children.css('background-color', 'yellow');
}
}
