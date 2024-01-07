import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

/**
 * permet d'attendre un certaine durée
 * @param {number} duration durée d'attente en ms
 */
export function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(duration)
    }, duration)
 })
}

/**
 * animation des cadriages
 * @param {Element || String} referenciel a partir de quelle element l'animation débute
 * @param {string} ratio a partir de combien de pixel l'animation se declanche. 'top 80%'
 * @param {Array || Element} tiles tableau avec tout les selecteur dans des string. [ '#tiles-1 div:nth-child(1)' ]
 * @param {Array} tilePositions objets dans un tableau avec la position en x et y. [ { x: -100%; y: 50% } ]
 */
export function animTiles(referenciel, ratio, tiles, tilePositions) {
	gsap.set(tiles, {opacity: 0})

    const anim = function() {
        tiles.forEach((tile, index) => {
            gsap.fromTo(tile, { x: tilePositions[index].x, y: tilePositions[index].y, opacity: 0}, {
                y: 0,
                x: 0,
                opacity: 1,
                duration: 1.4,
                ease: "power4.out"
            })
        })
    }

	ScrollTrigger.create({
		trigger: referenciel,
    	start: ratio,
		once: true,
        onEnter: () => { anim() }
	})
}

/**
 * animation des lignes
 * @param {Element || string} referenciel a partir de quelle element l'animation débute
 * @param {string} ratio a partir de combien de pixel l'animation se declanche. 'top 80%'
 * @param {Element || sting} line la ligne a animé
 */
export const animLine = function(referenciel, ratio, line) {
    gsap.set(line, {scaleX: 0, opacity: 0})

    const animation = function() {
        gsap.to(line, {
            scaleX: 1,
            opacity: 1,
            duration: 1.4,
            ease: "power4.out"
        })
    }
    
    ScrollTrigger.create({
        trigger: referenciel,
        start: ratio,
        once: true,
        onEnter: () => { animation() },
    })
}

/**
 * animation opacité
 * @param {Element || String} referenciel a partir de quelle element l'animation débute
 * @param {string} ratio a partir de combien de pixel l'animation se declanche. 'top 80%'
 * @param {Element || string} element l'élément a animé
 * @param {number} delay delai avec que l'animation s'effetue
 */
export const animOpacity = function(referenciel, ratio, element, delay) {
    gsap.set(element, { opacity: 0 })

    const animation = gsap.to(element, {
        opacity: 1,
        delay: delay,
        duration: 1.4,
        ease: "power4.out"
    })

    ScrollTrigger.create({
        trigger: referenciel,
        start: ratio,
        once: true,
        onEnter: () => animation.play()
    })
}

/**
 * 
 * @param {*} referenciel 
 * @param {*} ratio 
 * @param {*} element 
 * @param {*} xFrom 
 * @param {*} yFrom 
 * @param {*} delay 
 */
export const animSlide = function(referenciel, ratio, element, xFrom, yFrom, delay) {
    gsap.set(element, { opacity: 0, x: xFrom, y: yFrom })

    const animation = gsap.to(element, {
        x: 0,
        y: 0,
        opacity: 1,
        delay: delay,
        duration: 1.4,
        ease: "power4.out",
        paused: true
    })

    ScrollTrigger.create({
      trigger: referenciel,
      start: ratio,
      onEnter: () => animation.play()
    })
}

export const animRotateScroll = function(referenciel, ratio, element, direction, valueRotate) {
    let rotateDegres = 0

    function handler() {
        if (direction === '+') {
            rotateDegres += valueRotate
        } else if (direction === '-') {
            rotateDegres -= valueRotate
        }
        
        gsap.to(element, {
            rotate: rotateDegres,
            duration: 0.5,
            ease: "power4.out",
        })
    }

    ScrollTrigger.create({
        trigger: referenciel,
        start: ratio,
        onEnter: () => { document.addEventListener('scroll', ( handler )) },
        onLeave: () => { document.removeEventListener('scroll', ( handler )) },
        onEnterBack: () => { document.addEventListener('scroll', ( handler )) },
        onLeaveBack: () => { document.removeEventListener('scroll', ( handler )) }
    })
}