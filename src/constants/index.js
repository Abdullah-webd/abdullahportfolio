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
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    chatme,
    tinzwave,
    bgremover,
    nexusai,
    nikeclone,
    streamtalk,
    virtualrealm
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Styling & UI",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Version Control",
      icon: git,
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
      name: "TypeScript",
      icon: typescript,
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
  ];
  
  const experiences = [
    {
      title: "React.js Developer Intern",
      company_name: "Tinzwave",
      icon: tinzwave,
      iconBg: "#fff",
      date: "October 2024 - December 2024",
      points: [
        'Developed and maintained web applications using React.js and other related technologies',
        'Collaborated with cross-functional teams, including designers, product managers, and developers, to create high-quality products',
        'Implemented responsive designs and ensured cross-browser compatibility',
        'Participated in code reviews and provided constructive feedback to other developers',
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Abdullah proved me wrong.",
      name: "Sarah Jones",
      designation: "CFO",
      company: "Arise Inc",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Abdullah does.",
      name: "Chris James",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Abdullah optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Martins Olise",
      designation: "CEO",
      company: "TinzWave",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ChatMe",
      description:
        "ChatMe is a real-time chat application that enables users to communicate instantly. Built with React and Supabase, it offers a secure and seamless chatting experience.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "Supabase", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
      ],
      image: chatme,
      source_code_link: "https://github.com/Abdullah-webd/ChatMe",
      live_preview_link: "https://chatme-app.vercel.app/",
    },
    {
      name: "Nexus AI",
      description:
        "Nexus AI is a chatbot that provides intelligent responses using the Gemini API. Built with React, it ensures a smooth and engaging user experience in real-time.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "Gemini API", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
      ],
      image: nexusai,
      source_code_link: "https://github.com/Abdullah-webd/nexus-ai",
      live_preview_link: "https://nexus-ai.vercel.app/",
    },
    {
      name: "StreamTalk",
      description:
        "StreamTalk is a video calling app that allows users to connect through high-quality video and audio. Built with React, CSS, and ZegoCloud API, it ensures a smooth and reliable communication experience.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "ZegoCloud API", color: "green-text-gradient" },
        { name: "CSS", color: "pink-text-gradient" },
      ],
      image: streamtalk,
      source_code_link: "https://github.com/Abdullah-webd/streamtalk",
      live_preview_link: "https://streamtalk.vercel.app/",
    },
    {
      name: "Virtual Realm",
      description:
        "Virtual Realm is a landing page showcasing immersive VR experiences. Built with Next.js and Three.js, it features stunning 3D visuals and modern UI interactions.",
      tags: [
        { name: "nextjs", color: "blue-text-gradient" },
        { name: "Three.js", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
      ],
      image: virtualrealm,
      source_code_link: "https://github.com/Abdullah-webd/virtual-realm",
      live_preview_link: "https://virtual-realm.vercel.app/",
    },
    {
      name: "Background Remover Pro",
      description:
        "Background Remover Pro removes image backgrounds instantly using AI. Built with React and TensorFlow.js, it delivers accurate results with an easy-to-use interface.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "TensorFlow.js", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
      ],
      image: bgremover,
      source_code_link: "https://github.com/Abdullah-webd/bgremoverpro",
      live_preview_link: "https://bgremover.vercel.app/",
    },
    {
      name: "Nike Landing Page",
      description:
        "Nike Landing Page is a visually appealing and modern landing page inspired by Nike. Built with HTML, CSS, and JavaScript, it features sleek animations and a responsive layout.",
      tags: [
        { name: "HTML", color: "blue-text-gradient" },
        { name: "CSS", color: "green-text-gradient" },
        { name: "JavaScript", color: "pink-text-gradient" },
      ],
      image: nikeclone,
      source_code_link: "https://github.com/Abdullah-webd//Nike-official",
      live_preview_link: "https://nike-clone.vercel.app/",
    },
  ];
  
  
  
  export { services, technologies, experiences, testimonials, projects };