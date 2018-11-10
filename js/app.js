$(document).ready(function () {
  $('.keep-location-search').each(function() {
    $(this).prop('href', $(this).prop('href') + window.location.search);
  });
});
