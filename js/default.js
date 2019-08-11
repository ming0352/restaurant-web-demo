$(document).ready(function() {
    $('.option').hover(function(event) {
        /* Stuff to do when the mouse enters the element */

        $(this).toggleClass('active');

        /* Stuff to do when the mouse leaves the element */
    });
    $('.burger').on('click', function(event) {
        event.preventDefault();
        $('body').toggleClass('show');
    });
    $('#email').on('change', '.selector', function(event) {
        event.preventDefault();
        /* Act on the event */
    });
    $(document).on('val', '#pas', function(event) {
        event.preventDefault();
        /* Act on the event */
    });
    $("#pas-ch,#pas").change(function(event) {
        var word1 = $("#pas").val();
        var word2 = $("#pas-ch").val();


        if (word1 != word2) {
            $('.match-icon').removeClass('active');
            alert("兩次密碼不一樣");
        } else {
            $('.match-icon').addClass('active');
        }

    });
    $("body").on("change", "#email", function() {

        $Emailchecking = IsEmail($("#email").val());


        if ($Emailchecking == false) {

            alert("請填寫正確的E-MAIL格式");

            $("#email").blur(); //離開焦點

        }

    })

    function IsEmail(email) {

        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {

            return false;

        } else {

            return true;

        }

    }


});