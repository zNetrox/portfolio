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