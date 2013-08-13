$(document).ready(function () {
  // on click

  $('.tabs a').on('click', function() {
      // style the button
      $('.tabs li').removeClass('active');
      $(this).parent('li').addClass('active');

      // show the right tab content
      $('.tab').hide();
      var tab_selector = $(this).attr('href');
      $(tab_selector).show();
  });


});
