gsap.to(".home", {
   scale: 2,
   duration: 7
})

gsap.to(".home_mob", {
   scale: 2,
   duration: 7
}) 

gsap.from(".oysters", {
    duration: 5,
    opacity: 0
}) 

gsap.from(".oysters_mob", {
    duration: 5,
    opacity: 0
}) 

gsap.from(".name", {
   duration: 2,
   opacity: 0
})
gsap.from(".address", {
   delay: 3,
   duration: 3,
   opacity: 0
})
gsap.from(".scroll", {
   repeat: -1,
   y: -10,
   yoyo: true,
   duration: 1
})
gsap.from(".menu", {
   repeat: -1,
   x: -10,
   yoyo: true,
   duration: 2
})
gsap.from(".logo", {
   delay: 1,
   opacity: 0,
   duration: 3
})


particlesJS("particles-js", {
   "particles": {
      "number": {
         "value": 600,
         "density": {
            "enable": true,
            "value_area": 2000
         }
      },
      "color": {
         "value": "#D09CFA"
      },
      "shape": {
         "type": "circle",
         "stroke": {
            "width": 0,
            "color": "#000000"
         },
         "polygon": {
            "nb_sides": 5
         },
      },
      "opacity": {
         "value": 1.5,
         "random": true,
         "anim": {
            "enable": false,
            "speed": 2,
            "opacity_min": 0.5,
            "sync": false
         }
      },
      "size": {
         "value": 4.33451405615796,
         "random": true,
         "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
         }
      },

      "line_linked": {
         "enable": false,
         "distance": 500,
         "color": "#ffffff",
         "opacity": 0.4,
         "width": 2
      },
      "move": {
         "enable": true,
         "speed": 3.33,
         "direction": "bottom",
         "random": true,
         "straight": false,
         "out_mode": "out",
         "bounce": false,
         "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
         }
      }
   },
   "interactivity": {
      "detect_on": "canvas",
      "events": {
         "onhover": {
            "enable": false,
            "mode": "bubble"
         },
         "onclick": {
            "enable": true,
            "mode": "repulse"
         },
         "resize": true
      },
      "modes": {
         "grab": {
            "distance": 400,
            "line_linked": {
               "opacity": 0.5
            }
         },
         "bubble": {
            "distance": 400,
            "size": 4,
            "duration": 0.3,
            "opacity": 1,
            "speed": 3
         },
         "repulse": {
            "distance": 200,
            "duration": 0.9
         },
         "push": {
            "particles_nb": 4
         },
         "remove": {
            "particles_nb": 2
         }
      }
   },
   "retina_detect": true

});