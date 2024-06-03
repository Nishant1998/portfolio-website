import React from 'react';

type EducationProps = {
    degree: string;
    department: string;
    institute: string;
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
    description: string[];
    logo?: string;
    instituteUrl?: string;
};

const EducationCard: React.FC<EducationProps> = ({
                                                     degree,
                                                     department,
                                                     institute,
                                                     startMonth,
                                                     startYear,
                                                     endMonth,
                                                     endYear,
                                                     description,
                                                     logo,
                                                     instituteUrl,
                                                 }) => (
    <div
        className="rounded-xl border border-gray-300 overflow-hidden shadow-sm transition hover:shadow-lg hover:scale-[1.01] bg-white duration-300">
        <div className="flex justify-between items-start bg-gray-100 px-4 py-3">
            <div>
                <h4 className="text-lg font-bold text-gray-950">
                    {degree}{' '}
                    <span className="font-medium text-green-400">
            {instituteUrl ? (
                <a href={instituteUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    @ {institute}
                </a>
            ) : (
                <>at {institute}</>
            )}
          </span>
                </h4>
                <p className="text-sm text-gray-700">{department}</p>
                <p className="text-sm text-gray-700">
                    {startMonth} {startYear} – {endMonth} {endYear}
                </p>
            </div>
            {logo && <img src={logo} alt={institute} className="w-24 h-16 object-contain"/>}
        </div>

        <div className="p-4 text-sm text-gray-800">
            <ul className="list-disc list-inside space-y-1 text-gray-700">
                {description.map((line, i) => (
                    <li key={i}>{line}</li>
                ))}
            </ul>
        </div>
    </div>
);

export default EducationCard;
