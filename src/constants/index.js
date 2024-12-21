import { speedi, lpl, industryapps } from '../assets/images';
import {
  angular,
  aws,
  azure,
  c,
  csharp,
  css,
  dart,
  docker,
  dotnet,
  fastapi,
  flutter,
  github,
  golang,
  html,
  java,
  javascript,
  kubernetes,
  mysql,
  nextjs,
  nodejs,
  php,
  postgresql,
  python,
  react,
  sql,
  sqlalchemy,
  tailwindcss,
  typescript,
  brain,
  mood,
  news,
  camera,
  linkedin,
  room,
  arrow,
} from '../assets/icons';

export const skills = [
  // Programming Languages
  {
    imageUrl: c,
    name: 'C',
    type: 'Programming Language',
  },
  {
    imageUrl: csharp,
    name: 'C#',
    type: 'Programming Language',
  },
  {
    imageUrl: java,
    name: 'Java',
    type: 'Programming Language',
  },
  {
    imageUrl: php,
    name: 'PHP',
    type: 'Programming Language',
  },
  {
    imageUrl: dart,
    name: 'Dart',
    type: 'Programming Language',
  },
  {
    imageUrl: golang,
    name: 'Go',
    type: 'Programming Language',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: python,
    name: 'Python',
    type: 'Backend',
  },
  // Frontend
  {
    imageUrl: angular,
    name: 'Angular',
    type: 'Frontend',
  },
  {
    imageUrl: dotnet,
    name: '.NET',
    type: 'Backend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  // Backend & Databases
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: fastapi,
    name: 'FastAPI',
    type: 'Backend',
  },
  {
    imageUrl: sql,
    name: 'SQL',
    type: 'Database',
  },
  {
    imageUrl: postgresql,
    name: 'PostgreSQL',
    type: 'Database',
  },
  {
    imageUrl: mysql,
    name: 'MySQL',
    type: 'Database',
  },
  {
    imageUrl: sqlalchemy,
    name: 'SQLAlchemy',
    type: 'Database',
  },
  // DevOps & Cloud
  {
    imageUrl: docker,
    name: 'Docker',
    type: 'DevOps',
  },
  {
    imageUrl: kubernetes,
    name: 'Kubernetes',
    type: 'DevOps',
  },
  {
    imageUrl: aws,
    name: 'AWS',
    type: 'Cloud',
  },
  {
    imageUrl: azure,
    name: 'Azure',
    type: 'Cloud',
  },
  // Mobile Development
  {
    imageUrl: flutter,
    name: 'Flutter',
    type: 'Mobile Development',
  },
  // Version Control
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
];

export const experiences = [
  {
    title: 'Chief Technology Officer',
    company_name: 'Speedi Delivery',
    iconBg: 'white',
    icon: speedi,
    date: 'June 2024 - Present',
    points: [
      "Oversee all technical development to Speedi's platforms and Speedi's expansion to other universities, leading to 10,000+ deliveries within 6 months.",
      'Developed a data tracking application and admin dashboard using Angular, FastAPI, SQLAlchemy, and Docker, driving a 15% revenue increase through optimized sales insights.',
      'Developed and continuously enhance a Flutter application used by over 1,000 students, integrating multiple APIs such as Stripe and Google Maps ensuring high customer satisfaction.',
      'Implemented and hosted data analytics solutions on Microsoft Azure, leveraging Azure DevOps to manage databases and ensure secure, scalable, and efficient access to comprehensive product data for the application, which seamlessly integrates with these databases.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company_name: 'LPL Financial',
    iconBg: 'white',
    icon: lpl,
    date: 'June 2024 - August 2024',
    points: [
      'Developed an internal web application using Angular, TypeScript, integrating with .NET APIs and leveraging AWS services for serverless architecture resulting in a 20% reduction in server response times.',
      'Engineered 10+ reusable Angular components/services, implemented SQL database design/querying using AWS RDS, and facilitated seamless data exchange between Angular front-end and back-end services.',
      'Developed .NET APIs to modify existing SQL database schemas, resulting in a 25% improvement in data integrity and a 30% reduction in query processing time.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company_name: 'IndustryApps',
    iconBg: 'white',
    icon: industryapps,
    date: 'June 2023 - August 2023',
    points: [
      'Developed intuitive user interfaces using JavaScript, HTML/CSS, Node.js, and React, ensuring an engaging and interactive experience for end users.',
      'Engineered robust API security measures using OAuth2 and FastAPI to ensure secure and relevant data access.',
    ],
  },
];

export const projects = [
  {
    iconUrl: brain,
    theme: 'btn-back-blue',
    name: 'Synapse AI',
    description:
      'Developed a full-stack web application to enhance personalized learning by leveraging AI-powered flashcard generation from user-provided text or PDFs. The system enables users to improve retention and track progress dynamically, offering a seamless and secure learning experience.',
    link: 'https://github.com/aryanc1027/SynapseAI',
  },
  {
    iconUrl: mood,
    theme: 'btn-back-blue',
    name: 'MoodCast',
    description:
      'Developed a web application that combines weather data with music recommendations, creating a unique user experience. The application integrates the OpenWeatherMap API to fetch real-time weather information for any city globally, and the Spotify API to suggest playlists based on the current weather conditions..',
    link: 'https://github.com/aryanc1027/MoodCast',
  },
  {
    iconUrl: news,
    theme: 'btn-back-blue',
    name: 'CS-XL',
    description:
      'Created a dynamic newsfeed system for the CS-XL website using Angular and TypeScript on the front-end, enabling users to view and interact with a stream of updates and content related to the university, used by over 1,000 students',
    link: 'https://github.com/comp423-24s/csxl-final-team-b4',
  },
  {
    iconUrl: camera,
    theme: 'btn-back-blue',
    name: 'Image Processing Pipeline',
    description:
      'Engineered an image processing pipeline to convert raw camera images into high-quality, display-ready images through steps like linearization, white balancing, demosaicing, color correction, brightness adjustment, gamma encoding, and compression. Built a simple camera obscura for hands-on experience in computational imaging and digital photography.',
    link: 'https://github.com/aryanc1027/790_ISP',
  },

  {
    iconUrl: linkedin,
    theme: 'btn-back-blue',
    name: 'Linkedin Recruiter Web Scraper',
    description:
      'Developed a LinkedIn Recruiter Data Extraction platform using Python, integrating Playwright, Beautiful Soup, and Selenium for seamless data scraping. Implemented NLP for intelligent data formatting and utilized pandas for clear data presentation in Excel and SQL, streamlining recruitment insights.',
    link: 'https://github.com/aryanc1027/Linkedin_Recruiter_Webscraper',
  },
  {
    iconUrl: room,
    theme: 'btn-back-blue',
    name: 'Personal Website (old)',
    description:
      'Designed a personal website using Three.js, Blender, and GSAP, featuring immersive 3D visuals, dynamic lighting, and interactive camera controls. Integrated HTML, CSS, and Node.js for seamless functionality and a user-friendly interface.',
    link: 'https://aryan-room-portfolio.vercel.app/',
  },
];
