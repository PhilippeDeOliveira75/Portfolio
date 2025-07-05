import { React as ReactLogo, Vite, Github, Node, Docker, Redux, Sass, Next, Tailwind} from '@assets/import'

import { Kasa, PetitsPlats, Bank } from '@assets/import'
 
export const projects = [
  {
    image: Kasa,
    techs: [ReactLogo, Vite, Sass],
    description: "Application de location immobilière.",
    objectif : "gérer les routes dynamiques avec React Router.",
    link: "https://kasavite.vercel.app/"
  },
  {
    image: PetitsPlats,
    techs: [Vite, Sass],
    description: "Moteur de recherche de recettes.",
    objectif : "implémenter un algorithme de recherche efficace.",
    link:"https://les-petits-plats-epum.vercel.app/"
},
  {
    image: Bank,
    techs: [ReactLogo, Vite, Redux],
    description: "Dashboard bancaire.",
    objectif: "gérer l’état avec Redux Toolkit."
}
]
