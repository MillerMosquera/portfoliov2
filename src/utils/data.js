import Github from "../../public/assets/socials/Github.svg";
import Linkedin from "../../public/assets/socials/linkedin.svg";
import Mail from "../../public/assets/socials/mail.svg";

//Skill
import Css from "../../public/assets/skill/css.svg";
import Git from "../../public/assets/skill/git.svg";
import Html from "../../public/assets/skill/html5.svg";
import Java from "../../public/assets/skill/java.svg";
import Javascript from "../../public/assets/skill/javascript.svg";
import Node from "../../public/assets/skill/nodejs.svg";
import PostgreSQL from "../../public/assets/skill/postgresql.svg";
import Spring from "../../public/assets/skill/spring.svg";


export const links = [
    { href: "/" },
    { href: "/about", text: "Acerca de" },
    { href: "/project", text: "Proyectos" },
    { href: "/blog", text: "Blog" },
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

export const email = [
    {
        url: "mailto:miller.mosquerpa@gmail.com",
    }
]
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
        description: [
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
    { image: Java.src, text: "Java" },
    { image: Spring.src, text: "Spring boot" },
    { image: Javascript.src, text: "JavaScript" },
    { image: Html.src, text: "HTML" },
    { image: Css.src, text: "CSS" },
    { image: Node.src, text: "Node.js" },
    { image: PostgreSQL.src, text: "PostgreSQL" },
    { image: Git.src, text: "Git" },
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
        title: 'This is bento grid',
        author: 'Miller Mosquera',
        date: '12.10.1999',
        image: 'https://picsum.photos/seed/1/600/400',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '/',
    },
    {
        id: 2,
        title: 'Exploring the Future of Web Development',
        author: 'Miller Mosquera',
        date: '05.07.2023',
        image: 'https://picsum.photos/seed/2/600/400',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '/',
    },
    {
        id: 3,
        title: 'How to Build Scalable Applications',
        author: 'Miller Mosquera',
        date: '18.03.2021',
        image: 'https://picsum.photos/seed/3/600/400',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '/',
    },
    {
        id: 4,
        title: 'Mastering React with Next.js',
        author: 'Miller Mosquera',
        date: '24.12.2022',
        image: 'https://picsum.photos/seed/3/600/400',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '/',
    },
]