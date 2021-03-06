/* globals jQuery */

(function($) {
  var btnKey = '';
  $('.open-filters').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('openAllFilters');
    $('.all-filters').toggleClass('open');
  });

  $('.tab-btn').click(function(e) {
    e.preventDefault();
    btnKey = $(this).attr('data-filter');
    $('.tab-content').removeClass('openTab');
    $('.tab-btn').removeClass('openTabBtn');
    $(this).addClass('openTabBtn');
    $('.tab-content[data-key=' + btnKey + ']').addClass('openTab');
  });
})(jQuery);
