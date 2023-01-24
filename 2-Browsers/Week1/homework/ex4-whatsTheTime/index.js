'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function
  const p = document.createElement('p');
  document.body.appendChild('p');
  p.textContent = localTime;
  setInterval(function newTime() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    timeOnSite.textContent = `${('0' + hours).slice(-2)}:${(
      '0' + minutes
    ).slice(-2)}:${('0' + seconds).slice(-2)}`;
    console.log(time);
  }, 1000);
}

// const d = new Date();
// const localTime = d.toLocaleTimeString('en-US', { hour12: false });
// document.getElementByTag('p').textContent = d.toLocaleTimeString();
// const current_time =
//   addCurrentTime.getHours() +
//   ':' +
//   addCurrentTime.getMinutes() +
//   ':' +
//   addCurrentTime.getSeconds();
// document.createElement('p')= current_time;

// setInterval();

// TODO execute `addCurrentTime` when the browser has completed loading the page
// window.setInterval(addCurrentTime, 1000);
