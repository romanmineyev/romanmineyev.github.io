import "normalize.css";
import "./scss/main.ltr.scss";
import "./scss/themes.scss";
import "./scss/blue.scss";
import "./scss/custom.scss";
import { tsParticles } from "tsparticles-slim";
import imagesLoaded from "imagesloaded";
import SiteState from './js/SiteState';
import Site from './js/Site';

// // Single initialization point
// document.addEventListener("DOMContentLoaded", () => {
//   // Initialize your site
//   imagesLoaded('.preloadimage', function() {    
//     const siteState = new SiteState();
//     new Site(siteState);
//   });

//   // Initialize particles
//   loadFull().then((engine) => {
//     engine.load("background", particlesConfig)
//       .then(() => {
//         console.log("Particles loaded successfully");
//       })
//       .catch((error) => {
//         console.error("Error loading particles:", error);
//       });
//   });
// });

// setTimeout(() => {
//     const canvas = document.querySelector('#background canvas');
//     console.log('Canvas element:', canvas);
//     if (canvas) {
//       console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
//     }
//   }, 1000);

imagesLoaded('.preloadimage', function() {    
const siteState = new SiteState();
new Site(siteState);
});

// Initialize particles
tsParticles.load("background", {
    particles: {
        number: { value: 50 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
        }
    }
});