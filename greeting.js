$(".greet-messages").append(function () {
    let hour = new Date().getHours();

    if (hour < 10) {
        $(this).html("Good Morning")
    } else if (hour < 18) {
        $(this).html("Good Afternoon")
    } else if (hour < 24) {
        $(this).html("Good Night")
    }
})

setInterval(function () {
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()

    $(".clock").html(hour + ":" + minute)
}, 1000);


// function time() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     // var s = today.getSeconds();
//     m = checkTime(m);
//     // s = checkTime(s);
//     document.getElementById('clock').innerHTML =
//       h + " : " + m;
//     var t = setTimeout(time, 500);
//   }

//   function checkTime(i) {
//     if (i < 10) {
//       i = "0" + i
//     }; // add zero in front of numbers < 10
//     return i;
//   }

// function greetingMsg() {
//     var greeting;
//     var hour = new Date().getHours();

//     if (hour < 10) {
//       greeting = "Good Morning"
//     } else if (hour < 18) {
//       greeting = "Good Afternoon"
//     } else if (hour < 24) {
//       greeting = "Good Night"
//     }
//     document.getElementById("greet-messages").innerHTML = greeting;
//   }