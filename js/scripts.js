$(document).ready(function () {
    $("#design").click(function () {
        $("#design-text").slideToggle("slow");
    });
    $("#design-text").click(function () {
        $("#design").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#development").click(function () {
        $("#development-text").slideToggle("slow");
    });
});

$(document).ready(function () {
    $("#product").click(function () {
        $("#product-text").slideToggle("slow");
    });
});

$(document).ready(function () {
    $('#overlay',).hide();
    $('#img1').animate({
        opacity: 1

    });

    $('#img1').hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $('#overlay').fadeIn();

    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 400)
        $('#overlay').fadeOut();
    });

});

$(document).ready(function () {
    $('#overlay1',).hide();
    $('#img2').animate({
        opacity: 1

    });

    $('#img2').hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $('#overlay1').fadeIn();

    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 400)
        $('#overlay1').fadeOut();
    });

});
$(document).ready(function () {
    $('#overlay2',).hide();
    $('#img3').animate({
        opacity: 1

    });

    $('#img3').hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $('#overlay2').fadeIn();

    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 400)
        $('#overlay2').fadeOut();
    });

});
$(document).ready(function () {
    $('#overlay3',).hide();
    $('#img4').animate({
        opacity: 1

    });

    $('#img4').hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $('#overlay3').fadeIn();

    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 400)
        $('#overlay3').fadeOut();
    });

});
$(document).ready(function () {
    $('#overlay4',).hide();
    $('#img5').animate({
        opacity: 1

    });

    $('#img5').hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $('#overlay4').fadeIn();

    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 400)
        $('#overlay4').fadeOut();
    });

});
$(document).ready(function () {
    $('#overlay5',).hide();
    $('#img6').animate({
        opacity: 1

    });

    $('#img6').hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $('#overlay5').fadeIn();

    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 400)
        $('#overlay5').fadeOut();
    });

});
$(document).ready(function () {
    $('#overlay6',).hide();
    $('#img7').animate({
        opacity: 1

    });

    $('#img7').hover(function () {
        $(this).stop().animate({
            opacity: .2
        }, 200);
        $('#overlay6').fadeIn();

    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 400)
        $('#overlay6').fadeOut();
    });

});
$(document).ready(function () {
    $('#overlay7',).hide();
    $('#img8').animate({
        opacity: 1

    });

    $('#img8').hover(function () {
        $(this).stop().animate({
            opacity: .4
        }, 200);
        $('#overlay7').fadeIn();

    }, function () {
        $(this).stop().animate({
            opacity: 1
        }, 400)
        $('#overlay7').fadeOut();
    });

});
$(document).ready(function () {
    $("#details").submit(function (event) {
        var first_1 = $("input:first").val();
        var second_2 = $("input#mail").val();
        if (first_1 && second_2 != "") {
            $(".message").text("Thank you " + first_1 + " for reaching out to us." + " " + "Your message has been received.");
            $(".message").removeClass("error");
            $(".message").addClass("success");
        } else {
            $(".message").text("Error!!! Please enter all the details correctly");
            $(".message").addClass("error");
        }
        event.preventDefault();

    });

});
