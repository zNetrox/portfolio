/*
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

gsap.to(".box", {
      scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
      x: 500,
})
*/
/**
 * wait avec les promesses
 * @param {number} duration durée d'attente en ms
 */
export function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(duration)
    }, duration)
 })
}