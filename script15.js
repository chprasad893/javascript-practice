$(function(){
  // By Id
  // $('#first').addClass('highlight');

  // By elemnt /tag
  // $('p').addClass('highlight');

  //By Class
  // $('.chosen').addClass('highlight');

   // combinations
  // $('#first,.chosen').addClass('highlight');

   //Contains
  //  $('li:Contains("Three")').addClass('highlight');

   //next ,previous
// $('li:Contains("Three")').prev().addClass('highlight');

// siblings
// $('li:Contains("Three")').parent().addClass('highlight');

// $('li:nth-child(1)').addClass('highlight');

// attributes
// $('p[name="mySecondPara"]').addClass('highlight');


// $('p[name!="mySecondPara"]').addClass('highlight');

// $('p').not('[name]').addClass('highlight');

// $(':header').addClass('highlight');

// $('p:empty').text('You seemded lonly so give you some text');

$('li:odd').addClass('highlight');


});
