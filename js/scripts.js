$(document).ready(function () {
    $("#design").click(function () {
        $("#design-text").slideToggle("slow");
    });
    $("#design-text").click(function () {
        $("#design").slideToggle("slow");
    });

    $("#development").click(function () {
        $("#development-text").slideToggle("slow");
    });

    $("#product").click(function () {
        $("#product-text").slideToggle("slow");
    });

    $(".coolStuffs").each(function () {
        $(this).find("p").hide()
        $(this).animate({ opacity: 1 });
        $(this).hover(function () {
            $(this).stop().animate({
                opacity: .4
            }, 200);
            $(this).find("p").fadeIn();

        }, function () {
            $(this).stop().animate({
                opacity: 1
            }, 400)
            $(this).find("p").fadeOut();
        });
    });
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