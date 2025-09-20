import { Project, Certificate, Experience, Education, Achievement } from "../types";

export const personalInfo = {
  name: "Abhishek Verma",
  role: "Computer Science Engineer",
  links: {
    linkedin: "linkedin.com/in/abhishek-verma12",
    github: "github.com/Abhishek-Verma-1289",
    email: "vermaabhi1289@gmail.com",
    mobile: "+91 7380902184"
  },
  photo: "/profile2.jpg"
};

export const skills = {
  languages: ["ReactJS", "C++" , "HTML","CSS", "Javascript"],
  frameworks: ["Django", "TailwindCSS", "Bootstrap", "NodeJS"],
  tools: ["MySQL","MongoDB", "Postman"],
  soft: ["Problem-Solving", "Leadership", "Time Management", "Adaptability"]
};

export const projects: Project[] = [
  {
    title: "ShinyCloud-API Based Weather Application",
    description: [
      "Developed a weather application that fetches real-time weather data using OpenWeatherMap API.",
      "Implemented a user-friendly UI with React and optimized API calls for better performance"
    ],
    techStack: "ReactJS, NodeJS, API Integration, CSS",
    date: "Feb 2025",
    demo: "https://shiny-cloud.vercel.app/"
  },
  {
    title: "Animal Care Website",
    description: [
      "Designed and developed a comprehensive web platform for pet adoption and care services, allowing users to adopt animals such as dogs, cats, and rabbits.",
      "Integrated features include caretaker hiring, pet grooming, feeding, training, boarding, and treatment services."
    ],
    techStack: "HTML, CSS, JavaScript, Bootstrap, MySQL, ReactJS",
    date: "Nov 2024",
    demo: "https://animal-care-website-topaz.vercel.app/"
  },
  {
    title: "HealthCare Website",
    description: [
      "Collaborated with 3 team members to develop a HealthCare platform for booking doctor appointments, requesting emergency blood, and scheduling virtual consultations.",
      "Engineered real-time location tracking for emergency services and enabled users to request any blood type and book online consultations anytime."
    ],
    techStack: "HTML, CSS, Bootstrap, ReactJS",
    date: "Mar 2024",
    demo: "https://health-care-silk.vercel.app/"
  }
];

export const certificates: Certificate[] = [
  {
    title: "Building Web Applications in ReactJS",
    issuer: "Coursera",
    date: "Dec 2024"
  },
  {
    title: "Data Structures and Algorithms - Self Paced",
    issuer: "GeeksforGeeks (GFG)",
    date: "July 2024"
  },
  {
    title: "Server-side JavaScript with NodeJS",
    issuer: "Coursera",
    date: "May 2024"
  },
  {
    title: "Programming in C++: A Hands-on Introduction Specialization",
    issuer: "Codio (Coursera)",
    date: "Feb 2024"
  }
];

export const experiences: Experience[] = [
  {
    title: "Volunteer Work – Government-Funded NGO",
    description: [
      "Worked for 1 week to raise awareness among rural women about government benefits (pensions, loans, jobs).",
      "Organized outings and camping trips to engage with local communities."
    ]
  },
  {
    title: "Participated in Web-Ka-Hackathon",
    description: [
      "Collaborated with a 3-member team to build a healthcare website using React, Node.js, HTML, and CSS."
    ]
  }
];

export const achievements: Achievement[] = [
  { title: "Secured 2nd runner-up position in 'One India' competition, competing against 28 states." },
  { title: "Winner of Chess Competition in the annual sports event at school." },
  { title: "96.5 Percentile in JEE Mains Paper 2 (B.Arch.)." }
];

export const education: Education[] = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering (CGPA-7)",
    location: "Punjab, India",
    period: "since Oct 2022"
  },
  {
    institution: "MP Public School",
    degree: "Intermediate (Percentage-79.6)",
    location: "Maharajganj, UP",
    period: "April 2019 - March 2021"
  },
  {
    institution: "Nav Jeevan Mission School",
    degree: "",
    location: "Maharajganj, UP",
    period: "April 2017 - March 2019"
  }
];