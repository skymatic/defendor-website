$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function () {
  $('.keep-location-search').each(function() {
    $(this).prop('href', $(this).prop('href') + window.location.search);
  });

  var $installationId = $('#installation-id');
  if ($installationId.length) {
    var installationId = getUrlParameter('installation_id');
    if (installationId) {
      $installationId.val(installationId);
      $installationId.prop('readonly', true);
    }
  }
});

$('#trial-form').submit(function(event) {
  event.preventDefault();

  var $form = $(this);
  var $submitButton = $form.find('button[type=submit]');
  $submitButton.prop('disabled', true);
  $('#error-message').addClass('d-none');

  var url = $form.attr('action');
  $.post(url, {
    installation_id: $('#installation-id').val(),
    subject_email: $('#email').val(),
    expiration_notification: $('#email-consent').is(':checked') ? 1 : 0
  })
  .done(function(data) {
    $('#license-key').val(data.jwt);
    $('#form-container').addClass('d-none');
    $('#success-container').removeClass('d-none');

    var successUrl = getUrlParameter('success_url');
    if (successUrl) {
      var $redirectForm = $('#success-redirect-form');
      $redirectForm.prop('action', successUrl);
      $redirectForm.submit();
    }
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.error('Failed to request trial license.', textStatus, errorThrown);
    $('#error-message').removeClass('d-none');
    $submitButton.prop('disabled', false);
  });
});

function getUrlParameter(param) {
  var pageUrl = decodeURIComponent(window.location.search.substring(1));
  var urlVariables = pageUrl.split('&');
  var paramName;
  var i;
  for (i = 0; i < urlVariables.length; i++) {
    paramName = urlVariables[i].split('=');
    if (paramName[0] === param) {
      return paramName[1] === undefined ? true : paramName[1];
    }
  }
  return null;
};
