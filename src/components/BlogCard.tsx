import React from 'react';
import type {BlogPost} from '../../public/data/blog';

const BlogCard: React.FC<BlogPost> = ({
                                          title,
                                          description,
                                          type,
                                          day,
                                          month,
                                          year,
                                          image,
                                          link
                                      }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition hover:scale-105 flex flex-col cursor-pointer"
        >
            {/* Image */}
            <img src={image} alt={title} className="w-full h-40 object-cover"/>

            <div className="p-4 pb-10 flex flex-col flex-grow relative">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-950 mb-2">{title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-700 mb-3">{description}</p>

                {/* Date (bottom-left) */}
                <span className="absolute bottom-4 left-4 text-xs text-gray-500">
          {`${day} ${month} ${year}`}
        </span>

                {/* Type Badge (bottom-right) */}
                <span className="absolute bottom-4 right-4 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
          {type}
        </span>
            </div>
        </a>
    );
};

export default BlogCard;
