import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    bmg,
    punchey,
    portfolio,
    weatherapp,
    notesapp,
    threejs,
    snakegame,
    vroomapp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "Frontend Developer",
      icon: creator,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Technical Account Manager",
      company_name: "Punchey",
      icon: punchey,
      iconBg: "#fff",
      date: "Feb. 2023 - Oct. 2024",
      points: [
        "Provide technical expertise to clients via SaaS integrated chat system and Dialpad to troubleshoot software bugs to resolution.",
        "Perform SQL queries to provide clients and co-workers with information stored in the database.",
        "Attend daily engineering meetings to provide technical reports, and feature requests from clients.",
        "Manage all incoming accounts to ensure software is configured to function correctly with clients hardware.",
        "One-on-one software training for clients, connect payment gateway, configure POS module."
      ],
    },
    {
      title: "Software Engineering Intern & IT Intern",
      company_name: "Barrington Media Group",
      icon: bmg,
      iconBg: "#fff",
      date: "Sept. 2022 - Dec. 2022",
      points: [
        "Developed web applications using React.js and Python for the companies in house software.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Reinforced procedure for machine setups, additionally prepared ~ 30 windows and mac operating systems for new hires.",
        "Deployed Notion Software company wide, conducted one on one instructional meetings with every manager.",
      ],
    },
    {
      title: "Software Engineering Intern - React & React Native",
      company_name: "Punchey",
      icon: punchey,
      iconBg: "#fff",
      date: "Sept. 2021 - Dec. 2021",
      points: [
        "Engineered features with React Native including a discount system and patch notes page for the company's mobile app.",
        "Participated in daily engineering team meetings to plan short-term and long-term bug fixes and software upgrades.",
        "Assisted in setting up the new office; this includes reformatting and setting up Personal Computers for salesmen and front of office workers, as well as providing IT knowledge to coworkers to continue a smooth workflow.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Three.js Portfolio",
      description:
        "Portfolio website to display my experience and skills, created using three.js to allow a fun creative frontend experience",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "gray-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "aqua-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/tstevens728/3dPortfolio",
    },
    {
      name: "Weather app",
      description:
        "Web app that can search the weather anywhere in the world, it utilizes The OpenWeather API to gather real time weather data",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "OpenWeahterAPI",
          color: "yellow-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/tstevens728/WeatherApp",
    },
    {
      name: "Vroom App",
      description:
        "A fully functional Uber clone, with user creation, Stripe integration, and various Google Maps Platform APIs",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "darkblue-text-gradient",
        },
        {
          name: "Stripe",
          color: "purple-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },

      ],
      image: vroomapp,
      source_code_link: "https://github.com/tstevens728/VroomApp",
    },
    {
      name: "Noted",
      description:
        "A comprehensive notes app that allows users to register for an account, login, and create a list of notes.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: notesapp,
      source_code_link: "https://github.com/tstevens728/NoteAppWithLogin",
    },
    {
      name: "Snake Game",
      description:
        "A basic Python game based on the classic Snake game.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
      ],
      image: snakegame,
      source_code_link: "https://github.com/tstevens728/SnakeGame",
    },
    
  ];
  
  export { services, technologies, experiences, projects };