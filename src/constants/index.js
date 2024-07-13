import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    python,
    nodejs,
    mongodb,
    sql,
    git,
    figma,
    linux,
    javaDev,
    Portfolio,
    soFi,
    freelance,
    hsbc,
    lightsOut,
    chatRoom,
    java,
    Lego,
    VideoGenerator,
    TwitterBot,
    threejs,
    Blockchain,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work Experience",
    },
    {
      id: "tech",
      title: "Tech Stack",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "linux",
      icon: linux,
    },
    {
      name: "Java",
      icon: javaDev,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#383E56",
      date: "March 2020 - October 2021",
      points: [
        "Developing and maintaining applications using React.js - Java and C++ .",
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "HSBC ",
      icon: hsbc,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - April 2023",
      points: [
        "Fullstack Developer for digital banking product.",
        "Development and maintenance of web and mobile application of HSBC argentina.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Frontend development: React - Node.js - Javascript - React Hooks - Redux - Redux Sagas - Redux Router.",
        "Backend development: Java - MSSQL - Docker- Spring Boot",
      ],
    },
    {
      title: "FullStack Developer",
      company_name: "Galileo Financial Technologies - American online finance company and bank.",
      icon: soFi,
      iconBg: "#E6DEDD",
      date: "April 2023 - Present",
      points: [
        "Fullstack Developer for digital banking product.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality banking products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Frontend development: React - Node.js - Javascript - React Hooks - Redux -Redux Sagas - Router.",
        "Backend development: Java - MSSQL - Docker - Oracle Database - Microservices - Spring Boot",
      ],
    },
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AI Lego TwitterBot",
      description:
        "This project uses a Python script to automatically generate and upload tweets twice a day. The tweets consist of randomly generated LEGO images using ChatGPT and DALL·E, demonstrating the ability to integrate artificial intelligence into social media in a creative and automated way",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "ChatGPT API",
          color: "green-text-gradient",
        },
        {
          name: "DALL·E",
          color: "pink-text-gradient",
        },
        {
          name: "Twitter API",
          color: "blue-text-gradient",
        }
      ],
      image: Lego,
      source_code_link: "https://github.com/AlanJimenez353/TwitterBot-LegoIA",
    },
    {
      name: "News-to-Video Script",
      description:
        "This Python script automates the process of creating videos from news articles, incorporating AI-generated images using Dall-e, subtitles, and synthesized audio from ElevenLabs API to produce engaging multimedia content.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "ChatGPT API",
          color: "green-text-gradient",
        },
        {
          name: "DALL·E",
          color: "pink-text-gradient",
        },
        {
          name: "ElevenLabs",
          color: "blue-text-gradient",
        }
      ],
      image: VideoGenerator,
      source_code_link: "https://github.com/AlanJimenez353/News-To-Video-Script",
    },
    {
      name: "Blockchain",
      description:
        "This project is a blockchain simulator implemented in Java. The program allows users to register, log in, and perform various blockchain-related operations such as transactions and profile viewing. Additionally, it includes a special administrative menu for advanced functions.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Jackson",
          color: "green-text-gradient",
        }
      ],
      image: Blockchain,
      source_code_link: "https://github.com/AlanJimenez353/Java-Blockchain",
    },
    {
      name: "YearPorcetage TwitterBot",
      description:
        "This project uses a Python script to automatically generate and upload tweets each time the percentage of the year progresses by 1%, and creates a video for Social media proposes",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "PIL",
          color: "green-text-gradient",
        },
        {
          name: "MoviePy",
          color: "pink-text-gradient",
        },
        {
          name: "Twitter API",
          color: "blue-text-gradient",
        }
      ],
      image: TwitterBot,
      source_code_link: "https://github.com/AlanJimenez353/YearPorcetageTwitterBot/tree/master",
    },
    {
      name: "Stock Manager",
      description:
        "Stock Manager is designed to simplify and optimize the management of your products. The application offers a reliable and secure platform for users to manage their products, inventories, and orders.The user-friendly interface makes it easy to add, edit, and remove products, set notifications for low stock levels",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Springboot",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: java,
      source_code_link: "https://github.com/AlanJimenez353/ProductAPI-MongoDB-SpringBoot",
    },
    {
      name: "Porfolio 3D",
      description:
        "This platform offers an impressive and highly interactive visual experience to showcase my programming projects. The integration of Three.js enables real-time rendering of 3D graphics, creating a dynamic and engaging presentation. Tailwind CSS facilitates the design of a modern and responsive user interface, while Vite ensures fast and efficient site loading. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
        {
          name: "Vercel",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "https://github.com/AlanJimenez353/Porfolio3D",
    },
    
    /*{
      name: "ChatRoom- MobileApp",
      description:
        "ChatRoom is a chat application built using React Native and Firebase authentication, designed to simplify communication for users about diferent toppics.",
      tags: [
        {
          name: "react-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Redux ",
          color: "green-text-gradient",
        },
        {
          name: "Firebase ",
          color: "pink-text-gradient",
        },
        {
          name: "Expo ",
          color: "red-text-gradient",
        },
      ],
      image: chatRoom,
      source_code_link: "https://github.com/AlanJimenez353/AndroidApp-ReactNative",
    },*/
    /*,{
      name: "React E-commerce",
      description:
        "Music Event Tickets is a dynamic web platform designed to make the process of buying tickets for your favorite concerts and music events easier and more efficient. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs",
          color: "pink-text-gradient",
        },
      ],
      image: lightsOut,
      source_code_link: "https://github.com/AlanJimenez353/ECommerce-React",
    },
    */
    
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };