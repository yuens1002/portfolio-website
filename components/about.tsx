'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{' '}
        <span className="font-medium">Theater</span>, I decided to get
        my act together for web development and my first paid gig was
        a static pixel perfect website using HTML & CSS.{' '}
        <span className="font-medium">
          In 2017, at the dawn of Web 2.0, I landed a front-end job{' '}
        </span>
        where I honed in my skills for{' '}
        <span className="italic">
          single-page-applications (SPA)s using JavaScript.
        </span>{' '}
        My core stack is{' '}
        <span className="font-medium">
          React, TypeScript, Next.js, Tailwind CSS, Prisma &
          ProsgreSQL.{' '}
        </span>
      </p>

      <p>
        <span className="italic">I'm curious about AI</span> and some
        of the emerging technologies such as Python, Lang-Chain and
        LLMs for our current automation age.
      </p>
    </motion.section>
  );
}
