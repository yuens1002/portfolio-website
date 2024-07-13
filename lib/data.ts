import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import todoAppImg from '@/public/todoApp.png';
import chatbotAppImg from '@/public/chatbotApp.png';
import weatherAppImg from '@/public/weatherApp.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Web Development Certificate',
    location: 'Seattle, WA',
    description:
      '9 months of project based programming course and landed a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2016-2017',
  },
  {
    title: 'Front-End Developer',
    location: 'Washington, DC',
    description:
      '2 years at my 1st job as a front-end developer and 3 years in web application development roles in various companies & tech stacks between front/backend.',
    icon: React.createElement(CgWorkAlt),
    date: '2017 - 2023',
  },
  {
    title: 'Software Developer',
    location: 'Remote, Worldwide',
    description:
      'Working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and PostgreSQL. Open to full-time remote opportunities.',
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'Todo React App',
    description:
      'A series of completed demos utilizing state management, data fetching, caching, pagination, sorting and filtering features.',
    tags: [
      'React',
      'Typescript',
      'Redux Toolkit',
      'HTML',
      'CSS',
      'REST API',
    ],
    imageUrl: todoAppImg,
    link: 'https://github.com/yuens1002/react-app-env-from-scratch',
  },
  {
    title: 'SMS AI Chatbot',
    description:
      'History and context aware messaging system to handle incoming customer inquiries and automated scheduling',
    tags: ['Python', 'Twilio', 'SMS', 'SQL'],
    imageUrl: chatbotAppImg,
    link: 'https://github.com/yuens1002/chatgpt-sms-python',
  },
  {
    title: 'Weather App',
    description:
      'Fetch & display weather conditions by entering the system/state, built both frontend and backend',
    tags: [
      'React',
      'Javascript',
      'GO',
      'Styled Components',
      'HTML',
      'CSS',
    ],
    imageUrl: weatherAppImg,
    link: 'https://github.com/yuens1002/weather-app',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'GO',
  'React',
  'Vue',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'PostgreSQL',
  'Redux',
  'RTK Query',
  'GraphQL',
  'Express',
  'Framer Motion',
] as const;
