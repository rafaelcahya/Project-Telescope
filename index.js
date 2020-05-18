function greetingMsg() {
    var greeting;
    var hour = new Date().getHours();

    if (hour < 10){
      greeting = "Good Morning"
    }else if(hour < 18){
      greeting = "Good Afternoon"
    }else if(hour < 24){
      greeting = "Good Night"
    }
    document.getElementById("greet-messages").innerHTML = greeting;
}

function time() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  // var s = today.getSeconds();
  m = checkTime(m);
  // s = checkTime(s);
  document.getElementById('clock').innerHTML =
  h + " : " + m;
  var t = setTimeout(time, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function search(){
  document.getElementById("form").submit();
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'id', 'en';

recognition.onstart = function () {
  console.log('voice is activated')
}

const desc = document.getElementById('desc')
const content = document.querySelector('#search-form');
const btn = document.querySelector('.talk');

recognition.onresult = function(event){
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.value = transcript;

  desc.innerHTML="Search"
  setTimeout(function(){
    document.input.submit() //<form name="input">
  }, 1000)
}

btn.addEventListener('click', () => {
  btn.style.color = "red";
  desc.innerHTML = "What can i help?"
  recognition.start();
})

btn.addEventListener('dblclick', () => {
  btn.style.color = "#2d3748";
  desc.innerHTML=""
  recognition.stop();
})

function theme(){
  const event = document.getElementById('theme')
  if(event.style.width == '100%'){
      event.style.width = '0'
      event.style.display = 'none'
  }else{
      event.style.width = '100%'
      event.style.display = 'flex'
  }
}

let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#darkModeToggle');

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  document.getElementById('search-form').classList.add("border");
  localStorage.setItem("darkMode", "enabled")
};

if(darkMode === 'enabled'){
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode')
  if(darkMode !== "enabled"){
    enableDarkMode();
  }
});

const lightModeToggle = document.querySelector('#lightModeToggle');

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  document.getElementById('search-form').classList.remove("border");
  document.body.classList.add("lightmode");
  localStorage.setItem("darkMode", null)
};

lightModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode')
  if(darkMode == "enabled"){
    disableDarkMode();
  }
});

// if(window.matchMedia("(max-width: 600px)").matches){
//   document.getElementById('search-form').blur();
// }

// function mobileView(){
//   if(window.matchMedia("(max-width: 600px)").matches){
//     document.getElementById("non-mobile-view").remove();
//     document.getElementById('mobile').style.display = 'block'
//   }
// }
  