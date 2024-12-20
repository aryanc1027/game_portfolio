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
  {},

  {
    iconUrl: angular,
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description:
      'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/aryanc1027/project_next13_car_showcase',
  },
];
