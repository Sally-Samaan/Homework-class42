'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-3-the-logo-hijack

1. Find out how to select the element that contains the Google logo, and store 
   it in a variable.
2. Modify the `src` and `srcset` of the logo so that it's replaced by the 
   HackYourFuture logo instead.
------------------------------------------------------------------------------*/
function hijackGoogleLogo() {
  // TODO your code goes in here
  const img = document.querySelector('img[alt="Google"]');
  img.width = 272;
  img.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBr-FYR6fsOqgUcOSnddoy8riOonhbMZIPQ&usqp=CAU';
  img.srcset =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBr-FYR6fsOqgUcOSnddoy8riOonhbMZIPQ&usqp=CAU';

  // const button = document.getElementById('gbqfba');
  // button.innerHTML = 'Yahoooo!';

  // const logo = document.querySelector('img[alt="Google"]');
  // logo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  // logo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';

  // const logo = document.querySelector('.lnXdpd');
  // logo.src =
  //   'https://uploads-ssl.webflow.com/62745a1007e49e2461fb7ecd/62745a1007e49e335ffb8025_hyfcartoon.svg';
  // logo.srcset =
  //   'https://uploads-ssl.webflow.com/62745a1007e49e2461fb7ecd/62745a1007e49e335ffb8025_hyfcartoon.svg';

  // <img
  //   class="lnXdpd"
  //   alt="Google"
  //   height="92"
  //   src="/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
  //   srcset="/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, /images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x"
  //   width="272"
  //   data-atf="1"
  //   data-frt="0"
  // ></img>;

  // const logo = document.querySelector('.lnXdpd');
  //  logo.src = 'https://uploads-ssl.webflow.com/62745a1007e49e2461fb7ecd/62745a1007e49e335ffb8025_hyfcartoon.svg';
  //  logo.srcset = 'https://uploads-ssl.webflow.com/62745a1007e49e2461fb7ecd/62745a1007e49e335ffb8025_hyfcartoon.svg';
}

hijackGoogleLogo();
