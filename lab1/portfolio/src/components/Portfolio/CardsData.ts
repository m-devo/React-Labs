interface CardsData {
  title: string;
  description: string;
  link: string;
  colorClass: string
}

const CardData: CardsData[] = [
  { 
    title: "Books-Ecommerce-Website ", 
    description: "Books Ecommerce Website Using NodeJs, Angular and Tailwind.",
    link: "https://github.com/m-devo/ITI-ECommerce-Frontend",
    colorClass: "bg-teal-600" 
  },
  { 
    title: "Ecommerce-Project-Vanilla-JS ", 
    description: "Ecommerce Website.",
    link:"https://github.com/m-devo/ITI-Ecommerce-Project-Vanilla-JS",
    colorClass: "bg-blue-600" 
  },
  {   
    title: "Image Processing Api", 
    link:"https://github.com/m-devo/Image-Processing-API",
    description: "Image Processing Api.",
    colorClass: "bg-indigo-600" 
  },
  { 
    title: "Weather-journal-app ", 
    description: "A weather journal app using nodejs.",
    link:"https://github.com/m-devo/Udacity-weather-journal-app",
    colorClass: "bg-violet-600" 
  },
  { 
    title: "Eccomerce Website", 
    description: "Eccomerce website using Angular, typescript and postgresql.",
    link:"https://github.com/m-devo/authintication-process-with-NodeJS",
    colorClass: "bg-fuchsia-700" 
  },
  { 
    title: "Authintication-process-with-NodeJS", 
    description: "Authentication Api using NodeJs.",
    link: "https://github.com/m-devo/Image-Processing-API",
    colorClass: "bg-rose-600" 
  },
]

export default CardData