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
 r2d2,
 ad,
 server,
  tailwind,
  url,
  git,
  azure,
  webvine,
  google,
  comptia,
  securityplus,
  officeworks,
  acs,
  shield,
  carrent,
  jobit,
  tripguide,
  threejs,
  youtube,
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
    url:'https://www.myequals.net/sharelink/6e7dc183-5b96-4b21-9703-3b2ce4fec241/1f2fcd8e-d185-4956-8e91-c2d56ae37d91',
  },
  {
    title:"Google IT Support Professional Certificate",
    icon: google,
    url:"https://coursera.org/share/d709e49e0bd6776eeb074b47db66393f", 
    
  },

  {
    title: "CompTIA Network +",
    icon: comptia,
    url:'https://skillsoft.digitalbadges-eu.skillsoft.com/profile/eu-nirakarsapkota4002/wallet',
  },
  {
    title: "CompTIA Security+",
    icon: securityplus,
  },
  {
    title: "Azure",
    icon: azure,
  },
  {title:"Youtube◄┼Content Creator",
    icon:youtube,
    url:"https://www.youtube.com/@nirakar-sapkota"
  },
  {
    title: "Web Development",
    icon: reactjs,
  }
];

const technologies = [
  {
    name: "Active Directory",
    icon: ad,
  },
  {
    name: "Cloud",
    icon: shield,
  },
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
    icon: webvine,
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
    title: "The ACS Professional Year Program – ICT: Current Member ID #4265238",
    company_name: "QIBA",
    icon: acs,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - May 2020",
    points: [
      "Business Communications",
      "Workplace Relations and Practice",
      "WH&S",
      "Report Writing and presentation Skills",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "CompTIA Network Plus",
    name: "CompTIA",
    designation: "Certification",
    company: "Enrolled With: Learning People / Skillsoft",
    image: comptia,
  },
  {
    testimonial:
      "Azure Cloud",
    name: "Microsoft",
    designation: "Certification",
    company: "Coursera/Microsoft",
    image:azure,
  },
  {
    testimonial:
      "CompTIA Security Plus",
    name: "CompTIA",
    designation: "Cyber Security Certification",
    company: "Enrolled With: Learning People / Skillsoft",
    image: securityplus,
  },
];

const projects = [
  {
    name: "System Administration Project",
    description:
      "Active directory administration, PowerShell: Automated Provision, maintaining and deprovisioning user accounts.Setting up Remote Access Server (RAS) features to support NAT/PAT.Implementation and Maintenance of Windows DNS and DHCP Services.Configuration of Windows File Servers with Implementation of quotas and NTFS permissions.",
  
      tags: [
        {
          name: "Note:Project link will be provided soon",
          color: "white",
        },
      {
        name: "Active Directory",
        color: "blue-text-gradient",
      },
      {
        name: "PowerShell",
        color: "green-text-gradient",
      },
      {
        name: "Windows Server",
        color: "pink-text-gradient",
      },
    ],
    image:server,
    source_code_link: "https://github.com/Nirakar-Sapkota",
  },
  {
    name: "Cyber Security Enthusiast",
    description:
      "Created a custom/proof of concept File Integrity Monitor (FIM).Created an Integrity Baseline of target files/ folders using a SHA-512 hashing algorithm. Continuously made comparison of actual file versus baseline, raised alerts if any deviations occurred.Displayed alert messages to allow further investigation and potentials.",
    tags: [
      {
        name: "PowerShell",
        color: "blue-text-gradient",
      },
      {
        name: "Hashing",
        color: "green-text-gradient",
      },
      {
        name: "SHA-512",
        color: "pink-text-gradient",
      },
    ],
    image: shield,
    source_code_link: "https://github.com/Nirakar-Sapkota/fim",
  },
  {
    name: "Security Analyst / Content Creator",
    description:
      "Developed Content on YouTube, used PowerShell script to extract metadata from Windows Event Viewer to send the data to an API to retrieve a geolocation of that IP. Configured Log Analytics Workspace in Azure and created custom logs and queries.Fetched data into Microsoft Sentinel (cloud SIEM) workbook to show the global attack vector and physical mapping of the ip based locations.",
    tags: [
      {
        name: "PowerShell",
        color: "blue-text-gradient",
      },
      {
        name: "Microsoft Azure",
        color: "green-text-gradient",
      },
      {
        name: "Microsoft Sentinel",
        color: "blue-text-gradient",
      },
      {
        name: "SIEM",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/Nirakar-Sapkota/honeypot",
    url:"https://youtu.be/uzQzKj3ivRc"
  },
  {
    name: "Portfolio Website",
    description:
      "Building my own portfolio had a massive learning curve.It enabled me to understand and implement the concept of Web Design principles. Working with various technologies and frameworks allowed me to learn different aspects of web. This project was built using nodeJS, Vite, React, TailwindCSS, ThreeJS, thanks to JAVASCRIPT",
    tags: [
      {
        name: "threeJs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: r2d2,
    source_code_link: "https://github.com/Nirakar-Sapkota/portfolio",
  },
  {
    name: "IMDB Movie Search",
    description:
      "A small stepping stone: created as a fun project where I used an IMDP API to fetch data from the server and display them on the webpage, with search functionality ; you can search for the movies on demand. It was fun project and good learning curve to understand how array destructuring works and how to fetch data in JSON format and display them on the webpage. With easy integration and CSS styling.",
    tags: [
      {
        name: "Vanilla Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "HTML5",
        color: "pink-text-gradient",
      },
    ],
    image:web,
    source_code_link: "https://nirakar-sapkota.github.io/imdbsearch/",
  },


];

export { services, technologies, experiences, testimonials, projects };
