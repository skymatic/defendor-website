$('div.highlight').each(function () {
  var btnHtml = '<div class="clipboard"><button type="button" class="btn btn-clipboard"><i class="fas fa-copy fa-fw"></i></button></div>';
  $(this).before(btnHtml);
  $('.btn-clipboard')
    .on('mouseleave', function () {
      $(this)
        .tooltip('hide')
        .tooltip('disable')
        .removeClass('btn-success')
        .addClass('btn-clipboard');
      $(this.children[0])
        .removeClass('fa-check')
        .addClass('fa-copy');
    })
})

var clipboard = new ClipboardJS('.btn-clipboard', {
  target: function (trigger) {
    return trigger.parentNode.nextElementSibling;
  }
})

clipboard.on('success', function (e) {
  $(e.trigger)
    .tooltip({ title: 'Copied!', placement: 'bottom' })
    .tooltip('enable')
    .tooltip('show')
    .removeClass('btn-clipboard')
    .addClass('btn-success');
  $(e.trigger.children[0])
    .removeClass('fa-copy')
    .addClass('fa-check');
  e.clearSelection();
})

clipboard.on('error', function (e) {
  var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-';
  var fallbackMsg = 'Press ' + modifierKey + 'C to copy';
  $(e.trigger)
    .tooltip({ title: fallbackMsg, placement: 'bottom' })
    .tooltip('enable')
    .tooltip('show');
})

anchors.add();
$('h2, h3, h4, h5, h6').wrapInner('<div></div>');
