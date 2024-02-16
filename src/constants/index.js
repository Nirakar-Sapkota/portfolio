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
  azure,
  webvine,
  google,
  comptia,
  securityplus,
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
    icon: reactjs,
  },
  {
    title: "CompTIA Network +",
    icon: comptia,
  },
  {
    title: "CompTIA Security+",
    icon: securityplus,
  },
  {
    title: "Azure",
    icon: azure,
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
      "Active directory administration, PowerShell: Automated Provision, maintaining and deprovisioning user accounts.Setting up Remote Access Server (RAS) features to support NAT/PAT.Implementation and Maintenance of Windows DNS and DHCP Services.Configuration of Windows File Servers with Implementation of quotas and NTFS permissions",
  
      tags: [
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
    image:google,
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
    image: securityplus,
    source_code_link: "https://github.com/Nirakar-Sapkota/fim",
  },
  {
    name: "Portfolio Website",
    description:
      "Building my own portfolio had a massive learning curve.It enabled me to understand and implement the concept of Web Design principles. Working with various technologies and frameworks allowed me to learn different aspects of web.",
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
    image: reactjs,
    source_code_link: "https://nirakar-sapkota.github.io/portfolio/",
  },
];

export { services, technologies, experiences, testimonials, projects };
