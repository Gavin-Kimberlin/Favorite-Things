$(document).ready(function () {
  console.log('jquery is working');

  $('.btn').click(function (event) {
    event.preventDefault();

    var fav1 = $('#fav1').val();
    var fav2 = $('#fav2').val();
    var fav3 = $('#fav3').val();
    console.log('favorite thing 1 is: ' + fav1);
    console.log('favorite thing 2 is: ' + fav2);
    console.log('favorite thing 3 is: ' + fav3);
    var favThings = [fav1, fav2, fav3];
    console.log('array: ' + favThings);

    $('#list').append().html('<li>' + favThings[0] + '</li><li>' + favThings[1] + '</li><li>' + favThings[2] + '</li>');
  });
});
