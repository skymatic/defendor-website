$('#request-demo-form').submit(function(event) {
  event.preventDefault();

  var $form = $(this);
  var submitButton = $form.find('button[type=submit]');
  submitButton.prop('disabled', true);

  var url = $form.attr('action');
  $.post(url, {
    language: $('#request-demo-language').val(),
    name: $('#request-demo-name').val(),
    email: $('#request-demo-email').val(),
    company: $('#request-demo-company').val(),
    employees: $('#request-demo-employees').val(),
    usecase: $('#request-demo-usecase').val()
  })
  .done(function() {
    $form.addClass('d-none');
    $('#request-demo-success').removeClass('d-none');
    $('#request-demo-error').addClass('d-none');
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log('Failed to request demo.', textStatus, errorThrown);
    $('#request-demo-error').removeClass('d-none');
    submitButton.prop('disabled', false);
  });
});
