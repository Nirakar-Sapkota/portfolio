import {
  mobile,
  backend,
  creator,
  web,
  vu,
  javascript,
  typescript,
  html,
  css,
  reactjs,
 
  tailwind,

  git,

  webvine,
  google,
 comptia,
  officeworks,
  acs,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title:"Masters of Applied IT",
    icon: vu,
  },
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "CompTIA Network +",
    icon: mobile,
  },
  {
    title: "CompTIA Security+",
    icon: backend,
  },
  {
    title: "Azure",
    icon: creator,
  }
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
    name: "Tailwind CSS",
    icon: tailwind,
  },


  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },


];

const experiences = [
  {
    title: "CompTIA Network+ and CompTIA Security+",
    company_name: "Learning People / Skillsoft",
    icon: comptia,
    iconBg: "#383E56",
    date: "Ongoing/Present",
    points: [
      "Design and implement functional networks",
      "Configure, manage, and maintain essential network devices",
      "Use devices such as switches and routers to segment network traffic and create resilient networks",
      "Implement network security, standards, and protocols",
      "Troubleshoot network problems",
      "Support the creation of virtualized networks",
      "Cloud Concepts",
      "Network Services & Data Centre Architectures ",
      "Cables and Connectors",
      "Registered Ports",
      "OSI Model Layers and Data Encapsulation",
      "Sub-netting",
      "Cryptography and PKI",
      "Risk Management and mitigation",
      "Identity and Access Management",
    ],
  },
  {
    title: "Google IT Support Specialist Certification	",
    company_name: "Google via Coursera",
    icon: google,
    iconBg: "#383E56",
    date: "Jan 2024",
    points: [
      "System Administration and IT Infrastructure Services",
      "Technical Support Fundamentals",
      "The Bits and Bytes of Computer Networking",
      "IT Security: Defense against the digital dark arts",
      "Operating Systems and You: Becoming a Power User"
    ],
  },
  {
    title: "Design Administrator and Team Lead (Technology, Print and Create.)",
    company_name: "Officeworks",
    icon: officeworks,
    iconBg: "#383E56",
    date: "2019 - Present",
    points: [
      "Effective communication and interpersonal skills developed through everyday interactions with clients. ",
      "Design and deliver artworks like canvas, banners, custom photo books, posters, and booklets etc.",
      "Handling inquiries over the phone and face-to-face assisting the customers find a solution regarding their issues.",
      "Mentoring staff members and training.",
    ],
  },
  {
    title:"Internship",
    company_name:"WebVine",
    icon:webvine,
    iconBg: "#383E56",
    date:"Jan 2020 - May 2020",
    points: [
        "Contribute to the existing design to meet the current needs for the WordPress based website.",
        "Design, maintain, test, and provide ideas for SharePoint based Intranet systems to fit client’s needs.",
        "Demonstrate ideas and add values to optimize the websites based on SEO.",
        "Work closely with the web development team to achieve the desired goal.",
        "Communicate within the team to generate new ideas.",
        "Constantly learn and update with the requirements.",
        "Provide support to the non-technical team when required.",

    ],
  },

  {
    title: "The ACS Professional Year Program – ICT: Current Member ID #4265238                                                            ",
    company_name: "QIBA",
    icon: acs,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - May 2020",
    points: [
      "Business Communications",
      "Workplace Relations and Practice",
      "WH&S","Report Writing and presentation Skills",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };