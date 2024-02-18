import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const ratio = {
    basic: "top 90%",
    fullPage: "top bottom"
}

/**
 * permet d'attendre une certaine durée
 * @param {number} duration durée d'attente en ms
 */
export const wait = function(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration)
        }, duration)
    })
}

/**
 * animation des quadrillages
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
 * applique une translation a un élément
 * @param {Element} element élément sur lequel la translation est appliqué
 * @param {number || string} x translation sur l'axe x
 * @param {number || string} y translation sur l'axe y
 */
export const translate = function(element, x, y) {
    gsap.to(element, {
        x: x,
        y: y,
        duration: 1.4,
        ease: "power4.out"
    })
}

/**
 * animation des lignes
 * @param {Element || string} referenciel a partir de quelle element l'animation débute
 * @param {string} ratio a partir de combien de pixel l'animation se declanche. 'top 90%'
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
 * @param {string} ratio a partir de combien de pixel l'animation se declanche. 'top 90%'
 * @param {Element || string} element l'élément a animé
 * @param {number} delay delai avant le debut de l'animation en sec
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
 * animation avec des translations
 * @param {Element || String} referenciel a partir de quelle element l'animation débute
 * @param {string} ratio a partir de combien de pixel l'animation se declanche. 'top 90%'
 * @param {Element || string} element l'élément a animé
 * @param {number || string} xFrom position au debut
 * @param {number || string} yFrom position a la fin
 * @param {number} delay delai avant le debut de l'animation en sec
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

/**
 * scroll automatiquement jusqu'à un élément
 * @param {Element} btn bouton 
 * @param {Element || number} finish 
 */
export const scrollTo =  function(btn, finish) {
    btn.addEventListener("click", () => {
        gsap.to(window, { duration: 1.5, scrollTo: finish, ease: 'power4.out' });
    })
}

/**
 * supprime le survol / clique d'un element jusqu'à ce qu'il soit apparue
 * @param {Element || String} referenciel a partir de quelle élément est survolable / cliquable
 * @param {string} ratio a partir de combien de pixel l'animation se declanche. 'top 90%'
 * @param {Element || string} element élément sur lequel on applique les modifications
 */
export const pointerRemove = function(referenciel, ratio, element) {
    gsap.set(element, {pointerEvents: 'none'})

    const animation = function() {
        gsap.to(element, {
            pointerEvents: 'auto'
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
 * animation avec de rotation en fonction du scroll
 * @param {Element || String} referenciel a partir de quelle element l'animation débute
 * @param {string} ratio a partir de combien de pixel l'animation se declanche. 'top 90%'
 * @param {Element || string} element l'élément a animé
 * @param {string} direction direction de rotation ('+' ou '-')
 * @param {number || string} valueRotate degres de rotation a chaque scroll
 */
export const animRotateScroll = function(referenciel, ratio, element, direction, valueRotate) {
    let rotateDegres = 0

    function handler() {
        if (direction === '+') {
            rotateDegres += valueRotate
        } else if (direction === '-') {
            rotateDegres -= valueRotate
        } else {
            console.error()
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