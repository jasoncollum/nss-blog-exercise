// 1. Change textConent of first section
const welcomeText = document.querySelector('.article__header');
welcomeText.textContent = "Welcome to Jason Collum's blog";

// 2. Add .important to headers
const headers = document.querySelectorAll('.article__header');
headers.forEach(function(header) {
    header.classList.add('important');
})

//3a. Remove aside element
// document.querySelector('.dashed').remove();

//3b. Remove dashed class from aside
const asideEl = document.querySelector('.dashed');
asideEl.classList.remove('dashed');

//4. Add goldenrod class to footer
document.querySelector('.article__footer').classList.add('goldenrod');


