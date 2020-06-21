// function theme() {
//     const event = document.getElementById('theme')
//     if (event.style.width == '100%') {
//       event.style.width = '0'
//       event.style.display = 'none'
//     } else {
//       event.style.width = '100%'
//       event.style.display = 'flex'
//     }
//   }

$(".theme-button").click(function () {
    $(".panel").slideToggle("fast")
})

$(".body").toggleClass(localStorage.toggled);

$(".dark-button").click(function () {
    if (localStorage.toggled != 'dark-mode') {
        $('.body').addClass('dark-mode', true);
        $('.body').removeClass('light-mode', true);
        localStorage.toggled = "dark-mode";
    }
})

$(".light-button").click(function () {
    if (localStorage.toggled != 'light-mode') {
        $('.body').addClass('light-mode', true);
        $('.body').removeClass('dark-mode', true);
        localStorage.toggled = "light-mode";
    }
})