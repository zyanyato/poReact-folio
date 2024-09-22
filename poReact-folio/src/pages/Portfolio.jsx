import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is an amazing project.',
      technologies: 'React, Vite, TailwindCSS',
      demoLink: '#',
      repoLink: '#'
    },
    {
      title: 'Project 2',
      description: 'Another awesome project.',
      technologies: 'React, Node.js',
      demoLink: '#',
      repoLink: '#'
    }
  ];
  console.log('zyanya')

  return (
    <section>
      <h2>My Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;