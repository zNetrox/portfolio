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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date:"2024",
    linkGit:"https://github.com/zNetrox/portfolio",
    nameImgFileTease:"portfolio-2024.png",
    listImgFile:createLimitedArray(2, 3, ["picture-poker.png", "memory.png", "tictactoe.png"]),
    skills:["test", "test", "test", "test", "test"],
    tools:["test", "test"]
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
    tools:["HTML", "JavaScript", "CSS", "Affinity Designer"]
  },
  {
    title: "Aesthetic",
    slug: "aesthetic",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date:"2023",
    linkGit:"https://github.com/zNetrox/aesthetic",
    nameImgFileTease:"aesthetic.png",
    listImgFile:createLimitedArray(2, 3, ["picture-poker.png", "memory.png", "tictactoe.png"]),
    skills:[],
    tools:[]
  },
  {
    title: "Memory",
    slug: "memory",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date:"2023",
    linkGit:"https://github.com/zNetrox/memory",
    nameImgFileTease:"memory.png",
    listImgFile:createLimitedArray(2, 3, ["picture-poker.png", "memory.png", "tictactoe.png"]),
    skills:[],
    tools:[]
  },
  {
    title: "Tic-Tac-Toe",
    slug: "tic-tac-toe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date:"2023",
    linkGit:"https://github.com/zNetrox/tictactoe-pvp",
    nameImgFileTease:"tictactoe.png",
    listImgFile:createLimitedArray(2, 3, ["picture-poker.png", "memory.png", "tictactoe.png"]),
    skills:[],
    tools:[]
  },
  {
    title: "Calculateur Age",
    slug: "calculateur-age",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date:"2023",
    linkGit:"https://github.com/zNetrox/age-calculator",
    nameImgFileTease:"age-calculator.png",
    listImgFile:createLimitedArray(2, 3, ["picture-poker.png", "memory.png", "tictactoe.png"]),
    skills:[],
    tools:[]
  }
];