$(document).ready(function () {
  $('#contact_form').bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      name: {
        validators: {
          stringLength: {
            min: 2,
          },
          notEmpty: {
            message: 'Come on, you have a name, don\'t you?'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'Please enter your email address'
          },
          emailAddress: {
            message: 'Please enter a valid email address'
          }
        }
      },
      subject: {
        validators: {
          stringLength: {
            min: 2,
          },
          notEmpty: {
            message: 'Subject field can\'t be left blank!'
          }
        }
      },
      message: {
        validators: {
          stringLength: {
            min: 10,
            max: 1000,
            message: 'Please enter at least 10 characters'
          },
          notEmpty: {
            message: 'Message field can\'t be left blank!'
          }
        }
      }
    }
  }).on('success.form.bv', function (e) {
    e.preventDefault();
    var $form = $(e.target);
    $.post($form.attr('action'), $form.serialize(), function (result) {
      $("#message").html(result.message).addClass('show');
      $("#contact_form").find("input[type=text], input[type=email], textarea").val("");
    }, 'json');
  });
});
