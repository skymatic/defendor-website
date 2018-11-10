$.ajaxSetup({
  xhrFields: {
    withCredentials: true
  }
});

$('#newsletter-form').submit(function(event) {
  event.preventDefault();

  const $form = $(this);
  const $submitButton = $form.find('button[type=submit]');
  $submitButton.prop('disabled', true);
  $('#error-message').addClass('d-none');

  $.get('https://api.cryptomator.org/mailtrain/subscribe.php')
  .done(function(data) {
    $.post('https://api.cryptomator.org/mailtrain/subscribe.php', {
      listid: 'Hkrk3qn37',
      email: $('#email').val()
    })
    .done(function(data) {
      $form.addClass('d-none');
      $('#success-message').removeClass('d-none');
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.error('Failed to subscribe to newsletter.', textStatus, errorThrown);
      $('#error-message').removeClass('d-none');
      $submitButton.prop('disabled', false);
    });
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.error('Failed to subscribe to newsletter.', textStatus, errorThrown);
    $('#error-message').removeClass('d-none');
    $submitButton.prop('disabled', false);
  });
});
