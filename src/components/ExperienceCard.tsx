import React from 'react';

type ExperienceProps = {
    role: string;
    company: string;
    companyUrl?: string;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    summary?: string;
    description: string[];
    techStack: string[];
    logo?: string;
};

const ExperienceCard: React.FC<ExperienceProps> = ({
                                                       role,
                                                       company,
                                                       companyUrl,
                                                       startMonth,
                                                       startYear,
                                                       endMonth,
                                                       endYear,
                                                       summary,
                                                       description,
                                                       techStack,
                                                       logo,
                                                   }) => (
    <div
        className="rounded-xl border border-gray-300 overflow-hidden shadow-sm transition hover:shadow-md bg-white hover:scale-[1.01] hover:shadow-lg transition-transform duration-300">
        <div className="flex justify-between items-start bg-gray-100 px-4 py-3">
            <div>
                <h4 className="text-lg font-bold text-gray-950">
                    {role}{' '}
                    <span className="font-medium text-green-400">
            {companyUrl ? (
                <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    @ {company}
                </a>
            ) : (
                <>at {company}</>
            )}
          </span>
                </h4>
                <p className="text-sm text-gray-700">
                    {startMonth} {startYear} – {endMonth} {endYear}
                </p>
            </div>
            {logo && <img src={logo} alt={company} className="w-24 h-12 object-contain"/>}
        </div>

        <div className="p-4 text-sm text-gray-800">
            {summary && <p className="mb-3">{summary}</p>}

            <ul className="list-disc list-inside space-y-1 text-gray-700">
                {description.map((line, i) => (
                    <li key={i}>{line}</li>
                ))}
            </ul>

            {techStack.length > 0 && (
                <>
                    <h5 className="mt-4 mb-2 font-semibold text-gray-950 text-sm">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 bg-gray-100 border border-gray-300 text-xs rounded-full text-gray-800"
                            >
                {tech}
              </span>
                        ))}
                    </div>
                </>
            )}
        </div>
    </div>
);

export default ExperienceCard;
