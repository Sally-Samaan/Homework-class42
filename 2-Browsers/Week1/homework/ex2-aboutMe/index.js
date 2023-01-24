'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

function main() {
  const nickname = document.getElementById('nickname');
  nickname.textContent = 'sal';
  const favFood = document.getElementById('fav-food');
  favFood.textContent = 'Makloubi';
  const homeTown = document.getElementById('hometown');
  homeTown.textContent = 'Damascus';
  const item = document.querySelectorAll('li');
  item.forEach((i) => i.classList.add('list-item'));
  console.log(item);
}

window.addEventListener('load', main);
