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
 * Précharge les images trouvées sur la page en se basant sur un sélecteur.
 * @param {string} selector Le sélecteur des éléments (ex: '.over-image[data-image]')
 * @param {string} dataAttribute L'attribut qui contient le nom du fichier (ex: 'data-image')
 * @param {string} pathPrefix Le chemin vers le dossier des images (ex: '/public/img/')
 */
export const preloadImages = (selector, dataAttribute, pathPrefix) => {
    const imagesToPreload = new Set(); // set evite les doublons

    document.querySelectorAll(selector).forEach(element => {
        const imageName = element.getAttribute(dataAttribute);
        
        // si l'attribut existe
        if (imageName) {
            imagesToPreload.add(imageName);
        }
    });

    // si il y a des images a preload on le fait
    if (imagesToPreload.size > 0) {        
        imagesToPreload.forEach(imageName => {
            const img = new Image(); // crée une image en mémoire
            img.src = `${pathPrefix}${imageName}`; // le télécharge
        });
    }
};