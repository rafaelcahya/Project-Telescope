function search() {
  document.getElementById("form").submit();
}

function theme() {
  const event = document.getElementById('theme')
  if (event.style.width == '100%') {
    event.style.width = '0'
    event.style.display = 'none'
  } else {
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

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode')
  if (darkMode !== "enabled") {
    enableDarkMode();
  }
});

const lightModeToggle = document.querySelector('#lightModeToggle');

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  document.body.classList.add("lightmode");
  localStorage.setItem("darkMode", null)
};

lightModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode')
  if (darkMode == "enabled") {
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