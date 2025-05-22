import { LimitedArray } from '../js/LimitedArray.js'

function createLimitedArray(min, max, values) {
  const arr = new LimitedArray(min, max);
  for (const val of values) {
    arr.push(val);
  }
  return arr;
}

export default [
  {
    title: "Portfolio",
    slug: "portfolio",
    description: "Un projet personnel et profesionnel commencé et terminé en janvier 2024. Puis repris en debut 2025 dans le cadre d'un projet univairsitaire.",
    date:"2024",
    linkGit:"https://github.com/zNetrox/portfolio",
    nameImgFileTease:"portfolio-2024.png",
    listImgFile:createLimitedArray(2, 3, ["picture-poker.png", "memory.png", "tictactoe.png"]),
    skills:["Conception UX/UI", "Developpement Web", "Gestion De Projet"],
    tools:["Affinity Designer", "Visual Studio Code", "Gsap", "Astro"]
  },
  {
    title: "Picture Poker",
    slug: "picture-poker",
    description: "Un projet qui consiste à recréer un concept d’un jeu vidéo accessible dpuis un navigateur web.",
    date:"2024",
    linkGit:"https://github.com/zNetrox/picture-poker",
    nameImgFileTease:"picture-poker.png",
    listImgFile:createLimitedArray(2, 3, ["picture-poker.png", "memory.png", "tictactoe.png"]),
    skills:["Conception UX/UI", "Programmation"],
    tools:["Affinity Designer", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Aesthetic",
    slug: "aesthetic",
    description: "Site web sur de la musique, éffectué en cours de SIN en terminal.",
    date:"2023",
    linkGit:"https://github.com/zNetrox/aesthetic",
    nameImgFileTease:"aesthetic.png",
    listImgFile:createLimitedArray(2, 3, ["picture-poker.png", "memory.png", "tictactoe.png"]),
    skills:["Conception UX/UI", "Developpement Web", "Gestion De Projet"],
    tools:["Affinity Designer", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Memory",
    slug: "memory",
    description: "Projet personnel sur la création d'un mini jeu video sur la mémorisation.",
    date:"2023",
    linkGit:"https://github.com/zNetrox/memory",
    nameImgFileTease:"memory.png",
    listImgFile:createLimitedArray(2, 3, ["picture-poker.png", "memory.png", "tictactoe.png"]),
    skills:["Programmation", "Developpement Web"],
    tools:["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Tic-Tac-Toe",
    slug: "tic-tac-toe",
    description: "Projet personnel sur la création d'un mini jeu video sur de morpion.",
    date:"2023",
    linkGit:"https://github.com/zNetrox/tictactoe-pvp",
    nameImgFileTease:"tictactoe.png",
    listImgFile:createLimitedArray(2, 3, ["picture-poker.png", "memory.png", "tictactoe.png"]),
    skills:["Programmation", "Developpement Web"],
    tools:["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Calculateur Age",
    slug: "calculateur-age",
    description: "projet personnel sur la création d'une application qui calcul l'age d'une personne jour pour jour.",
    date:"2023",
    linkGit:"https://github.com/zNetrox/age-calculator",
    nameImgFileTease:"age-calculator.png",
    listImgFile:createLimitedArray(2, 3, ["picture-poker.png", "memory.png", "tictactoe.png"]),
    skills:["Programmation", "Developpement Web"],
    tools:["HTML", "CSS", "JavaScript"]
  }
];