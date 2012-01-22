// As usual
$(document).ready(password_strength_init);

// When the Ajax-event is complete, i.e. when the content is pulled in:
$(document).bind("end.pjax", password_strength_init);

function password_strength_init() {

    //Demo code
    $('#user_password').pschecker({ onPasswordValidate: null, onPasswordMatch: matchPassword });

    var submitbutton = $('#submit_button');
    submitbutton.attr("disabled", "disabled");

    //this function will be called when password is weak or medium
	function weakPassword(event) {
        if (event) {
            submitbutton.addClass('unlocked').removeClass('locked');
            submitbutton.removeAttr("disabled", "disabled");
        }
        else {
            submitbutton.attr("disabled", "disabled");
            submitbutton.addClass('locked').removeClass('unlocked');
        }
    }

    //this function will be called when both passwords match
    function matchPassword(isMatched) {
        if (isMatched) {
            submitbutton.addClass('unlocked').removeClass('locked');
            submitbutton.removeAttr("disabled", "disabled");
        }
        else {
            submitbutton.attr("disabled", "disabled");
            submitbutton.addClass('locked').removeClass('unlocked');
        }
    }
}