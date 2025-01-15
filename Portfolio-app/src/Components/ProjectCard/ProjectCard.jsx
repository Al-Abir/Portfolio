import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div
      className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}
    >
      {/* Image Section */}
      <figure className="img-box aspect-[16/9] rounded-lg mb-4 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content Section */}
      <div className="flex flex-col gap-3">
        <h3 className="title-1 text-white font-semibold text-lg">{title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((label, key) => (
            <span
              key={key}
              className="h-8 text-sm text-zinc-400 bg-zinc-50/5 flex items-center px-3 rounded-lg"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Action Icon */}
      <div className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-lg bg-sky-400 text-zinc-950 shrink-0">
        <span className="material-symbols-rounded text-xl" aria-hidden="true">
          arrow_outward
        </span>
      </div>

      {/* Clickable Link */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
      ></a>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
