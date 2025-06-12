import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};


const ProjectCard = ({ title, description, imageUrl, link }: ProjectCardProps) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-dark-blue border border-primary-blue transition-transform hover:scale-105 hover:shadow-xl">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-light-blue">{title}</h3>
        <p className="text-primary-blue mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-light-blue bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
