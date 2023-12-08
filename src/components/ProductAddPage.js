// /* Variables */
// :root {
//   --color1: #306D85;
//   --color2: #D93A54;
// }

// /* General styles */
// body {
//   background-color: var(--color1);
// }

// *,
// *:before,
// *:after {
//   box-sizing: border-box;
// }

// /* Sea */
// .sea {
//   margin: 40px auto 0 auto;
//   overflow: hidden;
// }

// /* Bubble */
// .bubble {
//   position: absolute;
//   width: 7px;
//   height: 7px;
//   border-radius: 50%;
//   background-color: lighten(var(--color1), 25%);
//   opacity: 0.9;
//   animation: bubble1-h-movement 1s ease-in infinite, bubble1-v-movement 300ms ease-in-out infinite alternate, bubble-scale-movement 300ms ease-in-out infinite alternate;
// }

// .bubble::after {
//   position: absolute;
//   content: "";
//   width: 7px;
//   height: 7px;
//   border-radius: 50%;
//   background-color: lighten(var(--color1), 25%);
//   opacity: 0.9;
//   top: -20px;
//   left: 100px;
//   width: 9px;
//   height: 9px;
// }

// /* Circle Wrapper */
// .circle-wrapper {
//   position: relative;
//   background: linear-gradient(darken(var(--color1), 3%), darken(var(--color1), 12%));
//   width: 300px;
//   height: 300px;
//   margin: 10px auto 0 auto;
//   overflow: hidden;
//   z-index: 0;
//   border-radius: 50%;
//   padding: 0 50px 0 50px;
//   border: 6px solid lighten(var(--color1), 10%);
// }

// /* Rest of the code follows similarly translating SCSS to CSS */


// /* Submarine Wrapper */
// .submarine-wrapper {
//   height: 300px;
//   width: 300px;
//   padding: 30px 50px 30px 150px;
//   margin: 0 auto 0 auto;
//   animation: diving 3s ease-in-out infinite, diving-rotate 3s ease-in-out infinite;
// }

// .submarine-wrapper .submarine-body {
//   width: 150px;
//   height: 80px;
//   position: absolute;
//   margin-top: 50px;
//   left: 25px;
//   background-color: var(--color2);
//   border-radius: 40px;
//   background: linear-gradient(var(--color2), darken(var(--color2), 10%));
// }

// .submarine-wrapper .submarine-body .light {
//   position: absolute;
//   width: 0;
//   height: 0;
//   border-style: solid;
//   border-width: 0 40px 150px 40px;
//   border-color: transparent transparent lighten(var(--color1), 5%) transparent;
//   transform: rotate(-50deg);
//   top: 40px;
//   left: 99%;
// }

// /* ... continue the rest of the translation for .window, .engine, .helix, .hat, .periscope, .leds-wrapper, and other nested elements as needed */
// .submarine-wrapper .submarine-body .window {
//   width: 37px;
//   height: 37px;
//   position: absolute;
//   margin-top: 23px;
//   right: 18px;
//   background: linear-gradient(darken(var(--color1), 13%), darken(var(--color1), 18%));
//   border-radius: 50%;
//   border: 3px solid var(--color2);
// }

// .submarine-wrapper .submarine-body .window:after {
//   content: "";
//   position: absolute;
//   margin-top: 3px;
//   margin-left: 3px;
//   width: 25px;
//   height: 25px;
//   border-radius: 50%;
//   background-color: transparent;
//   opacity: 0.8;
//   border-top: 3px solid white;
//   transform: rotate(-45deg);
// }

// .submarine-wrapper .submarine-body .engine {
//   width: 30px;
//   height: 30px;
//   position: absolute;
//   margin-top: 32px;
//   left: 53px;
//   background-color: darken(var(--color2), 10%);
//   border-radius: 50%;
//   border: 5px solid var(--color2);
// }

// .submarine-wrapper .submarine-body .engine:after,
// .submarine-wrapper .submarine-body .engine:before {
//   position: absolute;
//   content: "";
//   border-radius: 2px;
//   background-color: white;
//   animation: spin 900ms linear infinite;
//   opacity: 0.8;
// }

// .submarine-wrapper .submarine-body .engine:after {
//   top: 8px;
//   width: 20px;
//   height: 4px;
// }

// .submarine-wrapper .submarine-body .engine:before {
//   left: 8px;
//   width: 4px;
//   height: 20px;
// }

// .submarine-wrapper .helix {
//   width: 30px;
//   height: 70px;
//   position: absolute;
//   margin-top: 55px;
//   left: 0;
//   background-color: var(--color2);
//   border-radius: 7px;
//   background: linear-gradient(var(--color2), darken(var(--color2), 10%));
// }

// .submarine-wrapper .helix:after {
//   content: "";
//   position: absolute;
//   margin-top: 5px;
//   margin-left: 7px;
//   width: 17px;
//   height: 60px;
//   border-radius: 3px;
//   background-color: transparent;
//   opacity: 0.8;
//   background: linear-gradient(to bottom, var(--color2), var(--color2) 50%, lighten(var(--color2), 15%) 50%, lighten(var(--color2), 15%));
//   background-size: 100% 20px;
//   animation: helix-movement 110ms linear infinite;
// }

// .submarine-wrapper .hat {
//   width: 65px;
//   height: 25px;
//   position: absolute;
//   margin-top: 26px;
//   left: 70px;
//   background-color: var(--color2);
//   border-radius: 10px 10px 0 0;
//   background: linear-gradient(var(--color2), darken(var(--color2), 3%));
// }

// /* ... continue translating the rest of the code for .periscope, .leds-wrapper, .leds, and their properties and animations */

// /* Keyframes */
// @keyframes spin {
//   100% {
//     transform: rotate(360deg);
//   }
// }

// @keyframes helix-movement {
//   100% {
//     background: linear-gradient(to bottom, lighten(var(--color2), 15%) 50%, lighten(var(--color2), 15%), var(--color2), var(--color2) 50%);
//     background-size: 100% 20px;
//   }
// }

// /* Animation keyframes for diving and bubble movements */
// /* ... Add remaining keyframes for bubble1-h-movement, bubble2-h-movement, bubble1-v-movement, bubble2-v-movement, bubble-scale-movement, light-movement */
// /* ... Previous CSS code remains unchanged ... */

// /* Animation keyframes for diving and bubble movements */

// @keyframes bubble1-h-movement {
//   0% {
//     margin-left: 80%;
//   }
//   100% {
//     margin-left: -100%;
//   }
// }

// @keyframes bubble2-h-movement {
//   0% {
//     margin-left: 65%;
//   }
//   100% {
//     margin-left: -5%;
//   }
// }

// @keyframes bubble1-v-movement {
//   0% {
//     margin-top: 115px;
//   }
//   100% {
//     margin-top: 160px;
//   }
// }

// @keyframes bubble2-v-movement {
//   0% {
//     margin-top: 115px;
//   }
//   100% {
//     margin-top: 90px;
//   }
// }

// @keyframes bubble-scale-movement {
//   0% {
//     transform: scale(1.4);
//   }
//   100% {
//     transform: scale(0.9);
//   }
// }

// @keyframes light-movement {
//   0% {
//     transform: rotate(-40deg);
//   }
//   50% {
//     transform: rotate(-70deg);
//   }
//   100% {
//     transform: rotate(-40deg);
//   }
// }

// /* ... Add any remaining animations and keyframes as per the SCSS file ... */
