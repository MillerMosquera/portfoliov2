import Home from '@/assets/header/home.svg';
import Projects from '@/assets/header/projects.svg';
import User from '@/assets/header/user.svg';


import Linkedin from "@/assets/socials/linkedin.svg";
import Github from "@/assets/socials/Github.svg";
import Mail from "@/assets/socials/mail.svg";

export const links = [
    { image: Home.src, href: "/", text: "Inicio" },
    { image: User.src, href: "/about", text: "Acerca de" },
    { image: Projects.src, href: "/project", text: "Proyectos" },
];

export const language = [{ text: "Español" }, { text: "Inglés-B1" }];

export const socialLinks = [
    {
        image: Github.src,
        text: "GitHub",
        url: "https://github.com/MillerMosquera",
    },
    {
        image: Linkedin.src,
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/millersairmosquera/",
    },
    {
        image: Mail.src,
        text: "Email",
        url: "mailto:miller.mosquerpa@gmail.com",
    },
];
export const workExperience = [
    {
        company: "XXXXX",
        position: "XXXXX",
        duration: "Año - Presente",
        description: [
            "XXXXXXXXXXXX",
            "XXXXXXXXXXX",
        ],
    },
    {
        company: "XXXXXX",
        position: "XXXXXX",
        duration: "Año - Presente",
        description:[
            "XXXXXXXXXXXX",
            "XXXXXXXXXXX",
        ],
    },
];

export const studies = [
    {
        institution: "Universidad Santiago de Cali",
        degree: "Ingeniería de Sistemas",
        duration: "2019 - 2024",
    },
    {
        institution: "Alura",
        degree: "Desarrollador Backend",
        duration: "2025 - Presente",
    },
    {
        institution: "Politécnico de Colombia",
        degree: "Diplimado en Java",
        duration: "Sep 2022 - Oct 2022",
    },
    {
        institution: "Colnodo",
        degree: "Desarrollador web Jr",
        duration: "Sep 2021 - Nov 2021",
    },
];

export const skills = [
    { image: "", text: "JavaScript" },
    { text: "React" },
    { text: "Node.js" },
    { text: "Tailwind CSS" },
    { text: "Figma" },
    { text: "Photoshop" },
];
export const hobbies = [
    { text: "Guitarra" },
    { text: "Gym" },
    { text: "Dibujar" },
    { text: "Futbol" },
];

export const projects = [
    {
      id: 1,
      title: 'This is bento grid in vercel blog',
      author: 'Miller Mosquera',
      date: '12.10.1999',
      image: 'https://picsum.photos/seed/1/600/400',
      avatar: 'https://i.pravatar.cc/150?img=1',
      link: '/',
    },
    {
      id: 2,
      title: 'Exploring the Future of Web Development',
      author: 'Miller Mosquera',
      date: '05.07.2023',
      image: 'https://picsum.photos/seed/2/600/400',
      avatar: 'https://i.pravatar.cc/150?img=2',
      link: '/',
    },
    {
      id: 3,
      title: 'How to Build Scalable Applications',
      author: 'Miller Mosquera',
      date: '18.03.2021',
      image: 'https://picsum.photos/seed/3/600/400',
      avatar: 'https://i.pravatar.cc/150?img=3',
      link: '/',
    },
    {
      id: 4,
      title: 'Mastering React with Next.js',
      author: 'Miller Mosquera',
      date: '24.12.2022',
      image: 'https://picsum.photos/seed/4/600/400',
      avatar: 'https://i.pravatar.cc/150?img=4',
      link: '/',
    },
    {
      id: 5,
      title: 'Understanding TypeScript in 2024',
      author: 'Miller Mosquera',
      date: '02.11.2024',
      image: 'https://picsum.photos/seed/5/600/400',
      avatar: 'https://i.pravatar.cc/150?img=5',
      link: '/',
    },
  ]