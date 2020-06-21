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