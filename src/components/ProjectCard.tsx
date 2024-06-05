import React from 'react';
import type {Project} from '../../public/data/project';
import {LuExternalLink, LuGithub} from 'react-icons/lu';
import {Link} from 'react-router-dom';

const ProjectCard: React.FC<Project> = ({
                                            title,
                                            description,
                                            github,
                                            demo,
                                            tags,
                                            active,
                                            image,
                                        }) => {
    return (
        <Link
            to={`/project/${title.toLowerCase().replace(/\s+/g, '_')}`}
            className="bg-white border-gray-300 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative hover:scale-105 cursor-pointer flex flex-col"
        >
            {/* Image */}
            <img src={image} alt={title} className="w-full h-40 object-cover"/>

            <div className="p-4 flex flex-col flex-grow">
                {/* Title + Status */}
                <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-semibold text-gray-950">{title}</h3>
                    <span
                        className={`text-xs px-2 py-1 rounded-full ${
                            active ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                        }`}
                    >
            {active ? 'Active' : 'Archived'}
          </span>
                </div>

                {/* Description (2 lines max) */}
                <p className="text-sm text-gray-700 mb-3 line-clamp-2 overflow-hidden">
                    {description}
                </p>

                {/* Buttons */}
                <div className="mt-auto">
                    <div className="flex gap-2 mb-4">
                        {demo && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-gray-50 text-gray-800 text-sm font-medium rounded-full border border-gray-200 hover:bg-green-400 hover:!text-white hover:border-green-400 flex items-center gap-2"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <LuExternalLink/>
                                Demo
                            </a>
                        )}
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-gray-50 text-gray-800 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-100 hover:!text-green-400 hover:border-green-400 flex items-center gap-2"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <LuGithub/>
                                GitHub
                            </a>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 text-xs pt-2 border-t border-gray-100">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-1 bg-gray-100 border border-gray-300 text-xs rounded-full text-gray-800"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
