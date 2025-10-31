import React from 'react';
import type { Website } from '../types';

interface WebsiteCardProps {
  website: Website;
}

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.28a.75.75 0 011.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
      clipRule="evenodd"
    />
  </svg>
);


const WebsiteCard: React.FC<WebsiteCardProps> = ({ website }) => {
  return (
    <a
      href={website.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md border border-white/20
                 transition-all duration-300 ease-in-out transform hover:-translate-y-2
                 hover:border-white/50 hover:shadow-2xl hover:shadow-indigo-500/20"
    >
      <div className="relative">
        <img
          src={website.imageUrl}
          alt={website.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-indigo-700 group-hover:text-indigo-500 transition-colors">
          {website.title}
        </h3>
        <p className="mt-2 text-slate-600 text-sm leading-relaxed">
          {website.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {website.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-end text-sm font-semibold text-indigo-600 group-hover:text-indigo-800 transition-colors">
          <span>방문하기</span>
          <ArrowRightIcon className="ml-1 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
};

export default WebsiteCard;