const urlParams = new URLSearchParams(window.location.search);

const $installationId = $('#installation-id');
if ($installationId.length) {
  const installationId = urlParams.get('installation_id');
  if (installationId) {
    $installationId.val(installationId);
    $installationId.prop('readonly', true);
  }
}

const $licenseId = $('#license-id');
if ($licenseId.length) {
  const licenseId = urlParams.get('license_id');
  if (licenseId) {
    $licenseId.val(licenseId);
    $licenseId.prop('readonly', true);
  }
}

const $upgradeTrialForm = $('#upgrade-trial-form');
if ($upgradeTrialForm.length && $installationId.length && $licenseId.length) {
  const $submitButton = $upgradeTrialForm.find('button[type=submit]');
  $submitButton.prop('disabled', true);
  const $email = $('#email');
  $email.prop('readonly', true);
  $.get('https://api.cryptomator.org/server/license-info.php', {
    installation_id: $installationId.val(),
    license_id: $licenseId.val()
  })
  .done(function(data) {
    $email.val(data.claims.sub);
    $email.prop('readonly', false);
    $submitButton.prop('disabled', false);
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.error('Failed to get license info.', textStatus, errorThrown);
    $email.prop('readonly', false);
    $submitButton.prop('disabled', false);
  });
}

$('#trial-form').submit(function(event) {
  event.preventDefault();

  const $form = $(this);
  const $submitButton = $form.find('button[type=submit]');
  $submitButton.prop('disabled', true);
  $('#error-message').addClass('d-none');

  $.post('https://api.cryptomator.org/server/license-create.php', {
    installation_id: $('#installation-id').val(),
    subject_email: $('#email').val(),
    expiration_notification: $('#email-consent').is(':checked') ? 1 : 0
  })
  .done(function(data) {
    $('#license-key').val(data.jwt);
    $('#form-container').addClass('d-none');
    $('#redirect-container').removeClass('d-none');

    const urlParams = new URLSearchParams(window.location.search);
    const successUrl = urlParams.get('success_url');
    if (successUrl) {
      const $redirectForm = $('#redirect-form');
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

$('#upgrade-trial-form').submit(function(event) {
  event.preventDefault();

  const $form = $(this);
  const $submitButton = $form.find('button[type=submit]');
  $submitButton.prop('disabled', true);
  $('#error-message').addClass('d-none');

  $.post('https://api.cryptomator.org/server/license-upgrade.php', {
    installation_id: $('#installation-id').val(),
    license_id: $('#license-id').val(),
    subject_email: $('#email').val(),
    expiration_notification: $('#email-consent').is(':checked') ? 1 : 0
  })
  .done(function(data) {
    $('#license-key').val(data.jwt);
    $('#form-container').addClass('d-none');
    $('#redirect-container').removeClass('d-none');

    const urlParams = new URLSearchParams(window.location.search);
    const successUrl = urlParams.get('success_url');
    if (successUrl) {
      const $redirectForm = $('#redirect-form');
      $redirectForm.prop('action', successUrl);
      $redirectForm.submit();
    }
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.error('Failed to upgrade trial license.', textStatus, errorThrown);
    $('#error-message').removeClass('d-none');
    $submitButton.prop('disabled', false);
  });
});
