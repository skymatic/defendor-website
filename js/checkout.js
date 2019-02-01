Paddle.Setup({ vendor: 39223 });

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

$('#checkout-form').submit(function(event) {
  event.preventDefault();

  Paddle.Checkout.open({
    product: 551022,
    email: $('#email').val(),
    marketingConsent: false,
    passthrough: JSON.stringify({
      installation_id: $('#installation-id').val(),
      expiration_notification: $('#email-consent').is(':checked') ? 1 : 0
    }),
    successCallback: function(data) {
      $('#form-container').addClass('d-none');
      $('#success-container').removeClass('d-none');

      Paddle.Order.details(data.checkout.id, function(data) {
        if (data.lockers[0].license_code) {
          $('#license-key').val(data.lockers[0].license_code);
          $('#success-container').addClass('d-none');
          $('#redirect-container').removeClass('d-none');

          const urlParams = new URLSearchParams(window.location.search);
          const successUrl = urlParams.get('success_url');
          if (successUrl) {
            const $redirectForm = $('#redirect-form');
            $redirectForm.prop('action', successUrl);
            $redirectForm.submit();
          }
        }
      });
    }
  });
});
