$(function() {
    var results = $('.results');
    $(document).ready(function() {
        $.ajax({
          url: 'http://localhost:3000/employee/',
          type: 'get',
          dataType: 'jsonp',
          success: function(data) {
            for (var i=0;i<data.length;i++) {
              $('.a').html('<a href="http://localhost:3000/employee/' + data[i].id + '">' + data[i].lastName + ' ' + data[i].firstName + '</a>');
            }
          },
          error: function(xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
          }
        });
  });
