import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import Music from '../../images/project-1.jpg';
import Stock from '../../images/project-2.jpg';
import Recipe from '../../images/project-3.jpg';
import RealState from '../../images/project-4.jpg';
import eComerce from '../../images/project-5.jpg';
import PortFolio from '../../images/project-6.jpg';

const works = [
  {
    imgSrc: Music,
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/',
  },
  {
    imgSrc: Stock,
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://pixstock-official.vercel.app/',
  },
  {
    imgSrc: Recipe,
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: '',
  },
  {
    imgSrc: RealState,
    title: 'Real estate website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee-org/wealthome',
  },
  {
    imgSrc: eComerce,
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website',
  },
  {
    imgSrc: PortFolio,
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto px-4">
        <h2 className="headLine-2 text-2xl font-bold text-white mb-8">
          My Portfolio Website
        </h2>
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
