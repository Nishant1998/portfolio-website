import React from 'react';
import {
    LuCode,
    LuChartCandlestick,
    LuDatabase,
    LuServer,
    LuPuzzle,
    LuBrainCircuit,
} from 'react-icons/lu';

type SkillGroupCardProps = {
    title: string;
    items: string[];
};

// Icon map based on title
const iconMap: Record<string, React.ReactNode> = {
    'Languages': <LuCode className="text-xl"/>,
    'Data & Visualization': <LuChartCandlestick className="text-xl"/>,
    'Data Science & AI': <LuBrainCircuit className="text-xl"/>,
    'Data Engineering': <LuDatabase className="text-xl"/>,
    'Cloud Architecture & MLOps': <LuServer className="text-xl"/>,
    'Miscellaneous': <LuPuzzle className="text-xl"/>,
};

const SkillGroupCard: React.FC<SkillGroupCardProps> = ({title, items}) => {
    const icon = iconMap[title] || <LuCode className="text-xl"/>; // fallback icon

    return (
        <div
            className="rounded-xl border border-gray-300 p-6 shadow-sm transition hover:shadow-md bg-white hover:scale-[1.01] hover:shadow-lg transition-transform duration-300">
            {/* Header with Icon and Title */}
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 text-green-600 text-lg rounded-lg p-2">
                    {icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 bg-white border border-gray-300 text-sm rounded-full text-gray-800 shadow-sm"
                    >
            {skill}
          </span>
                ))}
            </div>
        </div>
    );
};

export default SkillGroupCard;
