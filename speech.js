const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'id', 'en';

const desc = $(".speech-trigger")
const content = $(".speech-text-trigger")
const btn = $(".speech-button")

recognition.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.value = transcript;

    desc.html("Search")
    setTimeout(function () {
        document.input.submit() //<form name="input">
    }, 1000)
}

btn.bind('click', () => {
    btn.css("color", "red")
    desc.html("What can i help?")
    recognition.start();
})

btn.bind('dblclick', () => {
    btn.css("color", "#2d3748")
    desc.html("")
    recognition.stop();
})

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.lang = 'id', 'en';

// // recognition.onstart = function () {
// //     console.log('voice is activated')
// // }

// const desc = document.getElementById('desc')
// const content = document.getElementById('search-form');
// const btn = document.getElementsByClassName('talk')[0];

// recognition.onresult = function (event) {
//     const current = event.resultIndex;
//     const transcript = event.results[current][0].transcript;
//     content.value = transcript;

//     desc.innerHTML = "Search"
//     setTimeout(function () {
//         document.input.submit() //<form name="input">
//     }, 1000)
// }

// btn.addEventListener('click', () => {
//     btn.style.color = "red";
//     desc.innerHTML = "What can i help?"
//     recognition.start();
// })

// btn.addEventListener('dblclick', () => {
//     btn.style.color = "#2d3748";
//     desc.innerHTML = ""
//     recognition.stop();
// })