$(document).ready(function () {
    $(".formgroup .input").blur(function () {
        if ($(this).val() != "") {
            $(this).siblings().addClass("active")
        } else {
            $(this).siblings().removeClass("active")
        }
    })
})